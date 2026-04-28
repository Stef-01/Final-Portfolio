import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { PrecisionMedicineSection } from "../components/PrecisionMedicineSection";
import { SystemsMapSection } from "../components/SystemsMapSection";
import { RolesGrid } from "../components/RolesGrid";
import { researchRoles } from "../types/roles";

export function Research() {
  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="px-4 pt-16 md:pt-20 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[18px] font-medium">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
              Research
            </p>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
              Clinical, precision, and population health research
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
              Five concurrent research roles across Stanford, ANU, and the WHO —
              pharmacogenomics, precision oncology, oculomics AI, Indigenous
              implementation, and global-health surveillance. Seven
              peer-reviewed publications, one in preparation.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { k: "7", v: "peer-reviewed publications" },
                { k: "5", v: "concurrent research roles" },
                { k: "3", v: "institutions (Stanford, ANU, WHO)" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="rounded-[28px] border border-black/10 bg-[#fafafa] px-6 py-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                    {stat.k}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-600">
                    {stat.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <RolesGrid
        roles={researchRoles}
        eyebrow="Research Roles"
        title="Every research role, its own card"
        intro="Each role below links to outputs, deliverables, and collaborators — from the NOURISH teaching kitchen manuscript in preparation today back to the WHO GOARN strategic plan work that kicked off this portfolio."
      />

      <PrecisionMedicineSection />

      <SystemsMapSection />

      <ContactSection />
    </div>
  );
}
