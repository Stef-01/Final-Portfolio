import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { usePhoneLayout } from "../hooks/usePhoneLayout";

/**
 * StakeholderEcosystem
 * ---------------------------------------------------------------------------
 * Interactive healthcare-stakeholder ecosystem map for the Systems Map
 * section. Hovering / focusing / tapping a stakeholder spotlights it and its
 * connections; the three stakeholders tied to real roles (Hospitals, Medical
 * Devices, Investors) reveal a small frosted role label.
 *
 * Desktop: an inline SVG node-graph (responsive via viewBox, keyboard
 * accessible, Esc clears the pinned selection).
 * Mobile (portrait phones): a stacked, zone-grouped list where the three
 * role-bearing stakeholders show their role inline — no hover required.
 *
 * Zero external dependencies beyond the repo's usePhoneLayout hook.
 */

type Zone = "fin" | "inn" | "care" | "pat";
type Category = "Consulting" | "Engineering" | "Finance";

interface NodeDef {
  id: string;
  x: number;
  y: number;
  emoji: string;
  label: string[];
  zone: Zone;
}

interface Role {
  cat: Category;
  title: string;
  loc?: string;
}

const NODES: NodeDef[] = [
  { id: "investors", x: 168, y: 170, emoji: "📈", label: ["Investors", "& Capital"], zone: "fin" },
  { id: "regulators", x: 429, y: 170, emoji: "🏛️", label: ["Regulatory", "Agencies"], zone: "fin" },
  { id: "pubhealth", x: 690, y: 170, emoji: "🌍", label: ["Public Health", "Dept. & NGOs"], zone: "fin" },
  { id: "payers", x: 951, y: 170, emoji: "💰", label: ["Payers"], zone: "fin" },
  { id: "distributor", x: 225, y: 400, emoji: "🚚", label: ["Distributor/", "Wholesaler"], zone: "inn" },
  { id: "pharma", x: 100, y: 510, emoji: "💊", label: ["Pharmaceuticals"], zone: "inn" },
  { id: "biotech", x: 225, y: 510, emoji: "🧪", label: ["Biotech"], zone: "inn" },
  { id: "meddev", x: 350, y: 510, emoji: "🩺", label: ["Medical", "Devices"], zone: "inn" },
  { id: "research", x: 100, y: 620, emoji: "🎓", label: ["Research &", "Academia"], zone: "inn" },
  { id: "tech", x: 225, y: 620, emoji: "🚀", label: ["Tech Accelerators", "& Incubators"], zone: "inn" },
  { id: "healthit", x: 350, y: 620, emoji: "💻", label: ["Health IT &", "Digital Health"], zone: "inn" },
  { id: "hospitals", x: 522, y: 400, emoji: "🏥", label: ["Hospitals"], zone: "care" },
  { id: "physicians", x: 709, y: 400, emoji: "👨‍⚕️", label: ["Physicians"], zone: "care" },
  { id: "primarycare", x: 522, y: 620, emoji: "🌐", label: ["Primary Care", "Networks"], zone: "care" },
  { id: "employers", x: 950, y: 400, emoji: "🏢", label: ["Employers"], zone: "pat" },
  { id: "patients", x: 950, y: 510, emoji: "🧓", label: ["Patients"], zone: "pat" },
  { id: "advocacy", x: 950, y: 620, emoji: "📣", label: ["Patient", "Advocacy"], zone: "pat" },
];

const EDGES: Array<[string, string]> = [
  ["payers", "employers"], ["payers", "hospitals"], ["patients", "advocacy"],
  ["physicians", "patients"], ["hospitals", "primarycare"], ["hospitals", "physicians"],
  ["distributor", "hospitals"], ["distributor", "pharma"], ["distributor", "meddev"],
  ["distributor", "biotech"], ["tech", "meddev"], ["tech", "healthit"],
  ["healthit", "primarycare"], ["tech", "biotech"], ["tech", "pharma"],
  ["research", "meddev"], ["research", "biotech"], ["research", "pharma"],
];

// The roles the portfolio is actually about — shown as hover labels (desktop)
// and inline (mobile).
const ROLES: Record<string, Role> = {
  hospitals: { cat: "Consulting", title: "Consultant — readmissions reduction project" },
  meddev: { cat: "Engineering", title: "Developing a dialysis device", loc: "Nigeria" },
  investors: { cat: "Finance", title: "Venture-capital / health-tech finance role" },
};

const CAT_DOT: Record<Category, string> = {
  Consulting: "#6f86a3",
  Engineering: "#6f9a78",
  Finance: "#b0935f",
};

const ZONES: Array<{ id: Zone; name: string }> = [
  { id: "fin", name: "Financing · Oversight · Public Health" },
  { id: "inn", name: "Innovation & Supply" },
  { id: "care", name: "Care Delivery — Providers" },
  { id: "pat", name: "Patients & Community" },
];

const VB_W = 1120;
const VB_H = 790;
const NODE_BY_ID: Record<string, NodeDef> = NODES.reduce(
  (acc, n) => {
    acc[n.id] = n;
    return acc;
  },
  {} as Record<string, NodeDef>,
);

export function StakeholderEcosystem() {
  const isPhoneLayout = usePhoneLayout();
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const current = pinned ?? active;

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

  // ----- Mobile: stacked, zone-grouped list (roles shown inline) -----
  if (isPhoneLayout) {
    return (
      <div className="se-wrap">
        <style>{CSS}</style>
        <div className="se-m">
          {ZONES.map((z) => (
            <div key={z.id} className="se-m-zone">
              <div className="se-m-ztitle">{z.name}</div>
              <ul className="se-m-list">
                {NODES.filter((n) => n.zone === z.id).map((n) => {
                  const role = ROLES[n.id];
                  return (
                    <li key={n.id} className={`se-m-row${role ? " se-m-hasrole" : ""}`}>
                      <span className="se-m-emoji" aria-hidden="true">
                        {n.emoji}
                      </span>
                      <div className="se-m-text">
                        <span className="se-m-name">{n.label.join(" ")}</span>
                        {role && (
                          <span className="se-m-role">
                            <i style={{ background: CAT_DOT[role.cat] }} />
                            {role.cat} — {role.title}
                            {role.loc ? ` · ${role.loc}` : ""}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ----- Desktop: interactive SVG node-graph -----
  const neighbours = new Set<string>();
  const activeEdges = new Set<number>();
  if (current) {
    EDGES.forEach(([a, b], i) => {
      if (a === current || b === current) {
        activeEdges.add(i);
        neighbours.add(a === current ? b : a);
      }
    });
  }

  const show = (id: string) => {
    if (!pinned) setActive(id);
  };
  const toggle = (id: string) => {
    setPinned((p) => (p === id ? null : id));
  };

  const cardNode = current ? NODE_BY_ID[current] : null;
  const cardRole = current ? ROLES[current] : undefined;

  let cardStyle: CSSProperties = {};
  if (cardNode && cardRole) {
    const leftPct = (cardNode.x / VB_W) * 100;
    const topPct = (cardNode.y / VB_H) * 100;
    if (cardNode.zone === "pat") {
      cardStyle = { left: `calc(${leftPct}% - 16px)`, top: `${topPct}%`, transform: "translate(-100%, -50%)" };
    } else if (cardNode.zone === "fin") {
      const tx = cardNode.x < 240 ? "-12%" : cardNode.x > 880 ? "-88%" : "-50%";
      cardStyle = { left: `${leftPct}%`, top: `calc(${topPct}% + 34px)`, transform: `translate(${tx}, 0)` };
    } else {
      cardStyle = { left: `calc(${leftPct}% + 16px)`, top: `${topPct}%`, transform: "translate(0, -50%)" };
    }
  }

  return (
    <div className="se-wrap">
      <style>{CSS}</style>
      <div className="se-stage">
        <svg
          className={`se-map${current ? " se-dim" : ""}`}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          width="100%"
          role="img"
          aria-label="Interactive healthcare stakeholder ecosystem. Hover a stakeholder to highlight its connections; some reveal a role."
        >
          <title>Healthcare stakeholder ecosystem</title>

          <rect x={3} y={3} width={1114} height={784} rx={18} fill="#ffffff" stroke="#edf0f3" />

          <rect x={37} y={82} width={1045} height={160} rx={16} fill="#eff2f6" stroke="#dde3ea" />
          <rect x={37} y={254} width={375} height={456} rx={16} fill="#e6ecf3" stroke="#dde3ea" />
          <rect x={428} y={254} width={375} height={456} rx={16} fill="#ebeff4" stroke="#dde3ea" />
          <rect x={819} y={256} width={263} height={456} rx={16} fill="#e8edf3" stroke="#dde3ea" />

          <text className="se-h" x={560} y={112} textAnchor="middle">FINANCING · OVERSIGHT · PUBLIC HEALTH</text>
          <text className="se-h" x={224} y={284} textAnchor="middle">INNOVATION &amp; SUPPLY</text>
          <text className="se-h" x={616} y={284} textAnchor="middle">CARE DELIVERY — PROVIDERS</text>
          <text className="se-h" x={950} y={286} textAnchor="middle">PATIENTS &amp; COMMUNITY</text>

          <g>
            {EDGES.map(([a, b], i) => {
              const na = NODE_BY_ID[a];
              const nb = NODE_BY_ID[b];
              const on = activeEdges.has(i);
              return (
                <line
                  key={i}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  className={`se-edge${on ? " se-on" : ""}`}
                />
              );
            })}
          </g>

          <g>
            {NODES.map((n) => {
              const isActive = current === n.id;
              const isNear = neighbours.has(n.id);
              const cls = "se-node" + (isActive ? " se-active" : "") + (isNear ? " se-near" : "");
              const role = ROLES[n.id];
              return (
                <g
                  key={n.id}
                  className={cls}
                  role="button"
                  tabIndex={0}
                  aria-label={n.label.join(" ") + (role ? `: ${role.title}` : "")}
                  onMouseEnter={() => show(n.id)}
                  onFocus={() => show(n.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(n.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(n.id);
                    }
                  }}
                >
                  <circle className="se-ring" cx={n.x} cy={n.y} r={33} />
                  <circle className="se-disc" cx={n.x} cy={n.y} r={28} />
                  <text className="se-emoji" x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central">
                    {n.emoji}
                  </text>
                  <text className="se-lab" x={n.x} y={n.y + 46} textAnchor="middle">
                    {n.label.map((ln, i) => (
                      <tspan key={i} x={n.x} dy={i === 0 ? 0 : 14}>
                        {ln}
                      </tspan>
                    ))}
                  </text>
                  {role && (
                    <circle className="se-dot" cx={n.x + 21} cy={n.y - 21} r={4.5} fill="#6f86a3" stroke="#fff" strokeWidth={1.5} />
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {cardNode && cardRole && (
          <div className="se-card se-show" style={cardStyle}>
            <div className="se-cat">
              <i style={{ background: CAT_DOT[cardRole.cat] }} />
              {cardRole.cat}
            </div>
            <div className="se-title">{cardRole.title}</div>
            {cardRole.loc && <div className="se-meta">{cardRole.loc}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.se-wrap { width: 100%; }
.se-stage { position: relative; width: 100%; max-width: 960px; margin: 0 auto; }
.se-map { display: block; width: 100%; height: auto; }
.se-node { cursor: pointer; outline: none; filter: saturate(0.7); transition: filter .18s, opacity .18s; }
.se-node .se-disc { fill: #f4f6f9; transition: transform .18s; transform-box: fill-box; transform-origin: center; }
.se-node .se-ring { fill: none; stroke: transparent; stroke-width: 2.5; transition: stroke .18s; transform-box: fill-box; transform-origin: center; }
.se-node .se-emoji { font-size: 30px; transition: transform .18s; transform-box: fill-box; transform-origin: center; }
.se-node .se-lab { font: 600 12px ui-sans-serif, system-ui, sans-serif; fill: #3a4856; }
.se-node:hover, .se-node.se-active { filter: saturate(1.12); }
.se-node:focus-visible .se-disc { stroke: #6f86a3; stroke-width: 1.5; }
.se-node.se-active .se-disc, .se-node.se-active .se-emoji { transform: scale(1.1); }
.se-node.se-active .se-ring { stroke: #6f86a3; }
.se-node.se-near { filter: saturate(1); }
.se-map.se-dim .se-node:not(.se-active):not(.se-near) { opacity: .4; }
.se-edge { stroke: #8c939c; stroke-width: 1.5; opacity: .55; transition: stroke .18s, stroke-width .18s, opacity .18s; }
.se-edge.se-on { stroke: #6f86a3; stroke-width: 2.2; opacity: .95; }
.se-map.se-dim .se-edge:not(.se-on) { opacity: .12; }
.se-h { font: 700 14px ui-sans-serif, system-ui, sans-serif; fill: #5b6a78; }
.se-card {
  position: absolute; max-width: 188px; padding: 8px 11px; z-index: 5; pointer-events: none;
  background: rgba(255,255,255,0.72);
  -webkit-backdrop-filter: blur(9px) saturate(1.05); backdrop-filter: blur(9px) saturate(1.05);
  border: 0.5px solid rgba(120,132,148,0.28); border-radius: 10px;
  box-shadow: 0 4px 14px rgba(20,30,45,0.10);
  opacity: 0; transform: translateY(2px); transition: opacity .14s ease;
}
.se-card.se-show { opacity: 1; }
.se-card .se-cat { display: flex; align-items: center; gap: 5px; font: 600 9.5px ui-sans-serif, system-ui, sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #7a8896; margin-bottom: 3px; }
.se-card .se-cat i { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
.se-card .se-title { font: 600 12.5px/1.3 ui-sans-serif, system-ui, sans-serif; color: #21384a; }
.se-card .se-meta { margin-top: 2px; font: 11px ui-sans-serif, system-ui, sans-serif; color: #8a93a0; }

/* ----- Mobile layout ----- */
.se-m { display: flex; flex-direction: column; gap: 14px; }
.se-m-zone { border: 0.5px solid #dde3ea; border-radius: 16px; background: #f6f8fb; padding: 14px 14px 6px; }
.se-m-ztitle { font: 700 11px ui-sans-serif, system-ui, sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #5b6a78; margin-bottom: 10px; }
.se-m-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.se-m-row { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; margin-bottom: 8px; border-radius: 12px; background: #fff; border: 0.5px solid #eef1f4; }
.se-m-row.se-m-hasrole { border-color: #cdd6e0; background: #fbfdff; }
.se-m-emoji { font-size: 22px; line-height: 1.2; flex: 0 0 auto; }
.se-m-text { display: flex; flex-direction: column; min-width: 0; }
.se-m-name { font: 600 14px ui-sans-serif, system-ui, sans-serif; color: #22384a; }
.se-m-role { display: inline-flex; align-items: center; gap: 6px; margin-top: 3px; font: 500 12px ui-sans-serif, system-ui, sans-serif; color: #5b6a78; }
.se-m-role i { width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; }

@media (prefers-reduced-motion: reduce) {
  .se-node, .se-node .se-disc, .se-node .se-emoji, .se-edge, .se-card { transition: none; }
}
`;
