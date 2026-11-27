# Priority source refresh — 27 November 2026

## Scope

This refresh updates the time-sensitive portion of the live GeoDeadlines catalog after the 17 November full audit and discovery expansion. It is **not** presented as a new 205-record full-catalog audit.

The catalog contained 206 live records after the 17 November discovery expansion. One recruitment record with explicit current closure evidence was removed in this pass, leaving **205 records: 43 conferences, 6 workshops, 72 special issues and 84 recruitment opportunities**.

The refresh prioritised deadlines falling from 27 November through mid-December, plus records whose original sources exposed a material change. Existing unresolved records retain their older verification dates unless new primary evidence resolves the issue.

## Material changes

### ICC 2027

The official ICC 2027 call now lists:

- **Abstract:** 1 December 2026
- **Full paper:** **4 December 2026**

The live catalog previously stored 20 November for the full-paper deadline. That value was replaced with 4 December and the correction is documented in the record.

Source: https://icc2027.org/call-for-papers/

### UEF MINE-THE-GAP Spatial AI PhDs

The University of Eastern Finland Varbi page for the three doctoral researcher positions now explicitly reports the recruitment as finished and says it is not possible to apply. The live recruitment card was therefore removed rather than left as an apparently actionable expired vacancy.

Historical record remains recoverable through Git history.

Source: https://uef.varbi.com/en/what:job/jobID:978704/type:job/where:39/apply:1

## Reverified current records

The following records were compared with their current original/official sources and advanced to `last_verified: 2026-11-27` where the published information remained sufficiently supported.

### Conferences and workshop

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

## Precision retained deliberately

The two Exeter EPSRC DLA project pages state that applications close at **midday on 8 December 2026**, but the inspected source does not print an explicit timezone. The catalog therefore keeps a date-only machine value plus the published-midday note instead of inventing a UTC/GMT offset.

The Ghent 4D Forest TLS PhD was also rechecked. The official page still combines a 30 November 23:59 header with narrative wording referring to midnight CEST. Because November is not CEST and the exact cutoff remains internally inconsistent, the record intentionally keeps its previous `last_verified: 2026-11-05` and date-only deadline.

## Existing unresolved queue

The unresolved queue from the 17 November full audit is not silently cleared by this priority pass. Records with blocked primary pages, conflicting original sources, or unpublished key dates continue to retain their older verification dates. In particular, this refresh does not claim resolution for AAG 2027, ICCV 2027, Stirling Geospatial Data Science Lecturer, UCL CASA Urban AI Research Fellow, the UMD satellite remote-sensing research position, GISRS VLM remote-sensing imagery, GSIS spatiotemporal intelligence/foundation models, or IJDE urban environmental intelligence.

## Repository changes

- `75cbfcc` — refresh near-term conference and journal deadlines; correct ICC 2027.
- `5216486` — refresh current recruitment records; remove the closed UEF MINE-THE-GAP call.

After the data changes, the GitHub **Validate** workflow completed successfully. The deployment workflow was triggered by the push.

This document records only work actually supported by inspected sources. It does not bulk-advance verification dates for untouched records.
