import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  ChefHat,
  Droplets,
  Eye,
  Glasses,
  Handshake,
  Pill,
  Sprout,
} from "lucide-react";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { useWindowWidth } from "../hooks/useWindowWidth";

/**
 * VentureOrbit
 * ---------------------------------------------------------------------------
 * Minimal radial map of the industry work: "Industry" sits at the center and
 * the nine ventures ring it as plain white bubbles joined by hairlines. No
 * color — the only signal is weight and contrast. Hovering / focusing a
 * bubble lifts it, darkens its hairline, and writes the real role into the
 * caption under the center title, so nothing floats or shifts the layout.
 *
 * Wide: absolutely-positioned bubbles over an SVG hairline layer.
 * Narrow (phones and windows under 640px): a hairline-divided list — no hover
 * required, and no labels fighting for room.
 *
 * Self-contained: markup + scoped <style>, only depends on usePhoneLayout.
 */

type Cat = "Building" | "Consulting" | "Advising";

interface Venture {
  id: string;
  /** Short label printed under the bubble. */
  label: string;
  /** Full name, written into the caption. */
  name: string;
  role: string;
  cat: Cat;
  Icon: LucideIcon;
}

const RAW: Venture[] = [
  {
    id: "coethia",
    label: "Coethia",
    name: "Coethia",
    role: "Partnerships & Strategy Officer · concepts, tech, procurement",
    cat: "Building",
    Icon: Handshake,
  },
  {
    id: "casa",
    label: "Casa",
    name: "Casa",
    role: "Founder · cooking-confidence app",
    cat: "Building",
    Icon: ChefHat,
  },
  {
    id: "genierx",
    label: "GenieRX",
    name: "GenieRX",
    role: "Team Leader → Director · 2nd in the US, 7th of 3,500",
    cat: "Building",
    Icon: Pill,
  },
  {
    id: "adcem",
    label: "Adcem–Fidson",
    name: "Adcem–Fidson JV",
    role: "Product / BD Intern · home dialysis, Nigeria",
    cat: "Building",
    Icon: Droplets,
  },
  {
    id: "aether",
    label: "Aether AI",
    name: "Aether AI",
    role: "Student Project Manager · clinical-AI viability",
    cat: "Consulting",
    Icon: Bot,
  },
  {
    id: "hfte",
    label: "HFTE",
    name: "Healthcare from the Eye",
    role: "Student Project Manager · oculomics device",
    cat: "Consulting",
    Icon: Eye,
  },
  {
    id: "consulting",
    label: "Stanford Consulting",
    name: "Stanford Health Consulting",
    role: "Student Consultant · readmissions reduction",
    cat: "Consulting",
    Icon: Building2,
  },
  {
    id: "xr",
    label: "Stanford XR",
    name: "Stanford XR Hackathon",
    role: "Team Lead · 1st place, Social Good",
    cat: "Building",
    Icon: Glasses,
  },
  {
    id: "nora",
    label: "NORA",
    name: "NORA",
    role: "Advisor · early-stage health venture",
    cat: "Advising",
    Icon: Sprout,
  },
];

/**
 * Ellipse radii as a share of the stage box. Narrow viewports get a taller,
 * rounder stage so the nine bubbles keep their breathing room; the same radii
 * drive the bubbles and the hairlines, so the two can never disagree.
 */
const WIDE = { rx: 41, ry: 35.5, aspect: "1040 / 690" };
const NARROW = { rx: 36, ry: 39, aspect: "1 / 1" };

const UNITS = RAW.map((v, i) => {
  const a = ((-90 + i * (360 / RAW.length)) * Math.PI) / 180;
  return { ...v, cos: Math.cos(a), sin: Math.sin(a) };
});

const layout = (compact: boolean) => {
  const { rx, ry } = compact ? NARROW : WIDE;
  return UNITS.map((v) => ({
    ...v,
    left: 50 + rx * v.cos,
    top: 50 + ry * v.sin,
  }));
};

const DEFAULT_CAPTION = "Nine ventures I founded, built, or advised";

export function VentureOrbit() {
  const isPhoneLayout = usePhoneLayout();
  const width = useWindowWidth();
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const current = active ?? pinned;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(null);
        setActive(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ----- Narrow: hairline list. Below ~640px the ring can no longer hold nine
  // labels without them colliding, so the list takes over. -----
  if (isPhoneLayout || (width > 0 && width < 640)) {
    return (
      <div className="vo-wrap">
        <style>{CSS}</style>
        <div className="vo-m-head">
          <h2 className="vo-title">Industry</h2>
          <p className="vo-sub">{DEFAULT_CAPTION}</p>
        </div>
        <ul className="vo-m-list">
          {RAW.map((v) => (
            <li key={v.id} className="vo-m-row">
              <span className="vo-m-mark" aria-hidden="true">
                <v.Icon className="vo-ico" strokeWidth={1.5} />
              </span>
              <div className="vo-m-text">
                <span className="vo-m-name">{v.name}</span>
                <span className="vo-m-role">{v.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ----- Desktop: radial map -----
  const compact = width > 0 && width < 900;
  const nodes = layout(compact);
  const cur = current ? nodes.find((v) => v.id === current) ?? null : null;

  return (
    <div className="vo-wrap">
      <style>{CSS}</style>
      <div
        className={`vo-stage${compact ? " vo-compact" : ""}${cur ? " vo-dim" : ""}`}
        style={{ aspectRatio: compact ? NARROW.aspect : WIDE.aspect }}
      >
        <svg
          className="vo-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((v) => (
            <line
              key={v.id}
              x1="50"
              y1="50"
              x2={v.left}
              y2={v.top}
              className={`vo-line${current === v.id ? " vo-on" : ""}`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="vo-center">
          <h2 className="vo-title">Industry</h2>
          <p className={`vo-sub${cur ? " vo-sub-role" : ""}`}>
            {cur ? (
              <>
                <span className="vo-sub-cat">{cur.cat}</span>
                <span className="vo-sub-name">{cur.name}</span>
                <span className="vo-sub-line">{cur.role}</span>
              </>
            ) : (
              DEFAULT_CAPTION
            )}
          </p>
        </div>

        {nodes.map((v) => (
          <div
            key={v.id}
            className={`vo-node${current === v.id ? " vo-active" : ""}`}
            style={{ left: `${v.left}%`, top: `${v.top}%` }}
          >
            <button
              type="button"
              className="vo-bubble"
              aria-pressed={pinned === v.id}
              aria-label={`${v.name}: ${v.role}`}
              onMouseEnter={() => setActive(v.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(v.id)}
              onBlur={() => setActive(null)}
              onClick={() => setPinned((p) => (p === v.id ? null : v.id))}
            >
              <v.Icon className="vo-ico" strokeWidth={1.5} />
            </button>
            <span className="vo-label">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CSS = `
.vo-wrap { width: 100%; }

.vo-title {
  margin: 0;
  font-size: clamp(2rem, 1.4rem + 2.6vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.04;
  color: #0a0a0a;
}
.vo-sub {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.45;
  color: #6b7280;
}

/* ----- Desktop stage ----- */
.vo-stage {
  position: relative;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
}
.vo-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
.vo-line { stroke: rgba(0,0,0,0.09); stroke-width: 1; transition: stroke .2s ease; }
.vo-stage.vo-dim .vo-line { stroke: rgba(0,0,0,0.045); }
.vo-line.vo-on { stroke: rgba(0,0,0,0.34); }

/* Only the title is centerd on the hub, so the caption can grow from one line
   to three on hover without nudging it. */
.vo-center {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  pointer-events: none;
}
.vo-center .vo-sub {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: min(460px, 52vw);
  margin: 0;
}
.vo-sub-role { display: flex; flex-direction: column; gap: 1px; }
.vo-sub-cat { font-size: 10.5px; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: #9ca3af; }
.vo-sub-name { font-weight: 600; color: #111111; }
.vo-sub-line { font-size: 13.5px; color: #6b7280; }

/* The node box is exactly the bubble, so the hairline meets the bubble's
   center; the label hangs off it absolutely and never shifts that anchor. */
.vo-node {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: clamp(72px, 7.2vw, 96px);
  aspect-ratio: 1;
  transition: opacity .2s ease;
}
.vo-stage.vo-dim .vo-node:not(.vo-active) { opacity: .5; }

.vo-bubble {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.vo-bubble:hover, .vo-node.vo-active .vo-bubble {
  transform: translateY(-3px);
  border-color: rgba(0,0,0,0.14);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.vo-bubble:focus-visible { outline: 2px solid #111111; outline-offset: 3px; }
.vo-ico { width: 26px; height: 26px; color: #111111; }

.vo-label {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  color: #4b5563;
  transition: color .2s ease;
}
.vo-node.vo-active .vo-label { color: #0a0a0a; }

.vo-stage.vo-compact .vo-label { width: 116px; font-size: 11.5px; }
.vo-stage.vo-compact .vo-node { width: 66px; }
.vo-stage.vo-compact .vo-ico { width: 22px; height: 22px; }
.vo-stage.vo-compact .vo-center .vo-sub { width: min(300px, 60vw); }

/* ----- Mobile ----- */
.vo-m-head { margin-bottom: 22px; }
.vo-m-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(0,0,0,0.07); }
.vo-m-row {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.vo-m-mark {
  display: grid; place-items: center;
  width: 44px; height: 44px; flex: 0 0 auto;
  border: 1px solid rgba(0,0,0,0.07); border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.vo-m-mark .vo-ico { width: 20px; height: 20px; }
.vo-m-text { display: flex; flex-direction: column; min-width: 0; }
.vo-m-name { font-size: 15px; font-weight: 600; color: #0a0a0a; }
.vo-m-role { margin-top: 2px; font-size: 12.5px; line-height: 1.4; color: #6b7280; }

@media (prefers-reduced-motion: reduce) {
  .vo-line, .vo-node, .vo-bubble, .vo-label { transition: none; }
}
`;
