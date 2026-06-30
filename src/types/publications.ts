import aiBiomedicalDiagnostics from "../assets/publications/ai-biomedical-diagnostics.webp";
import cancerPainDailyLiving from "../assets/publications/cancer-pain-daily-living.webp";
import childhoodDiarrhoea from "../assets/publications/childhood-diarrhoea-meta-analysis.webp";
import ecigaretteYoungAdults from "../assets/publications/ecigarette-young-adults.webp";
import extrapulmonaryTbAfrica from "../assets/publications/extrapulmonary-tb-africa.webp";
import goarnOutbreakResponse from "../assets/publications/goarn-outbreak-response.webp";
import indigenousHealthChecks from "../assets/publications/indigenous-health-checks.webp";
import medicalDeviceRegulation from "../assets/publications/medical-device-regulation.webp";
import pharmacogenomicsClinicians from "../assets/publications/pharmacogenomics-clinicians.webp";
import tumorBurdenEgfr from "../assets/publications/tumor-burden-egfr.webp";

export type PublicationTopic =
  | "AI & precision medicine"
  | "Global health"
  | "Implementation"
  | "Policy & systems";

export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  authorRole: "First author" | "Co-author" | "Equal contributor";
  journal: string;
  summary: string;
  topic: PublicationTopic;
  image: string;
  imageAlt: string;
  paperUrl: string;
  doi?: string;
  documentUrl?: string;
  documentLabel?: string;
  citations: number;
}

export const googleScholarUrl =
  "https://scholar.google.com/citations?user=9Nxhv58AAAAJ&hl=en";

export const scholarMetrics = {
  publications: 10,
  citations: 91,
  hIndex: 3,
  i10Index: 3,
  verified: "June 2026",
};

export const publications: Publication[] = [
  {
    id: "tumor-burden-egfr",
    year: 2026,
    title:
      "Evaluating Tumor Burden as a Predictive Biomarker for EGFR-Targeted Kinase Inhibitor Therapy in Advanced Non–Small Cell Lung Cancer",
    authors: "Terashima R., Fan J., Gunturkun F., et al., including Thottunkal S.",
    authorRole: "Co-author",
    journal: "JCO Precision Oncology, 10(4), e2500884",
    summary:
      "Evaluates a practical composite tumor-burden measure as a biomarker for treatment selection in EGFR-targeted therapy.",
    topic: "AI & precision medicine",
    image: tumorBurdenEgfr,
    imageAlt:
      "Clinical researcher reviewing anonymized chest CT scans and longitudinal tumor-burden measurements",
    paperUrl: "https://ascopubs.org/doi/10.1200/PO-25-00884",
    doi: "10.1200/PO-25-00884",
    documentUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13086115/",
    documentLabel: "Read full text",
    citations: 1,
  },
  {
    id: "pharmacogenomics-clinicians",
    year: 2025,
    title:
      "Clinician Experiences at the Frontier of Pharmacogenomics and Future Directions",
    authors:
      "Thottunkal S., Spahn C., Wang B., Rohatgi N., Hong J., Khandelwal A., Palaniappan L.",
    authorRole: "First author",
    journal: "Journal of Personalized Medicine, 15(7), 294",
    summary:
      "Examines how clinicians experience pharmacogenomics implementation and where workflow, evidence, and adoption barriers remain.",
    topic: "AI & precision medicine",
    image: pharmacogenomicsClinicians,
    imageAlt:
      "Clinician connecting a genomic result with medication decisions in a consultation workspace",
    paperUrl: "https://doi.org/10.3390/jpm15070294",
    doi: "10.3390/jpm15070294",
    documentUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12300132/",
    documentLabel: "Read full text",
    citations: 10,
  },
  {
    id: "childhood-diarrhoea-lmics",
    year: 2025,
    title:
      "Childhood Diarrhoea Attributed to Enteropathogenic Bacteria in Low- and Middle-Income Countries: A Systematic Review and Meta-Analysis",
    authors:
      "Sayeed M. A., Colquhoun S., Thottunkal S., McLure A., Richardson A., Lal A., Rahaman M. R.",
    authorRole: "Co-author",
    journal: "Journal of Global Health, 15, 04350",
    summary:
      "Synthesizes the contribution of four major bacterial pathogen groups to childhood diarrhoea across low- and middle-income settings.",
    topic: "Global health",
    image: childhoodDiarrhoea,
    imageAlt:
      "Public-health microbiology researcher examining enteropathogen specimens and cross-country evidence",
    paperUrl: "https://jogh.org/2025/jogh-15-04350/",
    doi: "10.7189/jogh.15.04350",
    documentUrl: "https://jogh.org/wp-content/uploads/2025/11/jogh-15-04350n.pdf",
    documentLabel: "View PDF",
    citations: 3,
  },
  {
    id: "medical-device-regulation",
    year: 2025,
    title:
      "Regulatory Stringency and Impacts on Equity and Innovation in Medical Devices: Insights from the EU MDR 2017 and Considerations for the FDA",
    authors: "Thottunkal S.",
    authorRole: "First author",
    journal: "Journal of Regulatory Science, 13(1)",
    summary:
      "Uses the EU MDR as a policy case study for balancing patient safety, innovation constraints, and equitable access to medical devices.",
    topic: "Policy & systems",
    image: medicalDeviceRegulation,
    imageAlt:
      "Medical-device prototype and risk-review materials being assessed by two reviewers",
    paperUrl: "https://doi.org/10.21423/JRS.REGSCI.131307",
    doi: "10.21423/JRS.REGSCI.131307",
    citations: 1,
  },
  {
    id: "ai-biomedical-diagnostics",
    year: 2025,
    title:
      "Artificial Intelligence in Biomedical Diagnostics: Recent Advances and Transitions to Liable Regulation",
    authors: "Yu H., Thottunkal S., Yahya B. N., Wang Y., Zhang T., Kharbach M.",
    authorRole: "Co-author",
    journal: "MIT Science Policy Review, 6",
    summary:
      "Reviews advances in AI-enabled diagnostics and the policy transition needed for accountable biomedical innovation.",
    topic: "AI & precision medicine",
    image: aiBiomedicalDiagnostics,
    imageAlt:
      "Biomedical diagnostics researcher reviewing medical images beside a regulatory checklist",
    paperUrl: "https://doi.org/10.38105/spr.608ii2mk00",
    doi: "10.38105/spr.608ii2mk00",
    citations: 1,
  },
  {
    id: "indigenous-health-checks",
    year: 2025,
    title:
      "What Influences the Implementation of Health Checks in the Prevention and Early Detection of Chronic Diseases Among Aboriginal and Torres Strait Islander People in Australian Primary Health Care?",
    authors:
      "Yadav U. N., Thottunkal S., Agostino J., Sinka V., Wyber R., Hammond B., et al.",
    authorRole: "Co-author",
    journal: "Health Research Policy and Systems, 23, 70",
    summary:
      "Identifies the implementation conditions that enable preventive chronic-disease health checks in Australian primary care.",
    topic: "Implementation",
    image: indigenousHealthChecks,
    imageAlt:
      "Routine preventive blood-pressure check in a warm community primary-care setting",
    paperUrl: "https://doi.org/10.1186/s12961-025-01325-9",
    doi: "10.1186/s12961-025-01325-9",
    citations: 1,
  },
  {
    id: "goarn-capacity-review",
    year: 2024,
    title:
      "Stronger Together: A Bi-Regional Operational Capacity Review of the Global Outbreak Alert and Response Network",
    authors:
      "Parry A., Campbell S., Thottunkal S., Mandal P. P., Salmon S.",
    authorRole: "Co-author",
    journal:
      "Western Pacific Surveillance and Response Journal, 15(5 special edition)",
    summary:
      "Reviews operational capacity across WHO South-East Asia and Western Pacific outbreak-response networks.",
    topic: "Policy & systems",
    image: goarnOutbreakResponse,
    imageAlt:
      "Multidisciplinary global-health team coordinating outbreak response around a regional map",
    paperUrl:
      "https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1109/1197",
    documentUrl:
      "https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1109/1197",
    documentLabel: "Read full text",
    citations: 1,
  },
  {
    id: "extrapulmonary-tb-africa",
    year: 2024,
    title:
      "Prevalence of Extra-Pulmonary Tuberculosis in Africa: A Systematic Review and Meta-Analysis",
    authors:
      "Hailu S., Hurst C., Cyphers G., Thottunkal S., Harley D., Viney K., Irwin A., Dean J., Nourse C.",
    authorRole: "Equal contributor",
    journal: "Tropical Medicine & International Health, 29(4), 257–265",
    summary:
      "Synthesizes prevalence estimates for extra-pulmonary tuberculosis across African countries and settings.",
    topic: "Global health",
    image: extrapulmonaryTbAfrica,
    imageAlt:
      "Laboratory researcher examining microscopy evidence beside an abstract map of Africa",
    paperUrl: "https://doi.org/10.1111/tmi.13970",
    doi: "10.1111/tmi.13970",
    documentUrl:
      "https://ris.cdu.edu.au/ws/portalfiles/portal/96590259/Tropical_Med_Int_Health_2024_Hailu_Prevalence_of_extra_pulmonary_tuberculosis_in_Africa_A_systematic_review_and.pdf",
    documentLabel: "View PDF",
    citations: 26,
  },
  {
    id: "cancer-pain-daily-living",
    year: 2023,
    title:
      "Pain and Its Interference with Daily Living in Relation to Cancer: A Comparative Population-Based Study of 16,053 Cancer Survivors and 106,345 People Without Cancer",
    authors:
      "Joshy G., Khalatbari-Soltani S., Soga K., Butow P., Laidsaar-Powell R., Koczwara B., et al., including Thottunkal S.",
    authorRole: "Co-author",
    journal: "BMC Cancer, 23, 774",
    summary:
      "Compares pain prevalence and interference with everyday function across large cancer-survivor and non-cancer populations.",
    topic: "Global health",
    image: cancerPainDailyLiving,
    imageAlt:
      "Cancer survivor navigating shoulder pain while continuing an ordinary daily activity at home",
    paperUrl: "https://doi.org/10.1186/s12885-023-11214-5",
    doi: "10.1186/s12885-023-11214-5",
    citations: 44,
  },
  {
    id: "ecigarette-young-adults",
    year: 2021,
    title:
      "Perceptions of, Factors Underlying, and Reasons for E-Cigarette Use Among Australia’s Young Adults",
    authors: "Thottunkal S.",
    authorRole: "First author",
    journal: "ANU Undergraduate Research Journal, 11(1), 125–132",
    summary:
      "Examines the social perceptions, motivations, and contextual factors associated with e-cigarette use among Australian young adults.",
    topic: "Implementation",
    image: ecigaretteYoungAdults,
    imageAlt:
      "Unbranded e-cigarette device on a table with young adults talking in the background",
    paperUrl:
      "https://studentjournals.anu.edu.au/index.php/aurj/article/view/647",
    documentUrl:
      "https://studentjournals.anu.edu.au/index.php/aurj/article/download/647/255",
    documentLabel: "View PDF",
    citations: 3,
  },
];

export const researchPipeline = [
  {
    status: "Manuscript",
    title: "Comparing LLM Output to Physician Notes for Pharmacogenomics",
    venue: "Journal of Personalized Medicine",
  },
  {
    status: "Submitted",
    title:
      "AI-Enabled Synthetic Bioweapons: Nucleic-Acid Screening and Considerations for the AI Action Plan",
    venue: "Disaster Medicine and Public Health Preparedness",
  },
  {
    status: "Study in progress",
    title:
      "Behavioral Hazards, Externalities, and Cost–Benefit Dynamics of AI-Assisted Diabetic Retinopathy Screening",
    venue: "Microsoft Healthcare from the Eye initiative",
  },
];

export const conferences = [
  "Detecting AI-Engineered Biothreats with Dynamic Threat Modelling — TETHICON, Stanford McCoy Family Center for Ethics in Society · 2025",
  "Implementation of Preventive Chronic-Disease Health Checks for Indigenous Australians — Lowitja Indigenous Health and Wellbeing Conference · 2025",
  "Microsoft Healthcare from the Eye: A New Paradigm in Oculomics — Stanford Centre for Innovation in Global Health Conference · 2025",
  "A Scoping Review of Syndemic Factors Impacting Marginalized Communities with NCDs — AMSA Global Health Conference · 2024",
  "Implementation of Preventive Chronic-Disease Health Checks for Indigenous Australians: A Realist Review — CEI Evidence and Implementation Summit · 2023",
];

export const presentations = [
  "Development and Evaluation of an LLM Pharmacogenomics Tool to Integrate PGx in Everyday Clinical Decision Making — Stanford Prevention Research Center Grand Rounds · 2025",
  "Development of a Pharmacogenomics LLM Model — CPIC Junior Investigators Webinar · 2025",
  "Pharmacogenomics Applications for Medication Management in Precision Oncology — Stanford CARE Lung Cancer Summit · 2025",
  "Repurposing ML Topic-Modelling Techniques from Counterterrorism for Infectious-Disease Surveillance — QUAD Fellowship Summit · 2025",
];
