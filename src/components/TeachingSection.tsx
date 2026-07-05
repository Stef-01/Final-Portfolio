import React from "react";
import { Lightbulb, Map, Presentation, Search } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import tliaAdvantage from "../assets/teaching/tlia-advantage.webp";
import tliaCuriosityMap from "../assets/teaching/tlia-curiosity-map.webp";
import tliaInnovationLenses from "../assets/teaching/tlia-innovation-lenses.webp";
import tliaNeedsFinding from "../assets/teaching/tlia-needs-finding.webp";
import tliaPainScoring from "../assets/teaching/tlia-pain-scoring.webp";
import tliaPitching from "../assets/teaching/tlia-pitching.webp";
import tliaTitle from "../assets/teaching/tlia-title.webp";

const roleCards = [
  {
    title: "Program architecture",
    text: "Built the bootcamp as a staged curriculum: identity and curiosity mapping, user observation, pain scoring, validation experiments, business models, and pitch synthesis.",
  },
  {
    title: "Facilitation for creative savants",
    text: "Taught entrepreneurship as a practical design discipline, helping learners turn lived context and creative strengths into testable venture opportunities.",
  },
];

const methodCards = [
  {
    title: "Curiosity to advantage",
    icon: Map,
    image: tliaCuriosityMap,
    text: "Students begin by mapping interests, strengths, and lived context so venture ideas start from authentic unfair advantages rather than generic startup prompts.",
  },
  {
    title: "Needs before ideas",
    icon: Search,
    image: tliaNeedsFinding,
    text: "The curriculum pushes learners into customer workflows, pain points, unmet needs, and opportunity lenses before they lock onto a solution.",
  },
  {
    title: "Validation discipline",
    icon: Lightbulb,
    image: tliaPainScoring,
    text: "Problems are scored by urgency and impact, then translated into hypotheses, fast tests, and evidence standards before resources are committed.",
  },
  {
    title: "Pitch-ready synthesis",
    icon: Presentation,
    image: tliaPitching,
    text: "The bootcamp closes by connecting customer, problem, market size, competitive advantage, economics, and positioning into concise pitch structures.",
  },
];

export function TeachingSection(): JSX.Element {
  return (
    <section id="tlia-bootcamp" className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-black md:text-4xl">
              Teaching entrepreneurship like a design discipline
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
              As Program Lead, I converted entrepreneurship from abstract advice into a repeatable practice: observe real people, define the pain, test assumptions cheaply, model the opportunity, and communicate the venture clearly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.62, delay: 0.08 }}
            className="overflow-hidden rounded-2xl bg-black"
          >
            <ImageWithFallback
              src={tliaTitle}
              alt="TLIA Entrepreneurship Bootcamp title slide identifying Stefan Thottunkal as Entrepreneurship Bootcamp Lead"
              fallbackInitial="T"
              accent="#0f766e"
              wrapperClassName="aspect-video w-full"
              className="h-full w-full object-cover opacity-95"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 92vw, 52vw"
            />
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roleCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="rounded-2xl bg-[#fafafa] p-6 md:p-7"
            >
              <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58 }}
            className="self-start rounded-2xl bg-[#fafafa] p-6 lg:sticky lg:top-28"
          >
            <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">
              From curiosity to a testable venture thesis
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              The TLIA deck turns startup education into repeatable exercises: map identity, observe real users, score pain, frame hypotheses, test cheaply, model the business, and pitch clearly.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={tliaAdvantage}
                alt="TLIA Advantage slide describing an inclusive venture-building framework"
                fallbackInitial="T"
                accent="#0f766e"
                wrapperClassName="aspect-video w-full"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 92vw, 32vw"
              />
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {methodCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="overflow-hidden rounded-2xl bg-[#fafafa]"
                >
                  <div className="aspect-video overflow-hidden bg-[#f5f5f5]">
                    <ImageWithFallback
                      src={card.image}
                      alt={`${card.title} slide from the TLIA Entrepreneurship Bootcamp deck`}
                      fallbackInitial="T"
                      accent="#0f766e"
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 30vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#0f3b32]" aria-hidden="true" />
                      <h4 className="text-xl font-semibold tracking-tight text-black">{card.title}</h4>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-gray-600">{card.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58 }}
          className="mt-8 overflow-hidden rounded-2xl bg-black"
        >
          <ImageWithFallback
            src={tliaInnovationLenses}
            alt="TLIA slide showing process, technology, narrative, and business model innovation lenses"
            fallbackInitial="T"
            accent="#0f766e"
            wrapperClassName="aspect-video w-full"
            className="h-full w-full object-cover opacity-95"
            loading="lazy"
            decoding="async"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
