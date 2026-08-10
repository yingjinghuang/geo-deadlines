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
9. Run `npm run validate`, `npm run check`, `npm test`, and `npm run build`.
10. Open a pull request and explain the source of the change.

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

If you do not want to edit YAML, use the **Add a deadline** issue form. Please do not submit scraped or inferred dates without an official source.
