import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DraggableCardsSection } from "../components/DraggableCardsSection";
import { LatestWorkSection } from "../components/LatestWorkSection";
import { SplineBackground } from "../components/SplineBackground";
import { BrandsLogos } from "../components/BrandsLogos";
import { PhilosophySection } from "../components/PhilosophySection";
import { Conferences } from "../pages/Conferences";
import { AboutSection } from "../components/AboutSection";
import { TimelineSection } from "../components/TimelineSection";

export const ScalehubStartupLp = (): JSX.Element => {
    return (
        <div className="bg-white flex flex-col w-full overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full min-h-screen flex flex-col">
                <SplineBackground className="z-0 fixed" />

                <div className="relative z-10 flex flex-col items-center pt-32 px-4 mb-20">
                    <Badge
                        className="mb-8"
                        label="Available for new projects"
                        showIcon={true}
                    />

                    <h1 className="text-center text-6xl md:text-8xl font-bold tracking-tighter mb-6 max-w-4xl">
                        Crafting Digital Health Experiences
                    </h1>

                    <div className="flex gap-4">
                        <Button type="primary" label="View Work" />
                        <Button type="secondary" label="Contact Me" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Latest Work Section */}
            <div className="relative z-10 bg-white">
                <LatestWorkSection />
            </div>

            {/* Philosophy / Mission Section */}
            <div className="relative z-10 bg-white">
                <PhilosophySection />
            </div>

            {/* Draggable Cards Section */}
            <div className="relative z-10 bg-white py-20">
                <DraggableCardsSection />
            </div>

            {/* Timeline Section */}
            <TimelineSection />

            {/* Footer */}
            <footer className="relative z-10 bg-black text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Stefan Thottunkal</h3>
                        <p className="text-gray-400">Researcher & Designer</p>
                    </div>
                    <div className="flex gap-8">
                        <Link to="/bio" className="text-gray-400 hover:text-white transition-colors">Bio</Link>
                        <Link to="/presentations" className="text-gray-400 hover:text-white transition-colors">Presentations</Link>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Scholar</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
