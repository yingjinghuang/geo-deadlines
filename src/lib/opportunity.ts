import type { CollectionEntry } from 'astro:content';
import { deadlineTimestamp, hasActiveTbdDeadline, selectNextDeadline, SUBMISSION_DEADLINE_TYPES, urgencyFor } from './deadlines';
import type { DerivedOpportunity, OpportunityData } from './types';
import { verificationStatus } from './verification';

export function deriveOpportunity(
  entry: Pick<CollectionEntry<'opportunities'>, 'id' | 'data'>,
  now = Date.now(),
): DerivedOpportunity {
  const raw = entry.data as unknown as OpportunityData;
  const nextDeadline = selectNextDeadline(raw.deadlines, now);
  const nextDeadlineTimestamp = nextDeadline ? deadlineTimestamp(nextDeadline) : null;
  const submissionStatus = nextDeadline
    ? 'open'
    : hasActiveTbdDeadline(raw.deadlines) ? 'tbd' : 'closed';

  return {
    id: entry.id,
    raw,
    nextDeadline,
    nextDeadlineTimestamp,
    submissionStatus,
    urgency: urgencyFor(nextDeadlineTimestamp, now),
    verificationStatus: verificationStatus(raw.last_verified, now),
  };
}

export function sortUpcoming(items: DerivedOpportunity[]): DerivedOpportunity[] {
  return [...items].sort((a, b) => {
    if (a.nextDeadlineTimestamp === null && b.nextDeadlineTimestamp === null) return a.raw.title.localeCompare(b.raw.title);
    if (a.nextDeadlineTimestamp === null) return 1;
    if (b.nextDeadlineTimestamp === null) return -1;
    return a.nextDeadlineTimestamp - b.nextDeadlineTimestamp;
  });
}

export function sortArchive(items: DerivedOpportunity[]): DerivedOpportunity[] {
  const lastSubmission = (item: DerivedOpportunity) => Math.max(
    ...item.raw.deadlines
      .filter((deadline) => deadline.status === 'active' && SUBMISSION_DEADLINE_TYPES.has(deadline.type))
      .map((deadline) => deadlineTimestamp(deadline) ?? 0),
  );
  return [...items].sort((a, b) => lastSubmission(b) - lastSubmission(a));
}
