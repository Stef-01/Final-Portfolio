import React, { useEffect, useState } from 'react';
import type { SplineProps } from '@splinetool/react-spline';
import { usePhoneLayout } from '../hooks/usePhoneLayout';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface SplineBackgroundProps {
    className?: string;
}

type SplineModule = React.ComponentType<SplineProps>;

// Local error boundary that contains any failure inside the Spline runtime
// (network fetch errors, WebGL init throws, etc.) so they cannot bubble up to
// the app-level boundary and replace the whole page with the recovery card.
class SplineErrorBoundary extends React.Component<
    { fallback: React.ReactNode; children: React.ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch() {
        // Swallow — Spline failures are non-essential decoration.
    }
    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}

const StaticGradientFallback = ({
    className,
    pulse,
}: {
    className: string;
    pulse: boolean;
}) => (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
        <div
            className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 ${
                pulse ? "animate-pulse" : ""
            }`}
        />
    </div>
);

export const SplineBackground: React.FC<SplineBackgroundProps> = ({ className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [SplineComponent, setSplineComponent] = useState<SplineModule | null>(null);
    const [shouldBootSpline, setShouldBootSpline] = useState(false);
    const [documentVisible, setDocumentVisible] = useState(() =>
        typeof document === "undefined" ? true : document.visibilityState === "visible",
    );
    const isPhoneLayout = usePhoneLayout();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (typeof document === "undefined") return;

        const handleVisibilityChange = () => {
            setDocumentVisible(document.visibilityState === "visible");
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || !documentVisible) return;

        let cancelled = false;
        let timeoutId = 0;
        let idleId: number | null = null;
        const idleCallback = window.requestIdleCallback;
        const cancelIdleCallback = window.cancelIdleCallback;
        const startBoot = () => {
            timeoutId = window.setTimeout(() => {
                if (!cancelled) setShouldBootSpline(true);
            }, isPhoneLayout ? 1200 : 150);
        };

        if (typeof idleCallback === "function") {
            idleId = idleCallback(() => startBoot(), { timeout: isPhoneLayout ? 2200 : 900 });
        } else {
            startBoot();
        }

        return () => {
            cancelled = true;
            if (idleId !== null && typeof cancelIdleCallback === "function") {
                cancelIdleCallback(idleId);
            }
            window.clearTimeout(timeoutId);
        };
    }, [documentVisible, isPhoneLayout, prefersReducedMotion]);

    useEffect(() => {
        if (!shouldBootSpline || prefersReducedMotion || !documentVisible) return;

        let cancelled = false;
        import('@splinetool/react-spline')
            .then((module) => {
                if (!cancelled) setSplineComponent(() => module.default);
            })
            .catch(() => {
                if (!cancelled) setHasError(true);
            });

        return () => {
            cancelled = true;
        };
    }, [documentVisible, prefersReducedMotion, shouldBootSpline]);

    // Pre-emptively swallow unhandled promise rejections originating from the
    // Spline runtime (e.g. fetch failures for the scene URL). Without this they
    // surface as global unhandledrejection events; combined with React's error
    // handling this can occasionally take down the parent error boundary.
    useEffect(() => {
        if (typeof window === "undefined") return;
        const onRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason;
            const message = reason instanceof Error ? reason.message : String(reason ?? "");
            const stack = reason instanceof Error ? reason.stack ?? "" : "";
            if (
                /spline/i.test(stack) ||
                /spline/i.test(message) ||
                /splinecode/i.test(message)
            ) {
                event.preventDefault();
                setHasError(true);
            }
        };
        window.addEventListener("unhandledrejection", onRejection);
        return () => window.removeEventListener("unhandledrejection", onRejection);
    }, []);

    if (hasError) {
        return <StaticGradientFallback className={className} pulse={false} />;
    }

    return (
        <SplineErrorBoundary
            fallback={<StaticGradientFallback className={className} pulse={false} />}
        >
            <div className={`absolute inset-0 w-full h-full ${className}`}>
                <div className="relative w-full h-full">
                    {(!isLoaded || !SplineComponent || prefersReducedMotion) && (
                        <div
                            className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 ${
                                prefersReducedMotion ? "" : "animate-pulse"
                            }`}
                        />
                    )}
                    {!prefersReducedMotion && SplineComponent && (
                        <SplineComponent
                            scene="https://prod.spline.design/zniKXFrJiOA-uk3z/scene.splinecode"
                            onLoad={() => setIsLoaded(true)}
                            onError={() => setHasError(true)}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 0,
                                opacity: isLoaded ? 1 : 0,
                                transition: 'opacity 0.8s ease-in-out',
                                transform: isPhoneLayout ? 'scale(1.08)' : 'scale(1)',
                                transformOrigin: 'center top',
                            }}
                        />
                    )}
                </div>
            </div>
        </SplineErrorBoundary>
    );
};
