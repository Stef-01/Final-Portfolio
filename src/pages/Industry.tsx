import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { RolesGrid } from "../components/RolesGrid";
import { industryRoles } from "../types/roles";

export function Industry() {
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
              Industry
            </p>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
              Founding, advising, and building health-tech ventures
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
              NOURISH, Sous, GenieRX (7th of 3,500 at Harvard HSIL), Adcem
              Pharma dialysis JV in Lagos, Microsoft Healthcare from the Eye,
              Stanford XR Hackathon (1st place Social Good) — the building work
              across the portfolio.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { k: "9", v: "ventures and advisory engagements" },
                { k: "7th / 3,500", v: "Harvard HSIL competition placement" },
                { k: "1st", v: "Stanford XR Hackathon Social Good" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="rounded-[28px] border border-black/10 bg-[#fafafa] px-6 py-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-3xl md:text-5xl font-bold tracking-tight text-black">
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
        roles={industryRoles}
        eyebrow="Industry Roles"
        title="Every venture, its own card"
        intro="Founding, advisory, and consulting engagements across the health-tech stack — each with its own dedicated card. NOURISH and Sous are the compounding bets; the rest are the muscles that built them. Flagship case studies and tinker projects live on the landing page."
      />

      <ContactSection />
    </div>
  );
}
