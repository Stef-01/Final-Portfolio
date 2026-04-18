import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Role } from "../types/roles";

interface RolesGridProps {
  roles: Role[];
  eyebrow: string;
  title: string;
  intro: string;
}

export const RolesGrid = ({ roles, eyebrow, title, intro }: RolesGridProps) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white px-4 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
            {title}
          </h2>
          <p className="mt-4 text-base md:text-xl leading-relaxed text-gray-600">
            {intro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((role, index) => {
            const clickable = Boolean(role.link);

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.25),
                }}
                onClick={() => role.link && navigate(role.link)}
                onKeyDown={(e) => {
                  if (!role.link) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(role.link);
                  }
                }}
                role={clickable ? "link" : undefined}
                tabIndex={clickable ? 0 : -1}
                className={`group relative overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] p-6 md:p-8 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] transition-transform ${clickable ? "cursor-pointer hover:-translate-y-1" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {role.period}
                  </span>
                  {clickable && (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>

                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  {role.organization}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-black">
                  {role.title}
                </h3>

                {role.location && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </div>
                )}

                <p className="mt-5 text-base leading-relaxed text-gray-700">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
