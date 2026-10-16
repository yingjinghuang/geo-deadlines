import type { OpportunityType } from './types';

export const MAX_VERIFICATION_AGE_DAYS: Record<OpportunityType, number> = {
  position: 14,
  conference: 30,
  workshop: 30,
  special_issue: 30,
};

export function verificationAge(lastVerified: string, now = Date.now()): number {
  const parsed = Date.parse(`${lastVerified}T00:00:00Z`);
  return Number.isFinite(parsed) ? Math.max(0, Math.floor((now - parsed) / 86_400_000)) : Infinity;
}

/** An age-based triage signal. "Verified" is not proof a listing is currently open. */
export function verificationStatus(
  lastVerified: string,
  now = Date.now(),
  type: OpportunityType = 'conference',
): 'verified' | 'aging' | 'stale' {
  const age = verificationAge(lastVerified, now);
  const limit = MAX_VERIFICATION_AGE_DAYS[type];
  if (age > limit) return 'stale';
  if (age > Math.floor(limit * 0.7)) return 'aging';
  return 'verified';
}
