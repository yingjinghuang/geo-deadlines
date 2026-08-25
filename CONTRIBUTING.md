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
