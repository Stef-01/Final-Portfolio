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
  },
];
