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
  "group relative block rounded-[28px] bg-white p-6 md:p-8 transition-transform duration-300";

const hoverClasses =
  "cursor-pointer hover:-translate-y-1";

export const RolesGrid = ({ roles, title, intro }: RolesGridProps) => {
  return (
    <section className="w-full px-4 pt-12 pb-12 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="t-h2 font-bold tracking-[-0.03em] text-gray-900">
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    {role.period}
                  </p>
                  {role.link && (
                    <span className="relative z-20 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-gray-900 transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-2xl">
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
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-tan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-gray-600"
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
