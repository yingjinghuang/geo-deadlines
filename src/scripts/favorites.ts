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
function compactDate(date: string): string { return date.replace(/-/g, ''); }
function nextDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + 1));
  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-${String(next.getUTCDate()).padStart(2, '0')}`;
}

interface CalendarPayload { id: string; title: string; start: string; precision?: 'datetime' | 'date'; timezone?: string; source: string; detail: string; primary?: boolean }
function eventTimestamp(event: CalendarPayload): number {
  return event.precision === 'date' ? Date.parse(`${event.start}T23:59:59.999Z`) : Date.parse(event.start);
}
function makeIcs(events: CalendarPayload[]): string {
  const blocks = events.map((event) => {
    const timingLines = event.precision === 'date'
      ? [`DTSTART;VALUE=DATE:${compactDate(event.start)}`, `DTEND;VALUE=DATE:${compactDate(nextDate(event.start))}`]
      : (() => { const start = Date.parse(event.start); return [`DTSTART:${icsDate(start)}`, `DTEND:${icsDate(start + 15 * 60_000)}`]; })();
    const timing = event.precision === 'date' ? 'Date only; exact time/timezone not specified' : `Original timezone: ${event.timezone ?? 'Not specified'}`;
    return [
      'BEGIN:VEVENT', `UID:${icsEscape(event.id)}@geodeadlines`, `DTSTAMP:${icsDate(Date.now())}`,
      ...timingLines,
      `SUMMARY:${icsEscape(event.title)}`,
      `DESCRIPTION:${icsEscape(`${timing}\nOfficial source: ${event.source}\nGeoDeadlines: ${event.detail}`)}`,
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
    const future = events.filter((item) => eventTimestamp(item) > Date.now()).sort((a, b) => eventTimestamp(a) - eventTimestamp(b));
    const next = future.find((item) => item.primary) ?? future[0];
    downloadIcs(next ? [next] : [], `${card?.dataset.id ?? 'deadline'}.ics`);
  }

  const exportButton = target.closest<HTMLButtonElement>('[data-export-favorites]');
  if (exportButton) {
    const favorites = readFavorites();
    const events = [...document.querySelectorAll<HTMLElement>('[data-opportunity-card]')]
      .filter((card) => favorites.has(card.dataset.id ?? ''))
      .flatMap((card) => JSON.parse(card.dataset.calendarEvents ?? '[]') as CalendarPayload[])
      .filter((item) => eventTimestamp(item) > Date.now());
    downloadIcs(events, 'geodeadlines-favorites.ics');
  }
});

renderButtons();
