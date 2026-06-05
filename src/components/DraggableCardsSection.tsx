import React, { useRef } from "react";
import { DraggableCard } from "./DraggableCard";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { projects } from "../types/project";

export const DraggableCardsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isPhoneLayout = usePhoneLayout();
    // NOTE: don't .filter(Boolean) here — cardLayouts is positional, so a missing
    // project must remain `undefined` so subsequent layouts don't shift.
    const featuredProjects = [
        "swaad",
        "nourish-meal-explorer",
        "pgx-llm-copilot",
        "healthcare-from-the-eye",
        "ent-readmission-platform",
    ].map((id) => projects.find((project) => project.id === id));

    // Precise card positions matching reference image
    const cardLayouts = isPhoneLayout ? [
        {
            id: "1",
            initialX: -70,
            initialY: -145,
            rotation: -7,
            zIndex: 2,
        },
        {
            id: "2",
            initialX: 54,
            initialY: -68,
            rotation: -10,
            zIndex: 3,
        },
        {
            id: "3",
            initialX: 68,
            initialY: 88,
            rotation: 6,
            zIndex: 2,
        },
        {
            id: "4",
            initialX: -78,
            initialY: 110,
            rotation: -5,
            zIndex: 1,
        },
        {
            id: "5",
            initialX: 0,
            initialY: 208,
            rotation: -8,
            zIndex: 1,
        },
    ] : [
        {
            id: "1",
            initialX: -380,
            initialY: -120,
            rotation: -8,
            zIndex: 2,
        },
        {
            id: "2",
            initialX: -120,
            initialY: -180,
            rotation: -12,
            zIndex: 3,
        },
        {
            id: "3",
            initialX: 320,
            initialY: -100,
            rotation: 5,
            zIndex: 2,
        },
        {
            id: "4",
            initialX: -280,
            initialY: 180,
            rotation: -5,
            zIndex: 1,
        },
        {
            id: "5",
            initialX: 340,
            initialY: 200,
            rotation: -8,
            zIndex: 1,
        },
    ];
    const cards = cardLayouts.map((layout, index) => {
        const project = featuredProjects[index];

        return {
            ...layout,
            projectId: project?.id,
            title: project?.title ?? "Selected Work",
            subtitle: project?.tags?.slice(0, 2).join(" • ") ?? "Health systems design",
            image: project?.image ?? "",
        };
    });

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden bg-transparent ${isPhoneLayout ? "h-[680px]" : "h-[800px]"}`}
        >
            {/* Cards Container - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Central Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="text-center text-white px-4">
                            {/* Enhanced background for text visibility */}
                            <div className={`bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-3xl border border-white/25 shadow-2xl ${isPhoneLayout ? "px-6 py-5" : "px-12 py-8"}`}>
                                <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-white">
                                    On a quest to craft <br />something awesome
                                </h1>
                                <p className="text-lg md:text-3xl font-serif italic opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] text-white">
                                    to hone my skills or just for fun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards positioned from center */}
                {cards.map((card) => (
                    <DraggableCard
                        key={card.id}
                        {...card}
                        width={isPhoneLayout ? 210 : 320}
                        imageHeight={isPhoneLayout ? 170 : 256}
                        alwaysShowArrow={isPhoneLayout}
                    />
                ))}
            </div>
        </div>
    );
};
