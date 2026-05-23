import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Calendar, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";
import { FileViewerModal } from "../components/FileViewerModal";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";

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

const cardClasses =
    "group relative block overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] p-6 md:p-8 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]";

interface TalkSectionProps {
    title: string;
    eyebrow: string;
    talks: Talk[];
    onFileClick: (file: ConferenceFile) => void;
}

const TalkSection = ({ title, eyebrow, talks, onFileClick }: TalkSectionProps) => (
    <section className="w-full bg-white px-4 pt-10 pb-12 md:px-8 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">{eyebrow}</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black">
                    {title}
                </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {talks.map((talk, index) => (
                    <motion.div
                        key={`${talk.title}-${talk.date}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
                        className={cardClasses}
                    >
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                {talk.date}
                            </span>
                            {talk.role && (
                                <span className="rounded-full border border-black/15 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                    {talk.role}
                                </span>
                            )}
                        </div>

                        {talk.venue && (
                            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{talk.venue}</p>
                        )}
                        <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight">
                            {talk.title}
                        </h3>

                        <p className="mt-5 text-base leading-relaxed text-gray-700">{talk.topic}</p>

                        {talk.collaborators && (
                            <p className="mt-4 text-sm italic text-gray-500">{talk.collaborators}</p>
                        )}

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-gray-500">
                            {talk.location && (
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {talk.location}
                                </span>
                            )}
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {talk.date}
                            </span>
                        </div>

                        {talk.file?.url && (
                            <button
                                type="button"
                                onClick={() => onFileClick(talk.file)}
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                            >
                                <Paperclip className="h-3.5 w-3.5" />
                                View {talk.file.type.toUpperCase()}
                            </button>
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
        <div className="min-h-[100svh] bg-white text-gray-900">
            <FloatingBackButton />

            <div className="px-4 pt-16 md:pt-20 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[18px] font-medium">Back to Home</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Speaking</p>
                        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
                            Talks, posters, and grand rounds
                        </h1>
                        <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
                            Conference presentations and invited talks across precision medicine,
                            pharmacogenomics, oculomics, indigenous health, and biosecurity — work
                            shared at Stanford, AMSA, Lowitja, CEI, CPIC, and the QUAD Fellowship.
                        </p>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {[
                                { k: String(conferences.length), v: "conference presentations" },
                                { k: String(invited.length), v: "invited talks & grand rounds" },
                                { k: "5+", v: "institutions across 3 countries" },
                            ].map((stat) => (
                                <div
                                    key={stat.v}
                                    className="rounded-[28px] border border-black/10 bg-[#fafafa] px-6 py-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
                                >
                                    <p className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                                        {stat.k}
                                    </p>
                                    <p className="mt-2 text-sm md:text-base text-gray-600">{stat.v}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <TalkSection
                eyebrow="Conferences"
                title="Conference presentations"
                talks={conferences}
                onFileClick={handleFileClick}
            />

            <TalkSection
                eyebrow="Invited"
                title="Invited talks & grand rounds"
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
