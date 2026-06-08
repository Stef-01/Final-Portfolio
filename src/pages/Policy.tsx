import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { RolesTimeline } from "../components/RolesTimeline";
import { CountUp } from "../components/CountUp";
import { policyRoles } from "../types/roles";
import { useGoBack } from "../hooks/useGoBack";

export function Policy() {
  const goBack = useGoBack();
  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="relative overflow-hidden px-4 pt-16 md:pt-20 md:px-8">
        {/* Blue accent wash ties this page to the research page's treatment */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
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
              <span className="h-px w-8 bg-blue-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Policy
              </p>
            </div>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
              Public policy, government, and implementation
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
              Australian public-sector work — three teams at the Department of
              Social Services (NDIS outcomes and research, NDIS financial policy,
              and the National Redress Scheme), a Parliamentary Library
              internship, and Indigenous primary-care implementation research.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { k: 5, v: "policy & government roles" },
                { k: 3, v: "Dept. of Social Services teams" },
                { k: 1, v: "Parliamentary Library internship" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.v}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-white/60 bg-white/70 px-6 py-7 shadow-[0_30px_60px_-40px_rgba(59,130,246,0.55)] backdrop-blur-md ring-1 ring-blue-500/10"
                >
                  <p className="bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-6xl md:text-7xl font-bold tracking-tight text-transparent">
                    <CountUp to={stat.k} />
                  </p>
                  <p className="mt-3 text-sm md:text-base text-gray-600">
                    {stat.v}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <RolesTimeline
        roles={policyRoles}
        eyebrow="Policy Timeline"
        title="Inside the government work"
      />

      <ContactSection />
    </div>
  );
}
