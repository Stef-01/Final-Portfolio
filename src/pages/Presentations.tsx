import { useState } from "react";
import { motion } from "motion/react";
import { Paperclip } from "lucide-react";
import { FileViewerModal } from "../components/FileViewerModal";
import { PageIntro, PageShell } from "../components/PageShell";

interface ConferenceFile {
    url?: string;
    type: "pdf" | "video" | "image";
    name: string;
}

interface Talk {
    title: string;
    venue?: string;
    role?: string;
    topic: string;
    collaborators?: string;
    location?: string;
    date: string;
    file: ConferenceFile;
}

const conferences: Talk[] = [
    {
        title: "TETHICON",
        venue: "Stanford McCoy Family Center for Ethics in Society",
        role: "Co-Presenter",
        topic: "Detecting AI-Engineered Biothreats with Dynamic Threat Modelling",
        collaborators: "Mathew E., Thottunkal S., Saravanan V., Nguyen T.",
        location: "Stanford, CA",
        date: "2025",
        file: { url: "/files/TETHICON_AI_Biothreats_Presentation.pdf", type: "pdf", name: "TETHICON_AI_Biothreats_Presentation.pdf" },
    },
    {
        title: "Lowitja Indigenous Health and Wellbeing Conference",
        role: "Presenter",
        topic:
            "What influences the implementation of health checks in the prevention and early detection of chronic diseases among Aboriginal and Torres Strait Islander people in Australian primary health care?",
        collaborators: "Yadav U., Thottunkal S., Agostino J.",
        location: "Australia",
        date: "2025",
        file: { url: "/files/Lowitja_Indigenous_Health_Poster.pdf", type: "pdf", name: "Lowitja_Indigenous_Health_Poster.pdf" },
    },
    {
        title: "Stanford Centre for Innovation in Global Health Conference",
        venue: "Stanford University",
        role: "Presenter",
        topic: "Microsoft Healthcare from the Eye: A New Paradigm in Oculomics",
        collaborators: "Thottunkal S., Chang K., Nag A., Fan J.",
        location: "Stanford, CA",
        date: "2025",
        file: { url: "/files/Healthcare_Eye_Oculomics_Presentation.mp4", type: "video", name: "Healthcare_Eye_Oculomics_Presentation.mp4" },
    },
    {
        title: "AMSA Global Health Conference",
        role: "Presenter",
        topic: "A Scoping review of syndemic factors impacting marginalized communities with NCDs",
        collaborators:
            "Thottunkal S., Pathak N., Thottunkal J., Philip P. V., Ji J., Mallam M., Dandekar T., Yang S., Madan M., Yadav U. N.",
        location: "Australia",
        date: "2024",
        file: { url: "/files/AMSA_Syndemic_NCDs_Presentation.pdf", type: "pdf", name: "AMSA_Syndemic_NCDs_Presentation.pdf" },
    },
    {
        title: "CEI Evidence and Implementation Summit",
        role: "Presenter",
        topic:
            "Implementation of preventive chronic disease health checks for Indigenous Australians: a realist review",
        collaborators: "Yadav U., Thottunkal S., Agostino J.",
        location: "Australia",
        date: "2023",
        file: { url: "/files/CEI_Realist_Review_Poster.pdf", type: "pdf", name: "CEI_Realist_Review_Poster.pdf" },
    },
];

const invited: Talk[] = [
    {
        title: "Stanford Prevention Research Centre Grand Rounds",
        venue: "Stanford Medicine",
        topic:
            "Development and evaluation of an LLM Pharmacogenomics tool to integrate PGx in everyday clinical decision making",
        date: "2025",
        file: { url: "/files/Stanford_PGx_LLM_Grand_Rounds.pdf", type: "pdf", name: "Stanford_PGx_LLM_Grand_Rounds.pdf" },
    },
    {
        title: "CPIC Junior Investigators Webinar",
        topic: "Development of a Pharmacogenomics LLM model",
        date: "2025",
        file: { url: "/files/CPIC_PGx_LLM_Webinar.mp4", type: "video", name: "CPIC_PGx_LLM_Webinar.mp4" },
    },
    {
        title: "Stanford CARE Lung Cancer Summit",
        venue: "Stanford University",
        role: "Junior Investigator & Panelist",
        topic:
            "Pharmacogenomics Applications for Medication Management in Precision Oncology",
        date: "2025",
        file: { url: "/files/CARE_Lung_Cancer_PGx_Presentation.pdf", type: "pdf", name: "CARE_Lung_Cancer_PGx_Presentation.pdf" },
    },
    {
        title: "QUAD Fellowship Summit",
        topic:
            "Repurposing ML Topic-Modelling Techniques from Counterterrorism for Infectious-Disease Surveillance",
        collaborators: "Thottunkal S., Vigil B., Matsumoto S.",
        date: "2025",
        file: { url: "/files/QUAD_ML_Surveillance_Presentation.pdf", type: "pdf", name: "QUAD_ML_Surveillance_Presentation.pdf" },
    },
];

const fileLabel: Record<ConferenceFile["type"], string> = {
    pdf: "View slides",
    video: "Watch video",
    image: "View image",
};

interface TalkSectionProps {
    title: string;
    talks: Talk[];
    onFileClick: (file: ConferenceFile) => void;
}

const TalkSection = ({ title, talks, onFileClick }: TalkSectionProps) => (
    <section className="w-full px-4 pt-10 pb-8 md:px-8 md:pt-16 md:pb-12">
        <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 t-h2 font-bold tracking-[-0.03em] text-gray-900">
                {title}
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
                {talks.map((talk, index) => (
                    <motion.div
                        key={`${talk.title}-${talk.date}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
                        className="flex flex-col rounded-[28px] bg-white p-6 md:p-8"
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                            {talk.date}
                            {talk.location ? ` · ${talk.location}` : ""}
                            {talk.role ? ` · ${talk.role}` : ""}
                        </p>

                        <h3 className="mt-4 text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-2xl">
                            {talk.title}
                        </h3>
                        {talk.venue && (
                            <p className="mt-1 text-sm text-gray-500">{talk.venue}</p>
                        )}

                        <p className="mt-4 text-base leading-relaxed text-gray-600">{talk.topic}</p>

                        {talk.collaborators && (
                            <p className="mt-3 text-sm text-gray-500">{talk.collaborators}</p>
                        )}

                        {talk.file?.url && (
                            <div className="mt-auto pt-6">
                                <button
                                    type="button"
                                    onClick={() => onFileClick(talk.file)}
                                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                                >
                                    <Paperclip className="h-3.5 w-3.5" />
                                    {fileLabel[talk.file.type]}
                                </button>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export function Presentations() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<ConferenceFile | null>(null);

    const handleFileClick = (file: ConferenceFile) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    return (
        <PageShell>
            <PageIntro
                title="Talks, posters, and grand rounds"
                description="Conference presentations and invited talks across precision medicine, pharmacogenomics, oculomics, Indigenous health, and biosecurity."
                stats={[
                    { value: String(conferences.length), label: "conference presentations" },
                    { value: String(invited.length), label: "invited talks and grand rounds" },
                    { value: "5+", label: "institutions across 3 countries" },
                ]}
            />

            <TalkSection
                title="Conference presentations"
                talks={conferences}
                onFileClick={handleFileClick}
            />

            <TalkSection
                title="Invited talks and grand rounds"
                talks={invited}
                onFileClick={handleFileClick}
            />

            {selectedFile && (
                <FileViewerModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    fileUrl={selectedFile.url}
                    fileType={selectedFile.type}
                    fileName={selectedFile.name}
                />
            )}

        </PageShell>
    );
}
