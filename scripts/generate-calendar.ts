import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { parse } from 'yaml';
import { calendarEvent, calendarFile } from '../src/lib/calendar';
import { deadlineTimestamp, SUBMISSION_DEADLINE_TYPES } from '../src/lib/deadlines';
import type { OpportunityData, OpportunityType, Topic } from '../src/lib/types';

const dataRoot = new URL('../src/data/opportunities/', import.meta.url).pathname;
const topicsPath = new URL('../src/data/topics.yml', import.meta.url);
const outputRoot = new URL('../public/calendar/', import.meta.url).pathname;
const site = process.env.SITE_URL || 'https://USERNAME.github.io';
const base = (process.env.BASE_PATH ?? '/geo-deadlines').replace(/\/$/, '');
const now = Date.now();

async function yamlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? yamlFiles(path) : /\.ya?ml$/.test(entry.name) ? [path] : [];
  }))).flat();
}

const topics = parse(await readFile(topicsPath, 'utf8')) as Topic[];
const grouped: Record<'all' | OpportunityType, string[]> = { all: [], conference: [], special_issue: [], workshop: [] };
const byTopic = Object.fromEntries(topics.map((topic) => [topic.id, [] as string[]])) as Record<string, string[]>;

for (const file of await yamlFiles(dataRoot)) {
  const id = basename(file).replace(/\.ya?ml$/, '');
  const data = parse(await readFile(file, 'utf8')) as OpportunityData;
  const detailUrl = `${site}${base}/opportunity/${id}/`;
  for (const deadline of data.deadlines) {
    const timestamp = deadlineTimestamp(deadline);
    if (deadline.status !== 'active' || !SUBMISSION_DEADLINE_TYPES.has(deadline.type) || timestamp === null || timestamp <= now) continue;
    const event = calendarEvent(id, data, deadline, detailUrl);
    grouped.all.push(event);
    grouped[data.type].push(event);
    for (const topic of data.topics) byTopic[topic]?.push(event);
  }
}

await mkdir(outputRoot, { recursive: true });
const names: Record<keyof typeof grouped, string> = { all: 'all.ics', conference: 'conferences.ics', special_issue: 'special-issues.ics', workshop: 'workshops.ics' };
await Promise.all([
  ...Object.entries(grouped).map(([type, events]) => writeFile(join(outputRoot, names[type as keyof typeof grouped]), calendarFile(events), 'utf8')),
  ...topics.map((topic) => writeFile(join(outputRoot, `topic-${topic.id}.ics`), calendarFile(byTopic[topic.id] ?? []), 'utf8')),
]);
console.log(`Generated ${Object.keys(grouped).length} general feeds and ${topics.length} topic feeds with ${grouped.all.length} upcoming deadlines.`);
