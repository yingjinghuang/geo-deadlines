import type { OpportunityData } from './types';

export interface DisplayName {
  primary: string;
  fullName: string | null;
  combined: string;
}

/**
 * Show the familiar conference/workshop acronym first, then its official
 * expanded name. Other opportunity types continue to use their title only.
 */
export function displayName(data: Pick<OpportunityData, 'type' | 'title' | 'short_name'>): DisplayName {
  const full = data.title.trim();
  const short = data.short_name?.trim();
  const hasDistinctShortName = (data.type === 'conference' || data.type === 'workshop')
    && Boolean(short)
    && short!.toLocaleLowerCase('en') !== full.toLocaleLowerCase('en');

  if (!hasDistinctShortName) return { primary: full, fullName: null, combined: full };
  return { primary: short!, fullName: full, combined: `${short} — ${full}` };
}
