import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top on route changes. The router otherwise
// preserves the previous page's scroll offset, which is jarring when
// the next page has different content.
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, [pathname]);

    return null;
};
