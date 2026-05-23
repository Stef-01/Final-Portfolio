import React, { useMemo } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// A subtle DNA double-helix motif. Two sine-wave strands with periodic "rungs"
// connecting them. Rendered at low opacity so it reads as texture, not content.
// Layered ABOVE the Spline scene but BELOW the hero copy.
export const DnaHelixOverlay: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const { strandA, strandB, rungs } = useMemo(() => {
    const width = 400;
    const height = 1000;
    const amplitude = 80;
    const frequency = 0.035;
    const points = 160;
    const rungCount = 22;

    const a: [number, number][] = [];
    const b: [number, number][] = [];
    for (let i = 0; i <= points; i += 1) {
      const y = (i / points) * height;
      const phase = y * frequency;
      a.push([width / 2 + Math.sin(phase) * amplitude, y]);
      b.push([width / 2 - Math.sin(phase) * amplitude, y]);
    }

    const toPath = (pts: [number, number][]) => {
      return pts
        .map(
          ([x, y], idx) =>
            `${idx === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`,
        )
        .join(" ");
    };

    const rungList: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
    }[] = [];
    for (let i = 1; i < rungCount; i += 1) {
      const y = (i / rungCount) * height;
      const phase = y * frequency;
      const x1 = width / 2 + Math.sin(phase) * amplitude;
      const x2 = width / 2 - Math.sin(phase) * amplitude;
      const depth = Math.abs(Math.cos(phase));
      rungList.push({ x1, y1: y, x2, y2: y, opacity: 0.15 + depth * 0.35 });
    }

    return {
      strandA: toPath(a),
      strandB: toPath(b),
      rungs: rungList,
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-y-[-10%] right-[-8%] hidden md:block"
        style={{ width: "38%", maxWidth: 520 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 400 1000"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          animate={prefersReducedMotion ? undefined : { rotate: [0, 2, -2, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="dna-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(15,23,42)" stopOpacity={0} />
              <stop offset="20%" stopColor="rgb(15,23,42)" stopOpacity={0.55} />
              <stop offset="80%" stopColor="rgb(15,23,42)" stopOpacity={0.55} />
              <stop offset="100%" stopColor="rgb(15,23,42)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <path
            d={strandA}
            stroke="url(#dna-fade)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={strandB}
            stroke="url(#dna-fade)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          {rungs.map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke="rgba(15,23,42,0.45)"
              strokeWidth="0.8"
              strokeLinecap="round"
              style={{ opacity: r.opacity }}
            />
          ))}
        </motion.svg>
      </motion.div>

      <motion.div
        className="absolute inset-y-[-6%] left-[-14%] block md:hidden"
        style={{ width: "60%", maxWidth: 360 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.16 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 400 1000"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <path
            d={strandA}
            stroke="rgba(15,23,42,0.5)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={strandB}
            stroke="rgba(15,23,42,0.5)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          {rungs.map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke="rgba(15,23,42,0.4)"
              strokeWidth="0.7"
              strokeLinecap="round"
              style={{ opacity: r.opacity }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};
