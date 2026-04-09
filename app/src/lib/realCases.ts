export type RealCase = {
  company: string;
  title: string;
  summary: string;
  whyItMatters: string;
  exercise: string[];
  sources: { label: string; url: string }[];
};

export const realCasesByModule: Record<string, RealCase> = {
  "industry-map": {
    company: "Chiefmartec Landscape (cross-industry)",
    title: "15,384 tools across 49 categories and still growing",
    summary:
      "The 2025 martech landscape documents continued growth and consolidation happening at the same time, forcing teams to intentionally design stack operating models instead of tool-by-tool decisions.",
    whyItMatters:
      "This is the systems context every operator inherits: too many options, rising integration complexity, and governance becoming a competitive advantage.",
    exercise: [
      "Map your current stack to 6 domains: data, orchestration, media, measurement, privacy, and creative.",
      "Mark each tool as core, edge, or legacy and note its owner.",
      "Identify the 3 highest-risk vendor renewals in the next 12 months.",
      "Pick one data contract to standardize before any consolidation.",
      "Write the metric that proves stack simplification improved decision speed.",
    ],
    sources: [
      { label: "Chiefmartec 2025 Landscape", url: "https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/" },
      { label: "MarTechMap interactive landscape", url: "https://martechmap.com/" },
    ],
  },
  "customer-data": {
    company: "HubSpot + first-party activation",
    title: "First-party data playbook for privacy-safe performance",
    summary:
      "Think with Google highlights how midsize companies used first-party CRM data and offline conversion syncing to improve optimization quality while staying privacy-conscious.",
    whyItMatters:
      "Shows that strong customer data practice is not only for enterprise budgets, and that better lead-quality signals improve spend efficiency.",
    exercise: [
      "Define 8 first-party events your team can legally and cleanly collect now.",
      "Rank those events by decision value for acquisition, lifecycle, and reporting.",
      "Design offline conversion import points from CRM to ad platforms.",
      "Write a transparency statement a user could actually understand.",
      "Set one QA check that blocks bad events from activation.",
    ],
    sources: [
      { label: "Think with Google: HubSpot first-party data case", url: "https://business.google.com/en-all/think/measurement/hubspot-case-study/" },
      { label: "Meta Conversions API overview", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/" },
    ],
  },
  "crm-map-cdp": {
    company: "Auto Trader and Snowplow-style composable stacks",
    title: "Composable CDP versus black-box CDP tradeoff",
    summary:
      "Snowplow’s composable CDP narrative includes practitioner feedback that packaged CDPs can become expensive, opaque, and hard to integrate across evolving stacks.",
    whyItMatters:
      "Architectural choice, suite versus composable, affects long-term speed, ownership, and lock-in.",
    exercise: [
      "Draft your target architecture with the warehouse as source of truth.",
      "Set an activation SLA for audience refresh and journey triggers.",
      "Define a lock-in risk score for your top 3 platforms.",
      "List which data should never be duplicated into the CDP.",
      "Write the decision rule for choosing hybrid over full-suite.",
    ],
    sources: [
      { label: "Snowplow composable CDP", url: "https://snowplow.io/composable-cdp" },
      { label: "AWS + Snowplow + Databricks composable architecture", url: "https://aws.amazon.com/blogs/apn/event-driven-composable-cdp-architecture-powered-by-snowplow-and-databricks/" },
    ],
  },
  "programmatic-pipes": {
    company: "The New York Times + IAB Tech Lab standards",
    title: "Supply chain transparency and first-party ad relevance",
    summary:
      "Programmatic quality outcomes increasingly depend on transparent supply paths, ads.txt, sellers.json, and supply chain object, plus strong first-party context from publishers.",
    whyItMatters:
      "Buying blindly in programmatic creates fraud and quality risk. Transparency and directness improve confidence and efficiency.",
    exercise: [
      "Audit 5 partner domains for ads.txt coverage.",
      "Check sellers.json entries for direct seller versus reseller ambiguity.",
      "Trace one impression through the supply path object.",
      "Define a supply-path quality checklist before spend expansion.",
      "Write a policy for when to prefer PMP versus open exchange.",
    ],
    sources: [
      { label: "IAB ads.txt overview", url: "https://www.iab.com/guidelines/ads-txt/" },
      { label: "IAB Tech Lab sellers.json and supply chain object", url: "https://iabtechlab.com/sellers-json/" },
      { label: "Google Ad Manager NYT success story", url: "https://admanager.google.com/home/success-stories/new-york-times-native-ads-case-study/" },
    ],
  },
  "privacy-consent": {
    company: "Google Ads + Meta ecosystem",
    title: "Consent-aware measurement and server-side resilience",
    summary:
      "Consent mode and conversion APIs are now operational requirements for retaining signal quality in privacy-constrained environments.",
    whyItMatters:
      "Privacy and performance are no longer separate workstreams. Teams that operationalize both outperform teams treating compliance as an afterthought.",
    exercise: [
      "Create your consent-state matrix by purpose and region.",
      "Define which events must be sent server-side.",
      "Document deduplication keys for critical browser and server events.",
      "Specify fallback KPIs when deterministic attribution drops.",
      "Write one launch gate that legal can actually sign off on.",
    ],
    sources: [
      { label: "Google Ads: About consent mode", url: "https://support.google.com/google-ads/answer/10000067?hl=en" },
      { label: "Meta Conversions API docs", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/" },
    ],
  },
  measurement: {
    company: "Airbnb",
    title: "Baseline LTV versus incremental LTV versus marketing-induced incremental LTV",
    summary:
      "Airbnb describes a measurement framework that separates baseline value from cannibalization-adjusted incremental value and marketing-induced lift.",
    whyItMatters:
      "This is exactly the kind of rigor needed when platform-reported metrics and finance outcomes diverge.",
    exercise: [
      "Define baseline, incremental, and marketing-induced value for your funnel.",
      "List 3 cannibalization risks in your channels.",
      "Design one holdout test to estimate incremental lift.",
      "State the metric that governs budget when reports conflict.",
      "Write the condition that would pause spend immediately.",
    ],
    sources: [
      { label: "Airbnb Tech: Listing LTV framework", url: "https://airbnb.tech/ai-ml/how-airbnb-measures-listing-lifetime-value/" },
      { label: "Privacy Sandbox Attribution Reporting API", url: "https://privacysandbox.google.com/private-advertising/attribution-reporting" },
    ],
  },
  lifecycle: {
    company: "Cluey Learning and first-party lifecycle signals",
    title: "Using first-party data to improve qualified reach and lifecycle alignment",
    summary:
      "Case evidence shows how integrating CRM and ad platform signals can tighten audience quality and support more relevant lifecycle experiences.",
    whyItMatters:
      "Lifecycle success depends on quality signals and coordination across acquisition and retention systems.",
    exercise: [
      "Map lifecycle stages to first-party signals.",
      "Define one triggered journey per stage.",
      "Add suppression rules to avoid message conflicts.",
      "Name the one behavioural signal you trust most for onboarding.",
      "Name the one signal you would exclude because it causes fatigue.",
    ],
    sources: [
      { label: "Think with Google: HubSpot first-party data case", url: "https://business.google.com/en-all/think/measurement/hubspot-case-study/" },
      { label: "Netflix recommendations overview", url: "https://help.netflix.com/en/node/100639" },
    ],
  },
  "creative-ai": {
    company: "Netflix",
    title: "Artwork personalization to improve discovery and engagement",
    summary:
      "Netflix has publicly documented personalization work where tailored artwork selection improves content relevance for different audience preferences.",
    whyItMatters:
      "Creative relevance is a growth lever, and AI-assisted personalization must be paired with rigorous testing.",
    exercise: [
      "Design a creative test matrix with 3 hypotheses.",
      "Define guardrails to prevent creative overfitting.",
      "Set promotion criteria for winning variants.",
      "Break one ad into reusable components and contexts.",
      "Check whether the winning asset improves downstream conversion or only CTR.",
    ],
    sources: [
      { label: "Netflix Tech Blog: artwork personalization", url: "https://netflixtechblog.com/artwork-personalization-at-netflix-c589f074ad76" },
      { label: "Netflix personalization help overview", url: "https://help.netflix.com/en/node/100639" },
    ],
  },
  "vendor-evaluation": {
    company: "Booking.com + Trade Desk ecosystem examples",
    title: "Scale requires disciplined experimentation and transparent buying",
    summary:
      "Booking.com is cited for building experimentation into culture at scale, while buy-side ad platforms emphasize transparency and controllability for advertisers.",
    whyItMatters:
      "Vendor selection should reward measurable learning speed, transparency, and integration fitness, not feature checklists alone.",
    exercise: [
      "Build a weighted vendor scorecard with lock-in and transparency criteria.",
      "Run a red-team review of hidden cost and data portability risk.",
      "Define a 12-month exit plan for one major platform.",
      "Set the minimum evidence a vendor needs to keep renewals alive.",
      "Decide which capability is too strategic to outsource.",
    ],
    sources: [
      { label: "Harvard case: Booking.com", url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=55158" },
      { label: "The Trade Desk case studies hub", url: "https://www.thetradedesk.com/case-studies" },
    ],
  },
  capstone: {
    company: "Amazon Ads ecosystem + your own operating model",
    title: "From isolated tactics to full-funnel operating system",
    summary:
      "Large advertisers increasingly run integrated media, measurement, and audience workflows with cross-channel tooling, requiring strong governance and decision cadence.",
    whyItMatters:
      "The capstone is about creating your own repeatable system, not copying one vendor stack.",
    exercise: [
      "Build a 90-day plan with 30/60/90 milestones and owners.",
      "Define weekly decision cadences across growth, analytics, and finance.",
      "Set one north-star metric and supporting KPI tree.",
      "Choose the first week-one operating principle and defend it.",
      "Write one proof point for cross-channel contribution.",
    ],
    sources: [
      { label: "Amazon Ads resource library", url: "https://advertising.amazon.com/resources/library" },
      { label: "Chiefmartec landscape context", url: "https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/" },
    ],
  },
};
