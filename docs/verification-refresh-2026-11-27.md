# Priority source refresh — 27 November 2026

## Scope

This refresh updates the time-sensitive portion of the live GeoDeadlines catalog after the 17 November full audit and discovery expansion. It is **not** presented as a new 203-record full-catalog audit.

The catalog contained 206 live records after the 17 November discovery expansion. Three recruitment records with sufficient closure evidence were removed across the 27 November refresh, leaving **203 records: 43 conferences, 6 workshops, 72 special issues and 82 recruitment opportunities**.

The refresh prioritised deadlines falling from 27 November through mid-December, plus records whose original sources exposed a material change. Existing unresolved records retain their older verification dates unless new primary evidence resolves the issue.

## Material changes

### ICC 2027

The official ICC 2027 call now lists:

- **Abstract:** 1 December 2026
- **Full paper:** **4 December 2026**

The live catalog previously stored 20 November for the full-paper deadline. That value was replaced with 4 December and the correction is documented in the record.

Source: https://icc2027.org/call-for-papers/

### Closed recruitment removals

- **UEF MINE-THE-GAP Spatial AI PhDs** — the University of Eastern Finland Varbi page explicitly reports the recruitment as finished and no longer accepting applications.
- **Stirling Geospatial Data Science Lecturer (FAC02153)** — the university-authored vacancy closed on 23 November 2026; Stirling's own applicant guidance states that job descriptions are no longer available after a vacancy closes, and the role is no longer in the current-vacancy route.
- **UCL CASA Research Fellow in Urban AI (B04-07935)** — the advertised fixed closing date was 6 November 2026; the original UCL detail is no longer retrievable in the current portal and no current matching vacancy was found.

All three historical records remain recoverable through Git history.

## Reverified current records

The following records were compared with their current original/official sources and advanced to `last_verified: 2026-11-27` where the published information remained sufficiently supported.

### Conferences and workshop

- AAG 2027 — resolved the apparent 5 November / 12 November conflict by separating **new session submission** (5 November) from the **session organizing/open-add period** (12 November)
- IUGG 2027 — resolved the 14/16 February discrepancy in favor of the detailed IUGG/IAG guidance: **16 February 2027, 23:59 HST**
- GISTAM 2027
- Geoinformatics Research Days 2027
- SSTD 2027
- EARSeL 2027
- EGU 2027
- ICC 2027
- JURSE 2027
- Geomorphometry 2027
- CHI 2027
- FOSDEM 2027 Geospatial Developer Room

### Near-term recruitment

- University of Twente GPR + AI Utility Mapping EngD
- University of Iowa GeoAI / Spatial Data Science PhDs
- GFZ Forest Carbon Earth Observation PhD
- Rice MUSE multimodal graph-AI postdoc
- Cal Poly Pomona Geological Sciences / Remote Sensing / GIS faculty
- Cal Poly Pomona Applied Geospatial Analysis faculty
- Harvard Remote Sensing / Biodiversity / Land Surface faculty
- UMass Amherst Remote Sensing Systems faculty
- University of Toronto Geographic Data Science teaching-stream faculty
- Exeter Amazon Forest Microclimate PhD
- Exeter Arctic Permafrost SAR PhD
- University of Oulu Peatland Restoration PhD
- UT Austin GeoAI PhD
- UIUC GeoAI / Geospatial Computing PhD
- UMD Coastal Geomorphology / Remote Sensing PhD
- CUHK ISEIS Geospatial AI / Remote Sensing faculty
- McGill Urban Analytics / Geospatial Data Science faculty

### Journal special issues

- IJGIS — Critical Challenges in GeoAI
- TUS — Interactions between Transport and Human Mobility
- IJGI — Spatial Information for Improved Living Spaces (2nd Edition)
- GIScience & Remote Sensing — VLM Driven Intelligent Interpretation of Remote Sensing Imagery
- Geo-spatial Information Science — Spatio-temporal Intelligence Foundation Models and Applications for Intelligent Earth Observation
- International Journal of Digital Earth — From Geospatial Data to Urban Environmental Intelligence

## Precision retained deliberately

The two Exeter EPSRC DLA project pages state that applications close at **midday on 8 December 2026**, but the inspected source does not print an explicit timezone. The catalog therefore keeps a date-only machine value plus the published-midday note instead of inventing a UTC/GMT offset.

The Ghent 4D Forest TLS PhD was also rechecked. The official page still combines a 30 November 23:59 header with narrative wording referring to midnight CEST. Because November is not CEST and the exact cutoff remains internally inconsistent, the record deliberately uses **date-only precision**. The calendar date itself is directly confirmed, so `last_verified` advances to 27 November without inventing a timezone.

## Remaining unresolved queue

After the follow-up source checks, only two live records remain materially unresolved:

- **ICCV 2027** — the official conference header says 3–7 October 2027 while the venue paragraph still says 2–8 October, and the 2027 paper-submission deadline has not yet been published. The older successful verification date is retained.
- **UMD Satellite Remote Sensing of Precipitation and Clouds** — the former employer notice said review from 30 September and applications until filled, but the original notice is now unavailable and the current ESSIC employment index no longer lists the role. Because there was no final cutoff, disappearance alone is not treated as proof of closure.

The former AAG, IUGG, Ghent and three Taylor & Francis evidence issues were resolved on 27 November as described above.

## Repository changes

- `75cbfcc` — refresh near-term conference and journal deadlines; correct ICC 2027.
- `5216486` — refresh current recruitment records; remove the closed UEF MINE-THE-GAP call.
- `b119e1e` — resolve AAG/IUGG/Ghent/Taylor & Francis evidence issues; remove the expired Stirling and UCL recruitment cards.

After the data changes, the GitHub **Validate** workflow completed successfully. The deployment workflow was triggered by the push.

This document records only work actually supported by inspected sources. It does not bulk-advance verification dates for untouched records.
