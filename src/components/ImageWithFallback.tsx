import React, { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Single character or short string shown in the fallback panel (e.g. project initial). */
    fallbackInitial?: string;
    /** Tailwind classes for the wrapper element (controls width/height/border-radius). */
    wrapperClassName?: string;
    /** Optional accent hex/css color used in the gradient when the image fails. */
    accent?: string;
}

/**
 * <img> wrapper that swaps to a styled gradient placeholder if the source
 * fails to load. Prevents broken-image alt text from leaving giant empty
 * rectangles in the layout when external CDNs are unreachable (Unsplash
 * hotlink restrictions, ad blockers, corporate proxies, network blips).
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    fallbackInitial,
    wrapperClassName = "",
    accent,
    className = "",
    style,
    onError,
    ...rest
}) => {
    const [failed, setFailed] = useState(!src);

    if (failed) {
        const gradient = accent
            ? `linear-gradient(135deg, ${accent}33 0%, ${accent}10 60%, rgba(255,255,255,0) 100%)`
            : "linear-gradient(135deg, rgb(229 231 235) 0%, rgb(243 244 246) 60%, rgb(255 255 255) 100%)";
        return (
            <div
                className={`flex items-center justify-center ${wrapperClassName} ${className}`}
                style={{ ...style, background: gradient }}
                role="img"
                aria-label={typeof alt === "string" ? alt : undefined}
            >
                {fallbackInitial && (
                    <span
                        className="font-bold tracking-tight text-black/40"
                        style={{ fontSize: "clamp(48px, 12vw, 120px)" }}
                    >
                        {fallbackInitial}
                    </span>
                )}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            onError={(e) => {
                setFailed(true);
                onError?.(e);
            }}
            {...rest}
        />
    );
};
