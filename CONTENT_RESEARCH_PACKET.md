# Content Research Packet — Martech + Adtech Academy

Status: complete

## Module 1
- Sources:
  1. ChiefMartec, 2025 Marketing Technology Landscape: https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/
  2. MarTechMap interactive landscape: https://martechmap.com/
- Facts/insights:
  - ChiefMartec reports 15,384 martech solutions across 49 categories in 2025, up 9% from 14,106 in 2024.
  - The landscape has grown roughly 100x since 2011, which is useful framing for why operators need stack governance, not just tool familiarity.
  - ChiefMartec removed 1,211 vendors from the prior year, an 8.6% churn rate, so operating model resilience matters as much as category coverage.
- Cold-call upgrade:
  - Your stack touches 12 vendors today. Given 8.6% annual landscape churn and 15,384 available tools, what control mechanism matters more in the next 90 days: vendor consolidation or standardised data contracts, and what metric would prove you chose correctly?

## Module 2
- Sources:
  1. Google + HubSpot first-party data case study: https://business.google.com/en-all/think/measurement/hubspot-case-study/
  2. Meta Conversions API overview: https://developers.facebook.com/docs/marketing-api/conversions-api/
- Facts/insights:
  - Google cites a 2022 survey of 11,000 people in 11 countries where 86% of consumers said they would be loyal to a brand if it was transparent about the data it collects.
  - The HubSpot case study frames first-party data as practical for midsize firms, not just enterprise teams, with CRM data feeding measurement, automation, and sync to media platforms.
  - Meta positions Conversions API as a way to send website, app, offline, and CRM events through a single server connection, which is a useful architecture pattern for event governance discussions.
- Cold-call upgrade:
  - If your launch team has one week left and conflicting schemas in product analytics, CRM, and paid media, which event source becomes system-of-record first, and how would you justify that choice using the need for transparent first-party collection plus server-side activation?

## Module 3
- Sources:
  1. Snowplow composable CDP overview: https://snowplow.io/composable-cdp
  2. AWS, Snowplow + Databricks composable CDP architecture: https://aws.amazon.com/blogs/apn/event-driven-composable-cdp-architecture-powered-by-snowplow-and-databricks/
- Facts/insights:
  - Snowplow’s positioning is explicit: use the warehouse or lake as the single source of truth, rather than adding another data silo.
  - AWS describes composable CDP architecture as a way to collect, process, and activate customer data at scale while maintaining complete data ownership and control.
  - The AWS post also notes common CDP adoption failure modes, including poor technology selection, unrealistic expectations of out-of-box capabilities, and complex integrations.
- Cold-call upgrade:
  - If the CMO wants a packaged CDP and the data team wants warehouse-first architecture, which lock-in risk would you accept explicitly: slower time-to-value, extra integration burden, or reduced data ownership, and why?

## Module 4
- Sources:
  1. IAB, ads.txt: https://www.iab.com/guidelines/ads-txt/
  2. IAB Tech Lab, sellers.json: https://iabtechlab.com/sellers-json/
- Facts/insights:
  - IAB states ads.txt exists to let publishers publicly declare authorised digital sellers, making counterfeit inventory harder to monetise.
  - IAB Tech Lab says sellers.json helps buyers verify which entities are direct sellers versus intermediaries in programmatic transactions.
  - sellers.json works alongside the OpenRTB SupplyChain object, which is useful for teaching operators how to inspect path quality instead of buying blind at exchange level.
- Cold-call upgrade:
  - CPA rises after open-exchange expansion. Before cutting spend, what would you inspect first in the supply path: missing ads.txt authorisation, opaque reseller chains in sellers.json, or both, and what threshold would trigger exclusion?

## Module 5
- Sources:
  1. Google Ads Help, consent mode: https://support.google.com/google-ads/answer/10000067?hl=en
  2. Meta Conversions API deduplication guidance: https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/
- Facts/insights:
  - Google supports two consent mode implementations: basic, which blocks tags until consent, and advanced, which loads tags with denied defaults and sends cookieless pings until choice is updated.
  - Google states advanced consent mode enables an advertiser-specific model, while basic consent mode falls back to a general model.
  - Meta recommends a redundant browser plus server setup, but requires deduplication, with event_id plus event_name listed as the recommended method.
- Cold-call upgrade:
  - For an EEA launch, would you choose basic consent mode with lower pre-consent data collection, or advanced mode with cookieless pings and better modelling, and how would you pair that with server/browser event deduplication to keep reporting trustworthy?

## Module 6
- Sources:
  1. Airbnb, How Airbnb Measures Listing Lifetime Value: https://airbnb.tech/ai-ml/how-airbnb-measures-listing-lifetime-value/
  2. Privacy Sandbox Attribution Reporting API overview: https://privacysandbox.google.com/private-advertising/attribution-reporting
- Facts/insights:
  - Airbnb separates baseline LTV, incremental LTV, and marketing-induced incremental LTV, which is a clean teaching frame for disentangling correlation from causal lift.
  - Airbnb’s simplified baseline LTV definition uses total bookings a listing will make over the next 365 days, showing how a business chooses a finite horizon rather than an abstract “lifetime”.
  - Google’s Attribution Reporting API is explicitly designed to match ad interactions with conversions without invasive cross-site tracking, which is useful for explaining why measurement triangulation is replacing deterministic certainty.
- Cold-call upgrade:
  - Paid social shows rising platform ROAS but payback is worsening. Which number would govern budget this quarter: baseline value, incremental value, or marketing-induced incremental value, and what experiment would you run to prove it?

## Module 7
- Sources:
  1. Google + HubSpot first-party data case study: https://business.google.com/en-all/think/measurement/hubspot-case-study/
  2. Netflix Help Center, recommendations system overview: https://help.netflix.com/en/node/100639
- Facts/insights:
  - The HubSpot case study argues that responsibly collected first-party data improves relevance and measurement, which maps directly to lifecycle trigger quality.
  - Netflix says recommendations draw on viewing history, similar-member behaviour, title metadata, time of day, language preference, device, and watch duration.
  - Netflix explicitly states demographic information such as age or gender is not used in recommendation decisioning, a useful prompt for discussing signal selection and restraint.
- Cold-call upgrade:
  - Activation is flat despite rising trial volume. Which signals would you trust for the first onboarding intervention: declared identity data, behavioural events, or contextual usage signals like device and session depth, and which would you deliberately exclude?

## Module 8
- Sources:
  1. Netflix Tech Blog, artwork personalization: https://netflixtechblog.com/artwork-personalization-at-netflix-c589f074ad76
  2. The New York Times native ads case study: https://admanager.google.com/home/success-stories/new-york-times-native-ads-case-study/
- Facts/insights:
  - Netflix’s artwork personalisation work is a strong example of creative variation being treated as a ranking and relevance problem, not just a design problem.
  - The New York Times built Flex Frames so one set of ad components could be recombined automatically to fit device, content context, and available space.
  - NYT’s operational issue before Ad Manager was scaling native creative without long manual production cycles, which is useful evidence that creative throughput needs governance, not just generation.
- Cold-call upgrade:
  - If creative volume increases 5x, what should be promoted as the winner: the asset with best headline CTR, the asset that improves downstream conversion in a matched context, or the component set that generalises across placements, and why?

## Module 9
- Sources:
  1. AWS, Snowplow + Databricks composable CDP architecture: https://aws.amazon.com/blogs/apn/event-driven-composable-cdp-architecture-powered-by-snowplow-and-databricks/
  2. The Trade Desk case studies index: https://www.thetradedesk.com/case-studies
- Facts/insights:
  - AWS highlights poor technology selection, unrealistic expectations, and integration complexity as recurring reasons CDP programmes underperform.
  - The Trade Desk’s case study library repeatedly frames outcomes in terms of measurable lift, incremental reach, store visits, or first-party data growth, which is the right evidence pattern for vendor evaluation criteria.
  - Several Trade Desk examples foreground data and measurement as value drivers, suggesting vendor scorecards should weight observability and controllability, not just media performance claims.
- Cold-call upgrade:
  - The board wants a 30% tooling cost cut. Which criteria stay highest-weighted in your scorecard: integration complexity, data ownership, measurable incremental lift, or procurement cost, and which vendor would fail first under that weighting?

## Module 10
- Sources:
  1. Amazon Marketing Cloud overview: https://advertising.amazon.com/solutions/products/amazon-marketing-cloud
  2. Amazon Attribution overview: https://advertising.amazon.com/solutions/products/amazon-attribution
- Facts/insights:
  - Amazon Marketing Cloud is described as a privacy-safe clean room for analysing pseudonymised signals across Amazon Ads signals plus advertiser inputs.
  - AMC now exposes 25 months of ad traffic signals, which is useful for capstone discussion on planning horizons and longitudinal measurement.
  - Amazon Attribution is free and measures how non-Amazon channels such as search, social, display, video, email, and influencer activity drive on-Amazon discovery and purchase.
- Cold-call upgrade:
  - In week one as CMO, would you align the organisation around a clean-room insight layer, a cross-channel attribution discipline, or a KPI tree first, and how would you prove that non-Amazon media is contributing to Amazon outcomes rather than merely correlating with them?
