export type CaseStudy = {
  protagonist: string;
  context: string;
  dilemma: string;
  options: string[];
  recommendation: string;
  discussionQuestions: string[];
};

export type Module = {
  slug: string;
  title: string;
  duration: string;
  outcomes: string[];
  theory: string[];
  practical: string[];
  tools: string[];
  caseStudy: CaseStudy;
};

export const modules: Module[] = [
  {
    slug: "industry-map",
    title: "Module 1: MarTech + AdTech Industry Map",
    duration: "90 min",
    outcomes: [
      "Differentiate MarTech and AdTech responsibilities in an operating model",
      "Map stack layers from capture to activation with clear owners",
      "Explain why vendor churn changes governance priorities",
      "Set the first 90-day control mechanism for stack decisions",
    ],
    theory: [
      "Ecosystem structure, categories, and value flow",
      "Platform vs composable architecture tradeoffs",
      "Stack churn, vendor lifecycles, and renewal risk",
      "Ownership boundaries across marketing, ops, and data",
      "Control layers for data contracts, QA, and reporting",
      "Decision cadence for stack rationalization",
    ],
    practical: [
      "Create a current-state stack inventory by domain",
      "Label each tool as core, edge, or legacy",
      "Assign owners and renewal dates for every system",
      "Identify the weakest data contract in the stack",
      "Define one consolidation rule and one exception rule",
    ],
    tools: ["Miro", "Notion", "Lucidchart"],
    caseStudy: {
      protagonist: "New VP Growth at a Series B SaaS company",
      context: "CAC is rising while the team uses 27 disconnected tools.",
      dilemma: "Consolidate immediately or keep specialist tools for speed?",
      options: [
        "Buy one all-in-one cloud and migrate in 90 days",
        "Keep best-of-breed and standardize data contracts first",
        "Pause spend and redesign measurement before architecture changes",
      ],
      recommendation:
        "Standardize data contracts and reporting first, then phase consolidation by lowest switching-risk domains.",
      discussionQuestions: [
        "Your stack touches 12 vendors today. Given annual churn and category growth, what control mechanism matters more in the next 90 days: vendor consolidation or standardised data contracts?",
        "What metric would prove you chose correctly?",
        "Which system becomes the first source of truth, and who owns it?",
        "Where would you accept temporary duplication, and where would you not?",
      ],
    },
  },
  {
    slug: "customer-data",
    title: "Module 2: Customer Data Foundations",
    duration: "120 min",
    outcomes: [
      "Design a reliable event taxonomy",
      "Define identity resolution across touchpoints",
      "Implement quality and governance guardrails",
      "Choose the canonical source when schemas conflict",
    ],
    theory: [
      "First-party data architecture and transparency",
      "Identity graph basics and stitching logic",
      "Data contracts, QA, and observability",
      "System-of-record decisions under launch pressure",
      "Server-side activation patterns for trusted events",
      "Governance for schema change and versioning",
    ],
    practical: [
      "Draft an event schema for lead-to-revenue lifecycle",
      "Map anonymous-to-known transitions across touchpoints",
      "Create a data quality checklist with failure thresholds",
      "Define a schema owner and change approval path",
      "Write one reconciliation rule for analytics and CRM",
    ],
    tools: ["Segment", "RudderStack", "dbt", "BigQuery", "Snowflake"],
    caseStudy: {
      protagonist: "Head of Marketing Ops",
      context: "Web and app teams send conflicting conversion events.",
      dilemma: "Ship faster with partial fixes or halt launch to refactor tracking?",
      options: [
        "Patch in GTM only",
        "Enforce cross-team event naming contract",
        "Move all tracking to server-side immediately",
      ],
      recommendation:
        "Enforce a naming contract and QA gates first, then phase server-side migration for critical events.",
      discussionQuestions: [
        "You launch in 7 days with conflicting event definitions. What do you ship now and what do you block?",
        "Which event source becomes system-of-record first, and why?",
        "Who has final authority over schema changes?",
        "What explicit failure would stop launch?",
      ],
    },
  },
  {
    slug: "crm-map-cdp",
    title: "Module 3: CRM, MAP, and CDP Architecture",
    duration: "120 min",
    outcomes: [
      "Separate CRM, MAP, and CDP concerns",
      "Design activation and orchestration flows",
      "Evaluate composable versus packaged CDP models",
      "State the lock-in risk you will accept explicitly",
    ],
    theory: [
      "System responsibilities and integration boundaries",
      "Warehouse-native activation patterns",
      "Latency, freshness, and personalization tradeoffs",
      "Composable CDP ownership and data control",
      "Packaged platform convenience versus flexibility",
      "Failure modes in integration-heavy programmes",
    ],
    practical: [
      "Build a reference architecture diagram",
      "Define activation SLA targets by audience type",
      "Choose the canonical profile source",
      "Mark which workflows must stay real-time",
      "Set one rule for when not to replicate data",
    ],
    tools: ["Salesforce", "HubSpot", "Braze", "mParticle", "Tealium", "Snowplow"],
    caseStudy: {
      protagonist: "CTO + CMO steering committee",
      context: "Board asks for one platform to reduce cost and complexity.",
      dilemma: "Single suite purchase vs composable data-first stack.",
      options: [
        "Standardize on one suite vendor",
        "Keep warehouse as source of truth and use a light orchestration layer",
        "Hybrid: suite for CRM workflows + composable activation",
      ],
      recommendation:
        "Hybrid architecture with explicit contracts gives speed now and flexibility later.",
      discussionQuestions: [
        "Choose one architecture today: suite, composable, or hybrid. Defend your choice in one sentence.",
        "Which lock-in risk are you willing to accept this year, and which is unacceptable?",
        "What would you refuse to outsource to the vendor?",
        "Which integration would you simplify first?",
      ],
    },
  },
  {
    slug: "programmatic-pipes",
    title: "Module 4: Programmatic and Ad Delivery Mechanics",
    duration: "110 min",
    outcomes: [
      "Understand bidstream fundamentals",
      "Identify supply chain risk and fraud vectors",
      "Improve media quality controls",
      "Set a supply-path exclusion rule",
    ],
    theory: [
      "DSP, SSP, exchange, and ad server roles",
      "OpenRTB, supply chain object, and seller transparency",
      "ads.txt and sellers.json as quality controls",
      "Auction mechanics, pacing, and bid shading",
      "Reseller chains and counterfeit inventory risk",
      "Path inspection before volume expansion",
    ],
    practical: [
      "Trace one impression through the supply path",
      "Audit 5 domains for ads.txt coverage",
      "Inspect sellers.json and supply chain signals",
      "Design a quality floor for open exchange buys",
      "Write a stop-loss rule for poor inventory",
    ],
    tools: ["DV360", "The Trade Desk", "IAS", "DoubleVerify"],
    caseStudy: {
      protagonist: "Performance marketing lead",
      context: "CPA worsened after scaling open exchange inventory.",
      dilemma: "Keep scale or cut unknown supply paths and lose volume?",
      options: [
        "Optimize bids only",
        "Move budget to curated PMPs",
        "Implement strict supply path optimization and quality floor",
      ],
      recommendation:
        "Implement supply path optimization with a quality floor, then selectively reintroduce scale inventory.",
      discussionQuestions: [
        "CPA is up after exchange expansion. Do you cut volume now or keep spend while tightening supply paths?",
        "What hard quality threshold forces an immediate budget shift?",
        "Do you block on missing ads.txt, opaque reseller chains, or both?",
        "What evidence would make you restore spend?",
      ],
    },
  },
  {
    slug: "privacy-consent",
    title: "Module 5: Privacy, Consent, and Signal Resilience",
    duration: "100 min",
    outcomes: [
      "Implement consent-aware measurement",
      "Design resilient signal pipelines",
      "Map compliance obligations into system design",
      "Pair consent mode with deduplicated server events",
    ],
    theory: [
      "Consent mode patterns and defaults",
      "Client-side versus server-side collection",
      "Data minimization and retention strategy",
      "Event deduplication across browser and server",
      "Compliance as measurement design, not afterthought",
      "Modeling fallbacks when signals are missing",
    ],
    practical: [
      "Build a consent-state matrix",
      "Classify events by legal basis and purpose",
      "Define fallback measurement strategy",
      "Mark which events require server-side handling",
      "Document deduplication keys for critical events",
    ],
    tools: ["GTM Server-Side", "OneTrust", "Didomi", "Meta CAPI"],
    caseStudy: {
      protagonist: "Regional marketing director (EU launch)",
      context: "Legal requires strict consent implementation before expansion.",
      dilemma: "Comply quickly and lose attribution quality, or delay launch?",
      options: [
        "Ship with minimal tracking",
        "Build consent mode + server-side implementation",
        "Delay market launch until full stack rebuild",
      ],
      recommendation:
        "Launch with consent mode, server-side critical events, and model-based measurement fallback.",
      discussionQuestions: [
        "Legal says consent controls must go live before launch. What is your minimum viable compliant measurement stack?",
        "What performance loss will you explicitly accept to stay compliant in quarter one?",
        "Where do browser and server events need deduplication?",
        "What is your fallback metric if deterministic attribution drops?",
      ],
    },
  },
  {
    slug: "measurement",
    title: "Module 6: Attribution, MMM, and Experimentation",
    duration: "130 min",
    outcomes: [
      "Build a triangulated measurement system",
      "Design incrementality tests",
      "Use measurement for budget reallocation",
      "Choose the metric that governs spend under disagreement",
    ],
    theory: [
      "MTA limitations and bias",
      "MMM design basics",
      "Experiment hierarchy and causal inference",
      "Baseline versus incremental value",
      "Attribution triangulation under signal loss",
      "Decision rules when metrics conflict",
    ],
    practical: [
      "Draft a channel-level test plan",
      "Create an MMM input data checklist",
      "Build a budget decision tree",
      "Write one holdout design for a spend cutover",
      "Define the reporting order for platform, MMM, and experiment data",
    ],
    tools: ["GA4", "Amplitude", "Statsig", "Northbeam", "Lightweight MMM scripts"],
    caseStudy: {
      protagonist: "CFO and CMO",
      context: "Platform ROAS says up, finance says payback period worsened.",
      dilemma: "Trust platform dashboards or cut spend aggressively?",
      options: [
        "Use last-click only",
        "Run geo holdout + blend with MMM",
        "Freeze acquisition until reconciliation complete",
      ],
      recommendation:
        "Run holdout tests and triangulate with MMM before major budget cuts.",
      discussionQuestions: [
        "ROAS and payback disagree. Which source governs budget this quarter, and why?",
        "What is the first experiment you run to resolve the conflict, and what result changes spend?",
        "Which number is baseline, incremental, or marketing-induced incremental value?",
        "What would you do if the platform looked strong but holdout results were weak?",
      ],
    },
  },
  {
    slug: "lifecycle",
    title: "Module 7: Lifecycle and Journey Orchestration",
    duration: "100 min",
    outcomes: [
      "Design lifecycle funnels",
      "Build trigger-based journeys",
      "Reduce churn and message fatigue",
      "Select the signals that matter and exclude the rest",
    ],
    theory: [
      "Lifecycle stages and intent signals",
      "Journey triggers and suppression logic",
      "Messaging frequency governance",
      "Declared, behavioural, and contextual signals",
      "Signal selection for onboarding and retention",
      "Rules for exclusions and escalation",
    ],
    practical: [
      "Draft 3 lifecycle journeys",
      "Add suppression and conflict rules",
      "Define success metrics per journey",
      "List the first 5 lifecycle signals to trust",
      "Specify one signal to deliberately exclude",
    ],
    tools: ["Braze", "Iterable", "Customer.io", "HubSpot Workflows"],
    caseStudy: {
      protagonist: "Lifecycle manager",
      context: "Strong top-of-funnel growth but flat activation and retention.",
      dilemma: "Add acquisition budget or fix post-signup journey first?",
      options: [
        "Scale acquisition first",
        "Pause growth spend and rework onboarding",
        "Balanced: maintain spend while fixing activation bottlenecks",
      ],
      recommendation:
        "Balanced approach with activation metrics as the primary guardrail.",
      discussionQuestions: [
        "Trials are strong but activation is weak. Do you pause acquisition, maintain spend, or split the approach?",
        "Which activation signal in the next 14 days determines whether your decision was right?",
        "Would you trust declared identity data, behavioural events, or contextual usage signals first?",
        "What would you deliberately exclude from the trigger set?",
      ],
    },
  },
  {
    slug: "creative-ai",
    title: "Module 8: Creative Intelligence and AI Ops",
    duration: "90 min",
    outcomes: [
      "Run structured creative testing",
      "Use AI for asset generation with controls",
      "Operationalize winner promotion",
      "Judge creative on downstream outcomes, not just CTR",
    ],
    theory: [
      "Creative strategy frameworks",
      "Testing matrix design",
      "AI content operations and governance",
      "Variant promotion across placements",
      "Headline CTR versus downstream conversion",
      "Generalizable component systems",
    ],
    practical: [
      "Create a creative hypothesis backlog",
      "Define test cell and holdout logic",
      "Implement winner-promotion policy",
      "Set a rule for cross-placement reuse",
      "Tag assets by component and context",
    ],
    tools: ["Meta Ads Creative Hub", "Google Ads Asset Groups", "Canva", "Runway", "Midjourney"],
    caseStudy: {
      protagonist: "Creative lead",
      context: "Creative output increased 5x but CPAs worsened.",
      dilemma: "Scale volume further or tighten quality controls?",
      options: [
        "Maximize creative volume",
        "Reduce variants and increase strategic rigor",
        "Keep volume but enforce strict test governance",
      ],
      recommendation:
        "Keep volume, introduce strict hypothesis and promotion criteria.",
      discussionQuestions: [
        "Volume is up 5x and CPA is worse. What do you cut first: channels, variants, or hypotheses?",
        "Define the promotion rule a creative must meet before it gets scaled.",
        "Which winner matters most, headline CTR or downstream conversion?",
        "What makes a component system better than a single ad winner?",
      ],
    },
  },
  {
    slug: "vendor-evaluation",
    title: "Module 9: Vendor Evaluation and Stack Governance",
    duration: "80 min",
    outcomes: [
      "Score vendors with defensible criteria",
      "Model cost and lock-in risk",
      "Create governance for tool sprawl",
      "Protect high-value capabilities while cutting waste",
    ],
    theory: [
      "TCO and switching cost analysis",
      "Security and procurement review",
      "Capability-maturity-aligned buying",
      "Scorecards that weight observability and control",
      "Exit planning and data portability",
      "Governance for adoption, renewal, and sunset",
    ],
    practical: [
      "Build a weighted vendor scorecard",
      "Create a sunset plan for low-value tools",
      "Draft a governance charter",
      "Set the highest-weighted criteria",
      "Define one non-negotiable exit condition",
    ],
    tools: ["Airtable", "Notion", "Procurement templates"],
    caseStudy: {
      protagonist: "COO",
      context: "Board wants 30% SaaS cost reduction in 2 quarters.",
      dilemma: "Cut tools quickly or preserve experimentation velocity?",
      options: [
        "Immediate blanket reductions",
        "Capability-based consolidation",
        "Defer cuts pending revenue growth",
      ],
      recommendation:
        "Capability-based consolidation with a protected innovation budget.",
      discussionQuestions: [
        "You must cut 30% tooling cost in two quarters. Which capabilities are protected from cuts and why?",
        "Which vendor do you sunset first, and what decision criteria make that defensible to the board?",
        "Which criterion stays highest-weighted in your scorecard: integration complexity, data ownership, measurable incremental lift, or procurement cost?",
        "What would fail first under that weighting?",
      ],
    },
  },
  {
    slug: "capstone",
    title: "Module 10: Capstone Revenue Engine Plan",
    duration: "150 min",
    outcomes: [
      "Create a full-funnel operating plan",
      "Define KPI tree with owners and cadences",
      "Produce a 90-day implementation roadmap",
      "Choose the first organisational principle for week one",
    ],
    theory: [
      "Operating cadences",
      "Revenue systems design",
      "Cross-functional execution rhythms",
      "Clean-room insight layers",
      "Cross-channel attribution discipline",
      "KPI trees that connect finance and growth",
    ],
    practical: [
      "Assemble a final stack blueprint",
      "Create a KPI tree and reporting cadence",
      "Build a 90-day plan with milestones",
      "Assign weekly owners for each metric",
      "Write one executive decision rule for mixed signals",
    ],
    tools: ["Notion", "Looker Studio", "BigQuery", "Slack/Asana"],
    caseStudy: {
      protagonist: "New CMO",
      context: "One quarter to show both growth and efficiency gains.",
      dilemma: "Prioritize rapid wins or foundational fixes?",
      options: [
        "Rapid campaign wins only",
        "Foundation rebuild only",
        "Dual-track: quick wins + architecture hardening",
      ],
      recommendation:
        "Dual-track execution with hard milestone gates and explicit risk control.",
      discussionQuestions: [
        "You have 90 days as new CMO. What are your first three week-one decisions?",
        "What KPI tree aligns finance and growth, and which node is reviewed weekly at exec level?",
        "Would you start with a clean-room insight layer, attribution discipline, or KPI tree?",
        "How do you prove non-Amazon media contributes to Amazon outcomes rather than merely correlates with them?",
      ],
    },
  },
];

export const moduleBySlug = (slug: string) => modules.find((m) => m.slug === slug);
