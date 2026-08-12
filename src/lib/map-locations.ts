import type { OpportunityData } from './types';

export interface MapCoordinates {
  latitude: number;
  longitude: number;
}

// City-level fallbacks for currently tracked conference/workshop locations.
// Prefer explicit location.latitude/location.longitude in YAML whenever a
// reliable venue coordinate is available.
const CITY_CENTROIDS: Record<string, MapCoordinates> = {
  'New York|US': { latitude: 40.7128, longitude: -74.0060 },
  'Lund|SE': { latitude: 55.7047, longitude: 13.1910 },
  'St. Louis|US': { latitude: 38.6270, longitude: -90.1994 },
  'Pittsburgh|US': { latitude: 40.4406, longitude: -79.9959 },
  'York|GB': { latitude: 53.9599, longitude: -1.0873 },
  'Hiroshima|JP': { latitude: 34.3853, longitude: 132.4553 },
  'Warsaw|PL': { latitude: 52.2297, longitude: 21.0122 },
  'Shanghai|CN': { latitude: 31.2304, longitude: 121.4737 },
  'Reykjavík|IS': { latitude: 64.1466, longitude: -21.9426 },
  'Nanjing|CN': { latitude: 32.0603, longitude: 118.7969 },
  'Lanzhou|CN': { latitude: 36.0611, longitude: 103.8343 },
  'Riverside|US': { latitude: 33.9806, longitude: -117.3755 },
  'Salt Lake City|US': { latitude: 40.7608, longitude: -111.8910 },
};

export function resolveMapCoordinates(location?: OpportunityData['location']): MapCoordinates | null {
  if (!location || location.mode === 'virtual') return null;
  if (typeof location.latitude === 'number' && typeof location.longitude === 'number') {
    return { latitude: location.latitude, longitude: location.longitude };
  }
  if (!location.city || !location.country_code) return null;
  return CITY_CENTROIDS[`${location.city}|${location.country_code}`] ?? null;
}
