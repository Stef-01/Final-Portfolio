import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
) => {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const supportsIO =
        typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";
    const [isIntersecting, setIsIntersecting] = useState(() => !supportsIO);
    const [hasTriggered, setHasTriggered] = useState(() => !supportsIO);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || !supportsIO) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;

                if (isVisible && (!triggerOnce || !hasTriggered)) {
                    setIsIntersecting(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(isVisible);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered, supportsIO]);

    return { elementRef, isIntersecting };
};
