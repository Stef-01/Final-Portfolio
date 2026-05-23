import React from "react";
import { Link } from "react-router-dom";

interface AppErrorBoundaryProps {
    children: React.ReactNode;
}

interface AppErrorBoundaryState {
    hasError: boolean;
}

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
    constructor(props: AppErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): AppErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        if (import.meta.env.DEV) {
            console.error("Portfolio render failure:", error);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[100svh] bg-white px-4 py-10">
                    <div className="mx-auto flex min-h-[80svh] max-w-xl flex-col items-center justify-center rounded-[32px] border border-black/10 bg-[#fafafa] p-8 text-center shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Recovery Mode</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                            This view hit a rendering issue.
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            The page did not load correctly on this device state. Use the link below to recover immediately.
                        </p>
                        <Link
                            to="/"
                            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
