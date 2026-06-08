import React from "react";
import "@google/model-viewer";

// <model-viewer> is a custom element; declare it for TSX.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    src?: string;
                    alt?: string;
                    "auto-rotate"?: boolean | string;
                    "rotation-per-second"?: string;
                    "disable-zoom"?: boolean | string;
                    "interaction-prompt"?: string;
                    "shadow-intensity"?: string;
                    exposure?: string;
                    "environment-image"?: string;
                    "camera-orbit"?: string;
                    "camera-target"?: string;
                    "field-of-view"?: string;
                    "touch-action"?: string;
                    loading?: string;
                    reveal?: string;
                },
                HTMLElement
            >;
        }
    }
}

interface DnaModelProps {
    /** Disable continuous rotation for reduced-motion users. */
    reducedMotion?: boolean;
    className?: string;
}

/**
 * Renders the CC-BY DNA double-helix GLB with <model-viewer>. Lazy-loaded so the
 * ~3.4 MB model + renderer only download once the section is reached. Pointer
 * interaction is handled by overlay zones in the parent, so camera-controls are
 * intentionally off (the model just auto-rotates beneath the hover zones).
 */
export function DnaModel({ reducedMotion, className }: DnaModelProps) {
    return (
        <model-viewer
            className={className}
            src="/models/dna-double-helix-ultra.glb"
            alt="Interactive 3D DNA double helix"
            {...(reducedMotion
                ? {}
                : { "auto-rotate": true, "rotation-per-second": "26deg" })}
            disable-zoom={true}
            interaction-prompt="none"
            environment-image="neutral"
            shadow-intensity="0.55"
            exposure="1.15"
            camera-orbit="0deg 80deg 2.6m"
            field-of-view="30deg"
            loading="eager"
            reveal="auto"
            style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />
    );
}
