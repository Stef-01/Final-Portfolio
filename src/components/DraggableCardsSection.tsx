import React, { useRef } from "react";
import { DraggableCard } from "./DraggableCard";
import { usePhoneLayout } from "../hooks/usePhoneLayout";

export const DraggableCardsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isPhoneLayout = usePhoneLayout();

    // Precise card positions matching reference image
    const cards = isPhoneLayout ? [
        {
            id: "1",
            projectId: "ruby",
            title: "Ruby",
            subtitle: "Fintech Banking",
            image: "https://cdn.dribbble.com/userupload/13010309/file/original-442803a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -70,
            initialY: -145,
            rotation: -7,
            zIndex: 2,
        },
        {
            id: "2",
            projectId: "nexus",
            title: "Nexus",
            subtitle: "Design System",
            image: "https://cdn.dribbble.com/userupload/13010312/file/original-7f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 54,
            initialY: -68,
            rotation: -10,
            zIndex: 3,
        },
        {
            id: "3",
            projectId: "framework",
            title: "Framework",
            subtitle: "SaaS Platform",
            image: "https://cdn.dribbble.com/userupload/13010313/file/original-8f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 68,
            initialY: 88,
            rotation: 6,
            zIndex: 2,
        },
        {
            id: "4",
            projectId: "velocity",
            title: "Velocity",
            subtitle: "Analytics Dashboard",
            image: "https://cdn.dribbble.com/userupload/13010311/file/original-6f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -78,
            initialY: 110,
            rotation: -5,
            zIndex: 1,
        },
        {
            id: "5",
            projectId: "startup",
            title: "Startup",
            subtitle: "Build Web Apps",
            image: "https://cdn.dribbble.com/userupload/13010310/file/original-5f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 0,
            initialY: 208,
            rotation: -8,
            zIndex: 1,
        },
    ] : [
        {
            id: "1",
            projectId: "ruby",
            title: "Ruby",
            subtitle: "Fintech Banking",
            image: "https://cdn.dribbble.com/userupload/13010309/file/original-442803a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -380,
            initialY: -120,
            rotation: -8,
            zIndex: 2,
        },
        {
            id: "2",
            projectId: "nexus",
            title: "Nexus",
            subtitle: "Design System",
            image: "https://cdn.dribbble.com/userupload/13010312/file/original-7f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -120,
            initialY: -180,
            rotation: -12,
            zIndex: 3,
        },
        {
            id: "3",
            projectId: "framework",
            title: "Framework",
            subtitle: "SaaS Platform",
            image: "https://cdn.dribbble.com/userupload/13010313/file/original-8f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 320,
            initialY: -100,
            rotation: 5,
            zIndex: 2,
        },
        {
            id: "4",
            projectId: "velocity",
            title: "Velocity",
            subtitle: "Analytics Dashboard",
            image: "https://cdn.dribbble.com/userupload/13010311/file/original-6f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -280,
            initialY: 180,
            rotation: -5,
            zIndex: 1,
        },
        {
            id: "5",
            projectId: "startup",
            title: "Startup",
            subtitle: "Build Web Apps",
            image: "https://cdn.dribbble.com/userupload/13010310/file/original-5f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 340,
            initialY: 200,
            rotation: -8,
            zIndex: 1,
        },
    ];

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
                                    On a quest to craft<br />something awesome
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
