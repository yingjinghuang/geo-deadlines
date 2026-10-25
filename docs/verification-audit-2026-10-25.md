# GeoDeadlines official-source re-verification — 25 October 2026

> **Live follow-up audit, not a blanket certification.** Each remaining old date is intentional. Do not change `last_verified` without current organizer, employer, journal, original named guest-editor, or responsible institutional evidence. A URL responding HTTP 403/429, a passed priority-review date, a search result alone, or contradictory official information is **not** enough to declare a listing verified or closed.

## Summary

- **Baseline:** 125 YAML opportunity entries, generally last reviewed on 16 October 2026; two special issues still dated 11 August 2026.
- **After confirmed closure cleanup:** **123** live entries (two deleted closed research jobs, originals retained in Git history).
- **Official-source review refreshed today:** **91/123** have `last_verified: "2026-10-25"`; this certifies **source review performed** and retained date evidence, **not** that every submission remains open.
- **Reviewed but still unresolved/stale:** **32/123** retain older `last_verified` values: **11 positions, 2 conferences, 19 special issues**. Of these, 32 date to 16 October; 2 to 11 August.
- **Other type:** 1 workshop (GeoAI'26), checked against the original ORNL organizer page on 25 October.
- **Policy:** a record is stale if last reviewed **more than 3 days ago** for **all** opportunity types. Daily GitHub Actions writes the stale issue; it **does not auto-advance** verification dates.

## Confirmed material changes

1. Removed NUS Urban Flood GeoAI Research Assistant after original lab marked it no longer accepting applications (commit `e41951160b4fae71639de0e59e959f189574e99c`).
2. Removed Utrecht AI-driven Urban (Re)Design postdoc after official page went 404 following the final cutoff and no job appeared on the Utrecht live vacancies page (commit `4b256ebc488d78eff986e4ba5dfc12a92f5dee66`).
3. Corrected Cal Poly Pomona UAS/GIS assistant professor first-consideration from 15 Oct to **31 Oct 2026**. This is a **priority review**, not the final closure.
4. Corrected AAG 2027 abstract deadline from 15 Oct to **22 Oct 2026** after the organizers announced the extension; removed unsupported separate panelist deadline.
5. Rechecked AGILE 2027 against the [organizer CFP](https://agile-gi.eu/conference-2027/call-for-papers-2027) and its [important-dates graphic](https://agile-gi.eu/images/conferences/2027/documents/Pictures/ImportantDates.png): full paper 10 Jan, short paper/poster 12 Feb 2027.
6. Rechecked GeoAI'26 against [ORNL CFP](https://events.ornl.gov/acmsigspatial-geoai2026/): 21 Aug original paper, 18 Sep notification, 4 Oct camera ready, 3 Nov workshop.
7. Rechecked two historical CEUS CFPs against the original editors' pages: [Open Urban Data Science](https://ual.sg/post/2025/05/16/call-for-papers-open-urban-data-science/) (31 May 2026) and [Digital Twins and AI for Healthy and Sustainable Cities](https://www.nickmalleson.co.uk/2025/04/CEUS-SI-DT_AI.html) (30 Nov 2025).
8. Confirmed ongoing explicitly listed recruitment directly on the original PI pages for HKUST(GZ) 3D GIS and Texas Tech AI/EO PhD.

## Two additional direct checks

- ISTA cryosphere postdoc was refreshed to 25 October because the employer still shows the exact position among current openings despite its 9 October historical application deadline. The original old date remains; applying late is not guaranteed.
- ICC 2027 was refreshed to 25 October after checking official host conference materials. The previously recorded 20 November full-paper and 1 December abstract deadlines remain.

## Pending official-source verification

These were **examined**, but no fresh authoritative conclusion could be reached today. The stale signal must remain visible.

### Positions — 11 pending

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`hku-physical-geography-ai-assistant-professor-2026`](../src/data/opportunities/positions/hku-physical-geography-ai-assistant-professor-2026.yml) | Official HKU portal lists 30 Sep as closing but still renders Apply now and review-until-filled text; live application eligibility ambiguous. |
| 2 | [`mcgill-geography-health-sustainability-assistant-professor-2026`](../src/data/opportunities/positions/mcgill-geography-health-sustainability-assistant-professor-2026.yml) | 16 Oct official cutoff passed; McGill Workday live vacancy status not independently retrievable. |
| 3 | [`mit-senseable-seoul-postdoc-2026`](../src/data/opportunities/positions/mit-senseable-seoul-postdoc-2026.yml) | Project home page does not directly establish current named postdoc intake/status. |
| 4 | [`nanjing-geography-ocean-science-faculty-2026`](../src/data/opportunities/positions/nanjing-geography-ocean-science-faculty-2026.yml) | Original Nanjing recruitment notice resolves unreliably to general vacancies; current posting status unclear. |
| 5 | [`uclouvain-physical-environment-climate-geography-academic-2026`](../src/data/opportunities/positions/uclouvain-physical-environment-climate-geography-academic-2026.yml) | Generic employer openings index does not establish the exact position's current status. |
| 6 | [`uiuc-geoai-geospatial-computing-phd-2026`](../src/data/opportunities/positions/uiuc-geoai-geospatial-computing-phd-2026.yml) | Lab PI original recruitment page is intermittently inaccessible; cannot establish renewed call. |
| 7 | [`umd-coastal-geomorphology-remote-sensing-phd-2026`](../src/data/opportunities/positions/umd-coastal-geomorphology-remote-sensing-phd-2026.yml) | Faculty biography is not direct current evidence that this specific PhD place is recruiting. |
| 8 | [`umd-satellite-remote-sensing-research-position-2026`](../src/data/opportunities/positions/umd-satellite-remote-sensing-research-position-2026.yml) | Original ESSIC employer posting fails; 30 Sep historical date alone not evidence of active/closed state. |
| 9 | [`uottawa-urban-sustainability-assistant-professor-2026`](../src/data/opportunities/positions/uottawa-urban-sustainability-assistant-professor-2026.yml) | Official Workday vacancy not reliably retrievable; 16 Oct prior cutoff elapsed. |
| 10 | [`usask-gig-cities-geoai-urban-heat-phd-2026`](../src/data/opportunities/positions/usask-gig-cities-geoai-urban-heat-phd-2026.yml) | Original lab page identifies the lab but not the specific PhD opening. |
| 11 | [`virginia-tech-geoai-phd-2026`](../src/data/opportunities/positions/virginia-tech-geoai-phd-2026.yml) | PI and GeoCompute Lab websites confirm research but no present direct PhD recruitment notice. |

### Conferences — 2 pending

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`geoai-2028`](../src/data/opportunities/conferences/geoai-2028.yml) | Organizer announcement establishes future conference but no directly readable current CFP/deadline. |
| 2 | [`wacv-2027`](../src/data/opportunities/conferences/wacv-2027.yml) | Official Dates page says 14 Oct decisions; official Author Guides/CFP say 9 Oct. Unresolved organizer contradiction. |

### Special issues — 19 pending

| # | YAML record | Why date was **not** advanced |
|---|---|---|
| 1 | [`applied-geography-uneven-green-transition-2026`](../src/data/opportunities/special-issues/applied-geography-uneven-green-transition-2026.yml) | Guest-editor invited-only 30 Nov manuscript vs Elsevier indexed 15 Sep general cutoff; official stage conflict. |
| 2 | [`ceus-geoai-fire-2026`](../src/data/opportunities/special-issues/ceus-geoai-fire-2026.yml) | Original editor and publisher index historically agree 31 Dec, but dedicated current Elsevier issue returns HTTP 403. |
| 3 | [`cities-climate-neutral-2030-2026`](../src/data/opportunities/special-issues/cities-climate-neutral-2030-2026.yml) | Dedicated Elsevier publisher detail inaccessible (403); old date historical. |
| 4 | [`cities-evolution-urban-spatial-structure-2027`](../src/data/opportunities/special-issues/cities-evolution-urban-spatial-structure-2027.yml) | Dedicated Elsevier publisher detail inaccessible (403); future cutoff not independently rechecked. |
| 5 | [`cities-politics-spatial-inclusion-2026`](../src/data/opportunities/special-issues/cities-politics-spatial-inclusion-2026.yml) | Historic date supported by editor/community publication, but up-to-date original publisher CFP unavailable. |
| 6 | [`cities-smart-cities-sustainability-2026`](../src/data/opportunities/special-issues/cities-smart-cities-sustainability-2026.yml) | Publisher dedicated CFP HTTP 403; historic cutoff has elapsed. |
| 7 | [`cities-spatial-governance-urban-agglomeration-2025`](../src/data/opportunities/special-issues/cities-spatial-governance-urban-agglomeration-2025.yml) | Historical 31 Dec 2025 cutoff has only secondary support, no publisher/editor final notice; last_verified remains 11 Aug. |
| 8 | [`cities-urban-regeneration-mobility-2026`](../src/data/opportunities/special-issues/cities-urban-regeneration-mobility-2026.yml) | Publisher CFP inaccessible (403); historical date partly supported by university bulletin, not a current open call. |
| 9 | [`geodata-ai-enhanced-geospatial-big-data-2026`](../src/data/opportunities/special-issues/geodata-ai-enhanced-geospatial-big-data-2026.yml) | Dedicated publisher CFP inaccessible (403) and 30 Sep 2026 cutoff lacks enough primary evidence; last_verified remains 11 Aug. |
| 10 | [`ijgi-living-spaces-2026`](../src/data/opportunities/special-issues/ijgi-living-spaces-2026.yml) | MDPI current dedicated special-issue page returned HTTP 429 (rate limit). |
| 11 | [`ijgi-llm4gis-2026`](../src/data/opportunities/special-issues/ijgi-llm4gis-2026.yml) | MDPI current dedicated special-issue page returned HTTP 429 (rate limit). |
| 12 | [`ijgi-urban-digital-twins-2026`](../src/data/opportunities/special-issues/ijgi-urban-digital-twins-2026.yml) | MDPI current dedicated special-issue page returned HTTP 429 (rate limit). |
| 13 | [`information-geography-multimodal-geoai-2027`](../src/data/opportunities/special-issues/information-geography-multimodal-geoai-2027.yml) | Dedicated Elsevier publisher current CFP HTTP 403, despite original editors' historical announcement. |
| 14 | [`jag-resource-constrained-multimodal-foundation-models-2027`](../src/data/opportunities/special-issues/jag-resource-constrained-multimodal-foundation-models-2027.yml) | Exact publisher CFP detail inaccessible; current publisher index alone was insufficient to re-confirm any extension. |
| 15 | [`rse-geospatial-foundation-models-2026`](../src/data/opportunities/special-issues/rse-geospatial-foundation-models-2026.yml) | NASA/editor original 30 Jun historical date confirmed; possible extension not established on blocked current publisher page. |
| 16 | [`rse-leaf-traits-ecosystem-function-2027`](../src/data/opportunities/special-issues/rse-leaf-traits-ecosystem-function-2027.yml) | NASA JPL original announces 1 Jan 2027; current Elsevier specific CFP detail is inaccessible for extension check. |
| 17 | [`scs-heat-resilience-health-equity-2027`](../src/data/opportunities/special-issues/scs-heat-resilience-health-equity-2027.yml) | Publisher dedicated issue blocked (403); cannot exclude later extension. |
| 18 | [`scs-sustainability-health-equity-ai-wellbeing-2026`](../src/data/opportunities/special-issues/scs-sustainability-health-equity-ai-wellbeing-2026.yml) | Original guest editor announced 31 Dec; dedicated latest publisher page blocked (403). |
| 19 | [`tgis-ethical-explainable-geoai-2026`](../src/data/opportunities/special-issues/tgis-ethical-explainable-geoai-2026.yml) | Legacy Wiley CFP URL/index cannot confirm an accessible current issue status or extension. |

## Evidence hierarchy and next actions

- Prefer a currently opened first-party conference/position/publisher page; an original named editor's personally authored call and an originating employer/lab notice can also support a published deadline.
- In the 403/429 category, revisit **the exact named dedicated CFP**. Publisher site browsing indexes and stale mirrors should not be treated as proof of a newly extended deadline.
- For the 2026/2025 historical specials, do **not** imply that the journal is still accepting submissions. A verified historical deadline is different from present submission access.
- For jobs with elapsed dates, distinguish **review/first-consideration** from final application closure. Close only with sufficient direct employer evidence, never simply because a displayed date elapsed.
- Keep WACV's 9 Oct vs 14 Oct decision conflict and Applied Geography's invited/manuscript-stage conflict explicitly flagged until the authoritative issuers reconcile them.
- The daily automated queue is [issue #13](https://github.com/yingjinghuang/geo-deadlines/issues/13). Historical four-evidence-exception issue is [#12](https://github.com/yingjinghuang/geo-deadlines/issues/12).
- Run `npm run audit:freshness`, `npm run validate`, `npm run check`, and `npm test` after source changes; the freshness test expectations were updated for the new 3-day threshold.

**Audit prepared on 25 October 2026, Europe/Vienna.**
