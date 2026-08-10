import { getCollection } from 'astro:content';
import { deriveOpportunity } from './opportunity';
import type { DerivedOpportunity, Topic } from './types';

const topicPriority = ['giscience', 'geoai', 'remote-sensing', 'urban', 'spatial-computing', 'earth-observation'];
export const topics = (await getCollection('topics'))
  .map((entry) => entry.data as Topic)
  .sort((a, b) => {
    const left = topicPriority.indexOf(a.id);
    const right = topicPriority.indexOf(b.id);
    if (left !== -1 || right !== -1) return (left === -1 ? Number.MAX_SAFE_INTEGER : left) - (right === -1 ? Number.MAX_SAFE_INTEGER : right);
    return a.label.localeCompare(b.label);
  });

export async function getDerivedOpportunities(now = Date.now()): Promise<DerivedOpportunity[]> {
  const entries = await getCollection('opportunities');
  return entries.map((entry) => deriveOpportunity(entry, now));
}
