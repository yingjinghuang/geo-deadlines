import type { Deadline } from './types';

export const SUBMISSION_DEADLINE_TYPES = new Set([
  'abstract', 'full_paper', 'short_paper', 'paper', 'poster', 'demo',
  'workshop_paper', 'doctoral_consortium', 'manuscript',
  'special_issue_manuscript', 'revision',
]);

export function isDateOnly(deadline: Deadline): boolean {
  return deadline.precision === 'date';
}

export function deadlineTimestamp(deadline: Deadline): number | null {
  if (deadline.datetime.toUpperCase() === 'TBD') return null;
  const input = isDateOnly(deadline) ? `${deadline.datetime}T23:59:59.999Z` : deadline.datetime;
  const timestamp = Date.parse(input);
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function futureSubmissionDeadlines(deadlines: Deadline[], now = Date.now()): Deadline[] {
  return deadlines
    .filter((deadline) => deadline.status === 'active' && SUBMISSION_DEADLINE_TYPES.has(deadline.type))
    .filter((deadline) => {
      const timestamp = deadlineTimestamp(deadline);
      return timestamp !== null && timestamp > now;
    })
    .sort((a, b) => (deadlineTimestamp(a) ?? 0) - (deadlineTimestamp(b) ?? 0));
}

export function selectNextDeadline(deadlines: Deadline[], now = Date.now()): Deadline | null {
  const future = futureSubmissionDeadlines(deadlines, now);
  return future.find((deadline) => deadline.primary) ?? future[0] ?? null;
}

export function hasActiveTbdDeadline(deadlines: Deadline[]): boolean {
  return deadlines.some((deadline) =>
    deadline.status === 'active' &&
    SUBMISSION_DEADLINE_TYPES.has(deadline.type) &&
    deadline.datetime.toUpperCase() === 'TBD'
  );
}

export function urgencyFor(timestamp: number | null, now = Date.now()) {
  if (timestamp === null || timestamp <= now) return null;
  const days = (timestamp - now) / 86_400_000;
  if (days < 1) return 'critical' as const;
  if (days < 3) return 'urgent' as const;
  if (days < 7) return 'soon' as const;
  if (days < 30) return 'near' as const;
  return 'normal' as const;
}

export function formatCountdown(timestamp: number, now = Date.now()): string {
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

export function formatDateOnlyCountdown(date: string, now = Date.now()): string {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return 'Date announced';
  const [, year, month, day] = match;
  const current = new Date(now);
  const todayUtc = Date.UTC(current.getUTCFullYear(), current.getUTCMonth(), current.getUTCDate());
  const targetUtc = Date.UTC(Number(year), Number(month) - 1, Number(day));
  const days = Math.round((targetUtc - todayUtc) / 86_400_000);
  if (days < 0) return 'Closed';
  if (days === 0) return 'Today';
  return `${days}d`;
}

export function formatOriginalDeadline(deadline: Deadline, locale = 'en-US'): string {
  if (deadline.datetime.toUpperCase() === 'TBD') return 'To be announced';
  if (isDateOnly(deadline)) {
    const [year, month, day] = deadline.datetime.split('-').map(Number);
    if (!year || !month || !day) return deadline.datetime;
    const label = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
      .format(new Date(Date.UTC(year, month - 1, day)));
    return `${label} · time not specified`;
  }
  const match = deadline.datetime.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return deadline.datetime;
  const [, year, month, day, hour, minute] = match;
  const monthLabel = new Intl.DateTimeFormat(locale, { month: 'short' })
    .format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));
  return `${monthLabel} ${Number(day)}, ${year} · ${hour}:${minute} ${deadline.timezone ?? ''}`.trim();
}

export function exactDeadlineLabel(deadline: Deadline): string {
  return `${deadline.label}: ${formatOriginalDeadline(deadline)}`;
}
