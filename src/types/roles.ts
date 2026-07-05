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
    accent: "bg-emerald-500",
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
      "Lung-cancer ML with Prof. Summer Han — EGFR tumor-burden annotation, turning model outputs into precision-care reasoning.",
    deliverables: [
      "Tumor burden annotation pipeline",
      "EGFR mutation sub-cohort analysis",
      "Preparation of manuscript drafts",
    ],
    tags: ["Precision Oncology", "Clinical ML", "Annotation"],
    accent: "bg-rose-500",
  },
  {
    id: "microsoft-hfte",
    title: "Student Project Manager",
    organization: "Microsoft / Stanford Medicine HFTE Initiative",
    period: "Jan 2025 – present",
    location: "Stanford, CA",
    summary:
      "Led a student team on health-systems operations for an oculomics device, and co-wrote a manuscript on its potential in ophthalmology and primary care.",
    deliverables: [
      "Health-systems operations analysis",
      "Student-team coordination",
      "Manuscript on disruptive potential",
    ],
    tags: ["Oculomics", "Health Systems", "Medical Devices"],
    accent: "bg-cyan-500",
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
    accent: "bg-teal-500",
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
    accent: "bg-slate-600",
  },
];

export const industryRoles: Role[] = [
  {
    id: "coethia",
    title: "Partnerships & Strategy Officer",
    organization: "Coethia Inc.",
    period: "Ongoing",
    summary:
      "Leading partnerships and strategy across product, technology, and procurement.",
    deliverables: [
      "Business partnerships — mockups and interactive concepts for the Coethia Digest reports, and customer discovery",
      "Technology — working alongside the technical team on the medical consensus project (ongoing)",
      "Pitch & procurement — pitch decks and content for the procurement pipeline",
    ],
    tags: ["Partnerships", "Strategy", "Product Design"],
    accent: "bg-emerald-500",
    featured: true,
  },
  {
    id: "casa",
    title: "Founder",
    organization: "Casa",
    period: "Ongoing",
    location: "Distributed",
    summary:
      "Consumer AI cooking-confidence platform. Users type a craving or photograph a dish; Casa turns that intent into practical meal directions, intelligently paired sides, and guided cooking.",
    deliverables: [
      "Craving parser + pairing engine",
      "Guided cook flow",
      "Skill-tree progression design",
    ],
    tags: ["Consumer AI", "Product", "Vision"],
    accent: "bg-orange-500",
    link: "/project/casa",
    featured: true,
  },
  {
    id: "adcem-seed",
    title: "Product Management / BD Intern",
    organization: "Adcem Fidson JV · Stanford GSB SEED",
    period: "Apr – Dec 2025",
    location: "Nigeria",
    summary:
      "Product and business development for an affordable home peritoneal-dialysis platform in Nigeria.",
    deliverables: [
      "Financial modelling + partnership documents",
      "Pilot planning & implementation strategy",
      "Supply-chain planning + audits",
    ],
    tags: ["Global Health", "Med Devices", "Implementation"],
    accent: "bg-yellow-500",
    link: "/project/dialysis-device-gtm",
    featured: true,
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
    accent: "bg-sky-500",
    link: "/project/pgx-llm-copilot",
    featured: true,
  },
  {
    id: "stanford-hospital-consulting",
    title: "Student Consultant",
    organization: "Stanford Health Consulting Group",
    period: "Mar – Jun 2025",
    location: "Stanford Hospital · Hospital Medicine",
    summary:
      "Led a consulting project to reduce medical readmissions at Stanford Hospital, for Quality in Hospital Medicine.",
    deliverables: [
      "Stakeholder interviews + survey analysis",
      "Workflow review",
      "Strategic readmission-reduction recommendations",
    ],
    tags: ["Consulting", "Readmissions", "Health Systems"],
    accent: "bg-blue-500",
  },
  {
    id: "aetherai-healthrex",
    title: "Student Project Manager",
    organization: "Stanford Health Consulting Group · Aether AI",
    period: "Jan – Mar 2025",
    location: "Stanford HealthREx Lab",
    summary:
      "Led a consulting project evaluating the commercial viability of Aether AI.",
    deliverables: [
      "Stakeholder interviews + clinician needs analysis",
      "Commercial strategy & market positioning",
      "Regulatory considerations",
    ],
    tags: ["Clinical AI", "Commercial Strategy", "Consulting"],
    accent: "bg-teal-500",
  },
  {
    id: "microsoft-hfte-industry",
    title: "Student Project Manager",
    organization: "Microsoft / Stanford Medicine HFTE Initiative",
    period: "Jan 2025 – present",
    location: "Stanford, CA",
    summary:
      "Led a student team on health-systems operations for an oculomics device, and co-wrote a manuscript on its potential in ophthalmology and primary care.",
    deliverables: [
      "Health-systems operations analysis",
      "Student-team coordination",
      "Manuscript on disruptive potential (ophthalmology + primary care)",
    ],
    tags: ["Oculomics", "Health Systems", "Medical Devices"],
    accent: "bg-cyan-500",
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
    accent: "bg-rose-500",
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
    accent: "bg-teal-500",
  },
];

export const educationRoles: Role[] = [
  {
    id: "tlia-entrepreneurship-bootcamp",
    title: "Program Lead",
    organization: "TLIA Entrepreneurship Bootcamp",
    period: "2025",
    location: "Nigeria / Remote",
    summary:
      "Designed and delivered an applied entrepreneurship bootcamp for TLIA's creative savants — venture-building as structured, testable exercises.",
    deliverables: [
      "Bootcamp curriculum architecture and learning sequence",
      "Needs-finding, pain-scoring, validation, and pitch exercises",
      "Founder-facing teaching materials from the TLIA program deck",
    ],
    tags: ["Entrepreneurship Education", "Design Thinking", "Venture Building"],
    accent: "bg-emerald-500",
    featured: true,
  },
  {
    id: "anu-phd-student-teaching",
    title: "PhD Student Teaching & Research Mentoring",
    organization: "ANU National Centre for Epidemiology & Population Health",
    period: "2022 – 2025",
    location: "Canberra, Australia",
    summary:
      "Taught and mentored PhD students through evidence-synthesis work, from meta-analysis to first-author publication.",
    deliverables: [
      "Research-methods teaching for PhD students",
      "Meta-analysis and scoping-review workflow support",
      "Mentoring toward first-author publication outputs",
    ],
    tags: ["PhD Mentoring", "Meta-analysis", "Evidence Synthesis"],
    accent: "bg-teal-500",
  },
  {
    id: "nourish-pfeme-curriculum",
    title: "Clinician Residency Curriculum Writer",
    organization: "NOURISH PFEME · Stanford Medicine",
    period: "Ongoing",
    location: "Stanford, CA",
    summary:
      "Writing clinician-facing residency curriculum for the NOURISH PFEME program, translating nutrition and behavior-change principles for clinical learners.",
    deliverables: [
      "Clinician-residency curriculum writing",
      "Nutrition and behavior-change content translation",
      "Teaching-kitchen concepts adapted for clinical education",
    ],
    tags: ["Clinical Education", "Nutrition", "Curriculum Design"],
    accent: "bg-emerald-500",
    link: "/project/nourish-meal-explorer",
    featured: true,
  },
];

// Policy & government roles — content taken verbatim-in-spirit from the role
// record (ground truth). Note: the role document does not state exact dates;
// periods below are inferred from context (the Oct 2022 NDIS budget anchors the
// DSS roles to ~2021–2022) and should be confirmed.
export const policyRoles: Role[] = [
  {
    id: "anu-atsi-implementation",
    title: "Research Officer",
    organization: "Australian National University",
    period: "2022 – 2023",
    location: "Canberra, Australia",
    summary:
      "Contributed to research on the implementation of preventive chronic-disease health checks in Aboriginal and Torres Strait Islander primary health care.",
    deliverables: [
      "Implementation research on preventive health checks",
      "Aboriginal & Torres Strait Islander primary care focus",
      "Chronic-disease prevention evidence",
    ],
    tags: ["Implementation", "Indigenous Health", "Primary Care"],
    accent: "bg-amber-500",
  },
  {
    id: "dss-ndis-outcomes",
    title: "Policy Officer",
    organization: "Australian Dept. of Social Services — NDIS Outcomes & Research Strategy",
    period: "2022",
    location: "Canberra, Australia",
    summary:
      "Led development of protocols for policymaker–researcher partnerships, supported the establishment of a disability research advisory unit, advised on knowledge translation, and served on procurement panels.",
    deliverables: [
      "Policymaker–researcher partnership protocols",
      "Support for a disability research advisory unit",
      "Knowledge-translation advice + procurement panels",
    ],
    tags: ["NDIS", "Research Policy", "Knowledge Translation"],
    accent: "bg-amber-500",
  },
  {
    id: "dss-ndis-financial",
    title: "Policy Officer",
    organization: "Australian Dept. of Social Services — NDIS Financial Policy & Strategy",
    period: "2022",
    location: "Canberra, Australia",
    summary:
      "Coordinated policy-proposal compliance and feedback with the Office of Best Practice to support the October 2022 NDIS budget, while producing ministerial briefs and new policy proposals.",
    deliverables: [
      "Policy-proposal compliance with the Office of Best Practice",
      "Support for the October 2022 NDIS budget",
      "Ministerial briefs + new policy proposals",
    ],
    tags: ["NDIS", "Budget", "Ministerial Briefs"],
    accent: "bg-orange-500",
  },
  {
    id: "dss-redress",
    title: "Policy Officer",
    organization: "Australian Dept. of Social Services — National Redress Scheme",
    period: "2021 – 2022",
    location: "Canberra, Australia",
    summary:
      "Facilitated Commonwealth, state, and territory collaboration to expand redress for survivors of institutional child sexual abuse, and wrote briefs translating complex policy advice for senior executives and Attorneys-General.",
    deliverables: [
      "Commonwealth–state–territory collaboration",
      "Expanded redress for institutional-abuse survivors",
      "Briefs for senior executives + Attorneys-General",
    ],
    tags: ["National Redress", "Intergovernmental", "Briefing"],
    accent: "bg-amber-600",
  },
  {
    id: "parliamentary-library",
    title: "Intern",
    organization: "Parliamentary Library, Parliament of Australia",
    period: "2021",
    location: "Canberra, Australia",
    summary:
      "Internship in the Parliamentary Library's Social Policy Division — building experience in parliamentary research, social policy analysis, and public-sector briefing.",
    deliverables: [
      "Parliamentary research (Social Policy Division)",
      "Social policy analysis",
      "Public-sector briefing experience",
    ],
    tags: ["Parliamentary Research", "Social Policy", "Government"],
    accent: "bg-yellow-500",
  },
];
