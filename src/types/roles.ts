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
    title: "Student Project Manager",
    organization: "Microsoft / Stanford Medicine HFTE Initiative",
    period: "Jan 2025 – present",
    location: "Stanford, CA",
    summary:
      "Led a student team investigating health-systems operations development for an oculomics medical device, and contributed to manuscript development on its disruptive potential in ophthalmology and primary care.",
    deliverables: [
      "Health-systems operations analysis",
      "Student-team coordination",
      "Manuscript on disruptive potential",
    ],
    tags: ["Oculomics", "Health Systems", "Medical Devices"],
    accent: "from-cyan-500 to-blue-500",
    link: "/project/healthcare-from-the-eye",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "hfte", label: "HFTE Initiative", sublabel: "Microsoft / Stanford Medicine", icon: "institution", x: 0.5, y: 0.16 },
        { id: "team", label: "Student team", sublabel: "Led the investigation", icon: "team", x: 0.84, y: 0.5 },
        { id: "ops", label: "Health-systems ops", sublabel: "Oculomics device pathways", icon: "research", x: 0.16, y: 0.5 },
        { id: "manuscript", label: "Manuscript", sublabel: "Ophthalmology + primary care", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "hfte", label: "Project under the Microsoft / Stanford Medicine HFTE Initiative" },
        { from: "me", to: "team", label: "Led a student team through the investigation" },
        { from: "me", to: "ops", label: "Investigated health-systems operations for the oculomics device" },
        { from: "me", to: "manuscript", label: "Contributed to a manuscript on its disruptive potential in ophthalmology and primary care" },
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
    title: "Lead Research Coordinator",
    organization: "NOURISH · Stanford Medicine",
    period: "Ongoing",
    location: "Stanford / Distributed",
    summary:
      "Coordinating a precision-nutrition program built around a teaching-kitchen intervention — behavior-change design meets adaptive recommendation for culturally relevant preventive care.",
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
        { id: "cofounders", label: "Stanford-affiliated team", sublabel: "Cross-disciplinary NOURISH team", icon: "team", x: 0.5, y: 0.16 },
        { id: "product", label: "Meal Explorer + AI chef", sublabel: "Prototype + demo", icon: "product", x: 0.16, y: 0.5 },
        { id: "prc", label: "Stanford PRC", sublabel: "Clinical research alignment", icon: "institution", x: 0.84, y: 0.5 },
        { id: "users", label: "Community users", sublabel: "Culturally-grounded behaviour change", icon: "users", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "cofounders", label: "Coordinating across the Stanford-affiliated NOURISH team" },
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
    title: "Product Management / BD Intern",
    organization: "Adcem Fidson JV · Stanford GSB SEED",
    period: "Apr – Dec 2025",
    location: "Nigeria",
    summary:
      "Worked on an affordable home peritoneal dialysis platform in Nigeria — pilot planning, clinical advisory work, implementation strategy, financial modelling, partnership documents, audits, and supply-chain planning.",
    deliverables: [
      "Financial modelling + partnership documents",
      "Pilot planning & implementation strategy",
      "Supply-chain planning + audits",
    ],
    tags: ["Global Health", "Med Devices", "Implementation"],
    accent: "from-yellow-500 to-orange-500",
    link: "/project/dialysis-device-gtm",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "seed", label: "Stanford GSB SEED", sublabel: "Program host", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "adcem", label: "Adcem Fidson JV", sublabel: "Home peritoneal dialysis, Nigeria", icon: "institution", x: 0.84, y: 0.5 },
        { id: "model", label: "Financial model + partnerships", sublabel: "Modelling, partnership docs, audits", icon: "research", x: 0.16, y: 0.5 },
        { id: "supply", label: "Pilot + supply chain", sublabel: "Implementation & supply-chain planning", icon: "institution", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "seed", label: "Internship through the Stanford GSB SEED Program" },
        { from: "me", to: "adcem", label: "Working on the Adcem Fidson JV home peritoneal dialysis platform" },
        { from: "me", to: "model", label: "Financial modelling, partnership documents, and audits" },
        { from: "me", to: "supply", label: "Pilot planning, implementation strategy, and supply-chain planning" },
      ],
    },
  },
  {
    id: "genierx-hsil",
    title: "GenieRX Team Leader → Director",
    organization: "Harvard HSIL — Hackathon + Venture Incubation",
    period: "Apr – Jun 2025",
    location: "Harvard T.H. Chan School of Public Health",
    summary:
      "Led a five-person team building an LLM pharmacogenomics tool for gene-guided prescribing — placed 2nd nationally (USA) and 7th of 3,500 teams globally, then directed GenieRX through the HSIL Venture Incubation Program.",
    deliverables: [
      "LLM pharmacogenomics prescribing tool",
      "2nd nationally (USA) · 7th of 3,500 globally",
      "Venture Incubation Program (Director)",
    ],
    tags: ["PGx", "Clinical AI", "Venture"],
    accent: "from-sky-500 to-violet-500",
    link: "/project/pgx-llm-copilot",
    featured: true,
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "hsil", label: "Harvard HSIL", sublabel: "Hackathon + incubation host", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "team", label: "Five-person team", sublabel: "Led through the hackathon", icon: "team", x: 0.84, y: 0.5 },
        { id: "prototype", label: "GenieRX tool", sublabel: "LLM gene-guided prescribing", icon: "product", x: 0.16, y: 0.5 },
        { id: "outcome", label: "2nd US · 7th / 3,500", sublabel: "→ HSIL Venture Incubation Program", icon: "trophy", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "hsil", label: "Competed in the Harvard HSIL hackathon and venture incubation program" },
        { from: "me", to: "team", label: "Led a five-person team developing the tool" },
        { from: "me", to: "prototype", label: "Built an LLM pharmacogenomics tool for gene-guided prescribing" },
        { from: "me", to: "outcome", label: "2nd nationally (USA), 7th of 3,500 globally → directed GenieRX through HSIL Venture Incubation" },
      ],
    },
  },
  {
    id: "stanford-hospital-consulting",
    title: "Student Consultant",
    organization: "Stanford Health Consulting Group",
    period: "Mar – Jun 2025",
    location: "Stanford Hospital · Hospital Medicine",
    summary:
      "Led a consulting project to reduce medical readmissions at Stanford Hospital (Quality for Hospital Medicine, Department of Medicine) — stakeholder interviews, survey analysis, workflow review, and strategic recommendations.",
    deliverables: [
      "Stakeholder interviews + survey analysis",
      "Workflow review",
      "Strategic readmission-reduction recommendations",
    ],
    tags: ["Consulting", "Readmissions", "Health Systems"],
    accent: "from-blue-500 to-indigo-500",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "leads", label: "Hospital Medicine leads", sublabel: "Stanford Hospital, Dept. of Medicine", icon: "supervisor", x: 0.5, y: 0.16 },
        { id: "interviews", label: "Stakeholder interviews", sublabel: "Frontline + leadership", icon: "research", x: 0.16, y: 0.5 },
        { id: "survey", label: "Survey + workflow review", sublabel: "Quantitative + process analysis", icon: "research", x: 0.84, y: 0.5 },
        { id: "recs", label: "Strategic recommendations", sublabel: "Readmission-reduction plan", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "leads", label: "Engagement for Quality in Hospital Medicine, Department of Medicine" },
        { from: "me", to: "interviews", label: "Conducted stakeholder interviews across the service" },
        { from: "me", to: "survey", label: "Survey analysis and workflow review" },
        { from: "me", to: "recs", label: "Delivered strategic recommendations to reduce medical readmissions" },
      ],
    },
  },
  {
    id: "aetherai-healthrex",
    title: "Student Project Manager",
    organization: "Stanford Health Consulting Group · Aether AI",
    period: "Jan – Mar 2025",
    location: "Stanford HealthREx Lab",
    summary:
      "Led a consulting project evaluating the commercial viability of AetherAI — stakeholder interviews, patient and clinician needs analysis, commercial strategy, market positioning, and regulatory considerations.",
    deliverables: [
      "Stakeholder interviews + clinician needs analysis",
      "Commercial strategy & market positioning",
      "Regulatory considerations",
    ],
    tags: ["Clinical AI", "Commercial Strategy", "Consulting"],
    accent: "from-fuchsia-500 to-purple-500",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "aether", label: "Aether AI", sublabel: "Clinical-AI venture under review", icon: "team", x: 0.5, y: 0.16 },
        { id: "healthrex", label: "Stanford HealthREx Lab", sublabel: "Host lab", icon: "supervisor", x: 0.84, y: 0.5 },
        { id: "needs", label: "Needs analysis", sublabel: "Patient + clinician interviews", icon: "research", x: 0.16, y: 0.5 },
        { id: "strategy", label: "Commercial strategy", sublabel: "Market positioning + regulatory", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "aether", label: "Evaluating the commercial viability of Aether AI" },
        { from: "me", to: "healthrex", label: "Consulting project run out of the Stanford HealthREx Lab" },
        { from: "me", to: "needs", label: "Patient and clinician needs analysis via stakeholder interviews" },
        { from: "me", to: "strategy", label: "Commercial strategy, market positioning, and regulatory considerations" },
      ],
    },
  },
  {
    id: "microsoft-hfte-industry",
    title: "Student Project Manager",
    organization: "Microsoft / Stanford Medicine HFTE Initiative",
    period: "Jan 2025 – present",
    location: "Stanford, CA",
    summary:
      "Led a student team investigating health-systems operations development for an oculomics medical device, and contributed to manuscript development on its disruptive potential in ophthalmology and primary care.",
    deliverables: [
      "Health-systems operations analysis",
      "Student-team coordination",
      "Manuscript on disruptive potential (ophthalmology + primary care)",
    ],
    tags: ["Oculomics", "Health Systems", "Medical Devices"],
    accent: "from-cyan-500 to-blue-500",
    link: "/project/healthcare-from-the-eye",
    network: {
      nodes: [
        { id: "me", label: "Me", icon: "me", x: 0.5, y: 0.5 },
        { id: "hfte", label: "HFTE Initiative", sublabel: "Microsoft / Stanford Medicine", icon: "institution", x: 0.5, y: 0.16 },
        { id: "team", label: "Student team", sublabel: "Coordinated the investigation", icon: "team", x: 0.84, y: 0.5 },
        { id: "ops", label: "Health-systems ops", sublabel: "Oculomics device pathways", icon: "research", x: 0.16, y: 0.5 },
        { id: "manuscript", label: "Manuscript", sublabel: "Disruptive potential in ophthalmology + primary care", icon: "manuscript", x: 0.5, y: 0.84 },
      ],
      edges: [
        { from: "me", to: "hfte", label: "Project under the Microsoft / Stanford Medicine HFTE Initiative" },
        { from: "me", to: "team", label: "Led a student team through the investigation" },
        { from: "me", to: "ops", label: "Investigated health-systems operations for the oculomics device" },
        { from: "me", to: "manuscript", label: "Contributed to a manuscript on its disruptive potential in ophthalmology and primary care" },
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
