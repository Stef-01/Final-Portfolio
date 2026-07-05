import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronDown, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { RoleNetworkModal } from "../components/RoleNetworkModal";
import { TeachingSection } from "../components/TeachingSection";
import { useGoBack } from "../hooks/useGoBack";
import { educationRoles, type Role } from "../types/roles";

const educationStats = [
  { value: "3", label: "teaching and curriculum roles" },
  { value: "ANU", label: "research-methods teaching" },
  { value: "Stanford", label: "clinical nutrition curriculum" },
];

export function Education(): JSX.Element {
  const goBack = useGoBack();
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const [showTliaDetail, setShowTliaDetail] = useState(false);
  const tliaDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeRole) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveRole(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeRole]);

  const openTliaDetail = () => {
    setShowTliaDetail(true);
    window.setTimeout(() => {
      tliaDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="px-4 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={goBack}
            className="group mb-12 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-emerald-600"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-[18px] font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-black md:text-6xl">
              Teaching research, clinical nutrition, and venture design
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Research-methods teaching at ANU, clinician-residency curriculum
              development with Stanford Medicine NOURISH PFEME, and
              entrepreneurship education as TLIA Bootcamp Program Lead.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
              {educationStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-lg font-semibold text-black">{stat.value}</dd>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-black md:text-4xl">
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
                  className={`flex min-h-full flex-col rounded-2xl bg-[#fafafa] p-6 md:p-7 ${
                    isTlia ? "cursor-pointer transition-colors hover:bg-[#f4f4f2]" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-gray-500">
                    {role.period}
                    {" · "}
                    {role.organization}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    {role.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {role.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-600"
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
                        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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
                        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                      >
                        Case study
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}

                    {role.network && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveRole(role);
                        }}
                        aria-label={`View ${role.title} network`}
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2"
                      >
                        <Network className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                        Network
                      </button>
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

      <ContactSection />

      <RoleNetworkModal role={activeRole} onClose={() => setActiveRole(null)} accent="#059669" />
    </div>
  );
}
