import { describe, expect, it } from 'vitest';
import { resolvePositionCategory } from '../src/lib/position-category';
import type { PositionCategory } from '../src/lib/types';

const position = (title: string, position_category?: PositionCategory) => ({
  type: 'position' as const,
  title,
  short_name: undefined,
  position_category,
});

describe('position category', () => {
  it('infers common academic career stages', () => {
    expect(resolvePositionCategory(position('PhD Candidate in GeoAI'))).toBe('phd');
    expect(resolvePositionCategory(position('Postdoctoral Research Fellow in Remote Sensing'))).toBe('postdoc');
    expect(resolvePositionCategory(position('Assistant Professor of Geography'))).toBe('faculty');
    expect(resolvePositionCategory(position('Senior Research Scientist in GIScience'))).toBe('research_staff');
    expect(resolvePositionCategory(position('Research Assistant in Spatial Data Science'))).toBe('student_ra_intern');
  });

  it('does not infer region-dependent lecturer titles as faculty', () => {
    expect(resolvePositionCategory(position('Senior Lecturer in Human Geography'))).toBe('research_staff');
    expect(resolvePositionCategory(position('Lecturer in Physical Geography'))).toBe('research_staff');
  });

  it('marks multi-level recruitment as mixed', () => {
    expect(resolvePositionCategory(position('PhD / Postdoc / RA — 3D GIS and AI'))).toBe('mixed');
  });

  it('honors an explicit category override', () => {
    expect(resolvePositionCategory(position('Research Fellow', 'postdoc'))).toBe('postdoc');
    expect(resolvePositionCategory(position('Lecturer in Physical Geography', 'faculty'))).toBe('faculty');
    expect(resolvePositionCategory(position('Senior Lecturer in Human Geography', 'postdoc'))).toBe('postdoc');
  });
});
