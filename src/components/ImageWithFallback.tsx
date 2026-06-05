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
 * Unsplash serves whatever width the URL asks for. The source data hard-codes
 * `w=2070` (a ~700 KB full-bleed image) even on cards that render under 900px.
 * Rewrite the URL into a responsive srcSet so the browser fetches a
 * display-appropriate size, and downsize the default `src` for browsers that
 * ignore srcSet. Non-Unsplash sources (local webp) pass through untouched.
 */
const UNSPLASH_WIDTHS = [480, 768, 1080, 1440, 1920];

function buildResponsiveUnsplash(src?: string): { src?: string; srcSet?: string } {
    if (!src || !src.includes("images.unsplash.com")) return { src };
    try {
        const sized = (w: number) => {
            const u = new URL(src);
            u.searchParams.set("auto", "format");
            u.searchParams.set("fit", "crop");
            u.searchParams.set("q", "70");
            u.searchParams.set("w", String(w));
            return u.toString();
        };
        return {
            src: sized(1080),
            srcSet: UNSPLASH_WIDTHS.map((w) => `${sized(w)} ${w}w`).join(", "),
        };
    } catch {
        return { src };
    }
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
    srcSet,
    sizes,
    ...rest
}) => {
    const [failed, setFailed] = useState(!src);
    const responsive = buildResponsiveUnsplash(typeof src === "string" ? src : undefined);
    const resolvedSrcSet = srcSet ?? responsive.srcSet;
    // A srcSet needs a `sizes` hint to pick the right candidate; default to
    // full-width when the caller did not specify one.
    const resolvedSizes = sizes ?? (resolvedSrcSet ? "100vw" : undefined);

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
            src={responsive.src ?? src}
            srcSet={resolvedSrcSet}
            sizes={resolvedSizes}
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
