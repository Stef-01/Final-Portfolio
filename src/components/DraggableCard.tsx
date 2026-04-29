import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface DraggableCardProps {
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
    const dragStartRef = useRef({ x: 0, y: 0 });
    const positionRef = useRef({ x: initialX, y: initialY });

    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [currentZIndex, setCurrentZIndex] = useState(zIndex);
    const [isHovered, setIsHovered] = useState(false);

    const beginDrag = (clientX: number, clientY: number) => {
        dragStartRef.current = {
            x: clientX - positionRef.current.x,
            y: clientY - positionRef.current.y,
        };
        setIsDragging(true);
        setCurrentZIndex(1000);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('.arrow-button')) return;
        beginDrag(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if ((e.target as HTMLElement).closest('.arrow-button')) return;
        const touch = e.touches[0];
        beginDrag(touch.clientX, touch.clientY);
    };

    const handleArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (projectId) navigate(`/project/${projectId}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!projectId) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(`/project/${projectId}`);
        }
    };

    useEffect(() => {
        if (!isDragging) return;

        const updatePosition = (clientX: number, clientY: number) => {
            const next = {
                x: clientX - dragStartRef.current.x,
                y: clientY - dragStartRef.current.y,
            };
            positionRef.current = next;
            setPosition(next);
        };

        const onMouseMove = (e: MouseEvent) => updatePosition(e.clientX, e.clientY);
        const onTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (touch) updatePosition(touch.clientX, touch.clientY);
        };
        const onEnd = () => {
            setIsDragging(false);
            if (zIndexResetTimer.current) clearTimeout(zIndexResetTimer.current);
            zIndexResetTimer.current = setTimeout(() => setCurrentZIndex(zIndex), 100);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onEnd);
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onEnd);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onEnd);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onEnd);
        };
    }, [isDragging, zIndex]);

    useEffect(() => {
        return () => {
            if (zIndexResetTimer.current) clearTimeout(zIndexResetTimer.current);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`absolute bg-white rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 ${isDragging ? "shadow-3xl scale-105" : ""}`}
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
                <ImageWithFallback
                    src={image}
                    alt={title}
                    fallbackInitial={title.charAt(0)}
                    wrapperClassName="w-full"
                    className="w-full object-cover pointer-events-none select-none"
                    style={{ height: `${imageHeight}px` }}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Arrow Button - appears on hover */}
                {projectId && (
                    <button
                        className={`arrow-button absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white ${isHovered && !isDragging ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"} ${alwaysShowArrow ? "opacity-100 translate-y-0 pointer-events-auto" : ""}`}
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
