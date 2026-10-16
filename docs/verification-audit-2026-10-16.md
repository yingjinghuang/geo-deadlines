# GeoDeadlines full-source re-verification checklist — 2026-10-16

This is a **per-entry audit inventory**, not a certification that every entry has been verified. Only tick an entry after opening its current official organizer/employer/publisher source and confirming its deadline and status. A failed or blocked source must remain unchecked; do not bulk-rewrite `last_verified`.

Current baseline: 138 opportunities. Entries checked in the current pass: 111; awaiting individual official-source verification: 27.

Audit update: 2026-10-16. Latest review added 22 existing opportunities and one new verified SAGE special issue. Corrected UZH microwave remote sensing postdoc deadline (2026-09-30 → 2026-11-15), ISTA cryosphere postdoc (2026-09-30 → 2026-10-09), and clarified Wiley TGIS healthcare issue after the dedicated publisher CFP confirmed 2026-12-31.  The first seven checks were recorded in the earlier pass; later checks have been appended following direct inspection of organizer/university/publisher pages. **A checkbox means review of an available official source, not necessarily confirmation that a call is still open.**

Verification improvements in this pass: the UI now marks positions needing re-review after 14 days and other entries after 30 days, recalculating in the viewer's browser. Official university vacancy pages confirm that both tracked University of Vienna positions no longer accept applications. IJGI LLM4GIS manuscript deadline corrected from 31 August to 31 December 2026.

## Current pass findings — 16 October 2026

- **McGill Geography faculty JR0000078552:** the official Workday posting still shows an Apply button and **16 October 2026** as an application end date; no extension presumed.
- **Nanjing University Geography/Ocean Science faculty:** the official vacancy listing still gives **15 October 2026** with an Apply Now action; that deadline has passed and the announcement permits extension only if applicants are too few. **No extension confirmed.**
- **WACV 2027:** removed outdated prose claiming August submissions "remain open", recorded an official **3 November 2026 04:59 UTC** attendee-registration deadline, and kept the contradictory 9/14 October decision dates **unresolved** without bumping `last_verified`.
- **Removed one demonstrably misattributed special issue card:** `ufug-intelligent-sustainability-environmental-innovation-2026.yml`. The publisher catalogs the same title under *Sustainable Energy Technologies and Assessments*, with editors Foni Agus Setiawan et al. rather than the UFUG editor roster. Its metadata had combined different calls, so the inaccurate UFUG entry was removed, not cosmetically marked verified. The genuine SETA call is outside the project's geospatial core; see [unresolved-source log](unresolved-official-sources-2026-10-16.md) for provenance.
- The official ScienceDirect search index corroborates deadline dates for several remaining special issues, but direct publisher detail pages are HTTP 403; **do not convert search snippets into `last_verified` certification**.


- **111 of 138** opportunities individually reviewed, **27** still pending authoritative source confirmation.
- Queen's University Belfast Physical Geography Lecturer posting explicitly reports the vacancy **closed**; the original 14 September deadline is retained as historical fact.
- Texas Tech Prof. Jiangtao Liu and University of Saskatchewan GIG-Cities Lab currently explicitly advertise funded/graduate recruitment without a fixed closing date; their `last_verified` values were updated only after direct institutional-page checks.
- Taylor & Francis's live official **IJGIS Critical Challenges in GeoAI** CFP confirms 1 August (abstract) and 1 December 2026 (full manuscript).
- The TU Berlin BIFOLD postdoc original job detail is HTTP 410 and its previous published deadlines conflict; Groningen is HTTP 404; WACV 2027 official dates remain inconsistent (9 versus 14 October). None of these unresolved sources received a verification-date bump.
- All remaining blocked/conflicting official sources are recorded in the separate [source-access evidence log](unresolved-official-sources-2026-10-16.md).

Verification checks: official URL reachable; opportunity still open/closed; submission/review/deadline milestone updated; extensions checked; exact-time precision preserved; source contradictions noted; last_verified written only after actual review.

## Conferences

- [x] [aag-2027.yml](../src/data/opportunities/conferences/aag-2027.yml) — official source checked in this pass
- [x] [agile-2027.yml](../src/data/opportunities/conferences/agile-2027.yml) — official source checked in this pass
- [x] [agu-2027.yml](../src/data/opportunities/conferences/agu-2027.yml) — official source reviewed
- [x] [cagis-2026.yml](../src/data/opportunities/conferences/cagis-2026.yml) — official source reviewed
- [x] [chi-2027.yml](../src/data/opportunities/conferences/chi-2027.yml) — official source reviewed
- [x] [cosit-2026.yml](../src/data/opportunities/conferences/cosit-2026.yml) — official source reviewed
- [x] [cpgis-2027.yml](../src/data/opportunities/conferences/cpgis-2027.yml)
- [x] [cvpr-2027.yml](../src/data/opportunities/conferences/cvpr-2027.yml) — official source reviewed
- [x] [earsel-2027.yml](../src/data/opportunities/conferences/earsel-2027.yml) — official source reviewed
- [x] [egu-2027.yml](../src/data/opportunities/conferences/egu-2027.yml) — official source checked in this pass
- [x] [foss4g-2026.yml](../src/data/opportunities/conferences/foss4g-2026.yml) — official source reviewed
- [x] [foss4g-2027.yml](../src/data/opportunities/conferences/foss4g-2027.yml) — official source reviewed
- [x] [geo-week-2027.yml](../src/data/opportunities/conferences/geo-week-2027.yml) — official source reviewed
- [x] [geoai-2027.yml](../src/data/opportunities/conferences/geoai-2027.yml) — official source reviewed
- [ ] [geoai-2028.yml](../src/data/opportunities/conferences/geoai-2028.yml)
- [x] [giscience-2027.yml](../src/data/opportunities/conferences/giscience-2027.yml) — official source checked in this pass
- [x] [gistam-2027.yml](../src/data/opportunities/conferences/gistam-2027.yml) — official source reviewed
- [x] [icc-2027.yml](../src/data/opportunities/conferences/icc-2027.yml) — official source reviewed
- [x] [iccv-2027.yml](../src/data/opportunities/conferences/iccv-2027.yml) — official source reviewed
- [x] [iclr-2027.yml](../src/data/opportunities/conferences/iclr-2027.yml) — official source reviewed
- [x] [icml-2027.yml](../src/data/opportunities/conferences/icml-2027.yml) — official source reviewed
- [x] [igarss-2027.yml](../src/data/opportunities/conferences/igarss-2027.yml) — official source reviewed
- [x] [isprs-geospatial-week-2027.yml](../src/data/opportunities/conferences/isprs-geospatial-week-2027.yml) — official source checked in this pass
- [x] [kdd-2027.yml](../src/data/opportunities/conferences/kdd-2027.yml) — official source checked in this pass
- [x] [lbs-2026.yml](../src/data/opportunities/conferences/lbs-2026.yml)
- [x] [neurips-2027.yml](../src/data/opportunities/conferences/neurips-2027.yml) — official source reviewed
- [x] [sigspatial-2026.yml](../src/data/opportunities/conferences/sigspatial-2026.yml)
- [x] [spatial-statistics-2027.yml](../src/data/opportunities/conferences/spatial-statistics-2027.yml)
- [x] [state-of-the-map-2027.yml](../src/data/opportunities/conferences/state-of-the-map-2027.yml)
- [x] [ucgis-2027.yml](../src/data/opportunities/conferences/ucgis-2027.yml)
- [ ] [wacv-2027.yml](../src/data/opportunities/conferences/wacv-2027.yml)

## Workshops

- [x] [geoai-2026.yml](../src/data/opportunities/workshops/geoai-2026.yml)

## Positions

- [x] [ait-satellite-remote-sensing-infrastructure-phd-2026.yml](../src/data/opportunities/positions/ait-satellite-remote-sensing-infrastructure-phd-2026.yml) — official source reviewed
- [x] [berkeley-global-environmental-change-assistant-professor-2026.yml](../src/data/opportunities/positions/berkeley-global-environmental-change-assistant-professor-2026.yml) — official source reviewed
- [ ] [boku-geomatics-remote-sensing-ml-senior-scientist-2026.yml](../src/data/opportunities/positions/boku-geomatics-remote-sensing-ml-senior-scientist-2026.yml)
- [ ] [cambridge-polar-studies-assistant-professor-2026.yml](../src/data/opportunities/positions/cambridge-polar-studies-assistant-professor-2026.yml)
- [x] [colgate-climate-science-geography-assistant-professor-2026.yml](../src/data/opportunities/positions/colgate-climate-science-geography-assistant-professor-2026.yml)
- [x] [cpp-criminology-gis-spatial-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/cpp-criminology-gis-spatial-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [cpp-uas-autonomy-gis-assistant-professor-2026.yml](../src/data/opportunities/positions/cpp-uas-autonomy-gis-assistant-professor-2026.yml)
- [x] [cranfield-remote-sensing-ai-research-fellow-2026.yml](../src/data/opportunities/positions/cranfield-remote-sensing-ai-research-fellow-2026.yml)
- [x] [csuf-physical-geography-assistant-professor-2026.yml](../src/data/opportunities/positions/csuf-physical-geography-assistant-professor-2026.yml) — official source reviewed
- [ ] [groningen-inclusive-urban-mobility-postdoc-2026.yml](../src/data/opportunities/positions/groningen-inclusive-urban-mobility-postdoc-2026.yml)
- [x] [guelph-geoai-assistant-professor-2026.yml](../src/data/opportunities/positions/guelph-geoai-assistant-professor-2026.yml) — official source reviewed
- [x] [hku-physical-geography-ai-assistant-professor-2026.yml](../src/data/opportunities/positions/hku-physical-geography-ai-assistant-professor-2026.yml)
- [x] [hkust-gz-3d-gis-cim-ai-recruitment-2026.yml](../src/data/opportunities/positions/hkust-gz-3d-gis-cim-ai-recruitment-2026.yml)
- [x] [iowa-geoai-spatial-data-science-phd-2026.yml](../src/data/opportunities/positions/iowa-geoai-spatial-data-science-phd-2026.yml)
- [x] [ista-mountain-water-cryosphere-postdoc-2026.yml](../src/data/opportunities/positions/ista-mountain-water-cryosphere-postdoc-2026.yml)
- [x] [loughborough-physical-geography-professor-2026.yml](../src/data/opportunities/positions/loughborough-physical-geography-professor-2026.yml)
- [x] [maastricht-urban-regional-modelling-faculty-2026.yml](../src/data/opportunities/positions/maastricht-urban-regional-modelling-faculty-2026.yml) — official source reviewed
- [x] [max-planck-quantitative-past-urban-studies-phd-2026.yml](../src/data/opportunities/positions/max-planck-quantitative-past-urban-studies-phd-2026.yml)
- [x] [mcgill-geography-health-sustainability-assistant-professor-2026.yml](../src/data/opportunities/positions/mcgill-geography-health-sustainability-assistant-professor-2026.yml)
- [x] [mit-senseable-dubai-postdoc-2026.yml](../src/data/opportunities/positions/mit-senseable-dubai-postdoc-2026.yml)
- [x] [mit-senseable-seoul-postdoc-2026.yml](../src/data/opportunities/positions/mit-senseable-seoul-postdoc-2026.yml)
- [x] [nanjing-geography-ocean-science-faculty-2026.yml](../src/data/opportunities/positions/nanjing-geography-ocean-science-faculty-2026.yml)
- [ ] [ntnu-ai-climate-risk-urban-planning-phd-2026.yml](../src/data/opportunities/positions/ntnu-ai-climate-risk-urban-planning-phd-2026.yml)
- [x] [polyu-geoai-climate-urban-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-geoai-climate-urban-research-assistant-professor-2026.yml)
- [x] [polyu-gift-geospatial-transport-phd-2026.yml](../src/data/opportunities/positions/polyu-gift-geospatial-transport-phd-2026.yml)
- [x] [polyu-low-altitude-remote-sensing-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-low-altitude-remote-sensing-research-assistant-professor-2026.yml)
- [x] [polyu-smart-cities-urban-informatics-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-smart-cities-urban-informatics-research-assistant-professor-2026.yml)
- [x] [qub-physical-geography-lecturer-2026.yml](../src/data/opportunities/positions/qub-physical-geography-lecturer-2026.yml)
- [x] [sjsu-urban-regional-spatial-data-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/sjsu-urban-regional-spatial-data-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [stanford-climate-science-assistant-professor-2026.yml](../src/data/opportunities/positions/stanford-climate-science-assistant-professor-2026.yml) — official source reviewed
- [x] [ttu-earth-observation-ai-phd-2026.yml](../src/data/opportunities/positions/ttu-earth-observation-ai-phd-2026.yml)
- [ ] [tu-berlin-bifold-eo-ai-agents-postdoc-2026.yml](../src/data/opportunities/positions/tu-berlin-bifold-eo-ai-agents-postdoc-2026.yml)
- [x] [uci-hydrology-remote-sensing-postdoc-2026.yml](../src/data/opportunities/positions/uci-hydrology-remote-sensing-postdoc-2026.yml)
- [x] [uclouvain-physical-environment-climate-geography-academic-2026.yml](../src/data/opportunities/positions/uclouvain-physical-environment-climate-geography-academic-2026.yml)
- [x] [uf-coastal-water-remote-sensing-geospatial-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/uf-coastal-water-remote-sensing-geospatial-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [uf-remote-sensing-assistant-associate-professor-2026.yml](../src/data/opportunities/positions/uf-remote-sensing-assistant-associate-professor-2026.yml) — official source reviewed
- [x] [uh-manoa-spatial-statistics-geoai-assistant-professor-2026.yml](../src/data/opportunities/positions/uh-manoa-spatial-statistics-geoai-assistant-professor-2026.yml)
- [ ] [uio-cryosphere-remote-sensing-phd-2026.yml](../src/data/opportunities/positions/uio-cryosphere-remote-sensing-phd-2026.yml)
- [ ] [uio-cryosphere-remote-sensing-postdoc-2026.yml](../src/data/opportunities/positions/uio-cryosphere-remote-sensing-postdoc-2026.yml)
- [x] [uiuc-geoai-geospatial-computing-phd-2026.yml](../src/data/opportunities/positions/uiuc-geoai-geospatial-computing-phd-2026.yml)
- [x] [umd-coastal-geomorphology-remote-sensing-phd-2026.yml](../src/data/opportunities/positions/umd-coastal-geomorphology-remote-sensing-phd-2026.yml)
- [x] [umd-satellite-remote-sensing-research-position-2026.yml](../src/data/opportunities/positions/umd-satellite-remote-sensing-research-position-2026.yml)
- [x] [uncg-urban-economic-geography-assistant-professor-2026.yml](../src/data/opportunities/positions/uncg-urban-economic-geography-assistant-professor-2026.yml)
- [x] [univie-human-economic-geography-senior-lecturer-2026.yml](../src/data/opportunities/positions/univie-human-economic-geography-senior-lecturer-2026.yml)
- [x] [univie-spatial-data-science-predoc-2026.yml](../src/data/opportunities/positions/univie-spatial-data-science-predoc-2026.yml)
- [x] [uottawa-urban-sustainability-assistant-professor-2026.yml](../src/data/opportunities/positions/uottawa-urban-sustainability-assistant-professor-2026.yml)
- [x] [usask-gig-cities-geoai-urban-heat-phd-2026.yml](../src/data/opportunities/positions/usask-gig-cities-geoai-urban-heat-phd-2026.yml)
- [x] [usc-giscience-assistant-professor-2026.yml](../src/data/opportunities/positions/usc-giscience-assistant-professor-2026.yml) — official source checked in this pass
- [x] [usf-giscience-assistant-professor-2026.yml](../src/data/opportunities/positions/usf-giscience-assistant-professor-2026.yml) — official source reviewed
- [x] [ut-austin-geoai-phd-2026.yml](../src/data/opportunities/positions/ut-austin-geoai-phd-2026.yml)
- [x] [utoronto-sustainability-science-teaching-stream-assistant-professor-2026.yml](../src/data/opportunities/positions/utoronto-sustainability-science-teaching-stream-assistant-professor-2026.yml)
- [ ] [utrecht-ai-urban-redesign-health-postdoc-2026.yml](../src/data/opportunities/positions/utrecht-ai-urban-redesign-health-postdoc-2026.yml)
- [x] [uzh-microwave-remote-sensing-water-systems-postdoc-2026.yml](../src/data/opportunities/positions/uzh-microwave-remote-sensing-water-systems-postdoc-2026.yml)
- [x] [virginia-tech-geoai-phd-2026.yml](../src/data/opportunities/positions/virginia-tech-geoai-phd-2026.yml)

## Special issues

- [x] [epb-novel-approaches-15-minute-city-2026.yml](../src/data/opportunities/special-issues/epb-novel-approaches-15-minute-city-2026.yml) — new official SAGE call verified 2026-10-16
- [x] [annals-gis-geographical-principles-2026.yml](../src/data/opportunities/special-issues/annals-gis-geographical-principles-2026.yml) — official source reviewed
- [ ] [applied-geography-uneven-green-transition-2026.yml](../src/data/opportunities/special-issues/applied-geography-uneven-green-transition-2026.yml)
- [ ] [ceus-digital-twins-ai-healthy-sustainable-cities-2025.yml](../src/data/opportunities/special-issues/ceus-digital-twins-ai-healthy-sustainable-cities-2025.yml)
- [ ] [ceus-geoai-fire-2026.yml](../src/data/opportunities/special-issues/ceus-geoai-fire-2026.yml)
- [ ] [ceus-open-urban-data-science-2026.yml](../src/data/opportunities/special-issues/ceus-open-urban-data-science-2026.yml)
- [ ] [cities-climate-neutral-2030-2026.yml](../src/data/opportunities/special-issues/cities-climate-neutral-2030-2026.yml)
- [ ] [cities-evolution-urban-spatial-structure-2027.yml](../src/data/opportunities/special-issues/cities-evolution-urban-spatial-structure-2027.yml)
- [ ] [cities-politics-spatial-inclusion-2026.yml](../src/data/opportunities/special-issues/cities-politics-spatial-inclusion-2026.yml)
- [ ] [cities-smart-cities-sustainability-2026.yml](../src/data/opportunities/special-issues/cities-smart-cities-sustainability-2026.yml)
- [ ] [cities-spatial-governance-urban-agglomeration-2025.yml](../src/data/opportunities/special-issues/cities-spatial-governance-urban-agglomeration-2025.yml)
- [ ] [cities-urban-regeneration-mobility-2026.yml](../src/data/opportunities/special-issues/cities-urban-regeneration-mobility-2026.yml)
- [x] [epb-geogames-2026.yml](../src/data/opportunities/special-issues/epb-geogames-2026.yml)
- [ ] [geodata-ai-enhanced-geospatial-big-data-2026.yml](../src/data/opportunities/special-issues/geodata-ai-enhanced-geospatial-big-data-2026.yml)
- [x] [gisrs-urban-remote-sensing-environment-2027.yml](../src/data/opportunities/special-issues/gisrs-urban-remote-sensing-environment-2027.yml) — official source reviewed
- [x] [gisrs-vlm-remote-sensing-imagery-2027.yml](../src/data/opportunities/special-issues/gisrs-vlm-remote-sensing-imagery-2027.yml) — official source reviewed
- [x] [gsis-spatiotemporal-intelligence-foundation-models-2027.yml](../src/data/opportunities/special-issues/gsis-spatiotemporal-intelligence-foundation-models-2027.yml) — official source reviewed
- [x] [ijde-advancing-geoai-2026.yml](../src/data/opportunities/special-issues/ijde-advancing-geoai-2026.yml) — official source reviewed
- [x] [ijde-urban-environmental-intelligence-2027.yml](../src/data/opportunities/special-issues/ijde-urban-environmental-intelligence-2027.yml) — official source reviewed
- [x] [ijgi-living-spaces-2026.yml](../src/data/opportunities/special-issues/ijgi-living-spaces-2026.yml)
- [x] [ijgi-llm4gis-2026.yml](../src/data/opportunities/special-issues/ijgi-llm4gis-2026.yml)
- [x] [ijgi-urban-digital-twins-2026.yml](../src/data/opportunities/special-issues/ijgi-urban-digital-twins-2026.yml)
- [x] [ijgis-critical-challenges-geoai-2026.yml](../src/data/opportunities/special-issues/ijgis-critical-challenges-geoai-2026.yml)
- [x] [ijgis-ethics-geospatial-ai-2026.yml](../src/data/opportunities/special-issues/ijgis-ethics-geospatial-ai-2026.yml) — official source reviewed
- [ ] [information-geography-multimodal-geoai-2027.yml](../src/data/opportunities/special-issues/information-geography-multimodal-geoai-2027.yml)
- [ ] [jag-resource-constrained-multimodal-foundation-models-2027.yml](../src/data/opportunities/special-issues/jag-resource-constrained-multimodal-foundation-models-2027.yml)
- [ ] [rse-geospatial-foundation-models-2026.yml](../src/data/opportunities/special-issues/rse-geospatial-foundation-models-2026.yml)
- [ ] [rse-leaf-traits-ecosystem-function-2027.yml](../src/data/opportunities/special-issues/rse-leaf-traits-ecosystem-function-2027.yml)
- [x] [scientific-reports-geospatial-data-science-2027.yml](../src/data/opportunities/special-issues/scientific-reports-geospatial-data-science-2027.yml)
- [ ] [scs-heat-resilience-health-equity-2027.yml](../src/data/opportunities/special-issues/scs-heat-resilience-health-equity-2027.yml)
- [ ] [scs-sustainability-health-equity-ai-wellbeing-2026.yml](../src/data/opportunities/special-issues/scs-sustainability-health-equity-ai-wellbeing-2026.yml)
- [x] [tgis-disease-outbreaks-healthcare-resource-allocation-2026.yml](../src/data/opportunities/special-issues/tgis-disease-outbreaks-healthcare-resource-allocation-2026.yml)
- [x] [tgis-ethical-explainable-geoai-2026.yml](../src/data/opportunities/special-issues/tgis-ethical-explainable-geoai-2026.yml)
- [x] [tgis-geohazard-technologies-2026.yml](../src/data/opportunities/special-issues/tgis-geohazard-technologies-2026.yml)
- [x] [tgis-giscience-education-2027.yml](../src/data/opportunities/special-issues/tgis-giscience-education-2027.yml)
- [x] [tgis-spatial-data-sharing-governance-2026.yml](../src/data/opportunities/special-issues/tgis-spatial-data-sharing-governance-2026.yml)
- [x] [tgis-spatiotemporal-big-data-planning-2027.yml](../src/data/opportunities/special-issues/tgis-spatiotemporal-big-data-planning-2027.yml)
- [x] [tus-active-sensing-cities-2026.yml](../src/data/opportunities/special-issues/tus-active-sensing-cities-2026.yml)
- [x] [tus-ai-transportation-human-mobility-2026.yml](../src/data/opportunities/special-issues/tus-ai-transportation-human-mobility-2026.yml)
- [x] [tus-behavioral-resilience-extreme-weather-2026.yml](../src/data/opportunities/special-issues/tus-behavioral-resilience-extreme-weather-2026.yml)
- [x] [tus-geoai-urban-dynamics-2026.yml](../src/data/opportunities/special-issues/tus-geoai-urban-dynamics-2026.yml)
- [x] [tus-geoai-urban-sustainability-2026.yml](../src/data/opportunities/special-issues/tus-geoai-urban-sustainability-2026.yml)
- [x] [tus-science-new-cities-2026.yml](../src/data/opportunities/special-issues/tus-science-new-cities-2026.yml)
- [x] [tus-sensing-built-environment-2026.yml](../src/data/opportunities/special-issues/tus-sensing-built-environment-2026.yml)
- [x] [tus-sensing-world-heritage-cities-2026.yml](../src/data/opportunities/special-issues/tus-sensing-world-heritage-cities-2026.yml)
- [x] [tus-shifting-urban-lives-2026.yml](../src/data/opportunities/special-issues/tus-shifting-urban-lives-2026.yml)
- [x] [tus-shrinking-cities-data-intelligence-2026.yml](../src/data/opportunities/special-issues/tus-shrinking-cities-data-intelligence-2026.yml)
- [x] [tus-spatiotemporal-data-mining-social-sensing-2026.yml](../src/data/opportunities/special-issues/tus-spatiotemporal-data-mining-social-sensing-2026.yml)
- [x] [tus-spatiotemporal-intelligence-city-management-2026.yml](../src/data/opportunities/special-issues/tus-spatiotemporal-intelligence-city-management-2026.yml)
- [x] [tus-transport-human-mobility-2026.yml](../src/data/opportunities/special-issues/tus-transport-human-mobility-2026.yml)
- [x] [tus-urban-artificial-intelligence-2026.yml](../src/data/opportunities/special-issues/tus-urban-artificial-intelligence-2026.yml)
- [x] [tus-virtual-real-behaviours-2026.yml](../src/data/opportunities/special-issues/tus-virtual-real-behaviours-2026.yml)

