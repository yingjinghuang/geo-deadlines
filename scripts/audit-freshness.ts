/**
 * GeoDeadlines freshness inventory.
 *
 * This is a triage tool, NOT a semantic or source-status verifier.
 * It never changes last_verified. A human/agent must compare each entry with its
 * official source before changing an opportunity's verification date.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const root = fileURLToPath(new URL('../src/data/opportunities/', import.meta.url));
const now = new Date();
const today = now.toISOString().slice(0, 10);
const maxAgeDays = { position: 14, conference: 30, workshop: 30, special_issue: 30 } as const;
type Entry = { title: string; type: keyof typeof maxAgeDays; last_verified: string; website: string;
  deadlines: { datetime: string; status: string; note?: string | null }[] };
async function findYml(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async e => {
    const p = join(dir, e.name);
    return e.isDirectory() ? findYml(p) : /\.ya?ml$/.test(e.name) ? [p] : [];
  }))).flat().sort();
}
function daysSince(date: string) {
  const d = new Date(date + 'T00:00:00Z').getTime();
  return Number.isFinite(d) ? Math.floor((now.getTime() - d) / 86_400_000) : Infinity;
}
const rows: { path: string; type: string; title: string; age: number; status: string; source: string }[] = [];
for (const file of await findYml(root)) {
  const data = parse(await readFile(file, 'utf8')) as Entry;
  const age = daysSince(data.last_verified);
  const limit = maxAgeDays[data.type] ?? 30;
  // "active" means milestone status, not proof a vacancy or CFP remains open.
  // Therefore *all* entries, including apparently expired ones, need a freshness audit.
  const status = age > limit ? 'OVERDUE' : 'within-cadence';
  rows.push({ path: relative(root, file).replaceAll('\\', '/'), type: data.type,
    title: data.title, age, status, source: data.website });
}
const overdue = rows.filter(r => r.status === 'OVERDUE');
const columns = ['Type', 'Entry', 'Last checked (days ago)', 'Official/primary URL'] as const;
console.log('# GeoDeadlines source freshness report');
console.log('');
console.log('Generated: ' + today + ' UTC. Source timestamps are documentary, not automated proof of an open call.');
console.log('Expected maximum age: positions **14 days**, all other opportunity types **30 days**.');
console.log('Every substantive data refresh requires **all entries** to be individually reviewed against official sources.');
console.log('');
console.log('Total: **' + rows.length + '**; overdue: **' + overdue.length + '**; within cadence: **' + (rows.length - overdue.length) + '**.');
console.log('');
if (overdue.length) {
  console.log('| ' + columns.join(' | ') + ' |');
  console.log('|---|---|---:|---|');
  const repository = process.env.GITHUB_REPOSITORY ?? 'yingjinghuang/geo-deadlines';
  for (const r of overdue.sort((a,b)=>b.age-a.age)) {
    console.log('| ' + r.type + ' | [' + r.path + '](https://github.com/' + repository + '/blob/main/src/data/opportunities/' + r.path + ') | ' + r.age + ' | ' + r.source + ' |');
  }
} else { console.log('No overdue entries. Fresh timestamps alone still do not establish source accuracy.'); }
console.log('');
console.log('Manual full-catalog checklist: https://github.com/yingjinghuang/geo-deadlines/blob/main/docs/verification-audit-2026-10-16.md');
console.log('Action: open each official call, check status and all deadlines/extensions; mark blocked or conflicting sources unresolved. NEVER bulk-bump last_verified.');
