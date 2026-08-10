import type { Deadline, OpportunityData } from './types';

function escapeIcs(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function toIcsDate(timestamp: number): string {
  return new Date(timestamp).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export function calendarEvent(id: string, opportunity: OpportunityData, deadline: Deadline, detailUrl: string): string {
  const start = Date.parse(deadline.datetime);
  const end = start + 15 * 60 * 1000;
  const summary = `${opportunity.short_name ?? opportunity.title} — ${deadline.label} Deadline`;
  const description = `Original timezone: ${deadline.timezone ?? 'Not specified'}\nOfficial source: ${deadline.url ?? opportunity.website}\nGeoDeadlines: ${detailUrl}`;
  return [
    'BEGIN:VEVENT',
    `UID:${escapeIcs(`${id}-${deadline.id}@geodeadlines`)}`,
    `DTSTAMP:${toIcsDate(Date.now())}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
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
  const start = Date.parse(deadline.datetime);
  const end = start + 15 * 60 * 1000;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${opportunity.short_name ?? opportunity.title} — ${deadline.label} Deadline`,
    dates: `${toIcsDate(start)}/${toIcsDate(end)}`,
    details: `Original timezone: ${deadline.timezone ?? 'Not specified'}\n${detailUrl}`,
    location: opportunity.website,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
