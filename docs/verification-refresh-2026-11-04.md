# GeoDeadlines targeted official-source refresh — 4 November 2026

**Partial refresh, not a full-catalog verification.** The live catalog remains at **109** records (37 conferences, 35 positions, 36 special issues, 1 workshop). Exactly **14 existing records** were individually matched against first-party pages on 4 November: **10 conferences and 4 special issues**. The **other 95** retain older verification timestamps and remain in [issue #14](https://github.com/yingjinghuang/geo-deadlines/issues/14). Do not present a passing automatic freshness workflow as proof of source review.

## Officially confirmed conference calls

| Record | Primary source | Outcome |
| --- | --- | --- |
| [CVPR 2027](../src/data/opportunities/conferences/cvpr-2027.yml) | [Official paper CFP](https://cvpr.thecvf.com/Conferences/2027/CallForPapers), [workshop CFP](https://cvpr.thecvf.com/Conferences/2027/CallForWorkshops), [dates](https://cvpr.thecvf.com/Conferences/2027/Dates) | Added **4 Nov 2026 23:59 AoE** workshop organizer proposal. Confirmed mandatory paper enrollment **10 Nov**, paper **16 Nov**, supplement **23 Nov**. Workshop proposal is not a workshop-paper deadline. |
| [JURSE 2027](../src/data/opportunities/conferences/jurse-2027.yml) | [Important dates](https://www.jurse2027.org/important-dates/) | Full paper **17 Nov 2026**; notification **2 Feb 2027**; final submission and accepted-paper registration **22 Mar**. |
| [ICC 2027](../src/data/opportunities/conferences/icc-2027.yml) | [Official CFP](https://icc2027.org/call-for-papers/), [dates](https://icc2027.org/important-dates/) | Full paper **20 Nov 2026**, abstract **1 Dec**, related notifications and registrations unchanged. |
| [SSTD 2027](../src/data/opportunities/conferences/sstd-2027.yml) | [Organizer](https://sstdconf27.github.io/) | Round 1 abstract/paper **29 Nov / 6 Dec 2026**; Round 2 **4 Apr / 11 Apr 2027**, **23:59 AoE**; conference day range not yet set. |
| [EGU 2027](../src/data/opportunities/conferences/egu-2027.yml) | [Organizer homepage](https://www.egu27.eu/), [milestones](https://www.egu27.eu/about/deadlines_and_milestones.html) | Abstract submission is open and closes **12 Jan 2027, 13:00 CET**; financial support **1 Dec 2026 13:00 CET** is not a scientific submission. |
| [IGARSS 2027](../src/data/opportunities/conferences/igarss-2027.yml) | [Official important dates](https://2027.ieeeigarss.org/important_dates.php) | Submission system opens **10 Nov 2026**; abstract/manuscript deadline **11 Jan 2027**; accepted paper **30 Apr 2027**. Tutorial proposal **3 Nov 2026** elapsed; travel-support deadline no longer affects the general paper countdown. |
| [GIScience 2027](../src/data/opportunities/conferences/giscience-2027.yml) | [Official conference call](https://geods.github.io/GIScience2027/) | Full paper **29 Jan 2027**, workshop proposal **12 Feb**, short paper **2 Apr**, abstract/demo **14 May**, all **23:59 AoE**. Workshop proposal is a public intake milestone. |
| [Geoinformatics Research Days 2027](../src/data/opportunities/conferences/geoinformatics-research-days-2027.yml) | [Official conference](https://geoinformaticsdays.geoportti.fi/en/latest/), [submission page](https://geoinformaticsdays.geoportti.fi/en/latest/pages/submissions.html) | Session proposals opened **2 Nov 2026**; deadline **27 Nov**; abstract submission **8 Feb 2027**, notification **8 Mar**. |
| [GIS Ostrava 2027](../src/data/opportunities/conferences/gis-ostrava-2027.yml) | [Official dates](https://gisak.vsb.cz/gisostrava/dulezita-data?lang=en) | Abstract/workshop proposal **11 Dec 2026**; conditional reviewed paper **15 Jan 2027**. |
| [IOCGM 2027](../src/data/opportunities/conferences/iocgm-2027.yml) | [Official event](https://sciforum.net/event/IOCGM2027/home), [author instructions](https://sciforum.net/event/IOCGM2027/instructions-for-authors) | Abstract **20 Nov 2026** is currently open. Updated to official **23:59 AoE** precision, instead of date-only. |

## Officially confirmed journal calls

| Record | Publisher source | Manuscript deadline |
| --- | --- | --- |
| [IJDE Advancing GeoAI](../src/data/opportunities/special-issues/ijde-advancing-geoai-2026.yml) | [Taylor & Francis](https://think.taylorandfrancis.com/article_collections/advancing-geoai-from-machine-learning-to-foundation-models-for-explainable-and-generative-geospatial-intelligence/) | **31 Dec 2026** |
| [GSIS Foundation Models](../src/data/opportunities/special-issues/gsis-spatiotemporal-intelligence-foundation-models-2027.yml) | [Taylor & Francis](https://think.taylorandfrancis.com/special_issues/spatio-temporal-intelligence-foundation-models-and-applications-for-intelligent-earth-observation/) | **31 Mar 2027** |
| [Scientific Reports Geospatial Data Science](../src/data/opportunities/special-issues/scientific-reports-geospatial-data-science-2027.yml) | [Springer Nature](https://www.nature.com/collections/jcieacchei) | **22 Jan 2027**, stated open |
| [GIScience & Remote Sensing VLM](../src/data/opportunities/special-issues/gisrs-vlm-remote-sensing-imagery-2027.yml) | [Taylor & Francis](https://think.taylorandfrancis.com/article_collections/vlm-driven-intelligent-interpretation-of-remote-sensing-imagery/) | **31 May 2027** |

## Submission display logic

- Surface the nearest *actionable initial intake* instead of a later `primary` paper milestone. Use `primary` only to break exact deadline ties.
- Add `paper_registration` and public `proposal` milestone types to the main countdown. CVPR paper enrollment now appears before the later full paper.
- Exclude `revision` (available only to invited authors) and funding-only administration from general **new submission** countdowns, while keeping them in the full timeline.
- Synchronize card highlighting with the detail-page deadline selection. CHI and AGILE entries received semantic type adjustments but **were not** declared fully reverified; their last_verified dates stay 25 October.

## Remaining work

- **95 entries remain overdue**, including 35 recruitment positions; verify employer posting and application access directly before deletion. A review-begins date is not a hiring closure date.
- Recheck the dedicated publisher source for every remaining special issue; do not assume an extension from third-party summaries or a blocked URL.
- Expand 2027 GeoAI, GIScience, spatial databases, urban analytics and remote-sensing workshop discovery; add only first-party-confirmed CFPs.
- Keep [automated issue #14](https://github.com/yingjinghuang/geo-deadlines/issues/14) open until each remaining source has genuinely been reviewed; **never bulk-advance** `last_verified`.

Prepared 2026-11-04, from accessible official sources only.
