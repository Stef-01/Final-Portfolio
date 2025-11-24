import React, { useRef } from "react";
import { DraggableCard } from "./DraggableCard";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const DraggableCardsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();

    // Calculate positions relative to container center (400px is half of card width ~300px)
    const cards = [
        {
            id: "1",
            projectId: "ruby",
            title: "Ruby",
            subtitle: "Fintech Banking",
            image: "https://cdn.dribbble.com/userupload/13010309/file/original-442803a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -300, // Left side
            initialY: 50,
            rotation: -8,
            zIndex: 1,
        },
        {
            id: "2",
            projectId: "nexus",
            title: "Nexus",
            subtitle: "Design System",
            image: "https://cdn.dribbble.com/userupload/13010312/file/original-7f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -100, // Left-center
            initialY: 0,
            rotation: -12,
            zIndex: 2,
        },
        {
            id: "3",
            projectId: "velocity",
            title: "Velocity",
            subtitle: "Analytics Dashboard",
            image: "https://cdn.dribbble.com/userupload/13010311/file/original-6f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: -350, // Left side
            initialY: 300,
            rotation: -5,
            zIndex: 3,
        },
        {
            id: "4",
            projectId: "startup",
            title: "Startup",
            subtitle: "Build Web Apps",
            image: "https://cdn.dribbble.com/userupload/13010310/file/original-5f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 100, // Right-center
            initialY: 350,
            rotation: -10,
            zIndex: 2,
        },
        {
            id: "5",
            projectId: "framework",
            title: "Framework",
            subtitle: "SaaS Platform",
            image: "https://cdn.dribbble.com/userupload/13010313/file/original-8f4039a6e6027585f6797a6104996962.png?resize=1200x900",
            initialX: 200, // Right side
            initialY: 100,
            rotation: 5,
            zIndex: 1,
        },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[800px] overflow-hidden bg-transparent"
        >
            {/* Cards Container - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Central Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="text-center mix-blend-difference text-white px-4">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-4">
                                On a quest to craft<br />something awesome
                            </h1>
                            <p className="text-2xl md:text-3xl font-serif italic opacity-90">
                                to hone my skills or just for fun
                            </p>
                        </div>
                    </div>

                    {/* Cards positioned from center */}
                    {cards.map((card) => (
                        <DraggableCard
                            key={card.id}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
