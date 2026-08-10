# GeoDeadlines

A community-maintained submission-deadline tracker for GIScience, GeoAI, Geography, Remote Sensing, Spatial Computing, and related research communities.

GeoDeadlines is fully static: YAML files are the canonical data source, Astro builds the interface, and GitHub Actions deploys it to GitHub Pages. The primary countdown always targets the next active submission milestone—never notification or event dates.

> The five included records are representative seed data using `example.org`. Replace or expand them with officially verified opportunities before a public launch.

## Features

- conference, workshop, and journal special-issue records;
- live, timezone-safe countdowns with abstract → full-paper handoff;
- search, type/topic/scope/time filters, and deadline-first sorting;
- static detail pages and complete deadline timelines;
- browser-local favorites and favorites `.ics` export;
- build-time calendar feeds in `public/calendar/`;
- schema plus semantic validation and unit tests;
- base-path-safe GitHub Pages deployment.

## Local development

Requires Node.js 22.12 or newer (Node 24 is used in CI).

```bash
npm install
npm run dev
```

Run all checks:

```bash
npm run validate
npm run check
npm test
npm run build
```

The default build uses `https://USERNAME.github.io/geo-deadlines/`. Configure a real deployment with:

```bash
SITE_URL=https://your-name.github.io \
BASE_PATH=/geo-deadlines \
PUBLIC_REPOSITORY_URL=https://github.com/your-name/geo-deadlines \
npm run build
```

For a custom domain, set `SITE_URL` to the domain and `BASE_PATH=/`.

## Add or update data

Create one YAML file in the matching folder under `src/data/opportunities/`. Filename slugs become opportunity IDs and public URLs. Use only topic IDs defined in `src/data/topics.yml`, include at least one official source, and update `last_verified`.

Every known deadline must include an explicit UTC offset:

```yaml
datetime: "2027-08-22T23:59:00-12:00"
timezone: "AoE"
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## Deployment

Pushes to `main` run validation and deploy through the official Astro GitHub Pages action. In the GitHub repository, choose **Settings → Pages → Source → GitHub Actions**.

## License

MIT
