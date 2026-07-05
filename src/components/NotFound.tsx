import React from "react";
import { Link } from "react-router-dom";

export const NotFound = (): JSX.Element => {
    return (
        <div className="min-h-[100svh] bg-white px-4 py-10">
            <div className="mx-auto flex min-h-[80svh] max-w-xl flex-col items-center justify-center rounded-2xl bg-[#fafafa] p-8 text-center">
                <p className="text-sm font-medium text-gray-500">
                    404
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                    This page doesn't exist.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                    The link may be out of date, or the URL may have a typo.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                    Return home
                </Link>
            </div>
        </div>
    );
};
