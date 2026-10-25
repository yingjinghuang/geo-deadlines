import { describe, expect, it } from 'vitest';
import { displayName } from '../src/lib/display-name';

describe('conference name presentation', () => {
  it('shows a conference acronym and the full event title together', () => {
    expect(displayName({
      type: 'conference',
      title: 'International Symposium on Spatial and Temporal Data',
      short_name: 'SSTD 2027',
    })).toEqual({
      primary: 'SSTD 2027',
      fullName: 'International Symposium on Spatial and Temporal Data',
      combined: 'SSTD 2027 — International Symposium on Spatial and Temporal Data',
    });
  });

  it('also expands workshop names', () => {
    const name = displayName({
      type: 'workshop',
      title: '9th International Workshop on AI for Geographic Knowledge Discovery',
      short_name: "GeoAI'26",
    });
    expect(name.primary).toBe("GeoAI'26");
    expect(name.fullName).toContain('Geographic Knowledge Discovery');
  });

  it('does not duplicate a fully branded title when no separate acronym exists', () => {
    expect(displayName({
      type: 'conference',
      title: 'Geo Week 2027',
      short_name: 'Geo Week 2027',
    })).toEqual({
      primary: 'Geo Week 2027',
      fullName: null,
      combined: 'Geo Week 2027',
    });
  });

  it('leaves special issues and recruitment positions unchanged', () => {
    expect(displayName({
      type: 'position',
      title: 'Research Scientist in Remote Sensing',
      short_name: 'RS',
    }).combined).toBe('Research Scientist in Remote Sensing');
  });
});
