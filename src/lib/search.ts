import type { OpportunityData, Topic } from './types';

export function normalize(value: string): string {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}

export function searchableText(data: OpportunityData, topics: Topic[]): string {
  const labels = data.topics.map((id) => topics.find((topic) => topic.id === id)?.label ?? id);
  return normalize([
    data.title, data.short_name, data.series, data.description,
    data.journal?.name, data.journal?.short_name,
    data.location?.city, data.location?.country,
    ...(data.organizations ?? []),
    ...(data.guest_editors?.map((editor) => editor.name) ?? []),
    ...data.topics, ...labels,
  ].filter(Boolean).join(' '));
}
