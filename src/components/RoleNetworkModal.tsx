import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Users, UserRound, HeartHandshake, User, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CollaboratorKind, NetworkNode, Role } from "../types/roles";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface RoleNetworkModalProps {
    role: Role | null;
    onClose: () => void;
    /** Accent hex used for the centre node and the active highlight. */
    accent?: string;
}

const KIND_META: Record<CollaboratorKind, { icon: LucideIcon; label: string }> = {
    host: { icon: Building2, label: "Host" },
    team: { icon: Users, label: "Team" },
    person: { icon: UserRound, label: "Person" },
    community: { icon: HeartHandshake, label: "Community" },
};

// Fixed order so every diagram reads the same way: the host sits at the top,
// then teams, individuals, and the community served fan out clockwise.
const KIND_ORDER: CollaboratorKind[] = ["host", "team", "person", "community"];

// Canvas geometry. Nodes sit on an ellipse around the centre so the wide modal
// is used without pushing side labels off-canvas. The layout is computed from
// the collaborator count, so a role with two collaborators and one with four
// both stay balanced instead of forcing an identical four-spoke star.
const CANVAS_W = 680;
const CANVAS_H = 540;
const CX = CANVAS_W / 2;
const CY = CANVAS_H / 2;
const ME_RADIUS = 46;
const NODE_RADIUS = 38;
const RING_RX = 216;
const RING_RY = 158;

interface Placed {
    node: NetworkNode;
    x: number;
    y: number;
}

const layout = (nodes: NetworkNode[]): Placed[] => {
    const sorted = [...nodes].sort(
        (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind),
    );
    const n = sorted.length;
    return sorted.map((node, i) => {
        // Start at the top (-90°) and distribute evenly clockwise.
        const angle = ((-90 + (i * 360) / n) * Math.PI) / 180;
        return {
            node,
            x: CX + Math.cos(angle) * RING_RX,
            y: CY + Math.sin(angle) * RING_RY,
        };
    });
};

const trimEdge = (x: number, y: number) => {
    const dx = x - CX;
    const dy = y - CY;
    const d = Math.hypot(dx, dy) || 1;
    const ux = dx / d;
    const uy = dy / d;
    return {
        sx: CX + ux * ME_RADIUS,
        sy: CY + uy * ME_RADIUS,
        ex: x - ux * NODE_RADIUS,
        ey: y - uy * NODE_RADIUS,
    };
};

interface CollaboratorProps {
    placed: Placed;
    index: number;
    accent: string;
    active: boolean;
    reduce: boolean;
    onActivate: (id: string) => void;
    onClear: () => void;
}

const Collaborator = ({ placed, index, accent, active, reduce, onActivate, onClear }: CollaboratorProps) => {
    const { node, x, y } = placed;
    const Icon = KIND_META[node.kind].icon;
    const delay = reduce ? 0 : 0.24 + index * 0.08;

    return (
        <motion.g
            initial={{ opacity: 0, x: reduce ? x : CX, y: reduce ? y : CY, scale: reduce ? 1 : 0.4 }}
            animate={{ opacity: 1, x, y, scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 0.55, ease: [0.22, 1, 0.36, 1], delay }}
            className="cursor-pointer"
            onMouseEnter={() => onActivate(node.id)}
            onFocus={() => onActivate(node.id)}
            onClick={() => onActivate(node.id)}
            onMouseLeave={onClear}
            tabIndex={0}
            role="listitem"
            aria-label={`${node.label}${node.sublabel ? `, ${node.sublabel}` : ""}`}
        >
            {/* Active ring */}
            <circle
                r={NODE_RADIUS + 6}
                fill="none"
                stroke={accent}
                strokeWidth={1.5}
                style={{ opacity: active ? 0.4 : 0, transition: "opacity 200ms" }}
            />
            <circle
                r={NODE_RADIUS}
                fill="white"
                stroke={active ? accent : "rgba(0,0,0,0.16)"}
                strokeWidth={active ? 1.75 : 1.25}
                style={{ transition: "stroke 200ms" }}
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
                        className="h-5 w-5"
                        strokeWidth={1.5}
                        style={{ color: active ? accent : "#111111", transition: "color 200ms" }}
                    />
                </div>
            </foreignObject>
            {/* Label block */}
            <foreignObject x={-84} y={NODE_RADIUS + 6} width={168} height={70} pointerEvents="none">
                <div className="flex flex-col items-center text-center">
                    <span className="text-[13px] font-semibold leading-tight tracking-tight text-black">
                        {node.label}
                    </span>
                    {node.sublabel && (
                        <span className="mt-0.5 text-[11px] leading-tight text-gray-400">
                            {node.sublabel}
                        </span>
                    )}
                </div>
            </foreignObject>
        </motion.g>
    );
};

export const RoleNetworkModal: React.FC<RoleNetworkModalProps> = ({ role, onClose, accent = "#111111" }) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const reduce = usePrefersReducedMotion();

    const placed = useMemo(
        () => (role?.network ? layout(role.network.nodes) : []),
        [role],
    );
    const kindsPresent = useMemo(
        () => KIND_ORDER.filter((k) => placed.some((p) => p.node.kind === k)),
        [placed],
    );
    const active = placed.find((p) => p.node.id === activeId)?.node ?? null;

    const handleClose = () => {
        setActiveId(null);
        onClose();
    };

    return (
        <AnimatePresence onExitComplete={() => setActiveId(null)}>
            {role && role.network && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[860px] overflow-hidden rounded-2xl bg-white shadow-xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="role-network-title"
                    >
                        <button
                            type="button"
                            onClick={handleClose}
                            aria-label="Close"
                            className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                        >
                            <X className="h-4 w-4" strokeWidth={1.6} />
                        </button>

                        <div className="relative px-8 pt-8 pb-1 md:px-10">
                            <p className="text-sm font-medium text-gray-500">Role network</p>
                            <h3
                                id="role-network-title"
                                className="mt-2 text-2xl font-bold leading-[1.1] tracking-tight text-black"
                            >
                                {role.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {role.organization}
                                {" · "}
                                {placed.length} {placed.length === 1 ? "collaborator" : "collaborators"}
                            </p>
                        </div>

                        <div className="relative px-4 pb-6 pt-1 md:px-6">
                            <svg
                                viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
                                className="h-auto w-full"
                                role="list"
                                aria-label="People and teams collaborated with"
                            >
                                {/* Edges from centre to each collaborator */}
                                {placed.map((p, i) => {
                                    const { sx, sy, ex, ey } = trimEdge(p.x, p.y);
                                    const len = Math.hypot(ex - sx, ey - sy);
                                    const isActive = active?.id === p.node.id;
                                    return (
                                        <motion.line
                                            key={`edge-${p.node.id}`}
                                            x1={sx}
                                            y1={sy}
                                            x2={ex}
                                            y2={ey}
                                            stroke={isActive ? accent : "black"}
                                            strokeWidth={isActive ? 1.75 : 1}
                                            strokeLinecap="round"
                                            strokeDasharray={len}
                                            initial={{ strokeDashoffset: reduce ? 0 : len, opacity: 0 }}
                                            animate={{
                                                strokeDashoffset: 0,
                                                opacity: 1,
                                                strokeOpacity: isActive ? 0.85 : 0.16,
                                            }}
                                            transition={{
                                                strokeDashoffset: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.18 + i * 0.08 },
                                                opacity: { duration: 0.3, delay: reduce ? 0 : 0.18 + i * 0.08 },
                                                strokeOpacity: { duration: 0.2 },
                                            }}
                                        />
                                    );
                                })}

                                {/* Centre "me" node */}
                                <g transform={`translate(${CX}, ${CY})`}>
                                    {!reduce && (
                                        <motion.circle
                                            r={ME_RADIUS + 9}
                                            fill={accent}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.08, scale: [1, 1.06, 1] }}
                                            transition={{
                                                opacity: { duration: 0.5 },
                                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                            }}
                                        />
                                    )}
                                    <motion.g
                                        initial={{ opacity: 0, scale: reduce ? 1 : 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: reduce ? 0.3 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <circle r={ME_RADIUS} fill={accent} />
                                        <foreignObject
                                            x={-ME_RADIUS / 2}
                                            y={-ME_RADIUS / 2}
                                            width={ME_RADIUS}
                                            height={ME_RADIUS}
                                            pointerEvents="none"
                                        >
                                            <div className="flex h-full w-full items-center justify-center">
                                                <User className="h-6 w-6 text-white" strokeWidth={1.6} />
                                            </div>
                                        </foreignObject>
                                        <text
                                            x={0}
                                            y={ME_RADIUS + 20}
                                            textAnchor="middle"
                                            className="fill-gray-400"
                                            style={{ fontSize: 11 }}
                                        >
                                            You
                                        </text>
                                    </motion.g>
                                </g>

                                {/* Collaborator nodes */}
                                {placed.map((p, i) => (
                                    <Collaborator
                                        key={p.node.id}
                                        placed={p}
                                        index={i}
                                        accent={accent}
                                        active={active?.id === p.node.id}
                                        reduce={reduce}
                                        onActivate={setActiveId}
                                        onClear={() => setActiveId(null)}
                                    />
                                ))}
                            </svg>

                            {/* Bottom tray — idle shows the kind legend; hover/focus a
                                node to reveal how that collaboration worked. */}
                            <div className="mx-2 mt-1 flex min-h-[56px] items-center rounded-xl bg-[#fafafa] px-5 py-3">
                                <AnimatePresence mode="wait" initial={false}>
                                    {active ? (
                                        <motion.div
                                            key={active.id}
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <p className="text-[13px] font-semibold text-black">
                                                {active.label}
                                                {active.sublabel && (
                                                    <span className="font-normal text-gray-400"> · {active.sublabel}</span>
                                                )}
                                            </p>
                                            <p className="mt-0.5 text-[13px] leading-snug text-gray-600">
                                                {active.relation}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="legend"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                            className="flex flex-wrap items-center gap-x-5 gap-y-2"
                                        >
                                            {kindsPresent.map((k) => {
                                                const M = KIND_META[k];
                                                return (
                                                    <span key={k} className="inline-flex items-center gap-1.5 text-[12px] text-gray-500">
                                                        <M.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                                                        {M.label}
                                                    </span>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
