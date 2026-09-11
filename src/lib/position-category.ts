import type { OpportunityData, PositionCategory } from './types';

export const POSITION_CATEGORY_LABELS: Record<PositionCategory, string> = {
  phd: 'PhD',
  postdoc: 'Postdoc',
  faculty: 'Faculty',
  research_staff: 'Research Staff',
  student_ra_intern: 'Student / RA / Intern',
  mixed: 'Mixed / Open Rank',
};

type PositionCategoryInput = Pick<OpportunityData, 'type' | 'title' | 'short_name' | 'position_category'>;

export function resolvePositionCategory(data: PositionCategoryInput): PositionCategory | null {
  if (data.type !== 'position') return null;
  if (data.position_category) return data.position_category;

  const text = `${data.title} ${data.short_name ?? ''}`.toLowerCase();
  if (/\b(open rank|multiple ranks?)\b/.test(text)) return 'mixed';

  const matches = new Set<PositionCategory>();
  if (/\b(phd|doctoral|predoc|predoctoral|doctorate)\b/.test(text)) matches.add('phd');
  if (/\b(postdoc|postdoctoral)\b/.test(text)) matches.add('postdoc');
  if (/\b(assistant professor|associate professor|full professor|professor|faculty)\b/.test(text)) matches.add('faculty');
  if (/\b(research assistant|student assistant|intern|internship|master's student|masters student|master's thesis|masters thesis)\b/.test(text)) matches.add('student_ra_intern');

  if (matches.size > 1) return 'mixed';
  return [...matches][0] ?? 'research_staff';
}
