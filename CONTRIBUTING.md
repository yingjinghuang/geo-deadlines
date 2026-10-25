# Contributing

Thank you for improving GeoDeadlines. Accurate sources and honest precision matter more than dataset size.

1. Fork the repository and create a branch.
2. Add or edit a YAML file under `src/data/opportunities/`.
3. Use a lowercase filename slug such as `venue-name-2027.yml`.
   - **Conference and workshop naming:** always supply both `short_name` (the recognized acronym + year, e.g. `SSTD 2027`) and `title` (the full official event name, e.g. `International Symposium on Spatial and Temporal Data`). The list/detail/map UI displays both. A branded name with no distinct acronym (e.g. `Geo Week 2027`) may use the same value for both; the UI avoids repeating it. Do not invent an acronym or expand an organizer's proper name inaccurately. Avoid using only the acronym as `title`.
4. Use topic IDs from `src/data/topics.yml`.
5. If the official source gives an exact time and timezone, store an ISO 8601 datetime with an explicit offset. Store AoE as `23:59:00-12:00`.
6. If the official source gives only a calendar date, do **not** invent a time or timezone. Store `datetime: "YYYY-MM-DD"`, `precision: date`, and `timezone: null`.
7. Use `TBD` when the submission date itself has not been announced.
8. Include an official source and update `last_verified`.
9. For in-person or hybrid conferences/workshops, include city/country information. If reliable venue coordinates are known, add `latitude` and `longitude` together so the event can be mapped precisely; otherwise GeoDeadlines may use a city-centre fallback.
10. Run `npm run validate`, `npm run check`, `npm test`, and `npm run build`.
11. Open a pull request and explain the source of the change.

## Live recruitment pruning (positions only)

A user-facing recruitment card should represent an **actionable** position. Remove a `src/data/opportunities/positions/*.yml` file when the employer/applicant portal explicitly reports that the vacancy is **closed**, **expired**, **unavailable**, or **no longer accepting applications**. Also remove a posting with an unambiguous final deadline in the past when it has disappeared from the employer's current applicant system and no replacement or extension can be found. Preserve the reason and official evidence in a dated maintenance report and in Git history before removal. **A solitary 403 / broken link is not enough**: first check the employer's current recruiting index and whether the vacancy moved to a new identifier.

Do **not** equate an elapsed `review begins`, `first consideration`, `priority review`, or soft deadline with hiring closure. Positions still explicitly `open until filled` or with active official application portals should remain in the live catalog and be rechecked. This pruning rule does not apply to conferences, workshops, or special issues, whose historical calls should still be retained.

See [the 16 October 2026 live-catalog cleanup report](docs/active-catalog-maintenance-2026-10-16.md) for closure examples, exact removal evidence, and before/after coverage.

## Mandatory full-catalog refresh protocol

A refresh is **complete only when every tracked opportunity has an item-by-item audit result**, including expired entries, rolling positions, TBD calls, and all four collections. Updating a subset is a **partial refresh** and must never be described as complete.

1. At the start, run `npm run audit:freshness` and enumerate every `src/data/opportunities/**/*.yml` file. Do not quietly exclude already-expired records: they may have extended or reopened.
2. For each entry, visit its official organizer, university hiring portal, or publisher call (not just a cached search result). Verify opening/closure, all submission/application milestones, deadline extensions, timezones, publication/event details, and continuing relevance.
3. Record each entry as **verified unchanged**, **verified corrected**, **closed or archived**, or **unresolved** (access denied, no authoritative information, conflicting sources). Unresolved entries remain in the queue and retain their previous verification date.
4. Only after actual source review, update `last_verified` to today's date, and fix deadlines and notes as necessary. Do not conflate an elapsed *review/priority date* with a hiring closure. A passed deadline is not proof that a search is closed.
5. Continue with a separate discovery pass covering faculty recruiting sites, public PI/lab announcements and every journal in `src/data/journal-watchlist.yml`. New entries do not count as re-verification of existing entries.
6. Publish the audit matrix/checklist, list every unresolved source, and report `reviewed / total`. No `138/138 verified` claim is permitted while any item is unresolved. Preserve history rather than deleting old calls.
7. Validate the changed records and check GitHub Actions deployment before describing the refresh as finished.

**Maintenance cadence**: all types should be source-reviewed at least every 3 days, with additional checks near critical deadlines. The scheduled [freshness workflow](.github/workflows/audit-freshness.yml) runs daily, opens/updates a GitHub issue for stale entries, and never silently edits `last_verified`. The CLI report measures timestamp age only; it cannot certify official-page accuracy. A periodic audit is not a replacement for the full-catalog procedure on substantive refreshes.

## Evidence sufficiency for deadline rechecks

An **official publisher-hosted CFP index/list** is first-party evidence of a date when it explicitly identifies the **matching special-issue title, journal, named editors and submission deadline**. It remains useful even when the dedicated issue detail is blocked by HTTP 403. An original named guest editor's own authored CFP and an institutional original announcement can likewise verify an announced deadline. Record the exact inspected URL and scope of evidence in the item note. **Do not confuse a live publisher index with a generic search-engine snippet**, and do not claim a current submission portal is open merely because an archived date was confirmed.

For expired calls, a named journal's published issue plus an institutional historic deadline notice can support a qualified historical listing, but the note must say if the publisher's exact original final cutoff was not independently available. For conflicts between multiple original sources, record both facts and any submission-stage distinctions rather than inventing a reconciliation. `last_verified` represents the date the cited original evidence was rechecked, **not proof of an unchanged future deadline or open submission status**. See [16 October evidence recheck](docs/evidence-followup-2026-10-16.md).

## Active opportunity re-verification

Every substantive GeoDeadlines refresh must re-check **all currently active tracked opportunities**, not only discover new ones. This applies to conferences, workshops, special issues, positions, and other deadline-bearing entries.

For every active opportunity:

1. Re-open the best available official source and verify the current deadline, status, and any relevant milestone dates.
2. Treat stored deadlines as provisional until re-verified. Organizers frequently extend, postpone, reopen, or convert deadlines to rolling review.
3. If the official source announces an extension or other change, update the stored deadline to the latest official value in the same refresh.
4. Preserve exact time/timezone precision only when the official source provides it; do not infer missing precision while updating an extended deadline.
5. Update `last_verified` **only when the official source was actually reviewed in that refresh**. Do not bulk-bump verification dates for untouched entries.
6. If an official page has disappeared or conflicts with another source, do not silently guess. Keep the last verified value only when appropriate and flag the ambiguity for follow-up.
7. Secondary sources such as GISphere, mailing lists, social posts, newsletters, and search results are useful for discovering extensions, but the canonical deadline should come from an official source whenever one exists.

An opportunity refresh is therefore both a **discovery pass** and an **active-deadline audit**.

## Faculty-position discovery

Faculty hiring is easy to undercount if discovery relies only on titles containing `GIS`, `GeoAI`, or `remote sensing`. Every substantive position refresh should therefore include a dedicated faculty sweep.

1. Search relevant departments and university faculty portals, not only aggregator feeds. High-value department families include Geography, Geomatics, GIScience, Geospatial/Data Science, Remote Sensing/Earth Observation, Urban/Regional Planning, Environmental Science, and closely related interdisciplinary units.
2. Search rank terms including Assistant Professor, Associate Professor, tenure-track, tenure-stream, and equivalent international academic titles. Include research-active lecturer or academic posts when they are materially comparable.
3. Do **not** infer career stage from region-dependent titles alone. `Lecturer`, `Senior Lecturer`, `Research Fellow`, `Senior Scientist`, and similar labels can map to faculty, postdoc, or staff categories depending on the institution and country. Check the official contract classification, appointment track, and eligibility requirements; when ambiguous, set `position_category` explicitly from the official source rather than relying on title inference.
4. Evaluate the full job description, not just the title. Searches titled Physical Geography, Climate Science, Urban Sustainability, Global Environmental Change, or similar can be core GeoDeadlines opportunities when the description materially involves GIScience, spatial modelling/statistics, Earth observation, remote sensing, GeoAI, mobility, or geospatial data science.
5. Use aggregators such as GISphere only as discovery feeders; no single feed should be treated as complete for faculty hiring.
6. Prefer official university HR, academic-personnel, department, or faculty-recruitment pages as canonical sources.
7. For `review begins` or `full consideration` postings that remain open until filled, record that review/full-consideration date and state explicitly in `note` that the search remains open until filled.
8. Keep broad climate/environment faculty searches as `adjacent` unless their methodological, departmental, or research fit is clearly geospatial.

## Public social and lab-announcement discovery

Many PhD and postdoc openings are announced first or only through PI/lab channels, especially rolling or email-to-apply searches. Every substantive position refresh should therefore include a targeted sweep of public, indexable social and lab announcements in addition to university job portals.

1. Search public LinkedIn posts/profiles, lab websites, faculty opportunity pages, department news, and similar sources using combinations such as `GeoAI PhD`, `GIScience PhD`, `remote sensing postdoc`, `Earth observation postdoc`, `spatial data science`, `urban AI`, `mobility`, and `geospatial` plus rank terms.
2. Treat social posts as **discovery signals**, not authoritative status pages. After finding a lead, check the current university, department, lab, or PI page whenever available.
3. If a social post says `rolling`, `open until filled`, or gives an old review date, re-check whether the official/lab page still shows the search as open. If the official page says the position is closed, the official page wins even when the social post remains indexed.
4. A PI/lab announcement may be used as the primary announcement source when no central HR posting exists, provided the PI's institutional identity, research fit, application route, and opportunity details can be independently tied to the institution.
5. For genuinely rolling searches with no final closing date, keep the opportunity active with `datetime: "TBD"` and explicitly state `rolling until filled` in the deadline note. Do not invent a replacement deadline from an old review date.
6. Do not infer that a recently indexed or reshared social post is newly opened. Check the underlying posting date and any official close/review status before adding it.

## Journal discovery sweep

`src/data/journal-watchlist.yml` is the source of truth for journals that should be checked during every substantive GeoDeadlines data refresh. The watchlist is discovery-only and is intentionally outside `src/data/opportunities/`, so ordinary journal homepages never appear as deadline cards.

When refreshing journal data:

1. Review **every journal in `src/data/journal-watchlist.yml`** for current Special Issues, Article Collections, and Calls for Papers.
2. Prefer the official publisher or journal page. Search engines, mailing lists, social posts, and curated lists may be used to discover a call, but not as the canonical source when an official page exists.
3. Add or update an opportunity only when the call is materially relevant to GeoDeadlines and has a concrete submission deadline, or when an important announced call explicitly warrants a `TBD` placeholder.
4. Do not create permanent entries for ordinary rolling journal submissions with no deadline.
5. Re-check already tracked active calls from the scanned journals; correct changed deadlines and refresh `last_verified` only when the official source has actually been reviewed.
6. Update the watchlist itself when a journal becomes a stable high-value source of relevant calls, rather than relying on memory in later refreshes.

Example exact deadline:

```yaml
datetime: "2027-08-22T23:59:00-12:00"
timezone: "AoE"
```

Example date-only deadline:

```yaml
datetime: "2027-08-22"
precision: date
timezone: null
```

Example map-ready location:

```yaml
location:
  mode: in_person
  city: "Vienna"
  country: "Austria"
  country_code: "AT"
  venue: "Example Conference Center"
  latitude: 48.2082
  longitude: 16.3738
```

If you do not want to edit YAML, use the **Add a deadline** issue form. Please do not submit scraped or inferred dates without an official source.
