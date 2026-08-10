import type { Deadline, OpportunityData } from './types';
import { deadlineTimestamp, isDateOnly } from './deadlines';

function escapeIcs(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function toIcsDate(timestamp: number): string {
  return new Date(timestamp).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function compactDate(date: string): string {
  return date.replace(/-/g, '');
}

function nextDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + 1));
  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-${String(next.getUTCDate()).padStart(2, '0')}`;
}

export function calendarEvent(id: string, opportunity: OpportunityData, deadline: Deadline, detailUrl: string): string {
  const summary = `${opportunity.short_name ?? opportunity.title} — ${deadline.label} Deadline`;
  const timing = isDateOnly(deadline) ? 'Date only; exact time/timezone not specified' : `Original timezone: ${deadline.timezone ?? 'Not specified'}`;
  const description = `${timing}\nOfficial source: ${deadline.url ?? opportunity.website}\nGeoDeadlines: ${detailUrl}`;
  const timingLines = isDateOnly(deadline)
    ? [`DTSTART;VALUE=DATE:${compactDate(deadline.datetime)}`, `DTEND;VALUE=DATE:${compactDate(nextDate(deadline.datetime))}`]
    : (() => {
        const start = deadlineTimestamp(deadline)!;
        return [`DTSTART:${toIcsDate(start)}`, `DTEND:${toIcsDate(start + 15 * 60 * 1000)}`];
      })();
  return [
    'BEGIN:VEVENT',
    `UID:${escapeIcs(`${id}-${deadline.id}@geodeadlines`)}`,
    `DTSTAMP:${toIcsDate(Date.now())}`,
    ...timingLines,
    `SUMMARY:${escapeIcs(summary)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `URL:${escapeIcs(deadline.url ?? opportunity.website)}`,
    'END:VEVENT',
  ].join('\r\n');
}

export function calendarFile(events: string[]): string {
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GeoDeadlines//EN', 'CALSCALE:GREGORIAN', ...events, 'END:VCALENDAR', ''].join('\r\n');
}

export function googleCalendarUrl(opportunity: OpportunityData, deadline: Deadline, detailUrl: string): string {
  const dates = isDateOnly(deadline)
    ? `${compactDate(deadline.datetime)}/${compactDate(nextDate(deadline.datetime))}`
    : (() => {
        const start = deadlineTimestamp(deadline)!;
        return `${toIcsDate(start)}/${toIcsDate(start + 15 * 60 * 1000)}`;
      })();
  const timing = isDateOnly(deadline) ? 'Date only; exact time/timezone not specified' : `Original timezone: ${deadline.timezone ?? 'Not specified'}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${opportunity.short_name ?? opportunity.title} — ${deadline.label} Deadline`,
    dates,
    details: `${timing}\n${detailUrl}`,
    location: opportunity.website,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
