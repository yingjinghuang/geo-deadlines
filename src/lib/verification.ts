export function verificationStatus(lastVerified: string, now = Date.now()): 'verified' | 'aging' | 'stale' {
  const age = (now - Date.parse(`${lastVerified}T00:00:00Z`)) / 86_400_000;
  if (age <= 90) return 'verified';
  if (age <= 180) return 'aging';
  return 'stale';
}

export function verificationAge(lastVerified: string, now = Date.now()): number {
  return Math.max(0, Math.floor((now - Date.parse(`${lastVerified}T00:00:00Z`)) / 86_400_000));
}
