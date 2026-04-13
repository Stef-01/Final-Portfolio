import React, { useEffect, useState } from 'react';
import { usePhoneLayout } from '../hooks/usePhoneLayout';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface SplineBackgroundProps {
    className?: string;
}

export const SplineBackground: React.FC<SplineBackgroundProps> = ({ className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [SplineComponent, setSplineComponent] = useState<React.ComponentType<any> | null>(null);
    const [shouldBootSpline, setShouldBootSpline] = useState(false);
    const isPhoneLayout = usePhoneLayout();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        let cancelled = false;
        let timeoutId = 0;
        let idleId: number | null = null;
        const idleCallback = window.requestIdleCallback;
        const cancelIdleCallback = window.cancelIdleCallback;
        const startBoot = () => {
            timeoutId = window.setTimeout(() => {
                if (!cancelled) {
                    setShouldBootSpline(true);
                }
            }, isPhoneLayout ? 1200 : 150);
        };

        if (typeof idleCallback === "function") {
            idleId = idleCallback(() => {
                startBoot();
            }, { timeout: isPhoneLayout ? 2200 : 900 });
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
    }, [isPhoneLayout, prefersReducedMotion]);

    useEffect(() => {
        if (!shouldBootSpline || prefersReducedMotion) {
            return;
        }

        let cancelled = false;
        import('@splinetool/react-spline')
            .then((module) => {
                if (!cancelled) {
                    setSplineComponent(() => module.default);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setHasError(true);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [prefersReducedMotion, shouldBootSpline]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
    };

    if (hasError) {
        return (
            <div className={`absolute inset-0 w-full h-full ${className}`}>
                <div className="w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 w-full h-full ${className}`}>
            <div className="relative w-full h-full">
                {(!isLoaded || !SplineComponent || prefersReducedMotion) && (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 animate-pulse" />
                )}
                {!prefersReducedMotion && SplineComponent && (
                    <SplineComponent
                        scene="https://prod.spline.design/zniKXFrJiOA-uk3z/scene.splinecode"
                        onLoad={handleLoad}
                        onError={handleError}
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
    );
};
