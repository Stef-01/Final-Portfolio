import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Paperclip } from "lucide-react";
import { FileViewerModal } from "../components/FileViewerModal";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { StatValue } from "../components/CountUp";
import { useGoBack } from "../hooks/useGoBack";
import { usePageMeta } from "../hooks/usePageMeta";

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
        topic: "Microsoft Healthcare from the Eye, a new paradigm in Oculomics",
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
            "Repurposing ML topic modelling techniques from counterterrorism approaches, for Infectious Disease Surveillance",
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
    <section className="w-full bg-white px-4 pt-10 pb-12 md:px-8 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 t-h2 font-bold tracking-tight text-black">
                {title}
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
                {talks.map((talk, index) => (
                    <motion.div
                        key={`${talk.title}-${talk.date}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                            duration: 0.5,
                            delay: Math.min(index * 0.05, 0.25),
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-2xl bg-[#fafafa] p-6 transition-colors duration-300 hover:bg-[#f4f4f2] md:p-8"
                    >
                        <p className="text-sm font-medium text-gray-500">
                            {talk.date}
                            {talk.location ? ` · ${talk.location}` : ""}
                            {talk.role ? ` · ${talk.role}` : ""}
                        </p>

                        <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-black leading-tight">
                            {talk.title}
                        </h3>
                        {talk.venue && (
                            <p className="mt-1 text-sm text-gray-500">{talk.venue}</p>
                        )}

                        <p className="mt-4 text-base leading-relaxed text-gray-700">{talk.topic}</p>

                        {talk.collaborators && (
                            <p className="mt-3 text-sm text-gray-500">{talk.collaborators}</p>
                        )}

                        {talk.file?.url && (
                            <button
                                type="button"
                                onClick={() => onFileClick(talk.file)}
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                            >
                                <Paperclip className="h-3.5 w-3.5" />
                                {fileLabel[talk.file.type]}
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export function Presentations() {
    const goBack = useGoBack();
    usePageMeta({
        title: "Presentations",
        path: "/presentations",
        description:
            "Conference presentations, posters, and invited talks: Stanford Grand Rounds, CPIC, Lowitja, AMSA Global Health, TETHICON, and the QUAD Fellowship Summit.",
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<ConferenceFile | null>(null);

    const handleFileClick = (file: ConferenceFile) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    return (
        <div className="min-h-[100svh] bg-white text-gray-900">
            <FloatingBackButton />

            <header className="px-4 pt-16 md:px-8 md:pt-20">
                <div className="mx-auto max-w-6xl">
                    <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-lg font-medium">Back</span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="t-h1 font-bold tracking-tight text-black leading-[1.02]">
                            Talks, posters, and grand rounds
                        </h1>
                        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
                            Conference presentations and invited talks across precision
                            medicine, pharmacogenomics, oculomics, Indigenous health, and
                            biosecurity.
                        </p>

                        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                            {[
                                { k: String(conferences.length), v: "conference presentations" },
                                { k: String(invited.length), v: "invited talks and grand rounds" },
                                { k: "5+", v: "institutions across 3 countries" },
                            ].map((stat) => (
                                <div key={stat.v} className="flex items-baseline gap-2">
                                    <dt className="sr-only">{stat.v}</dt>
                                    <dd className="text-lg font-semibold text-black">
                                        <StatValue value={stat.k} />
                                    </dd>
                                    <span className="text-sm text-gray-500">{stat.v}</span>
                                </div>
                            ))}
                        </dl>
                    </motion.div>
                </div>
            </header>

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

            <ContactSection />
        </div>
    );
}
