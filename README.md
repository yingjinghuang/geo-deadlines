# GeoDeadlines

> Deadlines for GIScience, GeoAI, Geography, Remote Sensing, Spatial Computing, and related research communities — maintained collaboratively.

[![Website](https://img.shields.io/badge/website-GeoDeadlines-2563EB)](https://yingjinghuang.github.io/geo-deadlines/)
[![Deploy](https://github.com/yingjinghuang/geo-deadlines/actions/workflows/deploy.yml/badge.svg)](https://github.com/yingjinghuang/geo-deadlines/actions/workflows/deploy.yml)
[![License](https://img.shields.io/github/license/yingjinghuang/geo-deadlines)](LICENSE)
[![Open PRs](https://img.shields.io/github/issues-pr/yingjinghuang/geo-deadlines)](https://github.com/yingjinghuang/geo-deadlines/pulls)

## 🌐 [Open GeoDeadlines](https://yingjinghuang.github.io/geo-deadlines/)

GeoDeadlines is a community-maintained tracker for **conference, workshop, journal special-issue and geospatial recruitment deadlines** across the geospatial research community.

The site is submission-first: the nearest active submission deadline is shown prominently with a live countdown, while official sources, conference dates, journal information, an interactive conference map, and the complete deadline timeline remain one click away.

### What it tracks

- **Core geospatial venues** — GIScience, GeoAI, cartography, spatial computing, remote sensing, location-based services, urban analytics, spatial cognition, and related fields.
- **Adjacent venues** — selected AI, machine learning, computer vision, HCI, and data-science conferences that are commonly relevant to geospatial researchers.
- **Journal special issues** — active calls from journals in GIScience, urban analytics, remote sensing, spatial data science, and related areas.
- **Workshops** — focused research workshops with their own submission deadlines.
- **Recruitment** — geospatial PhD, postdoc, faculty and research-staff opportunities, distinguishing priority review, final deadlines and explicit rolling applications.

## Why GeoDeadlines?

**⏳ Submission-first countdowns**  
The main countdown always targets the next submission milestone. Abstract → full-paper handoff happens automatically; notification and conference dates never replace the submission deadline.

**🌍 Timezone-aware**  
When an official call publishes an exact time and timezone, GeoDeadlines converts it to your browser's local time. If the source publishes only a date, the site shows a day-level countdown without inventing a submission time.

**🗺️ Interactive conference map**  
Explore upcoming in-person and hybrid conferences and workshops geographically, with filters for event type, scope, year, and topic. Co-located events are grouped into one marker and link back to their deadline details.

**🔎 Official-source verification**  
Every entry links back to an original organizer, publisher, employer or institution-verified PI/lab source and records when the information was last checked. Unresolved rechecks retain their previous verification date and explain the limitation.

**🧭 Geospatial topic filters**  
Filter by GIScience, GeoAI, remote sensing, urban analytics, cartography, mobility, spatial cognition, HCI, and other topics instead of forcing venues into a single ranking category.

**⭐ Favorites & 📅 calendars**  
Save deadlines locally in your browser and export individual or favorite deadlines to calendar files. Static calendar feeds are also generated for conferences, workshops, special issues, and all tracked deadlines.

## Current coverage

GeoDeadlines includes major geospatial conference families such as **ACM SIGSPATIAL, GIScience, AGILE, COSIT, ICC, CaGIS, LBS, IGARSS, ISPRS Geospatial Week, FOSS4G, and AAG**, together with selected adjacent venues such as **CHI and ICLR**.

Special-issue tracking spans GIScience, GeoAI, urban analytics, sustainability, and remote sensing, with active or archived calls from journals including **IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (JSTARS), Remote Sensing of Environment (RSE), International Journal of Geographical Information Science (IJGIS), International Journal of Digital Earth (IJDE), Transactions in Urban Data, Science, and Technology (TUS), Cities, Sustainable Cities and Society, Environment and Planning B, Computers, Environment and Urban Systems (CEUS), Transactions in GIS, ISPRS International Journal of Geo-Information (IJGI), Urban Forestry & Urban Greening, Applied Geography, Scientific Reports, Information Geography, and Geodata and AI**.

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

For map-ready physical events, reliable venue coordinates can be stored directly in `location.latitude` and `location.longitude`; otherwise the map can fall back to a known city centre.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full data-entry workflow.

## Data freshness and verification

GeoDeadlines requires a complete, source-by-source audit during substantive dataset refreshes; partial updates are labeled as such. Old and rolling records are not automatically treated as closed. Official calls, recruiting portals and journal pages take precedence over third-party indexes. The `last_verified` field changes **only after an official source has actually been reviewed**.

The latest [17 November 2026 full-catalog audit](docs/verification-audit-2026-11-17.md) covers **135/135 initial records**, with **126 source-supported or closure outcomes and 9 unresolved**. It includes a complete item matrix, all 13 then-tracked watchlist journals and separate faculty/PI discovery. A subsequent [global discovery expansion](docs/discovery-expansion-2026-11-17.md) adds 62 original-source-backed opportunities and expands the journal watchlist to 15; it preserves the nine unresolved baseline records and separately documents a new IUGG source discrepancy.

Run `npm run audit:freshness` for a full freshness report (source-review target: 3 days for all entry types). A daily GitHub Actions workflow updates an issue tracking overdue checks; it does not claim to have verified sources automatically. See the [5 November 2026 recruitment discovery report](docs/recruitment-discovery-2026-11-05.md) for 12 newly included positions, original sources, status caveats and excluded candidates. For complete-audit rules, see [CONTRIBUTING.md](CONTRIBUTING.md#mandatory-full-catalog-refresh-protocol), the [4 November final-four clarification](docs/verification-clarifications-2026-11-04.md), the [4 November historical-conference closeout](docs/verification-audit-historical-2026-11-04.md), the [4 November conference CFP follow-up](docs/verification-audit-conferences-2026-11-04.md), the [4 November special-issue audit](docs/verification-audit-special-issues-2026-11-04.md), the [4 November recruitment audit](docs/verification-audit-positions-2026-11-04.md), the [4 November conference/journal refresh](docs/verification-refresh-2026-11-04.md), the [25 October audit](docs/verification-audit-2026-10-25.md), and the [historical checklist](docs/verification-audit-2026-10-16.md).

## Live opportunities and archival verification

The [16 October 2026 full-source audit](docs/verification-audit-2026-10-16.md) examined an earlier 140-entry dataset. After 15 initial concluded-recruitment removals and 3 further verified-closure removals, the [25 October re-verification](docs/verification-audit-2026-10-25.md) found 101 supported current-source reviews and 21 entries whose current official evidence remained inconclusive. **At the repository owner's request, all 21 unresolved entries were removed from the live catalog.**

**Current catalog: 206 entries** (43 conferences, 85 recruitment opportunities, 72 special issues, and 6 workshops), after the [17 November 2026 global discovery expansion](docs/discovery-expansion-2026-11-17.md). The follow-up adds 62 distinct opportunities: 6 conferences, 5 workshops, 30 special issues and 21 recruitment cards. It also clarifies GSW / ISRSE-41 integration and Scientific Reports' explicit GMT closing policy. Historical event and journal calls remain available; catalog inclusion does not guarantee that submissions are open.

The preceding [same-day full audit](docs/verification-audit-2026-11-17.md) examined all 135 initial records: 126 had a source-supported or evidenced-closure outcome and 9 remained unresolved. That audit removed seven confirmed closed recruitment records and added 16 discoveries, producing the 144-entry baseline used for this expansion.

The unresolved queue is explicit: AAG and ICCV organizer-date conflicts; three inaccessible Taylor & Francis calls; Ghent's conflicting exact-cutoff wording; and Stirling, UCL CASA and UMD precipitation/cloud recruitment source gaps. Their notes and original values remain visible and unchanged. The added IUGG record separately preserves conflicting original dates while identifying the detailed author instructions used for its canonical cutoff. The [full matrix and evidence](docs/verification-audit-2026-11-17.md) and [machine-readable audit](docs/verification-audit-2026-11-17.json) distinguish attempted checks from successful verification.

Earlier audits and removals remain documented in their dated reports and Git history. The 4 November work covered the then-current 107-entry catalog, and the 5 November discovery passes brought it to 135 records; those discoveries did not reverify the full catalog. The 21 entries removed at the owner's request in October were unconfirmed, not necessarily closed or fabricated. Their originals remain in the [pre-removal Git snapshot](https://github.com/yingjinghuang/geo-deadlines/tree/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities), with the [archived rationale](docs/verification-audit-2026-10-25.md). Reintroduction requires new original-source verification.

## Calendar feeds

The deployment generates static iCalendar feeds for:

- [All deadlines](https://yingjinghuang.github.io/geo-deadlines/calendar/all.ics)
- [Conferences](https://yingjinghuang.github.io/geo-deadlines/calendar/conferences.ics)
- [Special issues](https://yingjinghuang.github.io/geo-deadlines/calendar/special-issues.ics)
- [Workshops](https://yingjinghuang.github.io/geo-deadlines/calendar/workshops.ics)
- [Positions](https://yingjinghuang.github.io/geo-deadlines/calendar/positions.ics)

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
- Preserve historical conferences, workshops and special issues for reference; prune confirmed closed recruitment positions from active YAML after recording the evidence and Git history.
- Mark future calls as `TBD` when an event is announced but its submission schedule is not.
- Update `last_verified` whenever an entry is checked against its source.

## Inspiration

GeoDeadlines is inspired by community deadline trackers such as [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines), while adapting the model for the broader Geography / GIScience / GeoAI ecosystem and for journal special issues as first-class entries.

## License

[MIT](LICENSE)
