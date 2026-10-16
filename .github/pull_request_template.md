## What changed

<!-- Describe the opportunity or deadline update. -->

## Source

<!-- Link to an official source whenever possible. -->

## Refresh scope and official-source review

- [ ] Change classified as: one-entry correction / partial refresh / **full-catalog refresh**.
- [ ] I reviewed official sources rather than only the existing YAML, search snippets, or cached content.
- [ ] For full-catalog refresh: attach the item-by-item audit and state **reviewed / total** plus unresolved entries.
- [ ] For partial refresh: link the open full-catalog audit queue; do not claim all opportunities were checked.
- [ ] Expired and rolling opportunities were not assumed closed without official confirmation.
- [ ] Every changed `last_verified` value corresponds to a genuine same-day source review.
- [ ] I checked extensions, timing precision, and position review/priority dates versus hard close dates.

## Checklist

- [ ] Datetimes have an explicit offset when the official call gives a time; date-only deadlines have `precision: date`, otherwise use `TBD`.
- [ ] Topics come from `src/data/topics.yml`.
- [ ] `last_verified` was changed **only for entries actually reviewed**.
- [ ] `npm run validate`, `npm run audit:freshness`, `npm run check`, and `npm test` pass.
