import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    User,
    GraduationCap,
    Briefcase,
    FlaskConical,
    Building2,
    Users,
    Package,
    FileText,
    Trophy,
    Heart,
    X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { NetworkIcon, Role, RoleNetwork } from "../types/roles";

interface RoleNetworkModalProps {
    role: Role | null;
    onClose: () => void;
    /** Accent hex used for the centre "me" node. Defaults to black. */
    accent?: string;
}

const ICON_BY_TYPE: Record<NetworkIcon, LucideIcon> = {
    me: User,
    mortarboard: GraduationCap,
    supervisor: Briefcase,
    research: FlaskConical,
    consulting: Building2,
    institution: Building2,
    team: Users,
    product: Package,
    manuscript: FileText,
    trophy: Trophy,
    users: Heart,
};

// Canvas geometry. The previous 520 px height clipped sublabels when nodes
// were placed at y ≥ 0.85. 560 px gives every layout a comfortable safe
// zone of x ∈ [0.13, 0.87], y ∈ [0.16, 0.84] for outer nodes that carry
// both a label and a sublabel.
const NODE_RADIUS = 42;
const CANVAS_W = 680;
const CANVAS_H = 560;

// Edge geometry — kept in a helper so node rendering and edge rendering
// agree about where lines start and end.
const computeEdgeGeometry = (
    from: { x: number; y: number },
    to: { x: number; y: number },
) => {
    const x1 = from.x * CANVAS_W;
    const y1 = from.y * CANVAS_H;
    const x2 = to.x * CANVAS_W;
    const y2 = to.y * CANVAS_H;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    return {
        sx: x1 + ux * NODE_RADIUS,
        sy: y1 + uy * NODE_RADIUS,
        ex: x2 - ux * NODE_RADIUS,
        ey: y2 - uy * NODE_RADIUS,
    };
};

interface NodeProps {
    node: RoleNetwork["nodes"][number];
    index: number;
    accent: string;
    onHover: (label: string) => void;
    onLeave: () => void;
}

const Node = ({ node, index, accent, onHover, onLeave }: NodeProps) => {
    const Icon = ICON_BY_TYPE[node.icon] ?? User;
    const cx = node.x * CANVAS_W;
    const cy = node.y * CANVAS_H;
    const isMe = node.icon === "me";

    // The outer <g> carries the static translate (SVG transform attribute).
    // Motion handles entrance/hover scale on the *inner* group, otherwise
    // motion's inline style.transform would clobber the translate and the
    // node would render at SVG origin (0,0) instead of its position.
    return (
        <g
            transform={`translate(${cx}, ${cy})`}
            onMouseEnter={() =>
                onHover(node.sublabel ? `${node.label} — ${node.sublabel}` : node.label)
            }
            onClick={() =>
                onHover(node.sublabel ? `${node.label} — ${node.sublabel}` : node.label)
            }
            onMouseLeave={onLeave}
            className="cursor-pointer"
        >
            <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06 }}
                transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18 + index * 0.07,
                }}
            >
                <circle
                    r={NODE_RADIUS}
                    fill={isMe ? accent : "white"}
                    stroke={isMe ? accent : "rgba(0,0,0,0.18)"}
                    strokeWidth={1.25}
                />
                <foreignObject
                    x={-NODE_RADIUS / 2}
                    y={-NODE_RADIUS / 2}
                    width={NODE_RADIUS}
                    height={NODE_RADIUS}
                    pointerEvents="none"
                >
                    <div className="flex h-full w-full items-center justify-center">
                        <Icon
                            className={isMe ? "h-5 w-5 text-white" : "h-5 w-5 text-black"}
                            strokeWidth={1.4}
                        />
                    </div>
                </foreignObject>
            </motion.g>
            <motion.text
                x={0}
                y={NODE_RADIUS + 22}
                textAnchor="middle"
                className="fill-black"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: -0.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.32 + index * 0.07 }}
            >
                {node.label}
            </motion.text>
            {node.sublabel && (
                <motion.text
                    x={0}
                    y={NODE_RADIUS + 40}
                    textAnchor="middle"
                    className="fill-gray-400"
                    style={{ fontSize: 11, letterSpacing: 0.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.38 + index * 0.07 }}
                >
                    {node.sublabel}
                </motion.text>
            )}
        </g>
    );
};

interface EdgeProps {
    from: { x: number; y: number };
    to: { x: number; y: number };
    label: string;
    index: number;
    onHover: (label: string) => void;
    onLeave: () => void;
}

const Edge = ({ from, to, label, index, onHover, onLeave }: EdgeProps) => {
    const { sx, sy, ex, ey } = computeEdgeGeometry(from, to);
    const length = Math.sqrt((ex - sx) ** 2 + (ey - sy) ** 2);

    return (
        <g
            onMouseEnter={() => onHover(label)}
            onMouseLeave={onLeave}
            className="cursor-default group"
        >
            {/* Wide invisible hit-target for forgiving hover */}
            <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="transparent" strokeWidth={22} />
            {/* Visible hairline that draws in on open */}
            <motion.line
                x1={sx}
                y1={sy}
                x2={ex}
                y2={ey}
                stroke="black"
                strokeOpacity={0.22}
                strokeWidth={1}
                strokeDasharray={`${length}`}
                initial={{ strokeDashoffset: length }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.28 + index * 0.08,
                }}
                className="transition-[stroke-opacity] duration-200 group-hover:[stroke-opacity:0.7]"
            />
        </g>
    );
};

export const RoleNetworkModal: React.FC<RoleNetworkModalProps> = ({ role, onClose, accent = "#000000" }) => {
    const [hoverLabel, setHoverLabel] = useState<string | null>(null);

    return (
        <AnimatePresence>
            {role && role.network && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.97 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[860px] overflow-hidden rounded-2xl bg-white shadow-xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="role-network-title"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                        >
                            <X className="h-4 w-4" strokeWidth={1.6} />
                        </button>

                        <div className="relative px-10 pt-9 pb-2">
                            <p className="text-sm font-medium text-gray-500">
                                Role network
                            </p>
                            <h3
                                id="role-network-title"
                                className="mt-2 text-[26px] font-bold tracking-tight leading-[1.1] text-black"
                            >
                                {role.title}
                            </h3>
                            <p className="mt-1 text-[13px] text-gray-500">{role.organization}</p>
                        </div>

                        <div className="relative px-6 pb-6 pt-3">
                            <svg
                                viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
                                className="h-auto w-full"
                                role="img"
                                aria-label="Role network diagram"
                            >
                                {role.network.edges.map((edge, i) => {
                                    const fromNode = role.network!.nodes.find((n) => n.id === edge.from);
                                    const toNode = role.network!.nodes.find((n) => n.id === edge.to);
                                    if (!fromNode || !toNode) return null;
                                    return (
                                        <Edge
                                            key={`${edge.from}-${edge.to}`}
                                            from={fromNode}
                                            to={toNode}
                                            label={edge.label}
                                            index={i}
                                            onHover={setHoverLabel}
                                            onLeave={() => setHoverLabel(null)}
                                        />
                                    );
                                })}
                                {role.network.nodes.map((node, i) => (
                                    <Node
                                        key={node.id}
                                        node={node}
                                        index={i}
                                        accent={accent}
                                        onHover={setHoverLabel}
                                        onLeave={() => setHoverLabel(null)}
                                    />
                                ))}
                            </svg>

                            {/* Description tray — height-stable, cross-fades the
                                label string when the hovered edge/node changes. */}
                            <div className="mx-2 mt-1 min-h-[48px] rounded-lg bg-[#fafafa] px-5 py-3">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.p
                                        key={hoverLabel ?? "placeholder"}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-[13px] leading-snug text-gray-700"
                                    >
                                        {hoverLabel ?? " "}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
