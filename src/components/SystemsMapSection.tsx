import { motion } from "motion/react";
import { StakeholderEcosystem } from "./StakeholderEcosystem";

export const SystemsMapSection = () => {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
          The healthcare ecosystem behind the work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
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
