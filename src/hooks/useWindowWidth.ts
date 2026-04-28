import { useEffect, useState } from "react";

export function useWindowWidth() {
    const [screenWidth, setScreenWidth] = useState(() =>
        typeof window === "undefined" ? 0 : window.innerWidth,
    );

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenWidth;
}
