# GeoDeadlines official conference-source follow-up — 4 November 2026

**Scope: 18 of the 27 conferences remaining overdue after the initial 10-conference audit.** Source review was performed against current organizer, society or host-institution first-party pages on 4 November 2026. Previously verified conference dates were preserved when sources still matched; no missing hours, timezones or future CFPs were invented.

## Material new announcement

**CPGIS / Geoinformatics 2027:** CPGIS announced its first formal conference CFP on **1 November 2026**. Previously the YAML had the 2027 venue and deadline marked TBD; official documentation now confirms **Lanzhou, China, 9–11 July 2027**, with separate **300-word abstract** and **6–8-page full-paper** routes due **15 March 2027**, and oral-session proposals also due 15 March. Exact submission time and timezone were not specified. The record now uses the current first-party association page, provides a submission link, and differentiates the two formats (no speculative AoE cutoff).

## Official-source verification table (18)

| Record | Official source reviewed | Result |
| --- | --- | --- |
| [`cpgis-2027`](../src/data/opportunities/conferences/cpgis-2027.yml) | [Organizer source](https://cpgis.org/Conferences/ConferenceDefault.aspx?ID=2083) | NEW: official first CFP published 1 Nov 2026; venue Lanzhou 9–11 Jul 2027, abstract/full paper/session proposal 15 Mar 2027, with no exact submission hour |
| [`chi-2027`](../src/data/opportunities/conferences/chi-2027.yml) | [Organizer source](https://chi2027.acm.org/) | Papers Sep 2026 elapsed; panels 19 Nov 2026; posters and interactive demos 21 Jan 2027 AoE |
| [`cupum-2027`](../src/data/opportunities/conferences/cupum-2027.yml) | [Organizer source](https://conference.unsw.edu.au/en/cupum-2027/call-for-submissions) | Conference paper/poster 12 Feb 2027; organizer calls dates indicative |
| [`earsel-2027`](../src/data/opportunities/conferences/earsel-2027.yml) | [Organizer source](https://symposium.earsel.org/46th-symposium-Turin/?page_id=43) | 30 Nov 2026 abstracts (official master timetable); earlier submission subpage still inconsistent |
| [`geoprocessing-2027`](../src/data/opportunities/conferences/geoprocessing-2027.yml) | [Organizer source](https://www.iaria.org/conferences2027/GEOProcessing27.html) | Regular paper 28 Dec 2026, notification 24 Feb 2027; other tracks may differ |
| [`gisruk-2027`](../src/data/opportunities/conferences/gisruk-2027.yml) | [Organizer source](https://gisruk.org/gisruk-2027/) | Nottingham in week of 12 Apr 2027; CFP, exact event days, paper deadline still TBD |
| [`gistam-2027`](../src/data/opportunities/conferences/gistam-2027.yml) | [Organizer source](https://gistam.scitevents.org/ImportantDates.aspx) | Stage 1 17 Nov 2026, satellite proposals 27 Nov, stage 2 21 Dec, abstract track 16 Feb 2027, AoE |
| [`iccv-2027`](../src/data/opportunities/conferences/iccv-2027.yml) | [Organizer source](https://iccv.thecvf.com/Conferences/2027) | 2027 Hong Kong event confirmed; paper cutoff not yet announced; inconsistent event headers noted in existing record |
| [`iclr-2027`](../src/data/opportunities/conferences/iclr-2027.yml) | [Organizer source](https://iclr.cc/Conferences/2027/CallForPapers) | Historical abstract 18 Sep, paper 25 Sep 2026 AoE; reviews/discussion Nov, decisions Dec confirmed |
| [`icml-2027`](../src/data/opportunities/conferences/icml-2027.yml) | [Organizer source](https://icml.cc/Conferences/FutureMeetings) | 2027 Rio de Janeiro now confirmed in future meetings; no deadline published |
| [`isprs-geospatial-week-2027`](../src/data/opportunities/conferences/isprs-geospatial-week-2027.yml) | [Organizer source](https://www.gsw2027.pl/calls.html) | Full paper 15 Apr 2027, extended abstract 15 May 2027, workshop proposal extended to 30 Oct 2026 (passed) |
| [`kdd-2027`](../src/data/opportunities/conferences/kdd-2027.yml) | [Organizer source](https://kdd2027.kdd.org/research-track-call-for-papers/) | Cycle 1 abstract 19 Jul, paper 26 Jul 2026 AoE; cycle 2 February 2027 dates remain TBD |
| [`spatial-statistics-2027`](../src/data/opportunities/conferences/spatial-statistics-2027.yml) | [Organizer source](https://www.elsevier.com/events/conferences/all/spatial-statistics) | Abstract 29 Jan 2027, workshop proposals 12 Mar 2027, notification 25 Mar |
| [`geoai-2027`](../src/data/opportunities/conferences/geoai-2027.yml) | [Organizer source](https://2027.geoaiconference.org/) | Event 29 Jun–2 Jul 2027 at UCL; official CFP not yet published |
| [`foss4g-2027`](../src/data/opportunities/conferences/foss4g-2027.yml) | [Organizer source](https://2027.foss4g.org/) | 2027 Bristol 23–29 Aug confirmed, CFP not yet published |
| [`neurips-2027`](../src/data/opportunities/conferences/neurips-2027.yml) | [Organizer source](https://neurips.cc/Conferences/FutureMeetings) | 2027 region Europe announced, city, exact dates and CFP still TBD |
| [`agu-2027`](../src/data/opportunities/conferences/agu-2027.yml) | [Organizer source](https://www.agu.org/meetings/all-meetings/agu27) | AGU abstract window Jun–Aug 2027, exact cutoff TBD; event 13–17 Dec 2027 |
| [`ucgis-2027`](../src/data/opportunities/conferences/ucgis-2027.yml) | [Organizer source](https://www.ucgis.org/site/symposia) | 2027 Athens Georgia 7–10 Jun; submission call and deadline still TBD |

## Data semantics

- GISTAM workshop and special-session proposals, ISPRS GSW workshop proposals, and Spatial Statistics workshop proposals are `type: proposal`, not miscellaneous administrative dates. They can feature in the public submission countdown when applicable.
- Historical 2026 conference submissions remain available in archives for evidence and comparison.
- For 2027 meetings without a published CFP, `datetime: TBD` is retained, rather than extrapolating from past years or submission windows. Publisher/site discrepancies are documented in the relevant record and do not justify invented extensions.

## Unresolved 9 conferences and other sources

The following 9 conference records still require targeted official-source checks: `aag-2027`, `agile-2027`, `cagis-2026`, `cosit-2026`, `foss4g-2026`, `geo-week-2027`, `lbs-2026`, `sigspatial-2026`, and `state-of-the-map-2027`. The single workshop `geoai-2026`, 2 unresolved recruitment records, and conflicted MDPI IJGI collection also remain overdue.

With all completed 4 November audits, there are **107 live entries**, of which **94** have documented current source review, leaving **13** overdue. Do not bulk-advance these 13 or close [issue #14](https://github.com/yingjinghuang/geo-deadlines/issues/14).

Prepared 2026-11-04.
