import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, GraduationCap, Briefcase, FlaskConical, Building2, X } from "lucide-react";
import type { NetworkIcon, Role, RoleNetwork } from "../types/roles";

interface RoleNetworkModalProps {
    role: Role | null;
    onClose: () => void;
}

const iconForType = (type: NetworkIcon) => {
    switch (type) {
        case "me":
            return User;
        case "mortarboard":
            return GraduationCap;
        case "supervisor":
            return Briefcase;
        case "research":
            return FlaskConical;
        case "consulting":
            return Building2;
        case "institution":
            return Building2;
        default:
            return User;
    }
};

const NODE_RADIUS = 38;
const CANVAS_W = 520;
const CANVAS_H = 420;

const Node = ({
    node,
    onHover,
    onLeave,
}: {
    node: RoleNetwork["nodes"][number];
    onHover: (label: string) => void;
    onLeave: () => void;
}) => {
    const Icon = iconForType(node.icon);
    const cx = node.x * CANVAS_W;
    const cy = node.y * CANVAS_H;
    const isMe = node.icon === "me";

    return (
        <g
            transform={`translate(${cx}, ${cy})`}
            onMouseEnter={() =>
                onHover(node.sublabel ? `${node.label} — ${node.sublabel}` : node.label)
            }
            onMouseLeave={onLeave}
            className="cursor-default"
        >
            <circle
                r={NODE_RADIUS}
                fill={isMe ? "black" : "white"}
                stroke="black"
                strokeWidth={isMe ? 0 : 1.5}
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
                        className={`h-5 w-5 ${isMe ? "text-white" : "text-black"}`}
                        strokeWidth={1.6}
                    />
                </div>
            </foreignObject>
            <text
                x={0}
                y={NODE_RADIUS + 18}
                textAnchor="middle"
                className="fill-black text-[13px] font-semibold"
                style={{ fontSize: 13 }}
            >
                {node.label}
            </text>
            {node.sublabel && (
                <text
                    x={0}
                    y={NODE_RADIUS + 34}
                    textAnchor="middle"
                    className="fill-gray-500 text-[11px]"
                    style={{ fontSize: 11 }}
                >
                    {node.sublabel}
                </text>
            )}
        </g>
    );
};

const Edge = ({
    from,
    to,
    label,
    onHover,
    onLeave,
}: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    label: string;
    onHover: (label: string) => void;
    onLeave: () => void;
}) => {
    const x1 = from.x * CANVAS_W;
    const y1 = from.y * CANVAS_H;
    const x2 = to.x * CANVAS_W;
    const y2 = to.y * CANVAS_H;

    // Trim the line so it stops at the node circumference, not the centre.
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    const sx = x1 + ux * NODE_RADIUS;
    const sy = y1 + uy * NODE_RADIUS;
    const ex = x2 - ux * NODE_RADIUS;
    const ey = y2 - uy * NODE_RADIUS;

    return (
        <g
            onMouseEnter={() => onHover(label)}
            onMouseLeave={onLeave}
            className="cursor-default"
        >
            {/* Wide invisible hit-target */}
            <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="transparent" strokeWidth={20} />
            {/* Visible line */}
            <line
                x1={sx}
                y1={sy}
                x2={ex}
                y2={ey}
                stroke="black"
                strokeOpacity={0.25}
                strokeWidth={1.4}
                className="transition-[stroke-opacity] duration-200 group-hover:stroke-opacity-80"
            />
        </g>
    );
};

export const RoleNetworkModal: React.FC<RoleNetworkModalProps> = ({ role, onClose }) => {
    const [hoverLabel, setHoverLabel] = useState<string | null>(null);

    return (
        <AnimatePresence>
            {role && role.network && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/35 backdrop-blur-sm px-4"
                    onMouseLeave={onClose}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[640px] rounded-[28px] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] overflow-hidden"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-black/5 hover:text-black transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="px-8 pt-7 pb-2">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">
                                Role network
                            </p>
                            <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-black">
                                {role.title}
                            </h3>
                            <p className="text-sm text-gray-500">{role.organization}</p>
                        </div>

                        <div className="relative px-6 pb-6 pt-2">
                            <svg
                                viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
                                className="w-full h-auto"
                                role="img"
                                aria-label="Role network"
                            >
                                {role.network.edges.map((edge) => {
                                    const fromNode = role.network!.nodes.find((n) => n.id === edge.from);
                                    const toNode = role.network!.nodes.find((n) => n.id === edge.to);
                                    if (!fromNode || !toNode) return null;
                                    return (
                                        <Edge
                                            key={`${edge.from}-${edge.to}`}
                                            from={fromNode}
                                            to={toNode}
                                            label={edge.label}
                                            onHover={setHoverLabel}
                                            onLeave={() => setHoverLabel(null)}
                                        />
                                    );
                                })}
                                {role.network.nodes.map((node) => (
                                    <Node
                                        key={node.id}
                                        node={node}
                                        onHover={setHoverLabel}
                                        onLeave={() => setHoverLabel(null)}
                                    />
                                ))}
                            </svg>

                            <div className="mt-2 min-h-[44px] rounded-[14px] border border-black/10 bg-[#fafafa] px-4 py-3 text-[13px] leading-snug text-gray-700">
                                {hoverLabel ?? (
                                    <span className="text-gray-400">
                                        Hover any node or line to see what connects them.
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
