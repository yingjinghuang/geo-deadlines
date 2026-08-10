const STORAGE_KEY = 'geodeadlines:favorites';
export {};

function readFavorites(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as string[]); }
  catch { return new Set(); }
}

function renderButtons() {
  const favorites = readFavorites();
  document.querySelectorAll<HTMLButtonElement>('[data-favorite-id]').forEach((button) => {
    const selected = favorites.has(button.dataset.favoriteId ?? '');
    button.setAttribute('aria-pressed', String(selected));
    button.setAttribute('aria-label', `${selected ? 'Remove' : 'Save'} ${button.closest('[data-opportunity-card]')?.querySelector('h2')?.textContent ?? 'deadline'}`);
    const icon = button.querySelector('[aria-hidden]');
    if (icon) icon.textContent = selected ? '★' : '☆';
  });
}

function icsEscape(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function icsDate(input: string | number): string {
  return new Date(input).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

interface CalendarPayload { id: string; title: string; start: string; timezone?: string; source: string; detail: string; primary?: boolean }
function makeIcs(events: CalendarPayload[]): string {
  const blocks = events.map((event) => {
    const start = Date.parse(event.start);
    return [
      'BEGIN:VEVENT', `UID:${icsEscape(event.id)}@geodeadlines`, `DTSTAMP:${icsDate(Date.now())}`,
      `DTSTART:${icsDate(start)}`, `DTEND:${icsDate(start + 15 * 60_000)}`,
      `SUMMARY:${icsEscape(event.title)}`,
      `DESCRIPTION:${icsEscape(`Original timezone: ${event.timezone ?? 'Not specified'}\nOfficial source: ${event.source}\nGeoDeadlines: ${event.detail}`)}`,
      `URL:${icsEscape(event.source)}`, 'END:VEVENT',
    ].join('\r\n');
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GeoDeadlines//EN', 'CALSCALE:GREGORIAN', ...blocks, 'END:VCALENDAR', ''].join('\r\n');
}

function downloadIcs(events: CalendarPayload[], filename: string) {
  if (!events.length) return;
  const url = URL.createObjectURL(new Blob([makeIcs(events)], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = filename; link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const favorite = target.closest<HTMLButtonElement>('[data-favorite-id]');
  if (favorite) {
    const id = favorite.dataset.favoriteId;
    if (!id) return;
    const values = readFavorites();
    values.has(id) ? values.delete(id) : values.add(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...values]));
    renderButtons();
    window.dispatchEvent(new CustomEvent('geodeadlines:favoriteschange'));
    return;
  }

  const calendarButton = target.closest<HTMLButtonElement>('[data-calendar-download]');
  if (calendarButton) {
    const card = calendarButton.closest<HTMLElement>('[data-opportunity-card]');
    const events = JSON.parse(card?.dataset.calendarEvents ?? '[]') as CalendarPayload[];
    const future = events.filter((item) => Date.parse(item.start) > Date.now()).sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
    const next = future.find((item) => item.primary) ?? future[0];
    downloadIcs(next ? [next] : [], `${card?.dataset.id ?? 'deadline'}.ics`);
  }

  const exportButton = target.closest<HTMLButtonElement>('[data-export-favorites]');
  if (exportButton) {
    const favorites = readFavorites();
    const events = [...document.querySelectorAll<HTMLElement>('[data-opportunity-card]')]
      .filter((card) => favorites.has(card.dataset.id ?? ''))
      .flatMap((card) => JSON.parse(card.dataset.calendarEvents ?? '[]') as CalendarPayload[])
      .filter((item) => Date.parse(item.start) > Date.now());
    downloadIcs(events, 'geodeadlines-favorites.ics');
  }
});

renderButtons();
