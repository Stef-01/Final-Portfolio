import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Mail } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { RevealText } from "../components/RevealText";
import { EASE_OUT } from "../lib/motion";

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
    note: "Population health, research methods, and health systems.",
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
    detail: "One of 100 scholars selected globally.",
  },
  {
    title: "MQ Equity Merit Scholarship",
    period: "2023",
    detail: "One of two recipients in the Macquarie University Doctor of Medicine.",
  },
  {
    title: "Robert Menzies College Academic Scholarship",
    period: "2023",
    detail: "Academic scholarship for university performance.",
  },
  {
    title: "ANU Chancellor’s Letter of Commendation",
    period: "2020 & 2022",
    detail: "For academic achievement at ANU.",
  },
  {
    title: "ANU Plus Award",
    period: "2022",
    detail: "100 hours of volunteering and a reflective community-service program.",
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
  return (
    <PageShell>
      <div className="px-4 pt-14 md:px-8 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-5xl t-display font-bold leading-[0.95] tracking-[-0.04em] text-gray-900">
            <RevealText text="Stefan Thottunkal" onMount delay={0.05} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
          >
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-900 md:text-xl">
              Researcher, public servant, medical student, and builder.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Precision medicine, implementation science, public policy, and
              venture design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:stefan01@stanford.edu"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-[color,background-color,transform] active:scale-[0.97] hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href="https://scholar.google.com/citations?user=9Nxhv58AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-[color,background-color,transform] active:scale-[0.97] hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Google Scholar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl space-y-24">
          <section>
            <h2 className="mb-8 t-h2 font-bold tracking-[-0.03em] text-gray-900">
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
                  className="rounded-[28px] bg-white p-6 md:p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">{item.period}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-base font-medium text-gray-900">{item.institution}</p>
                  <p className="mt-3 text-sm text-gray-500">{item.detail}</p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{item.note}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-8 t-h2 font-bold tracking-[-0.03em] text-gray-900">
              Current research
            </h2>
            <ul className="max-w-3xl divide-y divide-black/[0.07] border-y border-black/[0.07]">
              {researchAreas.map((area) => (
                <li key={area} className="py-4 text-base leading-relaxed text-gray-900 md:text-lg">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-8 t-h2 font-bold tracking-[-0.03em] text-gray-900">
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
                  className="rounded-[28px] bg-white p-6 md:p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">{award.period}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-2xl">
                    {award.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{award.detail}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-8 t-h2 font-bold tracking-[-0.03em] text-gray-900">
              Methods and subject matter
            </h2>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
