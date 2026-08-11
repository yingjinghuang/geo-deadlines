import { readdir, readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { parse } from 'yaml';
import { deadlineTimestamp, SUBMISSION_DEADLINE_TYPES } from '../src/lib/deadlines';
import type { OpportunityData, Topic } from '../src/lib/types';

const root = new URL('../src/data/', import.meta.url);
const opportunitiesRoot = new URL('opportunities/', root);
const errors: string[] = [];
const warnings: string[] = [];
const seenIds = new Set<string>();
const seenVenueYears = new Set<string>();
const now = Date.now();

function calendarDateInZone(timestamp: number, timeZone: string): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(timestamp));
  const value = (type: 'year' | 'month' | 'day') => parts.find((part) => part.type === type)?.value ?? '';
  return `${value('year')}-${value('month')}-${value('day')}`;
}

const latestCurrentCalendarDate = calendarDateInZone(now, 'Pacific/Kiritimati');

async function yamlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? yamlFiles(path) : /\.ya?ml$/.test(entry.name) ? [path] : [];
  }));
  return nested.flat();
}

function fail(id: string, message: string) { errors.push(`${id}: ${message}`); }
function warn(id: string, message: string) { warnings.push(`${id}: ${message}`); }
function validUrl(input: unknown): boolean {
  try { return typeof input === 'string' && Boolean(new URL(input)); } catch { return false; }
}

const topics = parse(await readFile(new URL('topics.yml', root), 'utf8')) as Topic[];
const topicIds = new Set(topics.map((topic) => topic.id));
if (topicIds.size !== topics.length) errors.push('topics.yml: duplicate topic ID');

const files = await yamlFiles(opportunitiesRoot.pathname);
for (const file of files) {
  const id = basename(file).replace(/\.ya?ml$/, '');
  let data: OpportunityData;
  try { data = parse(await readFile(file, 'utf8')) as OpportunityData; }
  catch (error) { fail(id, `invalid YAML (${String(error)})`); continue; }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) fail(id, 'filename must be a lowercase slug');
  if (seenIds.has(id)) fail(id, 'duplicate generated ID');
  seenIds.add(id);
  if (!data.title || !['conference', 'special_issue', 'workshop'].includes(data.type)) fail(id, 'title and a valid type are required');
  if (!Number.isInteger(data.year) || data.year < 2000 || data.year > 2100) fail(id, 'year is outside 2000–2100');
  const venueYear = `${data.series ?? data.title}|${data.year}|${data.type}`.toLowerCase();
  if (seenVenueYears.has(venueYear)) fail(id, 'possible duplicate venue/year');
  seenVenueYears.add(venueYear);

  if (!Array.isArray(data.topics) || data.topics.length === 0) fail(id, 'at least one topic is required');
  if (new Set(data.topics).size !== data.topics.length) fail(id, 'topics contain duplicates');
  for (const topic of data.topics ?? []) if (!topicIds.has(topic)) fail(id, `unknown topic '${topic}'`);

  if (data.location) {
    const hasLatitude = typeof data.location.latitude === 'number';
    const hasLongitude = typeof data.location.longitude === 'number';
    if (hasLatitude !== hasLongitude) fail(id, 'location latitude and longitude must be provided together');
    if (hasLatitude && (data.location.latitude! < -90 || data.location.latitude! > 90)) fail(id, 'location latitude must be between -90 and 90');
    if (hasLongitude && (data.location.longitude! < -180 || data.location.longitude! > 180)) fail(id, 'location longitude must be between -180 and 180');
  }

  if (!Array.isArray(data.deadlines) || data.deadlines.length === 0) { fail(id, 'at least one deadline is required'); continue; }
  const deadlineIds = new Set<string>();
  let activeCount = 0;
  let futurePrimaryCount = 0;
  for (const deadline of data.deadlines) {
    if (deadlineIds.has(deadline.id)) fail(id, `duplicate deadline ID '${deadline.id}'`);
    deadlineIds.add(deadline.id);
    if (!['active', 'superseded', 'cancelled'].includes(deadline.status)) fail(id, `invalid status on '${deadline.id}'`);
    if (deadline.status === 'active') activeCount += 1;
    if (deadline.datetime.toUpperCase() !== 'TBD' && deadline.status === 'active') {
      if (deadline.precision === 'date') {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline.datetime)) fail(id, `'${deadline.id}' date-only deadline must be YYYY-MM-DD`);
        if (deadline.timezone) warn(id, `'${deadline.id}' is date-only; timezone is ignored`);
      } else {
        if (!/(?:Z|[+-]\d{2}:\d{2})$/.test(deadline.datetime)) fail(id, `'${deadline.id}' needs an explicit UTC offset`);
        if (!deadline.timezone) fail(id, `'${deadline.id}' needs a source timezone`);
      }
      const timestamp = deadlineTimestamp(deadline);
      if (timestamp === null) fail(id, `'${deadline.id}' has an invalid datetime`);
      if (deadline.primary && timestamp !== null && timestamp > now && SUBMISSION_DEADLINE_TYPES.has(deadline.type)) futurePrimaryCount += 1;
    } else if (deadline.datetime.toUpperCase() === 'TBD' && deadline.timezone) {
      warn(id, `'${deadline.id}' is TBD but has a timezone`);
    }
  }
  if (!activeCount) fail(id, 'at least one active deadline is required');
  if (futurePrimaryCount > 1) fail(id, 'multiple future submission deadlines are marked primary');

  if (data.type === 'special_issue') {
    if (!data.journal?.name) fail(id, 'special issues require journal.name');
    if (!data.deadlines.some((deadline) => ['manuscript', 'special_issue_manuscript'].includes(deadline.type))) fail(id, 'special issues require a manuscript deadline');
  }
  if (data.type === 'conference') {
    if (!data.event) warn(id, 'conference event dates are missing');
    if (!data.location) warn(id, 'conference location is missing');
  }

  if (!Array.isArray(data.sources) || data.sources.length === 0) fail(id, 'at least one source is required');
  for (const source of data.sources ?? []) if (!validUrl(source.url)) fail(id, `invalid source URL '${source.url}'`);
  if (!validUrl(data.website)) fail(id, 'invalid website URL');
  const verified = Date.parse(`${data.last_verified}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.last_verified) || !Number.isFinite(verified)) fail(id, 'last_verified must be YYYY-MM-DD');
  if (data.last_verified > latestCurrentCalendarDate) fail(id, 'last_verified cannot be in the future');
  const futureSubmission = data.deadlines.some((deadline) => deadline.status === 'active' && SUBMISSION_DEADLINE_TYPES.has(deadline.type) && (deadlineTimestamp(deadline) ?? 0) > now);
  if (futureSubmission && (now - verified) / 86_400_000 > 180) warn(id, 'future deadline was last verified more than 180 days ago');
}

for (const warning of warnings) console.warn(`WARNING: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`\nValidation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Validated ${files.length} opportunities and ${topics.length} topics (${warnings.length} warning(s)).`);
