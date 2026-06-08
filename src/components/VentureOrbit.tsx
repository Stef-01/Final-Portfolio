import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { usePhoneLayout } from "../hooks/usePhoneLayout";

/**
 * VentureOrbit
 * ---------------------------------------------------------------------------
 * Interactive radial map of the industry ventures — a hub with the nine
 * ventures arranged around it on a slowly-rotating orbit, colour-coded by how
 * Stefan engaged (building / consulting / advising). Hovering / focusing a
 * venture spotlights it, sends a flowing current down the connector, and
 * reveals a frosted glass card with the real role played there.
 *
 * Desktop: inline SVG (responsive via viewBox, keyboard accessible).
 * Mobile (portrait phones): a stacked list — no hover required.
 *
 * Self-contained: inline SVG + scoped <style>, only depends on usePhoneLayout.
 */

type Cat = "Building" | "Consulting" | "Advising";

const CAT_COLOR: Record<Cat, string> = {
  Building: "#10b981", // emerald
  Consulting: "#0ea5e9", // sky
  Advising: "#f59e0b", // amber
};

interface Venture {
  id: string;
  emoji: string;
  name: string;
  role: string;
  cat: Cat;
  x: number;
  y: number;
}

const RAW: Array<Omit<Venture, "x" | "y">> = [
  { id: "nourish", emoji: "🥗", name: "NOURISH", role: "Lead Research Coordinator · precision nutrition", cat: "Building" },
  { id: "sous", emoji: "🍳", name: "Sous", role: "Founder · cooking-confidence app", cat: "Building" },
  { id: "genierx", emoji: "💊", name: "GenieRX", role: "Team Leader → Director · 2nd US, 7th of 3,500", cat: "Building" },
  { id: "adcem", emoji: "🩺", name: "Adcem Fidson", role: "Product / BD Intern · dialysis JV, Nigeria", cat: "Building" },
  { id: "aether", emoji: "🤖", name: "Aether AI", role: "Student Project Manager · clinical-AI viability", cat: "Consulting" },
  { id: "hfte", emoji: "👁️", name: "Healthcare from the Eye", role: "Student Project Manager · oculomics device", cat: "Consulting" },
  { id: "consulting", emoji: "🏥", name: "Stanford Consulting", role: "Student Consultant · readmissions reduction", cat: "Consulting" },
  { id: "xr", emoji: "🥽", name: "Stanford XR", role: "Team Lead · 1st place, Social Good", cat: "Building" },
  { id: "nora", emoji: "🌱", name: "NORA", role: "Advisor · early-stage health venture", cat: "Advising" },
];

const VB_W = 1000;
const VB_H = 600;
const CX = 500;
const CY = 300;
const RX = 408;
const RY = 212;

const VENTURES: Venture[] = RAW.map((v, i) => {
  const a = ((-90 + i * (360 / RAW.length)) * Math.PI) / 180;
  return { ...v, x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) };
});

const LEGEND: Cat[] = ["Building", "Consulting", "Advising"];

export function VentureOrbit() {
  const isPhoneLayout = usePhoneLayout();
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

  // ----- Mobile: stacked list -----
  if (isPhoneLayout) {
    return (
      <div className="vo-wrap">
        <style>{CSS}</style>
        <ul className="vo-m-list">
          {VENTURES.map((v) => (
            <li key={v.id} className="vo-m-row">
              <span className="vo-m-emoji" aria-hidden="true">
                {v.emoji}
              </span>
              <div className="vo-m-text">
                <span className="vo-m-name">{v.name}</span>
                <span className="vo-m-role">{v.role}</span>
                <span className="vo-m-cat">
                  <i style={{ background: CAT_COLOR[v.cat] }} />
                  {v.cat}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ----- Desktop: interactive orbit -----
  const cur = current ? VENTURES.find((v) => v.id === current) ?? null : null;

  let cardStyle: CSSProperties = {};
  if (cur) {
    const leftPct = (cur.x / VB_W) * 100;
    const topPct = (cur.y / VB_H) * 100;
    // Place the card inward (toward centre) so it never clips a stage edge.
    const tx = cur.x < CX ? "14px" : "calc(-100% - 14px)";
    const ty = cur.y < CY * 0.55 ? "8px" : cur.y > CY * 1.45 ? "calc(-100% - 8px)" : "-50%";
    cardStyle = { left: `${leftPct}%`, top: `${topPct}%`, transform: `translate(${tx}, ${ty})` };
  }

  return (
    <div className="vo-wrap">
      <style>{CSS}</style>
      <div className="vo-stage">
        <svg
          className={`vo-map${current ? " vo-dim" : ""}`}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          width="100%"
          aria-label="Interactive map of nine health-tech ventures arranged around a hub, colour-coded by building, consulting, or advising."
        >
          <title>Health-tech venture map</title>

          {/* Decorative rotating orbit rings */}
          <g className="vo-rings" style={{ transformOrigin: `${CX}px ${CY}px` }}>
            <ellipse cx={CX} cy={CY} rx={RX} ry={RY} className="vo-ring" />
            <ellipse cx={CX} cy={CY} rx={RX * 0.62} ry={RY * 0.62} className="vo-ring vo-ring-2" />
          </g>

          {/* Connectors from hub to every venture (active one flows in colour) */}
          <g>
            {VENTURES.map((v) => {
              const on = current === v.id;
              return (
                <line
                  key={v.id}
                  x1={CX}
                  y1={CY}
                  x2={v.x}
                  y2={v.y}
                  className={`vo-edge${on ? " vo-on" : ""}`}
                  style={on ? { stroke: CAT_COLOR[v.cat] } : undefined}
                />
              );
            })}
          </g>

          {/* Hub */}
          <g className="vo-hub">
            <circle cx={CX} cy={CY} r={62} className="vo-hub-glow" />
            <circle cx={CX} cy={CY} r={52} className="vo-hub-disc" />
            <text className="vo-hub-t" x={CX} y={CY - 6} textAnchor="middle">
              Health-tech
            </text>
            <text className="vo-hub-s" x={CX} y={CY + 14} textAnchor="middle">
              ventures
            </text>
          </g>

          {/* Venture nodes */}
          <g>
            {VENTURES.map((v) => {
              const isActive = current === v.id;
              const cls = "vo-node" + (isActive ? " vo-active" : "");
              const color = CAT_COLOR[v.cat];
              return (
                <g
                  key={v.id}
                  className={cls}
                  role="button"
                  tabIndex={0}
                  aria-pressed={pinned === v.id}
                  aria-label={`${v.name}: ${v.role}`}
                  onMouseEnter={() => setActive(v.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(v.id)}
                  onBlur={() => setActive(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPinned((p) => (p === v.id ? null : v.id));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPinned((p) => (p === v.id ? null : v.id));
                    }
                  }}
                >
                  <circle
                    className="vo-ringlet"
                    cx={v.x}
                    cy={v.y}
                    r={35}
                    style={{ stroke: color, opacity: isActive ? 1 : 0.45 }}
                  />
                  <circle className="vo-disc" cx={v.x} cy={v.y} r={30} />
                  <text className="vo-emoji" x={v.x} y={v.y} textAnchor="middle" dominantBaseline="central">
                    {v.emoji}
                  </text>
                  <text className="vo-lab" x={v.x} y={v.y + 49} textAnchor="middle">
                    {v.name}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {cur && (
          <div className="vo-card vo-show" style={cardStyle}>
            <div className="vo-card-cat">
              <i style={{ background: CAT_COLOR[cur.cat] }} />
              {cur.cat}
            </div>
            <div className="vo-card-name">{cur.name}</div>
            <div className="vo-card-role">{cur.role}</div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="vo-legend">
        {LEGEND.map((c) => (
          <span key={c} className="vo-legend-item">
            <i style={{ background: CAT_COLOR[c] }} />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

const CSS = `
.vo-wrap { width: 100%; }
.vo-stage { position: relative; width: 100%; max-width: 960px; margin: 0 auto; }
.vo-map { display: block; width: 100%; height: auto; }

.vo-rings { animation: vo-spin 70s linear infinite; }
.vo-ring { fill: none; stroke: rgba(16,185,129,0.26); stroke-width: 1.5; stroke-dasharray: 2 9; stroke-linecap: round; }
.vo-ring-2 { stroke: rgba(16,185,129,0.16); }
@keyframes vo-spin { to { transform: rotate(360deg); } }

.vo-edge { stroke: #cdd9d2; stroke-width: 1.4; opacity: .5; transition: stroke-width .18s, opacity .18s; }
.vo-edge.vo-on { stroke-width: 2.4; opacity: .98; stroke-dasharray: 7 7; animation: vo-flow 0.7s linear infinite; }
.vo-map.vo-dim .vo-edge:not(.vo-on) { opacity: .12; }
@keyframes vo-flow { to { stroke-dashoffset: -28; } }

.vo-hub .vo-hub-glow { fill: rgba(16,185,129,0.14); animation: vo-pulse 5.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.vo-hub .vo-hub-disc { fill: #ffffff; stroke: rgba(16,185,129,0.5); stroke-width: 1.5; }
.vo-hub .vo-hub-t { font: 700 17px ui-sans-serif, system-ui, sans-serif; fill: #0f7a5a; }
.vo-hub .vo-hub-s { font: 600 12px ui-sans-serif, system-ui, sans-serif; letter-spacing: .14em; text-transform: uppercase; fill: #5b8a78; }
@keyframes vo-pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: .9; transform: scale(1.08); } }

.vo-node { cursor: pointer; outline: none; transition: opacity .18s; }
.vo-node .vo-disc { fill: #f6faf8; stroke: rgba(15,40,30,0.08); stroke-width: 1; transition: transform .18s; transform-box: fill-box; transform-origin: center; }
.vo-node .vo-ringlet { fill: none; stroke-width: 2.4; transition: opacity .18s, transform .18s; transform-box: fill-box; transform-origin: center; }
.vo-node .vo-emoji { font-size: 30px; transition: transform .18s; transform-box: fill-box; transform-origin: center; }
.vo-node .vo-lab { font: 600 12.5px ui-sans-serif, system-ui, sans-serif; fill: #2f4a40; }
.vo-node.vo-active .vo-disc, .vo-node.vo-active .vo-emoji { transform: scale(1.12); }
.vo-node.vo-active .vo-ringlet { transform: scale(1.06); }
.vo-node:focus-visible .vo-disc { stroke: #0f172a; stroke-width: 1.5; }
.vo-map.vo-dim .vo-node:not(.vo-active) { opacity: .4; }

.vo-card {
  position: absolute; max-width: 252px; padding: 9px 13px; z-index: 5; pointer-events: none;
  background: rgba(255,255,255,0.18);
  -webkit-backdrop-filter: blur(16px) saturate(1.7); backdrop-filter: blur(16px) saturate(1.7);
  border: 1px solid rgba(255,255,255,0.55); border-radius: 13px;
  box-shadow: 0 10px 30px rgba(8,40,28,0.18), inset 0 1px 0 rgba(255,255,255,0.6);
  opacity: 0; transition: opacity .14s ease;
}
.vo-card.vo-show { opacity: 1; }
.vo-card-cat { display: flex; align-items: center; gap: 5px; font: 700 9.5px ui-sans-serif, system-ui, sans-serif; letter-spacing: .08em; text-transform: uppercase; color: #5f6f5f; margin-bottom: 3px; }
.vo-card-cat i { width: 6px; height: 6px; border-radius: 50%; }
.vo-card-name { font: 700 14px/1.2 ui-sans-serif, system-ui, sans-serif; color: #11362a; }
.vo-card-role { margin-top: 2px; font: 500 11.5px/1.35 ui-sans-serif, system-ui, sans-serif; color: #4f6a5f; }

.vo-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; margin-top: 18px; }
.vo-legend-item { display: inline-flex; align-items: center; gap: 7px; font: 600 12px ui-sans-serif, system-ui, sans-serif; color: #4f6a5f; }
.vo-legend-item i { width: 9px; height: 9px; border-radius: 50%; }

/* ----- Mobile ----- */
.vo-m-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.vo-m-row { display: flex; align-items: flex-start; gap: 11px; padding: 11px 13px; border-radius: 14px; background: #f4faf7; border: 0.5px solid #d6e7df; }
.vo-m-emoji { font-size: 24px; line-height: 1.1; flex: 0 0 auto; }
.vo-m-text { display: flex; flex-direction: column; min-width: 0; }
.vo-m-name { font: 700 15px ui-sans-serif, system-ui, sans-serif; color: #11362a; }
.vo-m-role { margin-top: 2px; font: 500 12.5px/1.4 ui-sans-serif, system-ui, sans-serif; color: #4f6a5f; }
.vo-m-cat { display: inline-flex; align-items: center; gap: 6px; margin-top: 5px; font: 700 10px ui-sans-serif, system-ui, sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #5f6f5f; }
.vo-m-cat i { width: 7px; height: 7px; border-radius: 50%; flex: 0 0 auto; }

@media (prefers-reduced-motion: reduce) {
  .vo-rings, .vo-hub .vo-hub-glow { animation: none; }
  .vo-edge.vo-on { animation: none; }
  .vo-node, .vo-node .vo-disc, .vo-node .vo-emoji, .vo-node .vo-ringlet, .vo-edge, .vo-card { transition: none; }
}
`;
