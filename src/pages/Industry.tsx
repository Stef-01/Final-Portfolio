import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { RolesGrid } from "../components/RolesGrid";
import { VentureOrbit } from "../components/VentureOrbit";
import { CountUp } from "../components/CountUp";
import { industryRoles } from "../types/roles";
import { useGoBack } from "../hooks/useGoBack";

export function Industry() {
  const goBack = useGoBack();
  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="relative overflow-hidden px-4 pt-16 md:pt-20 md:px-8">
        {/* Emerald accent wash ties this page to the home hero's premium look */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
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
                Industry
              </p>
            </div>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
              Founding, advising, and building health-tech ventures
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
              NOURISH and Casa; GenieRX (2nd in the US, 7th of 3,500 at Harvard
              HSIL); the Adcem Fidson dialysis joint venture in Nigeria;
              Microsoft / Stanford Medicine HFTE; and the Stanford XR Hackathon
              (1st place, Social Good).
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { value: 9 as number | string, label: "ventures and advisory engagements" },
                { value: "7th / 3,500", label: "Harvard HSIL competition placement" },
                { value: "1st", label: "Stanford XR Hackathon Social Good" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-white/60 bg-white/70 px-6 py-7 shadow-[0_30px_60px_-40px_rgba(16,185,129,0.55)] backdrop-blur-md ring-1 ring-emerald-500/10"
                >
                  <p className="bg-gradient-to-br from-emerald-600 to-teal-500 bg-clip-text text-4xl md:text-5xl font-bold tracking-tight text-transparent">
                    {typeof stat.value === "number" ? <CountUp to={stat.value} /> : stat.value}
                  </p>
                  <p className="mt-3 text-sm md:text-base text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Portfolio
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
            Health-tech venture portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
            The through-line across this work is simple: health does not just need
            better ideas. It needs delivery models that survive real incentives,
            real institutions, and real lives.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <VentureOrbit />
          </motion.div>
        </div>
      </section>

      <RolesGrid
        roles={industryRoles}
        eyebrow="Roles"
        title="Founding and advisory work"
        intro="Product creation, venture strategy, and operating-model design across nutrition, clinical decision support, diagnostics, and medical devices."
      />

      <ContactSection />
    </div>
  );
}
