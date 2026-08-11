interface ConferenceMapPoint {
  id: string;
  title: string;
  shortName: string;
  type: 'conference' | 'workshop';
  scope: 'core' | 'adjacent';
  year: number;
  topics: string[];
  topicLabels: string[];
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  venue?: string;
  eventStart?: string;
  eventEnd?: string;
  deadlineLabel: string;
  deadlineValue: string;
  deadlineStatus: 'open' | 'tbd' | 'closed';
  detailsUrl: string;
  website: string;
}

declare global {
  interface Window { L?: any }
}

export {};

const root = document.querySelector<HTMLElement>('[data-conference-map]');
if (root && window.L) {
  const L = window.L;
  let points: ConferenceMapPoint[] = [];
  try { points = JSON.parse(root.dataset.mapPoints ?? '[]') as ConferenceMapPoint[]; } catch { points = []; }

  const map = L.map(root, { worldCopyJump: true, minZoom: 2, zoomControl: true }).setView([24, 10], 2);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
  }).addTo(map);

  const layer = L.layerGroup().addTo(map);
  const controls = document.querySelector<HTMLElement>('[data-map-controls]');
  const count = document.querySelector<HTMLElement>('[data-map-count]');
  const search = document.querySelector<HTMLInputElement>('[data-map-search]');
  const year = document.querySelector<HTMLSelectElement>('[data-map-year]');
  const topic = document.querySelector<HTMLSelectElement>('[data-map-topic]');

  const state = { type: 'all', scope: 'all', year: 'all', topic: 'all', query: '' };

  function setPressed(selector: string, value: string) {
    controls?.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
      const dataKey = selector.includes('map-type') ? 'mapType' : 'mapScope';
      button.setAttribute('aria-pressed', String(button.dataset[dataKey] === value));
    });
  }

  function popupEvent(point: ConferenceMapPoint): HTMLElement {
    const card = document.createElement('article');
    card.className = 'map-popup-event';

    const eyebrow = document.createElement('p');
    eyebrow.className = 'map-popup-eyebrow';
    eyebrow.textContent = `${point.type === 'conference' ? 'Conference' : 'Workshop'} · ${point.scope}`;
    card.append(eyebrow);

    const title = document.createElement('strong');
    title.className = 'map-popup-title';
    title.textContent = point.shortName || point.title;
    card.append(title);

    if (point.eventStart) {
      const dates = document.createElement('p');
      dates.className = 'map-popup-meta';
      dates.textContent = point.eventEnd && point.eventEnd !== point.eventStart
        ? `${point.eventStart} – ${point.eventEnd}`
        : point.eventStart;
      card.append(dates);
    }

    const deadline = document.createElement('p');
    deadline.className = `map-popup-deadline status-${point.deadlineStatus}`;
    deadline.textContent = point.deadlineStatus === 'open'
      ? `${point.deadlineLabel}: ${point.deadlineValue}`
      : point.deadlineStatus === 'tbd' ? 'Submission deadline: TBD' : 'Submission closed';
    card.append(deadline);

    const actions = document.createElement('div');
    actions.className = 'map-popup-actions';
    const details = document.createElement('a');
    details.href = point.detailsUrl;
    details.textContent = 'Details →';
    actions.append(details);
    const website = document.createElement('a');
    website.href = point.website;
    website.target = '_blank';
    website.rel = 'noopener noreferrer';
    website.textContent = 'Website ↗';
    actions.append(website);
    card.append(actions);
    return card;
  }

  function groupPopup(group: ConferenceMapPoint[]): HTMLElement {
    const wrap = document.createElement('div');
    wrap.className = 'map-popup';
    const place = document.createElement('div');
    place.className = 'map-popup-place';
    const first = group[0];
    place.textContent = [first.venue, first.city, first.country].filter(Boolean).join(' · ');
    wrap.append(place);
    group.forEach((point) => wrap.append(popupEvent(point)));
    return wrap;
  }

  function markerStyle(group: ConferenceMapPoint[]) {
    const types = new Set(group.map((point) => point.type));
    const mixed = types.size > 1;
    const conference = types.has('conference');
    return {
      radius: Math.min(12, 7 + Math.max(0, group.length - 1) * 1.5),
      color: mixed ? '#334155' : conference ? '#2563eb' : '#7c3aed',
      fillColor: mixed ? '#475569' : conference ? '#3b82f6' : '#8b5cf6',
      fillOpacity: 0.88,
      weight: 2,
    };
  }

  function visiblePoints(): ConferenceMapPoint[] {
    const query = state.query.trim().toLowerCase();
    return points.filter((point) => {
      const haystack = `${point.title} ${point.shortName} ${point.city} ${point.country} ${point.topicLabels.join(' ')}`.toLowerCase();
      return (state.type === 'all' || point.type === state.type)
        && (state.scope === 'all' || point.scope === state.scope)
        && (state.year === 'all' || String(point.year) === state.year)
        && (state.topic === 'all' || point.topics.includes(state.topic))
        && (!query || haystack.includes(query));
    });
  }

  function render() {
    layer.clearLayers();
    const visible = visiblePoints();
    const grouped = new Map<string, ConferenceMapPoint[]>();
    visible.forEach((point) => {
      const key = `${point.latitude.toFixed(4)}|${point.longitude.toFixed(4)}`;
      grouped.set(key, [...(grouped.get(key) ?? []), point]);
    });

    const bounds: [number, number][] = [];
    grouped.forEach((group) => {
      const first = group[0];
      bounds.push([first.latitude, first.longitude]);
      const marker = L.circleMarker([first.latitude, first.longitude], markerStyle(group)).addTo(layer);
      marker.bindPopup(groupPopup(group), { maxWidth: 340, minWidth: 245 });
      marker.bindTooltip(group.length > 1 ? `${first.city}: ${group.length} events` : group[0].shortName, { direction: 'top' });
    });

    if (count) count.textContent = String(visible.length);
    if (bounds.length === 1) map.setView(bounds[0], 5);
    else if (bounds.length > 1) map.fitBounds(bounds, { padding: [34, 34], maxZoom: 5 });
    else map.setView([24, 10], 2);
  }

  controls?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const typeButton = target.closest<HTMLButtonElement>('[data-map-type]');
    const scopeButton = target.closest<HTMLButtonElement>('[data-map-scope]');
    if (typeButton) {
      state.type = typeButton.dataset.mapType ?? 'all';
      setPressed('[data-map-type]', state.type);
      render();
    } else if (scopeButton) {
      state.scope = scopeButton.dataset.mapScope ?? 'all';
      setPressed('[data-map-scope]', state.scope);
      render();
    }
  });

  search?.addEventListener('input', () => { state.query = search.value; render(); });
  year?.addEventListener('change', () => { state.year = year.value; render(); });
  topic?.addEventListener('change', () => { state.topic = topic.value; render(); });

  render();
  window.setTimeout(() => map.invalidateSize(), 0);
}
