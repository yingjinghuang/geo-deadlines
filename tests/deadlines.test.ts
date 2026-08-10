import { describe, expect, it } from 'vitest';
import { deadlineTimestamp, formatCountdown, formatDateOnlyCountdown, formatOriginalDeadline, hasActiveTbdDeadline, selectNextDeadline, urgencyFor } from '../src/lib/deadlines';
import { verificationStatus } from '../src/lib/verification';
import type { Deadline } from '../src/lib/types';

const active = (overrides: Partial<Deadline>): Deadline => ({
  id: 'paper', type: 'paper', label: 'Paper', datetime: '2027-08-22T23:59:00-12:00', timezone: 'AoE', status: 'active', ...overrides,
});
const now = Date.parse('2027-08-01T00:00:00Z');

describe('deadline selection', () => {
  it('selects the earliest future submission deadline', () => {
    const deadlines = [active({ id: 'paper' }), active({ id: 'abstract', type: 'abstract', label: 'Abstract', datetime: '2027-08-15T23:59:00-12:00' })];
    expect(selectNextDeadline(deadlines, now)?.id).toBe('abstract');
  });

  it('hands off from abstract to full paper', () => {
    const deadlines = [active({ id: 'abstract', type: 'abstract', datetime: '2027-08-15T23:59:00-12:00' }), active({ id: 'full', type: 'full_paper' })];
    expect(selectNextDeadline(deadlines, Date.parse('2027-08-16T13:00:00Z'))?.id).toBe('full');
  });

  it('respects a future primary override', () => {
    const deadlines = [active({ id: 'abstract', type: 'abstract', datetime: '2027-08-15T23:59:00-12:00' }), active({ id: 'paper', primary: true })];
    expect(selectNextDeadline(deadlines, now)?.id).toBe('paper');
  });

  it('never selects notifications', () => {
    expect(selectNextDeadline([active({ type: 'notification' })], now)).toBeNull();
  });

  it('ignores superseded deadlines', () => {
    expect(selectNextDeadline([active({ status: 'superseded' })], now)).toBeNull();
  });

  it('detects TBD submission deadlines', () => {
    expect(hasActiveTbdDeadline([active({ datetime: 'TBD', timezone: null })])).toBe(true);
  });

  it('selects date-only deadlines without inventing an exact timezone', () => {
    const deadline = active({ datetime: '2027-08-10', precision: 'date', timezone: null });
    expect(selectNextDeadline([deadline], now)?.id).toBe('paper');
    expect(formatOriginalDeadline(deadline)).toContain('time not specified');
  });
});

describe('time calculations', () => {
  it('parses AoE as UTC−12', () => {
    expect(new Date(deadlineTimestamp(active({}))!).toISOString()).toBe('2027-08-23T11:59:00.000Z');
  });

  it('uses end-of-day UTC only as the internal sort point for date-only deadlines', () => {
    const deadline = active({ datetime: '2027-08-10', precision: 'date', timezone: null });
    expect(new Date(deadlineTimestamp(deadline)!).toISOString()).toBe('2027-08-10T23:59:59.999Z');
    expect(formatDateOnlyCountdown('2027-08-10', Date.parse('2027-08-01T12:00:00Z'))).toBe('9d');
  });

  it('classifies urgency', () => {
    expect(urgencyFor(now + 12 * 3_600_000, now)).toBe('critical');
    expect(urgencyFor(now + 2 * 86_400_000, now)).toBe('urgent');
    expect(urgencyFor(now + 5 * 86_400_000, now)).toBe('soon');
    expect(urgencyFor(now + 20 * 86_400_000, now)).toBe('near');
    expect(urgencyFor(now + 40 * 86_400_000, now)).toBe('normal');
  });

  it('formats countdown precision by distance', () => {
    expect(formatCountdown(now + 40 * 86_400_000 + 3 * 3_600_000, now)).toBe('40d 03h');
    expect(formatCountdown(now + 2 * 86_400_000 + 5 * 3_600_000, now)).toBe('2d 05h 00m');
    expect(formatCountdown(now + 45 * 60_000, now)).toBe('45m 00s');
  });

  it('classifies verification freshness', () => {
    const checkNow = Date.parse('2027-07-20T00:00:00Z');
    expect(verificationStatus('2027-07-01', checkNow)).toBe('verified');
    expect(verificationStatus('2027-03-01', checkNow)).toBe('aging');
    expect(verificationStatus('2026-01-01', checkNow)).toBe('stale');
  });
});
