import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, BookOpen, Mail } from "lucide-react";
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

export function Resume(): JSX.Element {
  const goBack = useGoBack();

  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <header className="px-4 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={goBack}
            className="group mb-12 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="max-w-5xl t-display font-bold leading-[1.02] tracking-tight text-black">
              Stefan Thottunkal
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Researcher, public servant, medical student, and digital-health builder.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Working across precision medicine, implementation science, public
              policy, and venture design to move evidence into usable health
              systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:stefan01@stanford.edu"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href="https://scholar.google.com/citations?user=9Nxhv58AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Google Scholar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-4 py-20 md:px-8 md:py-24">
        <section>
          <h2 className="mb-8 t-h2 font-bold tracking-tight text-black">
            Education
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl bg-[#fafafa] p-6 md:p-7"
              >
                <p className="text-sm font-medium text-gray-500">{item.period}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  {item.degree}
                </h3>
                <p className="mt-2 text-base font-medium text-gray-700">{item.institution}</p>
                <p className="mt-3 text-sm text-gray-500">{item.detail}</p>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.note}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 t-h2 font-bold tracking-tight text-black">
            Current research
          </h2>
          <ul className="max-w-3xl divide-y divide-black/5">
            {researchAreas.map((area) => (
              <li key={area} className="py-4 text-base leading-relaxed text-gray-700 md:text-lg">
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-8 t-h2 font-bold tracking-tight text-black">
            Awards and fellowships
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {awards.map((award, index) => (
              <motion.article
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.48, delay: Math.min(index * 0.05, 0.2) }}
                className="rounded-2xl bg-[#fafafa] p-6"
              >
                <p className="text-sm font-medium text-gray-500">{award.period}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-black md:text-2xl">
                  {award.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{award.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 t-h2 font-bold tracking-tight text-black">
            Methods and subject matter
          </h2>
          <div className="flex flex-wrap gap-3">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-700"
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
