interface CountdownDeadline {
  id: string;
  label: string;
  datetime: string;
  precision?: 'datetime' | 'date';
  timezone?: string | null;
  timestamp: number;
  primary?: boolean;
  original: string;
}

const formatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
});

function formatRemaining(timestamp: number, now: number): string {
  let seconds = Math.max(0, Math.floor((timestamp - now) / 1000));
  const days = Math.floor(seconds / 86_400);
  seconds -= days * 86_400;
  const hours = Math.floor(seconds / 3_600);
  seconds -= hours * 3_600;
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  const two = (value: number) => String(value).padStart(2, '0');
  if (days > 30) return `${days}d ${two(hours)}h`;
  if (days >= 1) return `${days}d ${two(hours)}h ${two(minutes)}m`;
  if (hours >= 1) return `${hours}h ${two(minutes)}m ${two(seconds)}s`;
  return `${minutes}m ${two(seconds)}s`;
}

function localDateOnlyState(date: string, now: number): { active: boolean; remaining: string } {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return { active: false, remaining: 'Date announced' };
  const target = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const current = new Date(now);
  const today = new Date(current.getFullYear(), current.getMonth(), current.getDate());
  const days = Math.round((target.getTime() - today.getTime()) / 86_400_000);
  if (days < 0) return { active: false, remaining: 'Closed' };
  return { active: true, remaining: days === 0 ? 'Today' : `${days}d` };
}

function urgency(timestamp: number, now: number): string {
  const days = (timestamp - now) / 86_400_000;
  if (days < 1) return 'critical';
  if (days < 3) return 'urgent';
  if (days < 7) return 'soon';
  if (days < 30) return 'near';
  return 'normal';
}

function deadlinesFor(element: HTMLElement): CountdownDeadline[] {
  try { return JSON.parse(element.dataset.deadlines ?? '[]') as CountdownDeadline[]; }
  catch { return []; }
}

function updateCountdown(element: HTMLElement, now: number): number | null {
  const future = deadlinesFor(element)
    .filter((item) => item.precision === 'date' ? localDateOnlyState(item.datetime, now).active : item.timestamp > now)
    .sort((a, b) => a.timestamp - b.timestamp);
  const next = future.find((item) => item.primary) ?? future[0];
  const value = element.querySelector<HTMLElement>('[data-countdown-value]');
  const label = element.querySelector<HTMLElement>('[data-countdown-label]');
  const status = element.querySelector<HTMLElement>('[data-countdown-status]');
  const original = element.querySelector<HTMLTimeElement>('[data-original-time]');
  const localRow = element.querySelector<HTMLElement>('[data-local-row]');
  const local = element.querySelector<HTMLElement>('[data-local-time]');
  const live = element.querySelector<HTMLElement>('[data-countdown-live]');
  const card = element.closest<HTMLElement>('[data-opportunity-card]');

  if (!next) {
    const hasTbd = element.dataset.hasTbd === 'true';
    if (value) value.textContent = hasTbd ? 'TBD' : 'Closed';
    if (label) label.textContent = 'Submission';
    if (status) status.textContent = hasTbd ? 'Date not announced' : 'No active submission deadline';
    if (original) { original.textContent = hasTbd ? 'Watch for the official call' : 'Deadline passed'; original.removeAttribute('datetime'); }
    if (localRow) localRow.hidden = true;
    if (local) local.textContent = '—';
    if (card) card.dataset.deadline = '';
    return null;
  }

  const dateOnly = next.precision === 'date';
  const remaining = dateOnly ? localDateOnlyState(next.datetime, now).remaining : formatRemaining(next.timestamp, now);
  if (value) value.textContent = remaining;
  if (label) label.textContent = next.label;
  if (status) status.textContent = dateOnly ? 'until submission date' : next.timestamp - now < 86_400_000 ? 'closing in less than 24 hours' : 'until submission';
  if (original) { original.textContent = next.original; original.dateTime = next.datetime; }
  if (localRow) localRow.hidden = dateOnly;
  if (local) local.textContent = dateOnly ? '' : formatter.format(new Date(next.timestamp));
  if (live && Math.floor(now / 60_000) !== Number(live.dataset.lastMinute)) {
    live.textContent = dateOnly
      ? `${next.label} submission date in ${remaining}. Exact submission time is not specified by the official source.`
      : `${next.label} deadline in ${remaining}. Exact deadline ${next.original}.`;
    live.dataset.lastMinute = String(Math.floor(now / 60_000));
  }
  if (card) {
    card.dataset.deadline = String(next.timestamp);
    for (const name of ['critical', 'urgent', 'soon', 'near', 'normal']) card.classList.remove(`urgency-${name}`);
    card.classList.add(`urgency-${urgency(next.timestamp, now)}`);
  }
  return next.timestamp;
}

let timer: number | undefined;
function updateAll() {
  if (timer) window.clearTimeout(timer);
  const now = Date.now();
  const timestamps = [...document.querySelectorAll<HTMLElement>('[data-countdown]')]
    .map((element) => updateCountdown(element, now))
    .filter((value): value is number => value !== null);
  const close = timestamps.some((timestamp) => timestamp - now <= 48 * 3_600_000);
  timer = window.setTimeout(updateAll, close ? 1000 : 60_000);
}

updateAll();
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateAll(); });
