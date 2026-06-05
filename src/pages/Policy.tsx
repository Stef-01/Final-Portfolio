import { motion } from "motion/react";
import { ArrowLeft, Shield, Landmark, Radar, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { policyInitiatives } from "../types/policy";

const icons = [Shield, HeartPulse, Landmark, Radar];

export function Policy() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8">
      <FloatingBackButton />
      {/* Amber accent wash carries the home hero's premium feel into Policy */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_60%)]" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-['Clash_Grotesk',_sans-serif] font-medium text-[18px]">
            Back to Home
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Policy
            </p>
          </div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
            Government, implementation, and national-capability work
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
            A focused view of work relevant to public-sector, advisory, and
            national mission environments — spanning implementation,
            surveillance, evidence translation, and biosecurity-oriented systems
            thinking.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Evidence translated into action", Icon: Shield },
              { label: "Health systems and implementation", Icon: HeartPulse },
              { label: "AI, surveillance, and national resilience", Icon: Radar },
            ].map(({ label, Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 rounded-[28px] border border-white/60 bg-white/70 px-5 py-5 shadow-[0_30px_60px_-40px_rgba(245,158,11,0.55)] backdrop-blur-md ring-1 ring-amber-500/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm md:text-base font-medium text-gray-800">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          <section className="mt-14">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
                  Selected Initiatives
                </p>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                Work shaped for complex public systems, not just presentation
              </h2>
            </div>

            <div className="grid gap-6">
              {policyInitiatives.map((initiative, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <motion.div
                    key={initiative.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: Math.min(index * 0.08, 0.24),
                    }}
                    whileHover={{ y: -6 }}
                    className="rounded-[32px] border border-black/8 bg-white p-6 md:p-8 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.4)] ring-1 ring-amber-500/10 transition-shadow hover:shadow-[0_40px_80px_-48px_rgba(245,158,11,0.6)]"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-3xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg shadow-amber-500/30">
                          <Icon className="h-4 w-4" />
                          {initiative.scope}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black">
                          {initiative.title}
                        </h3>
                        <p className="mt-3 text-lg md:text-xl leading-relaxed text-gray-700">
                          {initiative.subtitle}
                        </p>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                          {initiative.description}
                        </p>
                      </div>

                      <div className="min-w-[220px] rounded-[24px] border border-black/8 bg-[#fafafa] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                          Role
                        </p>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-black">
                          {initiative.role}
                        </p>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                          Period
                        </p>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-black">
                          {initiative.period}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {initiative.themes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full border border-black/10 bg-[#f6f6f6] px-3 py-2 text-sm font-medium text-gray-700"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </motion.div>
      </div>

      <ContactSection />
    </div>
  );
}
