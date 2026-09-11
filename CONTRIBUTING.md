# Contributing

Thank you for improving GeoDeadlines. Accurate sources and honest precision matter more than dataset size.

1. Fork the repository and create a branch.
2. Add or edit a YAML file under `src/data/opportunities/`.
3. Use a lowercase filename slug such as `venue-name-2027.yml`.
4. Use topic IDs from `src/data/topics.yml`.
5. If the official source gives an exact time and timezone, store an ISO 8601 datetime with an explicit offset. Store AoE as `23:59:00-12:00`.
6. If the official source gives only a calendar date, do **not** invent a time or timezone. Store `datetime: "YYYY-MM-DD"`, `precision: date`, and `timezone: null`.
7. Use `TBD` when the submission date itself has not been announced.
8. Include an official source and update `last_verified`.
9. For in-person or hybrid conferences/workshops, include city/country information. If reliable venue coordinates are known, add `latitude` and `longitude` together so the event can be mapped precisely; otherwise GeoDeadlines may use a city-centre fallback.
10. Run `npm run validate`, `npm run check`, `npm test`, and `npm run build`.
11. Open a pull request and explain the source of the change.

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
