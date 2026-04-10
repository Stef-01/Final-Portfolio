import { useEffect, useState } from "react";

function detectPhoneLayout() {
    if (typeof window === "undefined") {
        return false;
    }

    const width = window.innerWidth;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    const mobileUa = /iPhone|Android.+Mobile|Mobile/i.test(navigator.userAgent);

    return portrait && width <= 768 && (coarsePointer || mobileUa);
}

export function usePhoneLayout() {
    const [isPhoneLayout, setIsPhoneLayout] = useState(() => detectPhoneLayout());

    useEffect(() => {
        const updateLayout = () => {
            setIsPhoneLayout(detectPhoneLayout());
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        window.addEventListener("orientationchange", updateLayout);

        return () => {
            window.removeEventListener("resize", updateLayout);
            window.removeEventListener("orientationchange", updateLayout);
        };
    }, []);

    return isPhoneLayout;
}
