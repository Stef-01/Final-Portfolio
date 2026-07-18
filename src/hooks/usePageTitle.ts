import { useEffect } from "react";

const SITE_NAME = "Stefan Thottunkal";
const DEFAULT_TITLE = `${SITE_NAME} | Digital Health Portfolio`;

/**
 * Sets the browser-tab title for the current route. Call with a section name
 * ("Research", a project title, …), with "" for the landing default, or with
 * undefined as a no-op when the caller doesn't own the title (e.g. a parent
 * rendering NotFound, whose child effect already set it — parent effects run
 * after children and would stomp it). An SPA keeps one <title> for every
 * route otherwise — history entries, tabs, and shares all read "the same
 * page".
 */
export function usePageTitle(title?: string) {
    useEffect(() => {
        if (title === undefined) return;
        const ownTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
        document.title = ownTitle;

        // Tab-away wink: the title waves from the tab bar while the visitor
        // is elsewhere, and restores the honest title the moment they return.
        const onVisibility = () => {
            document.title =
                document.visibilityState === "hidden"
                    ? `Still here — ${SITE_NAME}`
                    : ownTitle;
        };
        document.addEventListener("visibilitychange", onVisibility);
        return () => document.removeEventListener("visibilitychange", onVisibility);
    }, [title]);
}
