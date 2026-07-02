import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
} from "lucide-react";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { useGoBack } from "../hooks/useGoBack";

const education = [
  {
    degree: "M.S. in Community Health and Prevention Research",
    institution: "Stanford University",
    period: "2025–2026",
    detail: "GPA 4.075/4.3 · QUAD Fellow 2025–2026",
    note: "Thesis: AI methods for pharmacogenomics-based prescribing in clinical practice. Advisor: Prof. Palaniappan.",
  },
  {
    degree: "Doctor of Medicine",
    institution: "Macquarie University",
    period: "2023–2027",
    detail: "Medical training",
    note: "One-year break for the Stanford master’s degree.",
  },
  {
    degree: "Bachelor of Health Science with First Class Honours",
    institution: "Australian National University",
    period: "2019–2023",
    detail: "GPA 6.92/7.0",
    note: "Population health, research, and health-systems foundations.",
  },
];

const researchAreas = [
  "AI methods for pharmacogenomics-based prescribing in clinical practice",
  "Health-systems implementation for Indigenous Australians",
  "Oculomics medical-device operations with Microsoft and Stanford Medicine HFTE",
  "Medical-device regulation, innovation, and equity",
  "AI biosecurity and synthetic-bioweapon detection",
];

const awards = [
  {
    title: "IIE QUAD Fellowship",
    period: "2024",
    detail: "One of 100 scholars selected globally for the STEM leadership fellowship.",
  },
  {
    title: "MQ Equity Merit Scholarship",
    period: "2023",
    detail: "One of two recipients in the Macquarie University Doctor of Medicine.",
  },
  {
    title: "Robert Menzies College Academic Scholarship",
    period: "2023",
    detail: "Academic scholarship recognising university performance.",
  },
  {
    title: "ANU Chancellor’s Letter of Commendation",
    period: "2020 & 2022",
    detail: "Recognition for academic achievement at the Australian National University.",
  },
  {
    title: "ANU Plus Award",
    period: "2022",
    detail: "Completed 100 hours of volunteering and a structured reflective community-service program.",
  },
];

const expertise = [
  "Health systems design",
  "Pharmacogenomics",
  "AI in healthcare",
  "Implementation science",
  "Indigenous health",
  "Public health policy",
  "Precision medicine",
  "Digital health",
  "Biosecurity",
  "Medical-device regulation",
  "Systematic reviews",
  "Qualitative research",
];

const sectionHeading = (label: string, title: string, Icon: typeof GraduationCap) => (
  <div className="mb-8 flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tighter text-black md:text-5xl">{title}</h2>
    </div>
  </div>
);

export function Resume(): JSX.Element {
  const goBack = useGoBack();

  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <header className="relative overflow-hidden px-4 pt-16 md:px-8 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <button
            type="button"
            onClick={goBack}
            className="group mb-12 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-[18px] font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Biography</p>
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter text-black md:text-8xl">
              Stefan Thottunkal
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-2xl">
              Researcher, public servant, medical student, and digital-health builder.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:text-xl">
              Working across precision medicine, implementation science, public policy, and venture design to move evidence into usable health systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:stefan01@stanford.edu"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href="https://scholar.google.com/citations?user=9Nxhv58AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Google Scholar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { value: "3", label: "degrees across health science, medicine, and research" },
                { value: "5", label: "academic awards and fellowships" },
                { value: "12", label: "research and implementation capabilities" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/60 bg-white/75 px-6 py-7 shadow-[0_30px_60px_-40px_rgba(59,130,246,0.55)] ring-1 ring-blue-500/10 backdrop-blur-md"
                >
                  <p className="bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-4 py-20 md:px-8 md:py-24">
        <section>
          {sectionHeading("Education", "Clinical and research training", GraduationCap)}
          <div className="grid gap-5 lg:grid-cols-3">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[30px] border border-black/8 bg-[#fafafa] p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.5)] md:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">{item.period}</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black">{item.degree}</h3>
                <p className="mt-3 text-base font-semibold text-blue-700">{item.institution}</p>
                <p className="mt-4 text-sm font-medium text-gray-500">{item.detail}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{item.note}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          {sectionHeading("Research", "Current focus", BriefcaseBusiness)}
          <div className="grid gap-4 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                className="flex gap-4 rounded-[26px] border border-black/8 bg-white p-5 shadow-[0_18px_50px_-42px_rgba(0,0,0,0.45)]"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-gray-700">{area}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          {sectionHeading("Recognition", "Awards and fellowships", Award)}
          <div className="grid gap-5 md:grid-cols-2">
            {awards.map((award, index) => (
              <motion.article
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.48, delay: Math.min(index * 0.05, 0.2) }}
                className="rounded-[28px] border border-black/8 bg-[#fafafa] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">{award.period}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-black">{award.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{award.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          {sectionHeading("Capabilities", "Methods and subject matter", BookOpen)}
          <div className="flex flex-wrap gap-3">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 bg-[#fafafa] px-4 py-2.5 text-sm font-semibold text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
