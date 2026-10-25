# GeoDeadlines official-source re-verification — 25 October 2026

> **25 October source audit and subsequent owner-directed catalog pruning.** The 21 entries whose current official evidence remained inconclusive were removed from the *live* dataset on request, **not** certified as closed or false. Their original YAMLs are preserved at the [pre-pruning Git snapshot](https://github.com/yingjinghuang/geo-deadlines/tree/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities). Do not advance `last_verified` simply because a URL responds 403/429, an application review date has passed, or two official sources disagree.

## Summary

- **Original full-review baseline:** 125 YAML records generally reviewed on 16 October 2026, including two special issues still bearing the date 11 August 2026.
- **After verified job-closure cleanup:** 122 live entries, of which 101 had source-review dates refreshed on 25 October and 21 remained unresolved.
- **Owner-directed removal of all 21 uncertain records:** the current live catalog now has **101 entries**: **29 conferences, 35 positions, 36 special issues, 1 workshop**.
- **Removed by category:** 3 recruitment positions, 2 conferences, and 16 journal special issues. Deletion reflects **insufficient current evidence**, not proof of cancellation, closure, or fraud.
- **Retained records:** 101/101 have `last_verified: "2026-10-25"` from the 25 October source review. This documents source-check timing and is **not** a guarantee that the underlying opportunity remains open forever.
- **Policy:** all types become stale after more than **3 days** without source review; the scheduled GitHub Actions process detects staleness but never falsifies a new verification timestamp.

## Confirmed material changes

1. Removed NUS Urban Flood GeoAI Research Assistant after original lab marked it no longer accepting applications (commit `e41951160b4fae71639de0e59e959f189574e99c`).
2. Removed HKU Tenure-Track Assistant Professor in Physical Geography (536999) after the official recruitment portal confirmed closure following 30 September, despite cached Apply now text (commit `5ad609ebe799`).
4. Removed Utrecht AI-driven Urban (Re)Design postdoc after official page went 404 following the final cutoff and no job appeared on the Utrecht live vacancies page (commit `4b256ebc488d78eff986e4ba5dfc12a92f5dee66`).
5. Corrected Cal Poly Pomona UAS/GIS assistant professor first-consideration from 15 Oct to **31 Oct 2026**. This is a **priority review**, not the final closure.
6. Corrected AAG 2027 abstract deadline from 15 Oct to **22 Oct 2026** after the organizers announced the extension; removed unsupported separate panelist deadline.
7. Rechecked AGILE 2027 against the [organizer CFP](https://agile-gi.eu/conference-2027/call-for-papers-2027) and its [important-dates graphic](https://agile-gi.eu/images/conferences/2027/documents/Pictures/ImportantDates.png): full paper 10 Jan, short paper/poster 12 Feb 2027.
8. Rechecked GeoAI'26 against [ORNL CFP](https://events.ornl.gov/acmsigspatial-geoai2026/): 21 Aug original paper, 18 Sep notification, 4 Oct camera ready, 3 Nov workshop.
9. Rechecked two historical CEUS CFPs against the original editors' pages: [Open Urban Data Science](https://ual.sg/post/2025/05/16/call-for-papers-open-urban-data-science/) (31 May 2026) and [Digital Twins and AI for Healthy and Sustainable Cities](https://www.nickmalleson.co.uk/2025/04/CEUS-SI-DT_AI.html) (30 Nov 2025).
10. Confirmed ongoing explicitly listed recruitment directly on the original PI pages for HKUST(GZ) 3D GIS and Texas Tech AI/EO PhD.

## Further direct and corroborated checks

- ISTA cryosphere postdoc was refreshed to 25 October because the employer still shows the exact position among current openings despite its 9 October historical application deadline. The original old date remains; applying late is not guaranteed.
- ICC 2027 was refreshed to 25 October after checking official host conference materials. The previously recorded 20 November full-paper and 1 December abstract deadlines remain.

- Subsequent official-source checks refreshed the UCLouvain, UMD ESSIC, UIUC, UMD coastal, University of Ottawa, USask and Virginia Tech recruitment entries. Three IJGI special issues were checked through the publisher's current live special-issues index, which explicitly confirmed title, editors, deadlines and open status despite individual details being rate-limited.

## Archived and removed because official-source verification remained unresolved

These 21 were individually examined in the 25 October review but lacked current authoritative confirmation. At the user's direction, they have since been **deleted from the live YAML directory** while their original contents remain accessible through permanent Git snapshot links below. None of these removals should be construed as proof that the opportunities did not exist or are definitively closed.

### Positions — 3 removed

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`mcgill-geography-health-sustainability-assistant-professor-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/positions/mcgill-geography-health-sustainability-assistant-professor-2026.yml) | 16 Oct official cutoff passed; McGill Workday live vacancy status not independently retrievable. |
| 2 | [`mit-senseable-seoul-postdoc-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/positions/mit-senseable-seoul-postdoc-2026.yml) | Project home page does not directly establish current named postdoc intake/status. |
| 3 | [`nanjing-geography-ocean-science-faculty-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/positions/nanjing-geography-ocean-science-faculty-2026.yml) | Original Nanjing recruitment notice and current university faculty vacancy index are readable. Both show a passed 15 October deadline but the index still offers an Apply Now action and the announcement explicitly permits a conditional extension. No revised closing date or confirmed acceptance can be established, so the old verification timestamp remains. |

### Conferences — 2 removed

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`geoai-2028`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/conferences/geoai-2028.yml) | Organizer announcement establishes future conference but no directly readable current CFP/deadline. |
| 2 | [`wacv-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/conferences/wacv-2027.yml) | Official Dates page says 14 Oct decisions; official Author Guides/CFP say 9 Oct. Unresolved organizer contradiction. |

### Special issues — 16 removed

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`applied-geography-uneven-green-transition-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/applied-geography-uneven-green-transition-2026.yml) | Guest-editor invited-only 30 Nov manuscript vs Elsevier indexed 15 Sep general cutoff; official stage conflict. |
| 2 | [`ceus-geoai-fire-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/ceus-geoai-fire-2026.yml) | Original editor and publisher index historically agree 31 Dec, but dedicated current Elsevier issue returns HTTP 403. |
| 3 | [`cities-climate-neutral-2030-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-climate-neutral-2030-2026.yml) | Dedicated Elsevier publisher detail inaccessible (403); old date historical. |
| 4 | [`cities-evolution-urban-spatial-structure-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-evolution-urban-spatial-structure-2027.yml) | Dedicated Elsevier publisher detail inaccessible (403); future cutoff not independently rechecked. |
| 5 | [`cities-politics-spatial-inclusion-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-politics-spatial-inclusion-2026.yml) | Historic date supported by editor/community publication, but up-to-date original publisher CFP unavailable. |
| 6 | [`cities-smart-cities-sustainability-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-smart-cities-sustainability-2026.yml) | Publisher dedicated CFP HTTP 403; historic cutoff has elapsed. |
| 7 | [`cities-spatial-governance-urban-agglomeration-2025`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-spatial-governance-urban-agglomeration-2025.yml) | Historical 31 Dec 2025 cutoff has only secondary support, no publisher/editor final notice; last_verified remains 11 Aug. |
| 8 | [`cities-urban-regeneration-mobility-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/cities-urban-regeneration-mobility-2026.yml) | Publisher CFP inaccessible (403); historical date partly supported by university bulletin, not a current open call. |
| 9 | [`geodata-ai-enhanced-geospatial-big-data-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/geodata-ai-enhanced-geospatial-big-data-2026.yml) | Dedicated publisher CFP inaccessible (403) and 30 Sep 2026 cutoff lacks enough primary evidence; last_verified remains 11 Aug. |
| 10 | [`information-geography-multimodal-geoai-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/information-geography-multimodal-geoai-2027.yml) | Dedicated Elsevier publisher current CFP HTTP 403, despite original editors' historical announcement. |
| 11 | [`jag-resource-constrained-multimodal-foundation-models-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/jag-resource-constrained-multimodal-foundation-models-2027.yml) | Exact publisher CFP detail inaccessible; current publisher index alone was insufficient to re-confirm any extension. |
| 12 | [`rse-geospatial-foundation-models-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/rse-geospatial-foundation-models-2026.yml) | NASA/editor original 30 Jun historical date confirmed; possible extension not established on blocked current publisher page. |
| 13 | [`rse-leaf-traits-ecosystem-function-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/rse-leaf-traits-ecosystem-function-2027.yml) | NASA JPL original announces 1 Jan 2027; current Elsevier specific CFP detail is inaccessible for extension check. |
| 14 | [`scs-heat-resilience-health-equity-2027`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/scs-heat-resilience-health-equity-2027.yml) | Publisher dedicated issue blocked (403); cannot exclude later extension. |
| 15 | [`scs-sustainability-health-equity-ai-wellbeing-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/scs-sustainability-health-equity-ai-wellbeing-2026.yml) | Original guest editor announced 31 Dec; dedicated latest publisher page blocked (403). |
| 16 | [`tgis-ethical-explainable-geoai-2026`](https://github.com/yingjinghuang/geo-deadlines/blob/61bd98cf3c40a3af584da28eec58d5cdb28f92b7/src/data/opportunities/special-issues/tgis-ethical-explainable-geoai-2026.yml) | Legacy Wiley CFP URL/index cannot confirm an accessible current issue status or extension. |

## Evidence hierarchy and next actions

- Prefer a currently opened first-party conference/position/publisher page; an original named editor's personally authored call and an originating employer/lab notice can also support a published deadline.
- For the removed 403/429 category, consult the archival snapshot and revisit the exact dedicated publisher CFP **only before proposing restoration**. Index snippets or stale mirrors alone are not evidence of a newly extended deadline.
- For the 2026/2025 historical specials, do **not** imply that the journal is still accepting submissions. A verified historical deadline is different from present submission access.
- For jobs with elapsed dates, distinguish **review/first-consideration** from final application closure. Close only with sufficient direct employer evidence, never simply because a displayed date elapsed.
- WACV's 9 Oct vs 14 Oct decision conflict and Applied Geography's invited/manuscript-stage conflict are documented in the archive. Neither entry remains in the live catalog. Restore only after sufficient source reconciliation.
- The 21-item source uncertainty queue [issue #13](https://github.com/yingjinghuang/geo-deadlines/issues/13) was resolved by owner-directed live-catalog removal, not retrospective verification. The earlier four-exception snapshot remains [issue #12](https://github.com/yingjinghuang/geo-deadlines/issues/12). New stale records will open a new tracking issue.
- Before restoring a removed record, retrieve its YAML from the immutable Git snapshot, confirm current official evidence and all dates, then run `npm run audit:freshness`, `npm run validate`, `npm run check`, and `npm test`. The freshness test expectations reflect the 3-day limit.

**Audit prepared on 25 October 2026, Europe/Vienna.**
