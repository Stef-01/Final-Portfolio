import { motion } from "motion/react";
import { StakeholderEcosystem } from "./StakeholderEcosystem";

export const SystemsMapSection = () => {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Systems Map
          </p>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
          The healthcare ecosystem behind the work
        </h2>
        <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
          A treatment can fail at any handoff: who pays for it, who approves it,
          who delivers it, and who needs it. My work sits across those handoffs.
        </p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <StakeholderEcosystem />
        </motion.div>
      </div>
    </section>
  );
};
