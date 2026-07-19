import { useEffect } from "react";

/**
 * Injects a JSON-LD structured-data block for the current route and removes
 * it on unmount. Structured data is the strongest machine-readable signal for
 * search engines and AI assistants — it states who did what, where, in a
 * vocabulary they ingest directly.
 *
 * Note: this reaches JS-executing crawlers (Googlebot, Bingbot). Non-JS AI
 * crawlers read the static schema in index.html and /llms.txt instead.
 */
export function useJsonLd(data: object | null) {
    // Serialize for the dependency so a structurally identical object built
    // inline on each render doesn't tear the script down and re-add it.
    const serialized = data ? JSON.stringify(data) : null;
    useEffect(() => {
        if (!serialized) return;
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = serialized;
        document.head.appendChild(script);
        return () => {
            script.remove();
        };
    }, [serialized]);
}
