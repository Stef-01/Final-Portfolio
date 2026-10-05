import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Role } from "../types/roles";

interface RolesGridProps {
  roles: Role[];
  title: string;
  intro: string;
}

const cardClasses =
  "group relative block rounded-3xl border border-black/[0.07] bg-white p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-200";

const hoverClasses =
  "cursor-pointer hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]";

export const RolesGrid = ({ roles, title, intro }: RolesGridProps) => {
  return (
    <section className="w-full bg-white px-4 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="t-h2 font-bold tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            {intro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((role, index) => {
            const body = (
              <>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-gray-400">
                    {role.period}
                  </p>
                  {role.link && (
                    <span className="relative z-20 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.07] bg-white text-gray-400 transition-colors group-hover:border-black/[0.14] group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
                  {role.title}
                </h3>

                <p className="mt-1.5 text-sm text-gray-500">
                  {role.organization}
                  {role.location ? `, ${role.location}` : ""}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {role.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-gray-500">
                      <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-black/20" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.07] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.07em] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            const animationProps = {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: {
                duration: 0.5,
                delay: Math.min(index * 0.05, 0.25),
              },
            } as const;

            if (!role.link) {
              return (
                <motion.div
                  key={role.id}
                  {...animationProps}
                  className={cardClasses}
                >
                  {body}
                </motion.div>
              );
            }

            const isExternal = /^https?:\/\//.test(role.link);

            if (isExternal) {
              return (
                <motion.a
                  key={role.id}
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...animationProps}
                  className={`${cardClasses} ${hoverClasses}`}
                >
                  {body}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={role.id}
                {...animationProps}
                className={`${cardClasses} ${hoverClasses}`}
              >
                <Link
                  to={role.link}
                  className="absolute inset-0 z-10"
                  aria-label={role.title}
                />
                {body}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
