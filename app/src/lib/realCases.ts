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
      "Map your current stack to 6 domains (data, orchestration, media, measurement, privacy, creative).",
      "Mark each tool as core, edge, or legacy.",
      "Identify 3 consolidation opportunities with low switching risk.",
    ],
    sources: [
      { label: "Chiefmartec 2025 Landscape", url: "https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/" },
    ],
  },
  "customer-data": {
    company: "HubSpot + midsize customers (Zoe Financial, Cluey Learning)",
    title: "First-party data playbook for privacy-safe performance",
    summary:
      "Think with Google highlights how midsize companies used first-party CRM data and offline conversion syncing to improve optimization quality while staying privacy-conscious.",
    whyItMatters:
      "Shows that strong customer data practice is not only for enterprise budgets, and that better lead-quality signals improve spend efficiency.",
    exercise: [
      "Define 8 first-party events your team can legally/cleanly collect now.",
      "Design offline conversion import points from CRM to ad platforms.",
      "Write a data transparency statement users can understand.",
    ],
    sources: [
      { label: "Think with Google: HubSpot first-party data case", url: "https://business.google.com/en-all/think/measurement/hubspot-case-study/" },
    ],
  },
  "crm-map-cdp": {
    company: "Auto Trader (via Snowplow composable CDP story)",
    title: "Composable CDP vs black-box CDP tradeoff",
    summary:
      "Snowplow’s composable CDP narrative includes practitioner feedback that packaged CDPs can become expensive, opaque, and hard to integrate across evolving stacks.",
    whyItMatters:
      "Architectural choice (suite vs composable) affects long-term speed, ownership, and lock-in.",
    exercise: [
      "Draft your target architecture with warehouse as source-of-truth.",
      "Set an activation SLA for audience refresh and journey triggers.",
      "Define a lock-in risk score for your top 3 platforms.",
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
      "Programmatic quality outcomes increasingly depend on transparent supply paths (ads.txt, sellers.json, supply chain object) and strong first-party context from publishers.",
    whyItMatters:
      "Buying blindly in programmatic creates fraud and quality risk. Transparency and directness improve confidence and efficiency.",
    exercise: [
      "Audit 5 partner domains for ads.txt coverage.",
      "Define a supply-path quality checklist before spend expansion.",
      "Write a policy for when to prefer direct/PMP vs open exchange.",
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
      "Create your consent-state matrix (granted/denied by purpose).",
      "Define which events must be sent server-side.",
      "Document fallback KPIs when deterministic attribution drops.",
    ],
    sources: [
      { label: "Google Ads: About consent mode", url: "https://support.google.com/google-ads/answer/10000067?hl=en" },
      { label: "Meta Conversions API docs", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/" },
    ],
  },
  measurement: {
    company: "Airbnb",
    title: "Baseline LTV vs incremental LTV vs marketing-induced incremental LTV",
    summary:
      "Airbnb describes a measurement framework that separates baseline value from cannibalization-adjusted incremental value and marketing-induced lift.",
    whyItMatters:
      "This is exactly the kind of rigor needed when platform-reported metrics and finance outcomes diverge.",
    exercise: [
      "Define baseline, incremental, and marketing-induced value for your funnel.",
      "List 3 cannibalization risks in your channels.",
      "Design one test to estimate incremental lift.",
    ],
    sources: [
      { label: "Airbnb Tech: Listing LTV framework", url: "https://airbnb.tech/ai-ml/how-airbnb-measures-listing-lifetime-value/" },
    ],
  },
  lifecycle: {
    company: "Cluey Learning (via HubSpot + Google case)",
    title: "Using first-party data to improve qualified reach and lifecycle alignment",
    summary:
      "Case evidence shows how integrating CRM and ad platform signals can tighten audience quality and support more relevant lifecycle experiences.",
    whyItMatters:
      "Lifecycle success depends on quality signals and coordination across acquisition and retention systems.",
    exercise: [
      "Map lifecycle stages to first-party signals.",
      "Define one triggered journey per stage.",
      "Add suppression rules to avoid message conflicts.",
    ],
    sources: [
      { label: "Think with Google: HubSpot first-party data case", url: "https://business.google.com/en-all/think/measurement/hubspot-case-study/" },
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
    ],
    sources: [
      { label: "Amazon Ads resource library", url: "https://advertising.amazon.com/resources/library" },
      { label: "Chiefmartec landscape context", url: "https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/" },
    ],
  },
};
