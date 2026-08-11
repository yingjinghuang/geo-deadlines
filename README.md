# GeoDeadlines

> Deadlines for GIScience, GeoAI, Geography, Remote Sensing, Spatial Computing, and related research communities — maintained collaboratively.

[![Website](https://img.shields.io/badge/website-GeoDeadlines-2563EB)](https://yingjinghuang.github.io/geo-deadlines/)
[![Deploy](https://github.com/yingjinghuang/geo-deadlines/actions/workflows/deploy.yml/badge.svg)](https://github.com/yingjinghuang/geo-deadlines/actions/workflows/deploy.yml)
[![License](https://img.shields.io/github/license/yingjinghuang/geo-deadlines)](LICENSE)
[![Open PRs](https://img.shields.io/github/issues-pr/yingjinghuang/geo-deadlines)](https://github.com/yingjinghuang/geo-deadlines/pulls)

## 🌐 [Open GeoDeadlines](https://yingjinghuang.github.io/geo-deadlines/)

GeoDeadlines is a community-maintained tracker for **conference, workshop, and journal special-issue submission deadlines** across the geospatial research community.

The site is submission-first: the nearest active submission deadline is shown prominently with a live countdown, while official sources, conference dates, journal information, and the complete deadline timeline remain one click away.

### What it tracks

- **Core geospatial venues** — GIScience, GeoAI, cartography, spatial computing, remote sensing, location-based services, urban analytics, spatial cognition, and related fields.
- **Adjacent venues** — selected AI, machine learning, computer vision, HCI, and data-science conferences that are commonly relevant to geospatial researchers.
- **Journal special issues** — active calls from journals in GIScience, urban analytics, remote sensing, spatial data science, and related areas.
- **Workshops** — focused research workshops with their own submission deadlines.

## Why GeoDeadlines?

**⏳ Submission-first countdowns**  
The main countdown always targets the next submission milestone. Abstract → full-paper handoff happens automatically; notification and conference dates never replace the submission deadline.

**🌍 Timezone-aware**  
When an official call publishes an exact time and timezone, GeoDeadlines converts it to your browser's local time. If the source publishes only a date, the site shows a day-level countdown without inventing a submission time.

**🔎 Official-source verification**  
Every entry links back to an official organizer or publisher source and records when the information was last checked.

**🧭 Geospatial topic filters**  
Filter by GIScience, GeoAI, remote sensing, urban analytics, cartography, mobility, spatial cognition, HCI, and other topics instead of forcing venues into a single ranking category.

**⭐ Favorites & 📅 calendars**  
Save deadlines locally in your browser and export individual or favorite deadlines to calendar files. Static calendar feeds are also generated for conferences, workshops, special issues, and all tracked deadlines.

## Current coverage

GeoDeadlines includes major geospatial conference families such as **ACM SIGSPATIAL, GIScience, AGILE, COSIT, ICC, CaGIS, LBS, IGARSS, ISPRS Geospatial Week, FOSS4G, and AAG**, together with selected adjacent venues such as **CHI and ICLR**.

Special-issue tracking spans GIScience, GeoAI, urban analytics, sustainability, and remote sensing, with active or archived calls from journals including **Remote Sensing of Environment (RSE), International Journal of Geographical Information Science (IJGIS), International Journal of Digital Earth (IJDE), Transactions in Urban Data, Science, and Technology (TUS), Cities, Sustainable Cities and Society, Environment and Planning B, Computers, Environment and Urban Systems (CEUS), Transactions in GIS, ISPRS International Journal of Geo-Information (IJGI), Urban Forestry & Urban Greening, Applied Geography, Scientific Reports, Information Geography, and Geodata and AI**.

Coverage is intentionally community-maintained rather than claimed to be exhaustive. If something important is missing, please add it.

## Add or update a deadline

Contributions are very welcome.

### Option 1 — Edit YAML and open a PR

1. Fork this repository.
2. Add or update a YAML file under [`src/data/opportunities/`](src/data/opportunities/).
3. Use topic IDs defined in [`src/data/topics.yml`](src/data/topics.yml).
4. Include at least one official source and update `last_verified`.
5. Run the local checks.
6. Open a pull request.

### Option 2 — Submit a GitHub issue

If you do not want to edit YAML, use the repository's **Add a deadline** issue form and provide the venue/journal, deadline, timezone if known, and an official source.

### Example entry

```yaml
title: "Example Geo Conference 2027"
short_name: "GEO 2027"
type: conference
year: 2027
scope: core

topics:
  - giscience
  - geoai

website: "https://example.org"

sources:
  - label: "Official call for papers"
    url: "https://example.org/cfp"
    kind: official

last_verified: "2027-01-10"

deadlines:
  - id: abstract
    type: abstract
    label: "Abstract"
    datetime: "2027-08-15T23:59:00-12:00"
    timezone: "AoE"
    status: active

  - id: full-paper
    type: full_paper
    label: "Full Paper"
    datetime: "2027-08-22T23:59:00-12:00"
    timezone: "AoE"
    status: active
```

If the official source gives only a calendar date, preserve that uncertainty instead of guessing a time:

```yaml
datetime: "2027-08-22"
precision: date
timezone: null
```

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full data-entry workflow.

## Calendar feeds

The deployment generates static iCalendar feeds for:

- [All deadlines](https://yingjinghuang.github.io/geo-deadlines/calendar/all.ics)
- [Conferences](https://yingjinghuang.github.io/geo-deadlines/calendar/conferences.ics)
- [Special issues](https://yingjinghuang.github.io/geo-deadlines/calendar/special-issues.ics)
- [Workshops](https://yingjinghuang.github.io/geo-deadlines/calendar/workshops.ics)

## Local development

GeoDeadlines is a fully static **Astro + TypeScript + YAML** project. GitHub is the data and contribution layer; no database or backend service is required.

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Run the complete validation suite:

```bash
npm run validate
npm run check
npm test
npm run build
```

Pushes to `main` are built and deployed automatically to GitHub Pages through GitHub Actions.

## Data principles

- Prefer **official conference, society, journal, or publisher pages**.
- Do not infer or fabricate submission times, timezones, extensions, rankings, or dates.
- Keep expired opportunities: they become part of the archive and help preserve historical deadline information.
- Mark future calls as `TBD` when an event is announced but its submission schedule is not.
- Update `last_verified` whenever an entry is checked against its source.

## Inspiration

GeoDeadlines is inspired by community deadline trackers such as [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines), while adapting the model for the broader Geography / GIScience / GeoAI ecosystem and for journal special issues as first-class entries.

## License

[MIT](LICENSE)
