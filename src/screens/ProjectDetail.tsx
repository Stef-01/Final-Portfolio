import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../types/project";
import { Button } from "../components/Button";

export const ProjectDetail = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

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
                        Smit Patel
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
                        {project.longDescription || project.description}
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

                {/* Content Placeholder */}
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <h2>The Challenge</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>

                    <h2>The Solution</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <div className="my-12 grid grid-cols-2 gap-8">
                        <div className="bg-gray-100 h-64 rounded-2xl"></div>
                        <div className="bg-gray-100 h-64 rounded-2xl"></div>
                    </div>

                    <h2>The Result</h2>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                </div>
            </div>

            {/* Next Project */}
            <div className="bg-black text-white py-20 px-4 md:px-8 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
                <Button type="primary" label="Contact Me" className="bg-white text-black hover:bg-gray-200" />
            </div>
        </div>
    );
};
