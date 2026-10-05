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
                <div className="min-h-[100svh] bg-paper px-3 py-3 md:px-5 md:py-5">
                    <div className="mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-3xl flex-col items-center justify-center rounded-[28px] bg-white p-8 text-center md:min-h-[calc(100svh-2.5rem)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Recovery mode</p>
                        <h1 className="mt-4 text-balance text-3xl font-bold tracking-[-0.035em] text-gray-900 md:text-5xl">
                            This view hit a rendering issue.
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            The page did not load correctly on this device state. Use the link below to recover immediately.
                        </p>
                        <Link
                            to="/"
                            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-gray-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                        >
                            Return home
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
