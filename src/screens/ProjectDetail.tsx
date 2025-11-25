import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../types/project";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";

export const ProjectDetail = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                <Link to="/">
                    <Button label="Go Home" />
                </Link>
            </div>
        );
    }

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

            {/* Hero */}
            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-gray-100 py-8">
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Role</h3>
                        <p className="font-medium">{project.role || "Designer"}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Client</h3>
                        <p className="font-medium">{project.client || "Confidential"}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Duration</h3>
                        <p className="font-medium">{project.duration || "Ongoing"}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Tools</h3>
                        <p className="font-medium">{(project.tools || []).join(", ")}</p>
                    </div>
                </div>

                {/* Main Image */}
                <div className="w-full h-[600px] rounded-3xl overflow-hidden mb-20 shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Project Content */}
                <div className="max-w-4xl mx-auto prose prose-lg">
                    {project.longDescription?.split('\n\n').map((paragraph, index, array) => {
                        // Check if it's a heading
                        if (paragraph.startsWith('## ')) {
                            const headingText = paragraph.replace('## ', '');
                            return <h2 key={index} className="text-3xl font-bold mt-12 mb-6">{headingText}</h2>;
                        }
                        // Check if it's a horizontal rule
                        if (paragraph.trim() === '---') {
                            return <hr key={index} className="my-12 border-t-2 border-gray-200" />;
                        }
                        // Check if it's bold text (Role, Context, etc.)
                        if (paragraph.match(/^\*\*(.+?)\*\*\s*$/m)) {
                            const lines = paragraph.split('\n');
                            return (
                                <div key={index} className="mb-4">
                                    {lines.map((line, lineIndex) => {
                                        const boldMatch = line.match(/^\*\*(.+?)\*\*\s*$/);
                                        if (boldMatch) {
                                            return <p key={lineIndex} className="font-bold text-gray-900 mb-1">{boldMatch[1]}</p>;
                                        }
                                        return <p key={lineIndex} className="text-gray-700 ml-0">{line}</p>;
                                    })}
                                </div>
                            );
                        }

                        // Check if next item is "The Solution" heading to insert first set of images
                        const isBeforeSolution = index < array.length - 1 && array[index + 1].startsWith('## The Solution');

                        // Check if next item is "The Result" heading to insert second set of images
                        const isBeforeResult = index < array.length - 1 && array[index + 1].startsWith('## The Result');

                        // Regular paragraph
                        return (
                            <React.Fragment key={index}>
                                <p className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>

                                {/* First set of images - after Challenge, before Solution */}
                                {isBeforeSolution && (
                                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src="/src/assets/swaad-branding.png"
                                                alt="SWAAD Branding and Visual Identity"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src="/src/assets/swaad-recipe-finder.png"
                                                alt="SWAAD Recipe Finder Interface"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Second set of images - after Solution, before Result */}
                                {isBeforeResult && (
                                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src="/src/assets/swaad-nutriserve.png"
                                                alt="SWAAD NutriServe Chef Game Interface"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src="/src/assets/swaad-game.png"
                                                alt="SWAAD Nutrient Challenge Game"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
};
