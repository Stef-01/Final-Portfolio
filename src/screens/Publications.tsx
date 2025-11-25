import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";

export const Publications = (): JSX.Element => {
    return (
        <div className="bg-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold">
                        Stefan Thottunkal
                    </Link>
                    <Link to="/">
                        <Button type="secondary" label="Back to Home" size="big" />
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">Publications</h1>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Content coming soon...
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
};
