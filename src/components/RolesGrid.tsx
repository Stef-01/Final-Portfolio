import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Role } from "../types/roles";

interface RolesGridProps {
  roles: Role[];
  title: string;
  intro: string;
}

const cardClasses =
  "group relative block rounded-2xl bg-[#fafafa] p-6 md:p-8 transition-transform";

export const RolesGrid = ({ roles, title, intro }: RolesGridProps) => {
  return (
    <section className="w-full bg-white px-4 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
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
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="text-sm font-medium text-gray-500">
                    {role.period} · {role.organization}
                  </p>
                  {role.link && (
                    <span className="relative z-20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
                  {role.title}
                </h3>

                {role.location && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </div>
                )}

                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {role.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-600"
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
                  className={`${cardClasses} cursor-pointer hover:-translate-y-1`}
                >
                  {body}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={role.id}
                {...animationProps}
                className={`${cardClasses} cursor-pointer hover:-translate-y-1`}
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
