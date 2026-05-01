export type NetworkIcon =
  | "me"
  | "mortarboard"
  | "supervisor"
  | "research"
  | "consulting"
  | "institution"
  | "team"
  | "product"
  | "manuscript"
  | "trophy"
  | "users";

export interface NetworkNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: NetworkIcon;
  /** 0..1 normalised x within the modal canvas */
  x: number;
  /** 0..1 normalised y within the modal canvas */
  y: number;
}

export interface NetworkEdge {
  from: string;
  to: string;
  /** Hover-revealed description of the relationship */
  label: string;
}

export interface RoleNetwork {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}

export interface Role {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
  deliverables: string[];
  tags: string[];
  accent: string;
  link?: string;
  featured?: boolean;
  network?: RoleNetwork;
}

export const researchRoles: Role[] = [
  {
    id: "nourish-lead",
    title: "Lead Research Coordinator",
    organization: "NOURISH / Stanford Prevention Research Center",
    period: "Dec 2025 – present",
    location: "Stanford, CA",
    summary:
      "Coordinating the teaching-kitchen intervention manuscript and precision-nutrition research agenda for a community-embedded behavior-change program.",
    deliverables: [
      "Teaching kitchen manuscript (in prep) — lead authorship",
      "Recruitment + curriculum fidelity across cohorts",
      "Behavior-change evaluation frameworks",
    ],
    tags: ["Precision Nutrition", "Behavior Change", "Community Health"],
    accent: "from-emerald-500 to-lime-400",
    link: "/project/nourish-meal-explorer",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "pi", label: "Stanford PRC PIs", sublabel: "Investigators on the trial", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "manuscript", label: "Teaching-kitchen manuscript", sublabel: "Lead authorship — in prep", icon: "manuscript", x: 0.16, y: 0.5 },
        { id: "cohorts", label: "Community cohorts", sublabel: "Recruitment + curriculum fidelity", icon: "users", x: 0.84, y: 0.5 },
        { id: "team", label: "Cross-disciplinary team", sublabel: "RDs, behaviour-change, MD investigators", icon: "team", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "pi", label: "Reporting to Stanford PRC PIs on protocol fidelity and study design" },
        { from: "me", to: "manuscript", label: "Lead-authoring the teaching-kitchen intervention manuscript (in prep)" },
        { from: "me", to: "cohorts", label: "Coordinating recruitment and curriculum fidelity across community cohorts" },
        { from: "me", to: "team", label: "Working alongside dietitians, behaviour-change designers, and MD investigators" },
      ],
    },
  },
  {
    id: "han-lab",
    title: "Research Assistant",
    organization: "Han Lab / Stanford School of Medicine",
    period: "Mar 2025 – present",
    location: "Stanford, CA",
    summary:
      "Lung-cancer ML work with Prof. Summer Han — EGFR tumor-burden annotation and translating signal-rich oncology outputs into usable precision-care reasoning.",
    deliverables: [
      "Tumor burden annotation pipeline",
      "EGFR mutation sub-cohort analysis",
      "Preparation of manuscript drafts",
    ],
    tags: ["Precision Oncology", "Clinical ML", "Annotation"],
    accent: "from-rose-500 to-orange-400",
    link: "/project/precision-oncology",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "pi", label: "Prof. Summer Han", sublabel: "Stanford School of Medicine PI", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "pipeline", label: "Annotation pipeline", sublabel: "Tumour-burden labelling at scale", icon: "research", x: 0.16, y: 0.5 },
        { id: "egfr", label: "EGFR sub-cohort", sublabel: "Mutation-stratified analysis", icon: "research", x: 0.84, y: 0.5 },
        { id: "manuscripts", label: "Manuscript drafts", sublabel: "Co-authoring oncology outputs", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "pi", label: "Reporting to Prof. Summer Han on the lung-cancer ML programme" },
        { from: "me", to: "pipeline", label: "Built the tumour-burden annotation pipeline" },
        { from: "me", to: "egfr", label: "EGFR mutation sub-cohort analysis and modelling" },
        { from: "me", to: "manuscripts", label: "Co-authoring precision-oncology manuscript drafts" },
      ],
    },
  },
  {
    id: "microsoft-hfte",
    title: "Project Manager",
    organization: "Microsoft / Stanford Healthcare from the Eye",
    period: "Jan 2025 – present",
    location: "Stanford, CA",
    summary:
      "Retinal AI device development — coordinating clinical validation, vendor interfaces, and deployment planning for a global oculomics screening product.",
    deliverables: [
      "Validation protocol + IRB",
      "Cross-team product roadmap",
      "Global deployment readiness framework",
    ],
    tags: ["Oculomics", "Clinical AI", "Medical Devices"],
    accent: "from-cyan-500 to-blue-500",
    link: "/project/healthcare-from-the-eye",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "stanford", label: "Stanford clinical team", sublabel: "Validation site investigators", icon: "institution", x: 0.5, y: 0.16 },
        { id: "microsoft", label: "Microsoft Health", sublabel: "Engineering + product", icon: "team", x: 0.84, y: 0.5 },
        { id: "irb", label: "Validation + IRB", sublabel: "Protocol drafting & approval", icon: "research", x: 0.16, y: 0.5 },
        { id: "lmic", label: "Global LMIC deployment", sublabel: "Partner health systems", icon: "institution", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "stanford", label: "Aligning Stanford clinical leads on the validation programme" },
        { from: "me", to: "microsoft", label: "Coordinating Microsoft engineering and product on the device" },
        { from: "me", to: "irb", label: "Drafting the validation protocol and IRB submissions" },
        { from: "me", to: "lmic", label: "Building the global deployment readiness framework for LMICs" },
      ],
    },
  },
  {
    id: "anu-nceph",
    title: "Research Assistant",
    organization: "ANU National Centre for Epidemiology & Population Health",
    period: "Nov 2022 – Jan 2025",
    location: "Canberra, Australia",
    summary:
      "Implementation-focused work on Aboriginal preventive chronic-disease care, plus TB meta-analysis and cancer-symptom-burden research. Mentored PhD students through publication.",
    deliverables: [
      "3 peer-reviewed publications",
      "Meta-analysis protocols + PRISMA workflows",
      "PhD-student mentoring → first-author outputs",
    ],
    tags: ["Indigenous Health", "Implementation", "Meta-analysis"],
    accent: "from-fuchsia-500 to-purple-500",
    link: "/project/indigenous-preventive-care",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        {
          id: "supervisor",
          label: "Supervisor",
          sublabel: "Head of MAE Masters program",
          icon: "supervisor",
          x: 0.5,
          y: 0.14,
        },
        {
          id: "outputs",
          label: "Research outputs",
          sublabel: "Consulting + research projects",
          icon: "research",
          x: 0.78,
          y: 0.3,
        },
        {
          id: "phd",
          label: "PhD student",
          sublabel: "Mentored to first-author publication",
          icon: "mortarboard",
          x: 0.5,
          y: 0.86,
        },
      ],
      edges: [
        {
          from: "me",
          to: "supervisor",
          label: "Worked under the Head of MAE Masters in Applied Epidemiology",
        },
        {
          from: "supervisor",
          to: "outputs",
          label: "Producing research for consulting work and research projects",
        },
        {
          from: "me",
          to: "phd",
          label: "Teaching research skills, meta-analysis, and scoping review methods",
        },
      ],
    },
  },
  {
    id: "who-goarn",
    title: "Research Consultant",
    organization: "WHO Global Outbreak Alert and Response Network",
    period: "Jan 2022 – Nov 2022",
    location: "Remote / Geneva",
    summary:
      "Contributed to GOARN 2022–26 Strategic Plan and WPSAR paper on ML-enabled infectious-disease surveillance — connecting counterterrorism analytical methods to public-health response.",
    deliverables: [
      "GOARN 2022–26 Strategic Plan contributions",
      "WPSAR journal paper (2024)",
      "Surveillance-analytics review",
    ],
    tags: ["Global Health", "Surveillance", "ML"],
    accent: "from-slate-700 to-slate-500",
    link: "/project/biothreat-modelling",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "goarn", label: "WHO GOARN secretariat", sublabel: "Geneva — global outbreak response", icon: "institution", x: 0.5, y: 0.16 },
        { id: "strategy", label: "GOARN 2022–26 plan", sublabel: "Strategic-plan contributions", icon: "manuscript", x: 0.16, y: 0.5 },
        { id: "wpsar", label: "WPSAR paper (2024)", sublabel: "ML for outbreak surveillance", icon: "manuscript", x: 0.84, y: 0.5 },
        { id: "ml", label: "Surveillance analytics", sublabel: "Counterterrorism methods → public health", icon: "research", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "goarn", label: "Reporting into the WHO GOARN secretariat in Geneva" },
        { from: "me", to: "strategy", label: "Drafting sections of the GOARN 2022–26 Strategic Plan" },
        { from: "me", to: "wpsar", label: "Co-authored WPSAR paper on ML-enabled outbreak surveillance" },
        { from: "me", to: "ml", label: "Bridging counterterrorism analytics with public-health surveillance" },
      ],
    },
  },
];

export const industryRoles: Role[] = [
  {
    id: "nourish-founder",
    title: "Co-founder / Product Lead",
    organization: "NOURISH",
    period: "Ongoing",
    location: "Stanford / Distributed",
    summary:
      "Precision-nutrition product built around a teaching-kitchen intervention. Behavior-change design meets adaptive recommendation for culturally relevant preventive care.",
    deliverables: [
      "Meal-explorer prototype",
      "AI chef demo + storyboarding",
      "Clinical research pipeline alignment",
    ],
    tags: ["Product", "Nutrition", "Consumer Health"],
    accent: "from-emerald-500 to-lime-400",
    link: "/project/nourish-meal-explorer",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "cofounders", label: "Co-founders", sublabel: "Stanford-affiliated team", icon: "team", x: 0.5, y: 0.16 },
        { id: "product", label: "Meal Explorer + AI chef", sublabel: "Prototype + demo", icon: "product", x: 0.16, y: 0.5 },
        { id: "prc", label: "Stanford PRC", sublabel: "Clinical research alignment", icon: "institution", x: 0.84, y: 0.5 },
        { id: "users", label: "Community users", sublabel: "Culturally-grounded behaviour change", icon: "users", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "cofounders", label: "Co-founding NOURISH alongside a Stanford-affiliated team" },
        { from: "me", to: "product", label: "Leading product, design, and the AI features" },
        { from: "me", to: "prc", label: "Aligning the product with the Stanford PRC clinical research pipeline" },
        { from: "me", to: "users", label: "Designing for community-grounded, culturally-relevant behaviour change" },
      ],
    },
  },
  {
    id: "sous",
    title: "Founder",
    organization: "Sous",
    period: "Ongoing",
    location: "Distributed",
    summary:
      "Cooking-confidence platform — Duolingo-for-cooking. Users type a craving or photograph a dish; the app returns intelligently paired sides with guided cooking.",
    deliverables: [
      "Craving parser + pairing engine",
      "Guided cook flow",
      "Skill-tree progression design",
    ],
    tags: ["Consumer AI", "Product", "Vision"],
    accent: "from-orange-500 to-amber-400",
    link: "/project/swaad",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "engineering", label: "Engineering team", sublabel: "Vision + craving-parser stack", icon: "team", x: 0.5, y: 0.16 },
        { id: "product", label: "Sous app", sublabel: "Guided cook flow + skill tree", icon: "product", x: 0.16, y: 0.5 },
        { id: "engine", label: "Pairing engine", sublabel: "Side-recommendation logic", icon: "research", x: 0.84, y: 0.5 },
        { id: "users", label: "Home cooks", sublabel: "First-time-confident users", icon: "users", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "engineering", label: "Leading engineering on vision parsing and craving-to-recipe stack" },
        { from: "me", to: "product", label: "Designing the Sous guided-cook product and skill-tree progression" },
        { from: "me", to: "engine", label: "Designed the side-pairing recommendation engine" },
        { from: "me", to: "users", label: "Building cooking confidence for first-time home cooks" },
      ],
    },
  },
  {
    id: "adcem-seed",
    title: "SEED Consultant",
    organization: "Adcem Pharma / Stanford GSB SEED",
    period: "Apr – Dec 2025",
    location: "Lagos, Nigeria",
    summary:
      "Dialysis joint-venture go-to-market and product strategy for a Nigerian medical-device entrant — financial models, market sizing, and clinical operating plan.",
    deliverables: [
      "JV financial model",
      "Market-entry strategy",
      "Product/ops playbook",
    ],
    tags: ["Global Health", "Med Devices", "GTM"],
    accent: "from-yellow-500 to-orange-500",
    link: "/project/dialysis-device-gtm",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "seed", label: "Stanford SEED partners", sublabel: "GSB engagement leads", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "adcem", label: "Adcem Pharma", sublabel: "Nigerian dialysis JV", icon: "institution", x: 0.84, y: 0.5 },
        { id: "model", label: "JV financial model", sublabel: "Market sizing + unit economics", icon: "research", x: 0.16, y: 0.5 },
        { id: "lagos", label: "Lagos clinical sites", sublabel: "Operating-plan rollout", icon: "institution", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "seed", label: "Stanford GSB SEED engagement under partner-team mentorship" },
        { from: "me", to: "adcem", label: "Working alongside Adcem Pharma on the dialysis JV" },
        { from: "me", to: "model", label: "Built the JV financial model and market-sizing analysis" },
        { from: "me", to: "lagos", label: "Mapped the clinical operating plan for Lagos rollout" },
      ],
    },
  },
  {
    id: "genierx-hsil",
    title: "Founder / Team Lead",
    organization: "GenieRX / Harvard HSIL",
    period: "Apr – Jun 2025",
    location: "Boston, MA",
    summary:
      "Pharmacogenomics AI-prescribing app — placed 7th of 3,500 teams in the Harvard HSIL competition, leading to invitation into the Venture Building Program.",
    deliverables: [
      "PGx CDS prototype",
      "4-round competition deck + financial model",
      "Clinical validation plan",
    ],
    tags: ["PGx", "Clinical AI", "Competition"],
    accent: "from-sky-500 to-violet-500",
    link: "/project/pgx-llm-copilot",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "hsil", label: "Harvard HSIL", sublabel: "Faculty + judging panel", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "team", label: "Founding team", sublabel: "Co-builders across 4 rounds", icon: "team", x: 0.84, y: 0.5 },
        { id: "prototype", label: "GenieRX prototype", sublabel: "PGx clinical-decision support", icon: "product", x: 0.16, y: 0.5 },
        { id: "outcome", label: "7 of 3,500", sublabel: "Invited to Venture Building Program", icon: "trophy", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "hsil", label: "Pitched to Harvard HSIL faculty and judges across four rounds" },
        { from: "me", to: "team", label: "Led the founding team through the four-round competition" },
        { from: "me", to: "prototype", label: "Built the PGx clinical-decision-support prototype" },
        { from: "me", to: "outcome", label: "Placed 7th of 3,500 teams → invited into HSIL Venture Building Program" },
      ],
    },
  },
  {
    id: "stanford-hospital-consulting",
    title: "Quality Improvement Consultant",
    organization: "Stanford Hospital",
    period: "Mar – Jun 2025",
    location: "Stanford, CA",
    summary:
      "Pediatric ENT readmission-reduction quality-improvement engagement — workflow redesign, discharge-reliability protocols, and readmission-risk screening.",
    deliverables: [
      "Readmission-reduction playbook",
      "Discharge reliability protocol",
      "ENT platform concept",
    ],
    tags: ["QI", "Pediatrics", "Health Systems"],
    accent: "from-blue-500 to-indigo-500",
    link: "/project/ent-readmission-platform",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "ent", label: "Pediatric ENT leads", sublabel: "Stanford Hospital clinicians", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "discharge", label: "Discharge protocol", sublabel: "Reliability redesign", icon: "research", x: 0.16, y: 0.5 },
        { id: "screen", label: "Risk screening", sublabel: "Readmission-risk tool", icon: "research", x: 0.84, y: 0.5 },
        { id: "platform", label: "ENT platform concept", sublabel: "Long-term system play", icon: "product", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "ent", label: "Working alongside Stanford pediatric ENT clinical leads" },
        { from: "me", to: "discharge", label: "Drafted the discharge-reliability protocol" },
        { from: "me", to: "screen", label: "Designed the readmission-risk screening tool" },
        { from: "me", to: "platform", label: "Concept for an ENT readmission-prevention platform" },
      ],
    },
  },
  {
    id: "aetherai-healthrex",
    title: "Clinical AI Commercialization Fellow",
    organization: "AetherAI / Stanford HealthRex",
    period: "Jan – Mar 2025",
    location: "Stanford, CA",
    summary:
      "Commercialization strategy for clinical AI — ran a 50-clinician survey, competitive landscape, and FDA/reimbursement pathway analysis.",
    deliverables: [
      "50-person clinician survey",
      "Competitive + regulatory landscape",
      "Commercialization roadmap",
    ],
    tags: ["Clinical AI", "Commercialization", "Regulatory"],
    accent: "from-fuchsia-500 to-purple-500",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "aether", label: "AetherAI team", sublabel: "Commercialization leads", icon: "team", x: 0.5, y: 0.16 },
        { id: "healthrex", label: "Stanford HealthRex", sublabel: "Faculty mentorship", icon: "supervisor", x: 0.84, y: 0.5 },
        { id: "survey", label: "Clinician survey", sublabel: "50-person needs assessment", icon: "research", x: 0.16, y: 0.5 },
        { id: "regulatory", label: "Regulatory pathway", sublabel: "FDA + reimbursement analysis", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "aether", label: "Embedded with the AetherAI commercialization team" },
        { from: "me", to: "healthrex", label: "Mentored by Stanford HealthRex faculty across the engagement" },
        { from: "me", to: "survey", label: "Ran a 50-clinician needs-assessment survey" },
        { from: "me", to: "regulatory", label: "FDA and reimbursement pathway analysis for the commercialization roadmap" },
      ],
    },
  },
  {
    id: "microsoft-hfte-industry",
    title: "Global Deployment Lead",
    organization: "Microsoft Healthcare from the Eye",
    period: "Jan 2025 – present",
    location: "Stanford / Microsoft",
    summary:
      "Commercial-side work on a retinal AI screening device — global deployment planning across LMIC partner networks and hospital system integration.",
    deliverables: [
      "Deployment readiness framework",
      "Partner health-system alignment",
      "Regulatory pathway scan",
    ],
    tags: ["Oculomics", "Deployment", "Global"],
    accent: "from-cyan-500 to-blue-500",
    link: "/project/healthcare-from-the-eye",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "msft", label: "Microsoft Health", sublabel: "Commercial leadership", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "lmic", label: "LMIC partners", sublabel: "Health-system networks", icon: "institution", x: 0.84, y: 0.5 },
        { id: "hospitals", label: "Hospital integrations", sublabel: "System-level rollout playbook", icon: "institution", x: 0.16, y: 0.5 },
        { id: "regulatory", label: "Regulatory scan", sublabel: "Cross-jurisdiction pathway", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "msft", label: "Aligning with Microsoft Health commercial leadership on deployment" },
        { from: "me", to: "lmic", label: "Partnership scoping across LMIC health-system networks" },
        { from: "me", to: "hospitals", label: "Built the hospital-system integration playbook" },
        { from: "me", to: "regulatory", label: "Cross-jurisdiction regulatory scan for global rollout" },
      ],
    },
  },
  {
    id: "stanford-xr",
    title: "Team Lead",
    organization: "Stanford XR Hackathon",
    period: "2024",
    location: "Stanford, CA",
    summary:
      "1st place Social Good, 3rd place BCI, Overall Finalist — built immersive health-tech prototypes in 48 hours with interdisciplinary teams.",
    deliverables: [
      "1st place Social Good track",
      "3rd place BCI track",
      "Overall Finalist",
    ],
    tags: ["XR", "BCI", "Hackathon"],
    accent: "from-rose-500 to-pink-500",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "team", label: "Build team", sublabel: "Interdisciplinary co-builders", icon: "team", x: 0.5, y: 0.16 },
        { id: "social", label: "Social Good prototype", sublabel: "1st place track", icon: "trophy", x: 0.16, y: 0.5 },
        { id: "bci", label: "BCI prototype", sublabel: "3rd place track", icon: "trophy", x: 0.84, y: 0.5 },
        { id: "finalist", label: "Overall Finalist", sublabel: "Across the full hackathon", icon: "trophy", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "team", label: "Led an interdisciplinary build team across 48 hours" },
        { from: "me", to: "social", label: "1st place Social Good — built an immersive health-tech prototype" },
        { from: "me", to: "bci", label: "3rd place BCI — neural-interface prototype with the team" },
        { from: "me", to: "finalist", label: "Overall Finalist across the entire Stanford XR Hackathon" },
      ],
    },
  },
  {
    id: "nora",
    title: "Advisor",
    organization: "NORA",
    period: "Ongoing",
    location: "Distributed",
    summary:
      "Early-stage startup advisory — product strategy, clinical partnerships, and fundraising narrative for a health-adjacent consumer concept.",
    deliverables: [
      "Product/clinical strategy memos",
      "Fundraising narrative",
      "Partnership intros",
    ],
    tags: ["Advisory", "Early Stage", "Consumer"],
    accent: "from-teal-500 to-emerald-500",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "founders", label: "NORA founders", sublabel: "Early-stage founding team", icon: "team", x: 0.5, y: 0.16 },
        { id: "strategy", label: "Strategy memos", sublabel: "Product + clinical direction", icon: "manuscript", x: 0.16, y: 0.5 },
        { id: "fundraise", label: "Fundraising narrative", sublabel: "Investor story shaping", icon: "manuscript", x: 0.84, y: 0.5 },
        { id: "partners", label: "Healthcare partners", sublabel: "Introductions + scoping", icon: "institution", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "founders", label: "Advising the NORA founding team on early-stage strategy" },
        { from: "me", to: "strategy", label: "Writing product and clinical strategy memos" },
        { from: "me", to: "fundraise", label: "Shaping the investor narrative and fundraising story" },
        { from: "me", to: "partners", label: "Healthcare partnership introductions and scoping" },
      ],
    },
  },
];
