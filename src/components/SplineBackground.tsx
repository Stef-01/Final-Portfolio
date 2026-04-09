import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { usePhoneLayout } from '../hooks/usePhoneLayout';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface SplineBackgroundProps {
    className?: string;
}

export const SplineBackground: React.FC<SplineBackgroundProps> = ({ className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const isPhoneLayout = usePhoneLayout();
    const prefersReducedMotion = usePrefersReducedMotion();

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
            <Suspense fallback={
                <div className="w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 animate-pulse" />
            }>
                <div className="relative w-full h-full">
                    {!isLoaded && (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 animate-pulse" />
                    )}
                    {!prefersReducedMotion && (
                        <Spline
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
            </Suspense>
        </div>
    );
};
