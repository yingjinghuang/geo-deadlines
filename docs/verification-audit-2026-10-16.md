# GeoDeadlines full-source re-verification checklist — 2026-10-16

This is a **per-entry audit inventory**, not a certification that every entry has been verified. Only tick an entry after opening its current official organizer/employer/publisher source and confirming its deadline and status. A failed or blocked source must remain unchecked; do not bulk-rewrite `last_verified`.

Current baseline: 140 opportunities. Entries verified to the strict first-party standard: 124; awaiting sufficiently direct official-source confirmation: 16. All 140 have now been examined at least once in this full-catalog pass; the 16 remaining are **reviewed-but-unresolved**, not unchecked through omission.

Audit update: 2026-10-16. Latest review added 22 existing opportunities and one new verified SAGE special issue. Corrected UZH microwave remote sensing postdoc deadline (2026-09-30 → 2026-11-15), ISTA cryosphere postdoc (2026-09-30 → 2026-10-09), and clarified Wiley TGIS healthcare issue after the dedicated publisher CFP confirmed 2026-12-31.  The first seven checks were recorded in the earlier pass; later checks have been appended following direct inspection of organizer/university/publisher pages. **A checkbox means review of an available official source, not necessarily confirmation that a call is still open.**

Verification improvements in this pass: the UI now marks positions needing re-review after 14 days and other entries after 30 days, recalculating in the viewer's browser. Official university vacancy pages confirm that both tracked University of Vienna positions no longer accept applications. IJGI LLM4GIS manuscript deadline corrected from 31 August to 31 December 2026.

## Final full-catalog review outcome — 16 October 2026

- **Coverage: 140/140 individual records were examined.** In the last batch alone, each of the former 19 unchecked records was researched and classified with an evidence link and precise reason. [All 19 results, with evidence and exact blockers](final-disposition-of-19-remaining-records-2026-10-16.md).
- **Strict direct-source verified: 124/140.** The other **16** records lack sufficient direct, current primary evidence (e.g. live publisher CFP returns HTTP 403 or real official pages disagree). Their older `last_verified` fields were deliberately not advanced.
- **Three entries became fully supported on this pass:** [University of Oslo cryosphere PhD](https://euraxess.ec.europa.eu/jobs/465613) explicitly **EXPIRED** with exact 13 Oct 2026 23:00 Oslo deadline; [CEUS GeoAI/fire special issue](https://www.linkedin.com/posts/huanfa-chen_computers-environment-and-urban-systems-activity-7460639738404704256-fy-c) deadline **31 Dec 2026**; [Cities Politics of Spatial Inclusion](https://www.linkedin.com/posts/rashid-mushkani_urbanplanning-spatialjustice-righttothecity-activity-7412934995352186881-SL5D) historical deadline **31 Jan 2026**.
- **Material quality fix:** Earlier claims that Elsevier's Development CFP index says 30 Oct for the **CEUS GeoAI/fire** call were wrong: that line referred to a different adjacent special issue. Both Elsevier subject indexes and guest-editor original CFP actually confirm **31 Dec 2026**. Retracted the false conflict and reverified the correct date.
- **Do not confuse reviewed with verified.** No need to re-run the entire pass just to eliminate unchecked checkboxes; the outstanding subset is specifically an external evidence-access queue.

## Focused current-source audit — 16 October 2026 (121/140)

- **Sustainable Cities and Society — AI-Empowered Wellbeing (2026)**: [lead guest editor Lauren Andres's first-person call](https://www.linkedin.com/posts/lauren-andres-a58a02381_sustainable-cities-and-society-activity-7447894456961294336-Aw86) is directly accessible, states the exact special issue title and coeditors Li Tian/Helen Pineo, actively invites contributions, and explicitly confirms **31 December 2026**. Official original editor source now set as the canonical link, `last_verified` advanced, and the entry marked checked.
- **NEW NUS Urban Analytics Lab Research Assistant, GeoAI/GIS/Urban Flood Resilience**: the [original PI/lab job notice](https://ual.sg/opportunities/ads/2026-ra/) dated 4 October explicitly confirms **20 October 2026** as the final day (four days from this audit), Singapore campus, one-year appointment, January 2027 anticipated start, and submission through NUS Careers. Added new verified record with source and no invented cutoff hour. Note that NUS Careers does not supply a deep-link requisition URL on the lab page, and the lab's vacancies index is inconsistently indexed, so readers should use the original notice/NUS portal to confirm application availability.
- **RSE Geospatial Foundation Models special issue — IMPORTANT CORRECTION**: guest editor [Qiusheng Wu's call](https://www.linkedin.com/posts/giswqs_remotesensing-earthobservation-foundationmodels-activity-7425528504055922688-TSYw), [initiator Zhe Zhu's call](https://www.linkedin.com/posts/zhe-zhu-765bb821_remote-sensing-of-environment-activity-7425378010075258880-lX5I), and [NASA JPL's original editorial circulation](https://ecostress.jpl.nasa.gov/news/ecostress-april-may-community-updates-digest) independently give **30 June 2026**. The catalog previously displayed **31 December** based on an unsubstantiated apparent publisher-index extension; no accessible specific publisher/editor notice confirms such an extension. **Restored the verifiable June 30 historical cutoff** (passed), included a warning, and **retained the old `last_verified` / pending status** pending current publisher confirmation. In particular do not confuse this RSE special issue with an unrelated *Journal of Remote Sensing* foundation-model call whose published 31 December deadline refers to a different journal.
- **Information Geography Multimodal GeoAI**: recovered first-person calls by guest editors [Levente Juhász](https://www.linkedin.com/posts/juhaszlevente_geoai-callforpapers-cfp-activity-7480639946727329792-HIhI) and [Hao Li](https://www.linkedin.com/posts/hao-li-340868154_callforpaper-informationgeography-geoai-activity-7480626379328237569-obDd). They confirm active solicitation and the editor team; Levente notes APC support. The **1 April 2027** cutoff appears in publisher indexed search, but no directly opened guest-editor page confirms the deadline, so this record deliberately stays pending without a `last_verified` bump.
- The rest of the direct Elsevier CFP pages continue to reject access; cached publisher-index results and unaffiliated reposts are logged as corroborating evidence, **not newly completed authoritative reviews**.

## Additional original-editor recheck — 16 October 2026 (119/139)

- **CEUS — Digital Twins and AI for Healthy and Sustainable Cities**: recovered [guest editor Nick Malleson's self-published full original CFP](https://www.nickmalleson.co.uk/2025/04/CEUS-SI-DT_AI.html), directly opened and dated 25 April 2025. It states the original **30 November 2025** manuscript closing date, now past. Set primary URL to that readable organizer-authored original, recorded publisher CFP as secondary, and updated verification.
- **CEUS — Open Urban Data Science**: recovered [guest editor Filip Biljecki's NUS Urban Analytics Lab full original CFP](https://ual.sg/post/2025/05/16/call-for-papers-open-urban-data-science/), which directly states **31 May 2026**, now past. It also says papers should describe substantial open-source software (regular articles with a strong open-urban-data-science focus also welcome), not simply a normal all-topics urban paper call. Updated primary site, evidence, and verification.
- **Applied Geography — Uneven Green Transition**: **new serious official-source deadline discrepancy**. Two named guest editors posted a **30 May 2026 mandatory long-abstract pre-screen** and **30 November 2026 invited-full-paper deadline**. The more recent official ScienceDirect indexed CFP instead says **15 September 2026** for the same titled call. Recorded BOTH publisher vs guest-editor dates and the omitted abstract phase; the displayed 30 Nov is explicitly invitation-only and *not proof of open unsolicited submission*. Kept previous `last_verified` and left unchecked.
- **Cambridge Polar Studies faculty**: official Cambridge historical vacancies index and Cambridge-authorized jobs.ac.uk listing agree on **21 September 2026** for LC49794, which has passed; an unaffiliated aggregator asserts **18 October**, unsupported by Cambridge. Added authoritative source links and discrepancy warning without moving `last_verified`, since the direct current official job page is HTTP 403.
- **WACV 2027**: the event homepage now agrees with the official Dates timetable on **14 October** final decisions. The CFP and reviewer/AC guides still specify **9 October**. Preferred the two public-facing schedule pages in the displayed historical milestone, but retained the contradiction, earlier verification timestamp and unchecked audit status until organizers reconcile them. No WACV submission window remains open.

## Latest recheck — 16 October 2026 (117/139)

- **TU Berlin/BIFOLD AI Agents & Foundation Models for Earth Observation Postdoc** (IV-329/26): recovered the live, definitive [TU Berlin posting 207457](https://www.jobs.tu-berlin.de/stellenausschreibungen/207457?language=en) that replaces broken posting 206442. Official TU vacancy explicitly states **14 October 2026**, already elapsed. Updated website, source, note and `last_verified`.
- **University of Groningen Inclusive Mobility Postdoc**: recovered the employer-issued [AcademicTransfer posting V26.2353-EN](https://www.academictransfer.com/en/jobs/363322/postdoctoral-researcher-urban-design-and-inclusive-urban-mobility/), which explicitly says **applications no longer accepted**, and the [EU EURAXESS employer feed](https://euraxess.ec.europa.eu/jobs/460613) with exact cutoff **19 September 2026 22:00 UTC** = **20 September 00:00 CEST**. Corrected the old **20 September 23:59 CEST** timestamp that was 24 hours late; conflicting university faculty publicity of "20 September" is explicitly noted. Posting is now fully reviewed and marked expired.
- **Utrecht AI-driven Urban (Re)Design for Health postdoc**: current [Utrecht University jobs list](https://www.uu.nl/en/organisation/working-at-utrecht-university/jobs) no longer features it and original detail link returns 404, consistent with its **15 October 2026** final application deadline on the previously indexed official posting; no extension identified. Kept historical date and marked source review completed, without claiming the internal recruitment process is finished.
- **New and timely:** [Utrecht Postdoc on Geodata Science and GeoAI](https://www.uu.nl/en/organisation/working-at-utrecht-university/jobs/postdoc-on-geodata-science-and-geoai) for health system resilience has a **15 November 2026** deadline, confirmed on the directly accessible live university vacancy and current jobs index. Added new core-scoped verified YAML.
- The remaining publisher-blocked special issues and other unavailable institution URLs remain **unchecked**; do not re-date old records to improve progress numbers.

## Current pass findings — 16 October 2026

- **BOKU Geomatics Senior Scientist**: recovered BOKU's own published statutory vacancy PDF, reference code 160, published 18 August 2026. It explicitly gives **6 October 2026** as the deadline. Fixed the primary source URL and checked the item from BOKU's original publication; the elapsed date is not an active application offer.
- **GeoAI 2028**: the conference-series organizer Haosheng Huang directly confirmed **ECNU, Shanghai** as host, with the event dates/CFP **not yet released**. The genuine verified value is `TBD`; fixed the otherwise inaccessible primary conference URL to the organizer's direct announcement, with ECNU School official site as host evidence.
- **UiO cryosphere remote sensing PhD and postdoc** (Jobbnorge IDs 308026, 308033), and **NTNU AI climate planning PhD** (ID 306712): original publisher-operated Jobbnorge job-list feed confirms advertised 13 October (UiO) and 5 October (NTNU) 2026 deadlines; live feeds no longer list those records and detail pages aren't accessible. Recorded official feed URLs and remarks, **but kept records pending and did not refresh `last_verified`** because current vacancy/extension status cannot be confirmed.
- **CEUS GeoAI and fire-research special issue**: publisher's Development CFP index says **30 October 2026**, while its Computer Science index says **31 December 2026**. Guest editor Huanfa Chen and UCL Bartlett CASA have publicized December 31. Added both publisher-index URLs and the explicit clash to the item; restored `last_verified` to **2026-10-03**, its last pre-conflict baseline, rather than displaying a spurious fresh verification date.
- **Remote Sensing of Environment geospatial foundation-model special issue**: NASA JPL and guest editors gave **30 June 2026**, while the previously observed publisher-index date is **31 December 2026**. Its publisher live detail page remains HTTP 403, so the extension remains unresolved. Added the NASA JPL source and a prominent YAML note while preserving the old verification timestamp.



- **McGill Geography faculty JR0000078552:** the official Workday posting still shows an Apply button and **16 October 2026** as an application end date; no extension presumed.
- **Nanjing University Geography/Ocean Science faculty:** the official vacancy listing still gives **15 October 2026** with an Apply Now action; that deadline has passed and the announcement permits extension only if applicants are too few. **No extension confirmed.**
- **WACV 2027:** removed outdated prose claiming August submissions "remain open", recorded an official **3 November 2026 04:59 UTC** attendee-registration deadline, and kept the contradictory 9/14 October decision dates **unresolved** without bumping `last_verified`.
- **Removed one demonstrably misattributed special issue card:** `ufug-intelligent-sustainability-environmental-innovation-2026.yml`. The publisher catalogs the same title under *Sustainable Energy Technologies and Assessments*, with editors Foni Agus Setiawan et al. rather than the UFUG editor roster. Its metadata had combined different calls, so the inaccurate UFUG entry was removed, not cosmetically marked verified. The genuine SETA call is outside the project's geospatial core; see [unresolved-source log](unresolved-official-sources-2026-10-16.md) for provenance.
- The official ScienceDirect search index corroborates deadline dates for several remaining special issues, but direct publisher detail pages are HTTP 403; **do not convert search snippets into `last_verified` certification**.


- **124 of 140** opportunities have source evidence sufficient for full certification and **16** are reviewed but pending final authoritative confirmation.
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
- [x] [geoai-2028.yml](../src/data/opportunities/conferences/geoai-2028.yml)
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
- [x] [boku-geomatics-remote-sensing-ml-senior-scientist-2026.yml](../src/data/opportunities/positions/boku-geomatics-remote-sensing-ml-senior-scientist-2026.yml)
- [ ] [cambridge-polar-studies-assistant-professor-2026.yml](../src/data/opportunities/positions/cambridge-polar-studies-assistant-professor-2026.yml)
- [x] [colgate-climate-science-geography-assistant-professor-2026.yml](../src/data/opportunities/positions/colgate-climate-science-geography-assistant-professor-2026.yml)
- [x] [cpp-criminology-gis-spatial-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/cpp-criminology-gis-spatial-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [cpp-uas-autonomy-gis-assistant-professor-2026.yml](../src/data/opportunities/positions/cpp-uas-autonomy-gis-assistant-professor-2026.yml)
- [x] [cranfield-remote-sensing-ai-research-fellow-2026.yml](../src/data/opportunities/positions/cranfield-remote-sensing-ai-research-fellow-2026.yml)
- [x] [csuf-physical-geography-assistant-professor-2026.yml](../src/data/opportunities/positions/csuf-physical-geography-assistant-professor-2026.yml) — official source reviewed
- [x] [groningen-inclusive-urban-mobility-postdoc-2026.yml](../src/data/opportunities/positions/groningen-inclusive-urban-mobility-postdoc-2026.yml)
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
- [x] [nus-urban-flood-resilience-geoai-research-assistant-2026.yml](../src/data/opportunities/positions/nus-urban-flood-resilience-geoai-research-assistant-2026.yml) — newly discovered original NUS laboratory announcement, 20 October deadline
- [ ] [ntnu-ai-climate-risk-urban-planning-phd-2026.yml](../src/data/opportunities/positions/ntnu-ai-climate-risk-urban-planning-phd-2026.yml)
- [x] [polyu-geoai-climate-urban-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-geoai-climate-urban-research-assistant-professor-2026.yml)
- [x] [polyu-gift-geospatial-transport-phd-2026.yml](../src/data/opportunities/positions/polyu-gift-geospatial-transport-phd-2026.yml)
- [x] [polyu-low-altitude-remote-sensing-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-low-altitude-remote-sensing-research-assistant-professor-2026.yml)
- [x] [polyu-smart-cities-urban-informatics-research-assistant-professor-2026.yml](../src/data/opportunities/positions/polyu-smart-cities-urban-informatics-research-assistant-professor-2026.yml)
- [x] [qub-physical-geography-lecturer-2026.yml](../src/data/opportunities/positions/qub-physical-geography-lecturer-2026.yml)
- [x] [sjsu-urban-regional-spatial-data-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/sjsu-urban-regional-spatial-data-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [stanford-climate-science-assistant-professor-2026.yml](../src/data/opportunities/positions/stanford-climate-science-assistant-professor-2026.yml) — official source reviewed
- [x] [ttu-earth-observation-ai-phd-2026.yml](../src/data/opportunities/positions/ttu-earth-observation-ai-phd-2026.yml)
- [x] [tu-berlin-bifold-eo-ai-agents-postdoc-2026.yml](../src/data/opportunities/positions/tu-berlin-bifold-eo-ai-agents-postdoc-2026.yml)
- [x] [uci-hydrology-remote-sensing-postdoc-2026.yml](../src/data/opportunities/positions/uci-hydrology-remote-sensing-postdoc-2026.yml)
- [x] [uclouvain-physical-environment-climate-geography-academic-2026.yml](../src/data/opportunities/positions/uclouvain-physical-environment-climate-geography-academic-2026.yml)
- [x] [uf-coastal-water-remote-sensing-geospatial-analysis-assistant-professor-2026.yml](../src/data/opportunities/positions/uf-coastal-water-remote-sensing-geospatial-analysis-assistant-professor-2026.yml) — official source reviewed
- [x] [uf-remote-sensing-assistant-associate-professor-2026.yml](../src/data/opportunities/positions/uf-remote-sensing-assistant-associate-professor-2026.yml) — official source reviewed
- [x] [uh-manoa-spatial-statistics-geoai-assistant-professor-2026.yml](../src/data/opportunities/positions/uh-manoa-spatial-statistics-geoai-assistant-professor-2026.yml)
- [x] [uio-cryosphere-remote-sensing-phd-2026.yml](../src/data/opportunities/positions/uio-cryosphere-remote-sensing-phd-2026.yml)
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
- [x] [utrecht-ai-urban-redesign-health-postdoc-2026.yml](../src/data/opportunities/positions/utrecht-ai-urban-redesign-health-postdoc-2026.yml)
- [x] [utrecht-geodata-science-geoai-health-resilience-postdoc-2026.yml](../src/data/opportunities/positions/utrecht-geodata-science-geoai-health-resilience-postdoc-2026.yml) — new position: live official employer CFP, deadline 15 November 2026
- [x] [uzh-microwave-remote-sensing-water-systems-postdoc-2026.yml](../src/data/opportunities/positions/uzh-microwave-remote-sensing-water-systems-postdoc-2026.yml)
- [x] [virginia-tech-geoai-phd-2026.yml](../src/data/opportunities/positions/virginia-tech-geoai-phd-2026.yml)

## Special issues

- [x] [epb-novel-approaches-15-minute-city-2026.yml](../src/data/opportunities/special-issues/epb-novel-approaches-15-minute-city-2026.yml) — new official SAGE call verified 2026-10-16
- [x] [annals-gis-geographical-principles-2026.yml](../src/data/opportunities/special-issues/annals-gis-geographical-principles-2026.yml) — official source reviewed
- [ ] [applied-geography-uneven-green-transition-2026.yml](../src/data/opportunities/special-issues/applied-geography-uneven-green-transition-2026.yml)
- [x] [ceus-digital-twins-ai-healthy-sustainable-cities-2025.yml](../src/data/opportunities/special-issues/ceus-digital-twins-ai-healthy-sustainable-cities-2025.yml)
- [x] [ceus-geoai-fire-2026.yml](../src/data/opportunities/special-issues/ceus-geoai-fire-2026.yml)
- [x] [ceus-open-urban-data-science-2026.yml](../src/data/opportunities/special-issues/ceus-open-urban-data-science-2026.yml)
- [ ] [cities-climate-neutral-2030-2026.yml](../src/data/opportunities/special-issues/cities-climate-neutral-2030-2026.yml)
- [ ] [cities-evolution-urban-spatial-structure-2027.yml](../src/data/opportunities/special-issues/cities-evolution-urban-spatial-structure-2027.yml)
- [x] [cities-politics-spatial-inclusion-2026.yml](../src/data/opportunities/special-issues/cities-politics-spatial-inclusion-2026.yml)
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
- [x] [scs-sustainability-health-equity-ai-wellbeing-2026.yml](../src/data/opportunities/special-issues/scs-sustainability-health-equity-ai-wellbeing-2026.yml)
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

