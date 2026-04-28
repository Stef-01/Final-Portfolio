import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface DraggableCardProps {
    id: string;
    projectId?: string;
    title: string;
    subtitle?: string;
    image: string;
    initialX: number;
    initialY: number;
    rotation: number;
    scale?: number;
    zIndex?: number;
    width?: number;
    imageHeight?: number;
    alwaysShowArrow?: boolean;
}

export const DraggableCard: React.FC<DraggableCardProps> = ({
    id,
    projectId,
    title,
    subtitle,
    image,
    initialX,
    initialY,
    rotation,
    scale = 1,
    zIndex = 1,
    width = 320,
    imageHeight = 256,
    alwaysShowArrow = false,
}) => {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const zIndexResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [hasDragged, setHasDragged] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [currentZIndex, setCurrentZIndex] = useState(zIndex);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        // Don't start dragging if clicking the arrow button
        if ((e.target as HTMLElement).closest('.arrow-button')) {
            return;
        }

        setIsDragging(true);
        setHasDragged(false);
        setCurrentZIndex(1000);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setHasDragged(true);
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if ((e.target as HTMLElement).closest('.arrow-button')) {
            return;
        }

        const touch = e.touches[0];
        setIsDragging(true);
        setHasDragged(false);
        setCurrentZIndex(1000);
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        });
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && e.touches[0]) {
            const touch = e.touches[0];
            setHasDragged(true);
            setPosition({
                x: touch.clientX - dragStart.x,
                y: touch.clientY - dragStart.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (zIndexResetTimer.current) clearTimeout(zIndexResetTimer.current);
        zIndexResetTimer.current = setTimeout(() => setCurrentZIndex(zIndex), 100);
    };

    const handleArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (projectId) {
            navigate(`/project/${projectId}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!projectId) {
            return;
        }

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(`/project/${projectId}`);
        }
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchmove", handleTouchMove, { passive: true });
            window.addEventListener("touchend", handleMouseUp);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
                window.removeEventListener("touchmove", handleTouchMove);
                window.removeEventListener("touchend", handleMouseUp);
            };
        }
    }, [isDragging, dragStart]);

    useEffect(() => {
        return () => {
            if (zIndexResetTimer.current) clearTimeout(zIndexResetTimer.current);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`absolute bg-white rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 ${isDragging ? "shadow-3xl scale-105" : ""
                }`}
            style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${rotation}deg) scale(${isDragging ? scale * 1.05 : scale})`,
                zIndex: currentZIndex,
                width: `${width}px`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
                touchAction: "none",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onKeyDown={handleKeyDown}
            tabIndex={projectId ? 0 : -1}
            role={projectId ? "button" : undefined}
            aria-label={projectId ? `Open project ${title}` : undefined}
        >
            <div className="relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full object-cover pointer-events-none select-none"
                        style={{ height: `${imageHeight}px` }}
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div
                        className="w-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 pointer-events-none select-none"
                        style={{ height: `${imageHeight}px` }}
                        aria-hidden="true"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Arrow Button - appears on hover */}
                {projectId && (
                    <button
                        className={`arrow-button absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white ${isHovered && !isDragging ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                            } ${alwaysShowArrow ? "opacity-100 translate-y-0 pointer-events-auto" : ""}`}
                        onClick={handleArrowClick}
                        aria-label={`Open ${title}`}
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{title}</h3>
                    {subtitle && (
                        <p className="text-sm text-white/80">{subtitle}</p>
                    )}
                </div>
            </div>
        </div>
    );
};
