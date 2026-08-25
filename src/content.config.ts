import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const deadlineType = z.enum([
  'abstract', 'full_paper', 'short_paper', 'paper', 'poster', 'demo',
  'workshop_paper', 'doctoral_consortium', 'manuscript', 'application',
  'special_issue_manuscript', 'revision', 'notification', 'camera_ready',
  'registration', 'conference_start', 'conference_end', 'other',
]);

const deadline = z.object({
  id: z.string().min(1),
  type: deadlineType,
  label: z.string().min(1),
  datetime: z.string().min(1),
  precision: z.enum(['datetime', 'date']).optional(),
  timezone: z.string().nullable().optional(),
  status: z.enum(['active', 'superseded', 'cancelled']).default('active'),
  primary: z.boolean().optional(),
  url: z.url().optional(),
  note: z.string().nullable().optional(),
});

const source = z.object({
  label: z.string().min(1),
  url: z.url(),
  kind: z.enum(['official', 'publisher', 'announcement', 'other']).default('official'),
});

const opportunities = defineCollection({
  loader: glob({
    pattern: '**/*.{yml,yaml}',
    base: './src/data/opportunities',
    generateId: ({ entry }) => entry.split('/').pop()?.replace(/\.ya?ml$/, '') ?? entry,
  }),
  schema: z.object({
    title: z.string().min(1),
    short_name: z.string().optional(),
    type: z.enum(['conference', 'special_issue', 'workshop', 'position']),
    series: z.string().optional(),
    year: z.number().int().min(2000).max(2100),
    description: z.string().min(1),
    scope: z.enum(['core', 'adjacent']).default('core'),
    topics: z.array(z.string()).min(1),
    website: z.url(),
    submission_url: z.url().optional(),
    sources: z.array(source).min(1),
    last_verified: z.string().min(1),
    deadlines: z.array(deadline).min(1),
    event: z.object({ start: z.string(), end: z.string() }).optional(),
    location: z.object({
      mode: z.enum(['in_person', 'virtual', 'hybrid']),
      city: z.string().optional(),
      country: z.string().optional(),
      country_code: z.string().optional(),
      venue: z.string().optional(),
      latitude: z.number().min(-90).max(90).optional(),
      longitude: z.number().min(-180).max(180).optional(),
    }).optional(),
    journal: z.object({
      name: z.string(), short_name: z.string().optional(), publisher: z.string().optional(),
    }).optional(),
    guest_editors: z.array(z.object({ name: z.string(), affiliation: z.string().optional() })).optional(),
    organizations: z.array(z.string()).optional(),
    tracks: z.array(z.string()).optional(),
    rankings: z.record(z.string(), z.string()).optional(),
    parent: z.object({ name: z.string(), url: z.url() }).optional(),
  }),
});

const topics = defineCollection({
  loader: file('./src/data/topics.yml'),
  schema: z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    group: z.enum(['core', 'adjacent']),
  }),
});

export const collections = { opportunities, topics };
