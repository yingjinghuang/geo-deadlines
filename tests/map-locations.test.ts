import { describe, expect, it } from 'vitest';
import { resolveMapCoordinates } from '../src/lib/map-locations';

describe('conference map locations', () => {
  it('prefers explicit venue coordinates', () => {
    expect(resolveMapCoordinates({
      mode: 'in_person',
      city: 'Vienna',
      country_code: 'AT',
      latitude: 48.2082,
      longitude: 16.3738,
    })).toEqual({ latitude: 48.2082, longitude: 16.3738 });
  });

  it('falls back to a known city centroid', () => {
    expect(resolveMapCoordinates({ mode: 'in_person', city: 'Riverside', country_code: 'US' })).toEqual({
      latitude: 33.9806,
      longitude: -117.3755,
    });
  });

  it('does not map virtual events', () => {
    expect(resolveMapCoordinates({ mode: 'virtual', city: 'New York', country_code: 'US' })).toBeNull();
  });
});
