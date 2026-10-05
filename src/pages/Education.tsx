import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { PageIntro, PageShell } from "../components/PageShell";
import { TeachingSection } from "../components/TeachingSection";
import { educationRoles } from "../types/roles";

const educationStats = [
  { value: "3", label: "teaching and curriculum roles" },
  { value: "ANU", label: "research-methods teaching" },
  { value: "Stanford", label: "clinical nutrition curriculum" },
];

export function Education(): JSX.Element {
  const [showTliaDetail, setShowTliaDetail] = useState(false);
  const tliaDetailRef = useRef<HTMLDivElement>(null);

  const openTliaDetail = () => {
    setShowTliaDetail(true);
    window.setTimeout(() => {
      tliaDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <PageShell>
      <PageIntro
        title="Teaching research, clinical nutrition, and venture design"
        description="Research-methods teaching at ANU, clinician-residency curriculum for Stanford Medicine NOURISH PFEME, and the TLIA entrepreneurship bootcamp."
        stats={educationStats}
      />

      <section className="w-full px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 t-h2 font-bold tracking-[-0.03em] text-gray-900">
            Teaching and curriculum roles
          </h2>

          <div className="grid gap-5 lg:grid-cols-3">
            {educationRoles.map((role, index) => {
              const isTlia = role.id === "tlia-entrepreneurship-bootcamp";

              return (
                <motion.article
                  key={role.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.18) }}
                  whileHover={{ y: -6 }}
                  onClick={isTlia ? openTliaDetail : undefined}
                  className={`flex min-h-full flex-col rounded-[28px] bg-white p-6 md:p-7 ${
                    isTlia ? "cursor-pointer" : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    {role.period}
                  </p>
                  <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500">
                    {role.organization}
                    {role.location ? `, ${role.location}` : ""}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                    {role.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {role.deliverables.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-gray-500">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-tan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
                    {isTlia && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          openTliaDetail();
                        }}
                        aria-expanded={showTliaDetail}
                        aria-controls="tlia-bootcamp-detail"
                        className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                      >
                        {showTliaDetail ? "Hide curriculum" : "View curriculum"}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            showTliaDetail ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )}

                    {role.link && !isTlia && (
                      <Link
                        to={role.link}
                        className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                      >
                        Case study
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence initial={false}>
        {showTliaDetail && (
          <motion.div
            ref={tliaDetailRef}
            id="tlia-bootcamp-detail"
            key="tlia-detail"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <TeachingSection />
          </motion.div>
        )}
      </AnimatePresence>

    </PageShell>
  );
}
