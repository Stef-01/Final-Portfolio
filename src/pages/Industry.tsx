import { motion } from "motion/react";
import { PageIntro, PageShell } from "../components/PageShell";
import { RolesGrid } from "../components/RolesGrid";
import { VentureOrbit } from "../components/VentureOrbit";
import { industryRoles } from "../types/roles";

const stats = [
  { value: "9", label: "ventures and advisory engagements" },
  { value: "7th of 3,500", label: "Harvard HSIL" },
  { value: "1st", label: "Stanford XR Hackathon, Social Good" },
];

export function Industry() {
  return (
    <PageShell>
      <PageIntro
        title="Founding, building, and advising ventures"
        description="Coethia, Casa, GenieRX (2nd in the US at Harvard HSIL), the Adcem–Fidson dialysis JV in Nigeria, Stanford Medicine HFTE with Microsoft, and Stanford XR."
        stats={stats}
      />

      <section className="w-full px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
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
        intro="Product, venture strategy, and operating models — nutrition, clinical decision support, diagnostics, devices."
      />
    </PageShell>
  );
}
