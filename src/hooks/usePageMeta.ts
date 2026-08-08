import { useEffect } from "react";

const SITE_NAME = "Stefan Thottunkal";
const DEFAULT_TITLE = `${SITE_NAME} | Digital Health Portfolio`;
export const SITE_ORIGIN = "https://stefan-portfolio-sable.vercel.app";

interface PageMeta {
    /** Section name ("Research", a project title, …); "" = landing default. */
    title?: string;
    /** Meta description for the route. Omit to leave the current one. */
    description?: string;
    /** Route path ("/research") for canonical + og:url. */
    path?: string;
    /** OpenGraph type; project pages use "article". */
    ogType?: "website" | "article";
    /** Set robots noindex for this route (404s, error states). */
    noindex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setCanonical(href: string) {
    let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

/**
 * Per-route document metadata for an SPA: title, description, canonical URL,
 * and OpenGraph/Twitter equivalents, plus an optional robots noindex (soft-404
 * mitigation — the SPA rewrite serves index.html with a 200 for any path).
 *
 * Canonical always points at the primary origin: the repo deploys to two
 * Vercel projects, and the canonical tag keeps the mirrors from competing as
 * duplicate content.
 *
 * Undefined title = no-op for title ownership (a parent rendering NotFound
 * must not stomp the child's title — child effects run first).
 */
export function usePageMeta({ title, description, path, ogType, noindex }: PageMeta) {
    useEffect(() => {
        let ownTitle: string | null = null;
        if (title !== undefined) {
            ownTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
            document.title = ownTitle;
            setMeta("property", "og:title", ownTitle);
            setMeta("name", "twitter:title", ownTitle);
        }

        if (description) {
            setMeta("name", "description", description);
            setMeta("property", "og:description", description);
            setMeta("name", "twitter:description", description);
        }

        if (path !== undefined) {
            const url = `${SITE_ORIGIN}${path}`;
            setCanonical(url);
            setMeta("property", "og:url", url);
        }

        setMeta("property", "og:type", ogType ?? "website");

        const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
        if (noindex) {
            setMeta("name", "robots", "noindex");
        } else if (robots) {
            robots.remove();
        }

        if (ownTitle === null) return;

        // Tab-away wink: the title waves from the tab bar while the visitor
        // is elsewhere, and restores the honest title the moment they return.
        const restore = ownTitle;
        const onVisibility = () => {
            document.title =
                document.visibilityState === "hidden"
                    ? `Still here — ${SITE_NAME}`
                    : restore;
        };
        document.addEventListener("visibilitychange", onVisibility);
        return () => document.removeEventListener("visibilitychange", onVisibility);
    }, [title, description, path, ogType, noindex]);
}

/** Back-compat title-only wrapper (see usePageMeta). */
export function usePageTitle(title?: string) {
    usePageMeta({ title });
}
