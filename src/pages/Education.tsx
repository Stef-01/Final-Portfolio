import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Network,
  PenLine,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { RoleNetworkModal } from "../components/RoleNetworkModal";
import { TeachingSection } from "../components/TeachingSection";
import { useGoBack } from "../hooks/useGoBack";
import { educationRoles, type Role } from "../types/roles";

const educationStats = [
  { value: "3", label: "teaching and curriculum roles" },
  { value: "ANU", label: "PhD student research teaching" },
  { value: "Stanford", label: "clinical nutrition curriculum writing" },
];

const roleIcons: Record<string, typeof GraduationCap> = {
  "tlia-entrepreneurship-bootcamp": Users,
  "anu-phd-student-teaching": GraduationCap,
  "nourish-pfeme-curriculum": PenLine,
};

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

      <div className="relative overflow-hidden px-4 pt-16 md:px-8 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
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
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Education
              </p>
            </div>
            <h1 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-tighter text-black md:text-8xl">
              Teaching research, clinical nutrition, and venture design
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-xl">
              Research-methods teaching at ANU, clinician-residency curriculum
              development with Stanford Medicine NOURISH PFEME, and
              entrepreneurship education as TLIA Bootcamp Program Lead.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {educationStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-white/60 bg-white/70 px-6 py-7 shadow-[0_30px_60px_-40px_rgba(16,185,129,0.55)] ring-1 ring-emerald-500/10 backdrop-blur-md"
                >
                  <p className="bg-gradient-to-br from-emerald-600 to-teal-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Teaching
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-black md:text-6xl">
              Teaching and curriculum roles
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-xl">
              Designing learning experiences across research, clinical
              nutrition, and venture creation.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {educationRoles.map((role, index) => {
              const Icon = roleIcons[role.id] ?? BookOpen;
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
                  className={`group relative flex min-h-full flex-col overflow-hidden rounded-[30px] border border-black/10 bg-[#fafafa] p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.55)] md:p-7 ${
                    isTlia ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${role.accent}`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 ring-1 ring-black/10">
                      {role.period}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                    {role.organization}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl">
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
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                      >
                        {showTliaDetail ? "View TLIA detail" : "Open TLIA detail"}
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
                        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                      >
                        Related case study
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
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2"
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
