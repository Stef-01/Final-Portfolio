import { useEffect, useState } from "react";

export function useWindowWidth() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        // Set initial width
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenWidth;
}
