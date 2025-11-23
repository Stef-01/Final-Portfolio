import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  imageColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ruby Banking",
    description: "Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.",
    tags: ["Web Design", "UI/UX", "Banking"],
    year: "2024",
    imageColor: "#047857"
  },
  {
    id: 2,
    title: "Stimulate Marketing",
    description: "New vibrant brand for a full-cycle marketing agency enhancing retention revenue for online retailers.",
    tags: ["Brand Identity", "Marketing", "Design"],
    year: "2024",
    imageColor: "#f59e0b"
  },
  {
    id: 3,
    title: "Quanta Tech",
    description: "Creating a credible digital presence with a new website for a modern tech company.",
    tags: ["Web Development", "Tech", "Branding"],
    year: "2023",
    imageColor: "#3b82f6"
  },
  {
    id: 4,
    title: "Reward Point",
    description: "Brand sprint showcasing a logo and dynamic illustrations for a B2B/B2C solution revolutionizing the cash-back process.",
    tags: ["Brand Design", "Illustration", "Fintech"],
    year: "2023",
    imageColor: "#8b5cf6"
  }
];

export function LatestWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-20">
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`flex gap-12 items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}>
              <div
                className="flex-1 rounded-[32px] overflow-hidden transition-all duration-500"
                style={{
                  background: project.imageColor,
                  aspectRatio: "4/3",
                  transform: hoveredId === project.id ? "scale(1.02)" : "scale(1)"
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white/10 text-[120px] font-bold">
                  {project.id}
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{project.year}</span>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-[32px] font-semibold text-black leading-tight">
                  {project.title}
                </h3>

                <p className="text-[16px] text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <button className="text-[14px] font-medium text-[#0099ff] hover:text-[#0077cc] transition-colors mt-2 flex items-center gap-2">
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
