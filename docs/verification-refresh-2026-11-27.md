# Full-catalog source refresh — 27 November 2026

## Result and scope

This pass completes a current-source review or attempted recheck of the **entire live GeoDeadlines catalog** after the 17 November audit and discovery expansion.

The 17 November discovery expansion left **206 live records**. Nine recruitment records now have sufficient closure evidence and were removed from the live catalog, leaving **197 records: 43 conferences, 6 workshops, 72 special issues and 76 recruitment opportunities**.

Of the 197 retained records:

- **192** have sufficiently supported current or historical source evidence and now carry `last_verified: 2026-11-27`.
- **5** were actively rechecked but remain unresolved or not reproducibly re-verifiable; they deliberately retain older verification dates.
- Historical conference and special-issue records remain in the catalog when their published dates can still be verified. Recruitment records are removed when a hard final cutoff has passed and current employer evidence supports closure or disappearance from the live vacancy index.
- No verification date was bulk-advanced.

## Major corrections made on 27 November

### Conferences and workshops

- **ICC 2027** — full-paper deadline corrected from **20 November 2026** to **4 December 2026**; abstract remains 1 December.
- **AAG 2027** — the apparent 5 November / 12 November conflict was resolved by separating **new session submission (5 November)** from the **session organizing/open-add period (12 November)**.
- **IUGG 2027** — detailed organizer guidance supports **16 February 2027, 23:59 HST (UTC-10)** for abstracts and travel grants; the conflicting 14 February summary line is treated as an inconsistent summary rather than the canonical rule.
- **ICLR 2027** — workshop proposal notification corrected to **7 December 2026**.
- **CUPUM 2027** — current CFP now records conference paper/poster notification **9 April 2027**, accepted-author early-bird registration **20 April**, and revised papers/full digital posters **12 May**.
- **IOCGM 2027** — abstract deadline extended to **4 January 2027** and abstract acceptance moved to **25 January**.
- **IGARSS 2027** — paper/abstract cutoff upgraded to **11 January 2027, 23:59 AoE**; travel-support application corrected to **8 March** with decision **9 April**.
- **GIScience 2027** — workshop proposal decision **5 March 2027** added.
- **GEOProcessing 2027** — registration milestone **10 March 2027** added.
- **Human-Centric AgMS 2027** — AAAI program confirms the workshop on **22 February 2027**.
- **GSR-VLM 2027** — AAAI program confirms the workshop on **22 February 2027**; workshop-specific submission dates remain on the older successful verification because the workshop page could not be re-retrieved.

### Journal special issues

- **GIScience & Remote Sensing — SWOT surface-water/hydrology collection** — manuscript deadline corrected from **28 February 2027** to **30 November 2026**.
- **Scientific Reports — Geospatial data science and analysis** — stored as the publisher-advertised **22 January 2027** calendar deadline instead of the following-day 00:00 GMT closure instant, so the UI displays the correct date.
- **Scientific Reports — Climate-resilient and sustainable human settlements** — similarly stored as the advertised **11 August 2027** calendar deadline rather than 12 August 00:00 GMT.
- Active Wiley / Transactions in GIS, JSTARS, TUS, Nature, Frontiers, MDPI and other publisher calls were rechecked against current publisher or original institutional sources where accessible.
- Five previously unresolved special-issue records were manually rechecked on 27 November: **Innovative Mobility Services for Smart Cities** and **Urban Digital Twins Empowered by AI and Dataspaces** are confirmed at **31 March 2027**; **Advancing GeoAI** and **Ethics in Geospatial AI and Data Science** remain **31 December 2026**; the **GIScience & Remote Sensing — Urban Environment** collection remains **31 July 2027**.

### Recruitment

- **Alabama Physical Geography faculty** — final portal close added: **1 August 2027, 22:55 CDT**.
- **Cal Poly Pomona UAS Autonomy + GIS faculty** — corrected to the official **15 October 2026, 23:55 PDT** hard deadline; the unsupported later/TBD application milestone was removed.
- **SJSU Spatial Data Analysis faculty** — speculative later/TBD application milestone removed; the official posting only establishes the 15 October deadline.
- **KTH Geospatial AI postdoc** — current evidence supports **rolling until filled**.
- Current until-filled searches such as Cincinnati, Colgate, selected Cal Poly Pomona roles, Hawaiʻi, UF, UNCG, uOttawa, PolyU and others retain their review/priority dates separately from rolling application status.
- Date-only recruitment records remain date-only when the source does not publish an exact timezone or clock.

## Recruitment removals — 9

The following records were removed from the live catalog after hard closing evidence and current employer/index checks. Their historical YAML remains recoverable through Git history.

1. UEF MINE-THE-GAP Spatial AI / Earth Observation doctoral researchers.
2. Stirling Lecturer in Geospatial Data Science.
3. UCL CASA Research Fellow in Urban AI.
4. Gothenburg TWIG forest laser-scanning / biomass postdoc.
5. Gothenburg TWIG tropical-forest 3D lidar PhD.
6. University of Toronto Sustainability Science teaching-stream faculty.
7. University of Limerick Physical Geography / Geoinformatics faculty.
8. Lund forest remote-sensing / carbon-productivity researcher.
9. Sheffield seismic hazard / GIS risk research associate.

## Remaining older verification dates — 5

Every record below was revisited on 27 November. The older timestamp is intentional.

| Record | Retained date | Why it remains unresolved / not fresh |
| --- | --- | --- |
| ICCV 2027 | 2026-11-04 | Official ICCV material still gives conflicting event ranges (3–7 October vs 2–8 October), and the paper-submission deadline remains unpublished. |
| GISRUK 2027 | 2026-11-17 | Current official call page exists, but the verifier could not reproducibly retrieve the specific 1 February deadline text on this pass. |
| GSR-VLM 2027 | 2026-11-17 | AAAI confirms the workshop and 22 February event day, but the workshop-specific page supporting its exceptional 19 November submission / 1 December notification dates could not be re-retrieved. |
| Utah State Remote Sensing + GeoAI postdoc | 2026-11-17 | Official iCIMS detail could not be directly retrieved; current syndicated copies repeat until-filled wording, but secondary copies are insufficient to advance verification. |
| UMD Satellite Remote Sensing of Precipitation and Clouds | 2026-11-04 | Old ESSIC notice advertised review from 30 September and applications until filled, but the notice is now unavailable and the current employment index omits it. With no final cutoff, disappearance alone does not prove closure. |

## Precision decisions retained deliberately

- The Exeter EPSRC DLA project pages say applications close at **midday on 8 December 2026** but do not print an explicit timezone. GeoDeadlines therefore keeps date-only machine values plus the published-midday note instead of inventing GMT.
- The Ghent 4D Forest TLS PhD page combines a 30 November 23:59 header with narrative wording saying midnight CEST. The calendar date is verified, but the exact timezone is internally inconsistent, so the catalog deliberately stores date-only precision.
- A passed review/priority date is never treated as proof of recruitment closure when an original source explicitly says the search continues until filled.

## Repository changes

This refresh was applied directly to `main` across a sequence of evidence-focused commits. Major data commits include:

- `75cbfcc`, `5216486`, `b119e1e` — initial 27 November priority refresh and unresolved-source cleanup.
- `915b9ef`, `d7e1865`, `4228114`, `1a92087` — conference and workshop refreshes.
- `96749fb`, `27ac55c`, `12f8910`, `f40152d`, `f635f61`, `15d762b`, `1ef586c` — journal special-issue refreshes and deadline corrections.
- `8c5bea9`, `a858278`, `434dd27`, `8949103`, `b2af21d`, `852d323`, `439ee0a`, `7da5a8e` — recruitment refreshes, corrections and closures.
- `9e2bc54` — YAML quoting repair after the validator exposed four unquoted note strings containing colons.

Post-refresh CI is green: commit `eb241da` completed both the repository **Validate** workflow and **Deploy to GitHub Pages** successfully. This document distinguishes verified facts from unresolved source limitations and does not treat search snippets or inaccessible secondary copies as equivalent to current primary-source verification.
