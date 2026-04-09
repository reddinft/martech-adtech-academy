export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export const quizzesByModule: Record<string, QuizQuestion[]> = {
  "industry-map": [
    {
      id: "m1q1",
      question: "What is the main risk of buying many disconnected tools without a shared data model?",
      options: ["Faster campaign launch", "Inconsistent reporting and decision errors", "Lower storage costs", "Guaranteed attribution accuracy"],
      answerIndex: 1,
      explanation: "Without shared taxonomy and ownership, metrics fragment and decisions become unreliable.",
    },
    {
      id: "m1q2",
      question: "A practical first move in stack rationalization is:",
      options: ["Replace everything with one suite immediately", "Build a core/edge/legacy inventory with owners", "Pause all acquisition activity", "Delete legacy data"],
      answerIndex: 1,
      explanation: "You need visibility and ownership before making consolidation decisions.",
    },
  ],
  "customer-data": [
    {
      id: "m2q1",
      question: "Which is foundational for reliable lifecycle analytics?",
      options: ["Creative rotation", "Consistent event taxonomy", "Daily bid adjustments", "Audience expansion only"],
      answerIndex: 1,
      explanation: "A clean taxonomy is the base layer for attribution, segmentation, and journey logic.",
    },
    {
      id: "m2q2",
      question: "Why map anonymous-to-known identity transitions?",
      options: ["To reduce page load speed", "To improve continuity across touchpoints", "To remove first-party data", "To avoid consent collection"],
      answerIndex: 1,
      explanation: "Identity transitions connect behavior before and after authentication/conversion.",
    },
  ],
  "crm-map-cdp": [
    {
      id: "m3q1",
      question: "In a composable architecture, what typically stays as source of truth?",
      options: ["Ad platform UI", "Data warehouse/lakehouse", "Email template builder", "Tag manager only"],
      answerIndex: 1,
      explanation: "Composable setups generally keep core customer data in the warehouse.",
    },
    {
      id: "m3q2",
      question: "A key tradeoff between suite and composable stack is:",
      options: ["No tradeoff exists", "Speed-to-value vs flexibility/control", "Only branding differences", "Only storage pricing"],
      answerIndex: 1,
      explanation: "Suite tools can move faster initially, while composable often improves control over time.",
    },
  ],
  "programmatic-pipes": [
    {
      id: "m4q1",
      question: "What do sellers.json and supply chain object primarily improve?",
      options: ["Creative quality", "Supply path transparency", "Landing page speed", "Email deliverability"],
      answerIndex: 1,
      explanation: "They make intermediaries and seller identities more transparent in programmatic paths.",
    },
    {
      id: "m4q2",
      question: "If CPA rises after scaling open exchange, first action should be:",
      options: ["Increase bids everywhere", "Audit supply quality and path efficiency", "Turn off all retargeting", "Stop all measurement"],
      answerIndex: 1,
      explanation: "Quality and path inefficiencies are common drivers of performance decay at scale.",
    },
  ],
  "privacy-consent": [
    {
      id: "m5q1",
      question: "Consent mode mainly helps by:",
      options: ["Designing your cookie banner", "Adapting tag behavior to user consent choices", "Replacing legal review", "Eliminating all compliance obligations"],
      answerIndex: 1,
      explanation: "Consent mode consumes consent states and modifies measurement behavior.",
    },
    {
      id: "m5q2",
      question: "A resilient signal strategy typically uses:",
      options: ["Client-side tags only", "Hybrid client + server critical events", "No event tracking", "Only modeled data"],
      answerIndex: 1,
      explanation: "Hybrid pipelines improve reliability under browser/privacy constraints.",
    },
  ],
  measurement: [
    {
      id: "m6q1",
      question: "Why combine experiments with MMM and platform reports?",
      options: ["To avoid all uncertainty", "To triangulate decision confidence", "To remove finance from planning", "To reduce campaign volume"],
      answerIndex: 1,
      explanation: "Each method has bias; triangulation improves reliability of budget decisions.",
    },
    {
      id: "m6q2",
      question: "What is incrementality testing trying to isolate?",
      options: ["Total clicks", "Causal lift beyond baseline", "Audience size", "Ad server latency"],
      answerIndex: 1,
      explanation: "Incrementality estimates the additional impact caused by marketing activity.",
    },
  ],
  lifecycle: [
    {
      id: "m7q1",
      question: "Suppression logic in journeys is used to:",
      options: ["Increase random message volume", "Prevent over-messaging and conflicts", "Disable segmentation", "Lower data quality"],
      answerIndex: 1,
      explanation: "Suppression prevents fatigue and contradictory messaging.",
    },
    {
      id: "m7q2",
      question: "If activation is weak, first fix should focus on:",
      options: ["Only top-funnel spend", "Early onboarding milestones", "Unrelated brand colors", "Removing all CRM fields"],
      answerIndex: 1,
      explanation: "Activation bottlenecks are often solved by improving early product/value moments.",
    },
  ],
  "creative-ai": [
    {
      id: "m8q1",
      question: "High creative volume without governance often causes:",
      options: ["Guaranteed CPA improvement", "Noise and poor learning quality", "Perfect attribution", "Lower compliance risk"],
      answerIndex: 1,
      explanation: "Without hypotheses and promotion rules, you get output but weak insight.",
    },
    {
      id: "m8q2",
      question: "A strong winner-promotion policy should include:",
      options: ["No thresholds", "Predefined statistical and business gates", "Only designer preference", "Single-platform results only"],
      answerIndex: 1,
      explanation: "Promotion criteria should include both significance and business impact thresholds.",
    },
  ],
  "vendor-evaluation": [
    {
      id: "m9q1",
      question: "The most useful vendor scorecard combines:",
      options: ["Brand popularity only", "Capability fit, TCO, risk, and integration effort", "Only license price", "Only UI preference"],
      answerIndex: 1,
      explanation: "Decision quality requires multidimensional criteria, not sticker price alone.",
    },
    {
      id: "m9q2",
      question: "A governance charter helps mainly by:",
      options: ["Blocking all experimentation", "Controlling tool sprawl and ownership", "Eliminating procurement", "Avoiding security review"],
      answerIndex: 1,
      explanation: "Governance clarifies adoption gates and ownership to reduce stack entropy.",
    },
  ],
  capstone: [
    {
      id: "m10q1",
      question: "In a 90-day operating plan, what should be explicit?",
      options: ["Only goals", "Owners, milestones, and success metrics", "Only vendor names", "Only ad creatives"],
      answerIndex: 1,
      explanation: "Execution requires clear ownership and measurable checkpoints.",
    },
    {
      id: "m10q2",
      question: "A dual-track plan means:",
      options: ["Ignore fundamentals", "Run quick wins while hardening architecture", "Do only research", "Delay all campaign activity"],
      answerIndex: 1,
      explanation: "Dual-track balances immediate impact with long-term system health.",
    },
  ],
};
