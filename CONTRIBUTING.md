# Contributing

Thank you for improving GeoDeadlines. Accurate sources and unambiguous timezone information matter more than dataset size.

1. Fork the repository and create a branch.
2. Add or edit a YAML file under `src/data/opportunities/`.
3. Use a lowercase filename slug such as `venue-name-2027.yml`.
4. Use topic IDs from `src/data/topics.yml`.
5. Store every known deadline as ISO 8601 with an explicit offset. Store AoE as `23:59:00-12:00`.
6. Include an official source and update `last_verified`.
7. Run `npm run validate`, `npm run check`, `npm test`, and `npm run build`.
8. Open a pull request and explain the source of the change.

If you do not want to edit YAML, use the **Add a deadline** issue form. Please do not submit scraped or inferred dates without an official source.
