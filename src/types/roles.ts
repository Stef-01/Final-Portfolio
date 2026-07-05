// A role network describes the people and groups behind a role — not its
// deliverables. Every collaborator is one of four kinds so the diagram reads
// consistently across every role, and the renderer lays them out and colours
// the legend from these alone.
export type CollaboratorKind = "host" | "team" | "person" | "community";

export interface NetworkNode {
  id: string;
  /** Name of the person, team, host, or community */
  label: string;
  /** Short descriptor of who or what they are */
  sublabel?: string;
  /** Host institution, a team, an individual, or a community served */
  kind: CollaboratorKind;
  /** How I worked with them — revealed on hover */
  relation: string;
}

export interface RoleNetwork {
  /** Collaborators only; the centre "me" node is added by the renderer. */
  nodes: NetworkNode[];
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
    accent: "bg-emerald-500",
    link: "/project/nourish-meal-explorer",
    featured: true,
    network: {
      nodes: [
        { id: "prc", label: "Stanford PRC", sublabel: "Prevention Research Center", kind: "host", relation: "Coordinating the precision-nutrition research agenda within the Stanford Prevention Research Center." },
        { id: "pi", label: "Trial investigators", sublabel: "Principal investigators", kind: "person", relation: "Reporting to the trial investigators on protocol fidelity and study design." },
        { id: "team", label: "Cross-disciplinary team", sublabel: "Dietitians, behaviour-change, MDs", kind: "team", relation: "Working alongside dietitians, behaviour-change designers, and MD investigators." },
        { id: "cohorts", label: "Community cohorts", sublabel: "Recruitment + fidelity", kind: "community", relation: "Coordinating recruitment and curriculum fidelity across community cohorts." },
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
      "Lung-cancer ML work with Prof. Summer Han — EGFR tumor-burden annotation and translating oncology model outputs into usable precision-care reasoning.",
    deliverables: [
      "Tumor burden annotation pipeline",
      "EGFR mutation sub-cohort analysis",
      "Preparation of manuscript drafts",
    ],
    tags: ["Precision Oncology", "Clinical ML", "Annotation"],
    accent: "bg-rose-500",
    network: {
      nodes: [
        { id: "han-lab", label: "Han Lab", sublabel: "Stanford School of Medicine", kind: "host", relation: "Lung-cancer ML research within the Han Lab at Stanford School of Medicine." },
        { id: "pi", label: "Prof. Summer Han", sublabel: "Principal investigator", kind: "person", relation: "Working under Prof. Summer Han on the lung-cancer ML programme." },
        { id: "oncology", label: "Oncology ML collaborators", sublabel: "Annotation + modelling", kind: "team", relation: "Collaborating on tumour-burden annotation and EGFR sub-cohort modelling." },
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
    accent: "bg-cyan-500",
    link: "/project/healthcare-from-the-eye",
    featured: true,
    network: {
      nodes: [
        { id: "hfte", label: "HFTE Initiative", sublabel: "Microsoft / Stanford Medicine", kind: "host", relation: "Project convened under the Microsoft / Stanford Medicine HFTE Initiative." },
        { id: "team", label: "Student team", sublabel: "Led the investigation", kind: "team", relation: "Leading a student team through the health-systems investigation." },
        { id: "clinicians", label: "Ophthalmology + primary care", sublabel: "Clinical stakeholders", kind: "community", relation: "Mapping oculomics device pathways across ophthalmology and primary care." },
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
    accent: "bg-teal-500",
    network: {
      nodes: [
        { id: "nceph", label: "ANU NCEPH", sublabel: "Epidemiology & population health", kind: "host", relation: "Implementation and evidence-synthesis work within the ANU National Centre for Epidemiology & Population Health." },
        { id: "supervisor", label: "Supervisor", sublabel: "Head of MAE program", kind: "person", relation: "Working under the Head of the ANU Master of Applied Epidemiology program." },
        { id: "phd", label: "PhD students", sublabel: "Mentored to first-author", kind: "person", relation: "Mentoring PhD students in meta-analysis and scoping-review methods through to first-author publication." },
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
    accent: "bg-slate-600",
    network: {
      nodes: [
        { id: "goarn", label: "WHO GOARN", sublabel: "Geneva secretariat", kind: "host", relation: "Reporting into the WHO GOARN secretariat in Geneva on global outbreak response." },
        { id: "strategy-group", label: "Strategic-plan working group", sublabel: "GOARN 2022–26 plan", kind: "team", relation: "Contributing with the working group on the GOARN 2022–26 Strategic Plan." },
        { id: "coauthors", label: "WPSAR co-authors", sublabel: "Surveillance-analytics paper", kind: "team", relation: "Co-authoring the WPSAR paper bridging counterterrorism analytics and public-health surveillance." },
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
      "Coordinating a precision-nutrition program built around a teaching-kitchen intervention, combining behavior-change design with adaptive recommendation for culturally relevant preventive care.",
    deliverables: [
      "Meal-explorer prototype",
      "AI chef demo + storyboarding",
      "Clinical research pipeline alignment",
    ],
    tags: ["Product", "Nutrition", "Consumer Health"],
    accent: "bg-emerald-500",
    link: "/project/nourish-meal-explorer",
    featured: true,
    network: {
      nodes: [
        { id: "prc", label: "Stanford PRC", sublabel: "Clinical research alignment", kind: "host", relation: "Aligning the program with the Stanford PRC clinical research pipeline." },
        { id: "team", label: "NOURISH team", sublabel: "Cross-disciplinary, Stanford-affiliated", kind: "team", relation: "Coordinating product, design, and AI across the Stanford-affiliated NOURISH team." },
        { id: "users", label: "Community users", sublabel: "Culturally-grounded behaviour change", kind: "community", relation: "Designing for community-grounded, culturally-relevant behaviour change." },
      ],
    },
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
    network: {
      nodes: [
        { id: "engineering", label: "Engineering team", sublabel: "Vision + craving-parser stack", kind: "team", relation: "Leading engineering on vision parsing and the craving-to-recipe stack." },
        { id: "users", label: "Home cooks", sublabel: "First-time-confident users", kind: "community", relation: "Building cooking confidence for first-time home cooks." },
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
    accent: "bg-yellow-500",
    link: "/project/dialysis-device-gtm",
    featured: true,
    network: {
      nodes: [
        { id: "seed", label: "Stanford GSB SEED", sublabel: "Program host", kind: "host", relation: "Placed through the Stanford GSB SEED program." },
        { id: "adcem", label: "Adcem–Fidson JV", sublabel: "Home dialysis, Nigeria", kind: "host", relation: "Working with the Adcem–Fidson joint venture on affordable home peritoneal dialysis in Nigeria." },
        { id: "partners", label: "Clinical + supply-chain partners", sublabel: "Advisory + operations", kind: "team", relation: "Coordinating clinical advisory and supply-chain partners for pilot planning and implementation." },
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
    accent: "bg-sky-500",
    link: "/project/pgx-llm-copilot",
    featured: true,
    network: {
      nodes: [
        { id: "hsil", label: "Harvard HSIL", sublabel: "Hackathon + incubation host", kind: "host", relation: "Building and incubating GenieRX through the Harvard HSIL hackathon and Venture Incubation Program." },
        { id: "team", label: "Five-person team", sublabel: "Led through the hackathon", kind: "team", relation: "Leading a five-person team to 2nd nationally (USA) and 7th of 3,500 globally." },
        { id: "mentors", label: "HSIL mentors", sublabel: "Venture incubation", kind: "person", relation: "Directing GenieRX with HSIL venture-incubation mentors." },
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
    accent: "bg-blue-500",
    network: {
      nodes: [
        { id: "leads", label: "Hospital Medicine leads", sublabel: "Stanford Dept. of Medicine", kind: "person", relation: "Engaged by the Quality team in Hospital Medicine, Department of Medicine." },
        { id: "team", label: "Consulting team", sublabel: "Stanford Health Consulting Group", kind: "team", relation: "Leading a Stanford Health Consulting Group project team." },
        { id: "stakeholders", label: "Frontline + leadership", sublabel: "Interviewed across the service", kind: "community", relation: "Interviewing frontline and leadership stakeholders to shape readmission-reduction recommendations." },
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
    accent: "bg-teal-500",
    network: {
      nodes: [
        { id: "healthrex", label: "Stanford HealthREx Lab", sublabel: "Host lab", kind: "host", relation: "Consulting project run out of the Stanford HealthREx Lab." },
        { id: "aether", label: "Aether AI", sublabel: "Clinical-AI venture", kind: "team", relation: "Evaluating the commercial viability of the Aether AI clinical-AI venture." },
        { id: "needs", label: "Patients + clinicians", sublabel: "Needs interviews", kind: "community", relation: "Running patient and clinician needs interviews to inform commercial and regulatory strategy." },
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
    accent: "bg-cyan-500",
    link: "/project/healthcare-from-the-eye",
    network: {
      nodes: [
        { id: "hfte", label: "HFTE Initiative", sublabel: "Microsoft / Stanford Medicine", kind: "host", relation: "Project convened under the Microsoft / Stanford Medicine HFTE Initiative." },
        { id: "team", label: "Student team", sublabel: "Coordinated the investigation", kind: "team", relation: "Coordinating a student team through the health-systems investigation." },
        { id: "clinicians", label: "Ophthalmology + primary care", sublabel: "Clinical stakeholders", kind: "community", relation: "Mapping oculomics device pathways across ophthalmology and primary care." },
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
    accent: "bg-rose-500",
    network: {
      nodes: [
        { id: "xr", label: "Stanford XR Hackathon", sublabel: "48-hour build", kind: "host", relation: "Competing in the Stanford XR Hackathon — 1st place Social Good, 3rd place BCI, Overall Finalist." },
        { id: "team", label: "Interdisciplinary build team", sublabel: "48-hour co-builders", kind: "team", relation: "Leading an interdisciplinary build team across the 48-hour build." },
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
    accent: "bg-teal-500",
    network: {
      nodes: [
        { id: "founders", label: "NORA founders", sublabel: "Early-stage founding team", kind: "team", relation: "Advising the NORA founding team on product, clinical strategy, and fundraising narrative." },
        { id: "partners", label: "Healthcare partners", sublabel: "Introductions + scoping", kind: "community", relation: "Making healthcare partnership introductions and scoping early opportunities." },
      ],
    },
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
      "Designed and delivered an applied entrepreneurship bootcamp for TLIA's creative savants, translating venture-building into structured exercises for needs finding, validation, business-model design, and pitch development.",
    deliverables: [
      "Bootcamp curriculum architecture and learning sequence",
      "Needs-finding, pain-scoring, validation, and pitch exercises",
      "Founder-facing teaching materials from the TLIA program deck",
    ],
    tags: ["Entrepreneurship Education", "Design Thinking", "Venture Building"],
    accent: "bg-emerald-500",
    featured: true,
    network: {
      nodes: [
        { id: "tlia", label: "TLIA", sublabel: "Bootcamp host", kind: "host", relation: "Program Lead for the TLIA Entrepreneurship Bootcamp." },
        { id: "learners", label: "Creative savants", sublabel: "Founder-learners", kind: "community", relation: "Teaching creative savants to move from curiosity to tested venture ideas and pitch-ready synthesis." },
      ],
    },
  },
  {
    id: "anu-phd-student-teaching",
    title: "PhD Student Teaching & Research Mentoring",
    organization: "ANU National Centre for Epidemiology & Population Health",
    period: "2022 – 2025",
    location: "Canberra, Australia",
    summary:
      "Taught and mentored PhD students through evidence-synthesis work, including meta-analysis, scoping-review logic, PRISMA workflows, and publication-oriented research execution.",
    deliverables: [
      "Research-methods teaching for PhD students",
      "Meta-analysis and scoping-review workflow support",
      "Mentoring toward first-author publication outputs",
    ],
    tags: ["PhD Mentoring", "Meta-analysis", "Evidence Synthesis"],
    accent: "bg-teal-500",
    network: {
      nodes: [
        { id: "anu", label: "ANU NCEPH", sublabel: "Research environment", kind: "host", relation: "Teaching and mentoring within the ANU NCEPH research environment." },
        { id: "phd", label: "PhD students", sublabel: "Mentees", kind: "person", relation: "Mentoring PhD students in meta-analysis, scoping review, and PRISMA-style workflows through to first-author outputs." },
      ],
    },
  },
  {
    id: "nourish-pfeme-curriculum",
    title: "Clinician Residency Curriculum Writer",
    organization: "NOURISH PFEME · Stanford Medicine",
    period: "Ongoing",
    location: "Stanford, CA",
    summary:
      "Writing clinician-facing residency curriculum content for the NOURISH PFEME program, translating nutrition, behavior-change, and teaching-kitchen principles into practical educational material for clinical learners.",
    deliverables: [
      "Clinician-residency curriculum writing",
      "Nutrition and behavior-change content translation",
      "Teaching-kitchen concepts adapted for clinical education",
    ],
    tags: ["Clinical Education", "Nutrition", "Curriculum Design"],
    accent: "bg-emerald-500",
    link: "/project/nourish-meal-explorer",
    featured: true,
    network: {
      nodes: [
        { id: "nourish", label: "NOURISH PFEME", sublabel: "Stanford Medicine", kind: "host", relation: "Writing residency curriculum within the NOURISH PFEME program at Stanford Medicine." },
        { id: "clinicians", label: "Clinical learners", sublabel: "Residency audience", kind: "community", relation: "Writing clinician-facing curriculum that translates nutrition and behaviour-change principles for clinical learners." },
      ],
    },
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
    network: {
      nodes: [
        { id: "anu", label: "ANU", sublabel: "Australian National University", kind: "host", relation: "Research Officer at the Australian National University studying implementation of preventive chronic-disease health checks." },
        { id: "care", label: "Indigenous primary care", sublabel: "Aboriginal & Torres Strait Islander", kind: "community", relation: "Focused on Aboriginal and Torres Strait Islander primary health care and what enables uptake." },
      ],
    },
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
    network: {
      nodes: [
        { id: "dss", label: "Dept. of Social Services", sublabel: "NDIS Outcomes & Research", kind: "host", relation: "Policy Officer in NDIS Outcomes & Research Strategy." },
        { id: "unit", label: "Disability research advisory unit", sublabel: "Establishment support", kind: "team", relation: "Supporting the establishment of a disability research advisory unit." },
        { id: "researchers", label: "Researchers + panels", sublabel: "Partnerships + procurement", kind: "person", relation: "Building policymaker–researcher partnership protocols and serving on procurement panels." },
      ],
    },
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
    network: {
      nodes: [
        { id: "dss", label: "Dept. of Social Services", sublabel: "NDIS Financial Policy", kind: "host", relation: "Policy Officer in NDIS Financial Policy & Strategy, supporting the October 2022 NDIS budget." },
        { id: "obp", label: "Office of Best Practice", sublabel: "Compliance + feedback", kind: "person", relation: "Coordinating policy-proposal compliance and feedback with the Office of Best Practice." },
        { id: "ministers", label: "Ministers + decision-makers", sublabel: "Briefs + proposals", kind: "person", relation: "Producing ministerial briefs and drafting new policy proposals for decision-makers." },
      ],
    },
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
    network: {
      nodes: [
        { id: "scheme", label: "National Redress Scheme", sublabel: "External Engagement Team", kind: "host", relation: "Policy Officer on the National Redress Scheme External Engagement Team." },
        { id: "jurisdictions", label: "Commonwealth · states · territories", sublabel: "Intergovernmental collaboration", kind: "team", relation: "Facilitating Commonwealth, state, and territory collaboration to expand redress." },
        { id: "survivors", label: "Survivors", sublabel: "Institutional child sexual abuse", kind: "community", relation: "Working to expand redress for survivors of institutional child sexual abuse." },
        { id: "ags", label: "Senior execs + Attorneys-General", sublabel: "Briefing audience", kind: "person", relation: "Writing briefs translating complex policy advice for senior executives and Attorneys-General." },
      ],
    },
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
    network: {
      nodes: [
        { id: "library", label: "Parliamentary Library", sublabel: "Parliament of Australia", kind: "host", relation: "Interned at the Parliamentary Library, Parliament of Australia." },
        { id: "division", label: "Social Policy Division", sublabel: "Placement team", kind: "team", relation: "Placed within the Social Policy Division for parliamentary research and public-sector briefing." },
      ],
    },
  },
];
