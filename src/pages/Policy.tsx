import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { RolesTimeline } from "../components/RolesTimeline";
import { StatValue } from "../components/CountUp";
import { policyRoles } from "../types/roles";
import { useGoBack } from "../hooks/useGoBack";
import { usePageMeta } from "../hooks/usePageMeta";

const stats = [
  { value: "5", label: "policy and government roles" },
  { value: "3", label: "Department of Social Services teams" },
  { value: "1", label: "Parliamentary Library internship" },
];

export function Policy() {
  const goBack = useGoBack();
  usePageMeta({
    title: "Policy",
    path: "/policy",
    description:
      "Australian public policy and government: three Department of Social Services teams (NDIS, National Redress Scheme), a Parliamentary Library internship, and Indigenous primary-care implementation research.",
  });
  return (
    <main className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="px-4 pt-16 md:pt-20 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="t-h1 font-bold tracking-tight text-black leading-[1.02]">
              Public policy, government, and implementation
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
              Australian public-sector work: three teams at the Department of
              Social Services (NDIS outcomes and research, NDIS financial
              policy, and the National Redress Scheme), a Parliamentary Library
              internship, and Indigenous primary-care implementation research.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-lg font-semibold text-black">
                    <StatValue value={stat.value} />
                  </dd>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      <RolesTimeline roles={policyRoles} title="Inside the government work" accent="var(--lane-policy)" />

      <ContactSection />
    </main>
  );
}
