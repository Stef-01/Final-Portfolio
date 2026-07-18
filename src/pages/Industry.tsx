import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { RolesGrid } from "../components/RolesGrid";
import { VentureOrbit } from "../components/VentureOrbit";
import { StatValue } from "../components/CountUp";
import { industryRoles } from "../types/roles";
import { useGoBack } from "../hooks/useGoBack";
import { usePageTitle } from "../hooks/usePageTitle";

const stats = [
  { value: "9", label: "ventures and advisory engagements" },
  { value: "7th of 3,500", label: "Harvard HSIL" },
  { value: "1st", label: "Stanford XR Hackathon, Social Good" },
];

export function Industry() {
  const goBack = useGoBack();
  usePageTitle("Industry");
  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="px-4 pt-16 md:pt-20 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors mb-12 group"
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
              Founding, advising, and building health-tech ventures
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
              Coethia and Casa; GenieRX (2nd in the US at Harvard HSIL); the
              Adcem–Fidson dialysis joint venture in Nigeria; Microsoft /
              Stanford Medicine HFTE; and the Stanford XR Hackathon.
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

      <section className="w-full bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2 font-bold tracking-tight text-black">
            Industry experience
          </h2>

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
        title="Founding and advisory work"
        intro="Product creation, venture strategy, and operating-model design across nutrition, clinical decision support, diagnostics, and medical devices."
      />

      <ContactSection />
    </div>
  );
}
