import React from "react";
import { Link } from "react-router-dom";

export const NotFound = (): JSX.Element => {
    return (
        <div className="min-h-[100svh] bg-paper px-3 py-3 md:px-5 md:py-5">
            <div className="mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-3xl flex-col items-center justify-center rounded-[28px] bg-white p-8 text-center md:min-h-[calc(100svh-2.5rem)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    404
                </p>
                <h1 className="mt-4 text-balance text-3xl font-bold tracking-[-0.035em] text-gray-900 md:text-5xl">
                    This page doesn't exist.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                    The link may be out of date, or the URL may have a typo.
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
};
