import { motion } from "motion/react";
import {
    Presentation as PresentationIcon,
    MapPin,
    Calendar,
    Paperclip,
    ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FileViewerModal } from "../components/FileViewerModal";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";

interface ConferenceFile {
    url?: string;
    type: "pdf" | "video" | "image";
    name: string;
}

interface Presentation {
    title: string;
    venue?: string;
    role?: string;
    topic: string;
    collaborators?: string;
    date: string;
    file: ConferenceFile;
}

interface Conference {
    title: string;
    venue?: string;
    role: string;
    topic: string;
    collaborators: string;
    location: string;
    date: string;
    file: ConferenceFile;
}

const conferences: Conference[] = [
    {
        title: "TETHICON",
        venue: "Stanford McCoy Family Center for Ethics in Society",
        role: "Co-Presenter",
        topic:
            "Detecting AI-Engineered Biothreats with Dynamic Threat Modelling",
        collaborators:
            "Mathew E., Thottunkal S., Saravanan V., Nguyen T.",
        location: "Stanford, CA",
        date: "2025",
        file: {
            type: "pdf" as const,
            name: "TETHICON_AI_Biothreats_Presentation.pdf",
        },
    },
    {
        title: "Lowitja Indigenous Health and Wellbeing Conference",
        role: "Presenter",
        topic:
            "What influences the implementation of health checks in the prevention and early detection of chronic diseases among Aboriginal and Torres Strait Islander people in Australian primary health care?",
        collaborators: "Yadav U., Thottunkal S., Agostino J.",
        location: "Australia",
        date: "2025",
        file: {
            type: "pdf" as const,
            name: "Lowitja_Indigenous_Health_Poster.pdf",
        },
    },
    {
        title:
            "Stanford Centre for Innovation in Global Health Conference",
        venue: "Stanford University",
        role: "Presenter",
        topic:
            "Microsoft Healthcare from the Eye, a new paradigm in Oculomics",
        collaborators: "Thottunkal S., Chang K., Nag A., Fan J.",
        location: "Stanford, CA",
        date: "2025",
        file: {
            type: "video" as const,
            name: "Healthcare_Eye_Oculomics_Presentation.mp4",
        },
    },
    {
        title: "AMSA Global Health Conference",
        role: "Presenter",
        topic:
            "A Scoping review of syndemic factors impacting marginalized communities with NCDs",
        collaborators:
            "Thottunkal, S., Pathak, N., Thottunkal, J., Philip, P. V., Ji, J., Mallam, M., Dandekar, T., Yang, S., Madan, M., & Yadav, U. N.",
        location: "Australia",
        date: "2024",
        file: {
            type: "pdf" as const,
            name: "AMSA_Syndemic_NCDs_Presentation.pdf",
        },
    },
    {
        title: "CEI Evidence and Implementation Summit",
        role: "Presenter",
        topic:
            "Implementation of preventive chronic disease health checks for Indigenous Australians: a realist review",
        collaborators: "Yadav U., Thottunkal S., Agostino J.",
        location: "Australia",
        date: "2023",
        file: {
            type: "pdf" as const,
            name: "CEI_Realist_Review_Poster.pdf",
        },
    },
];

const presentations: Presentation[] = [
    {
        title: "Stanford Prevention Research Centre Grand Rounds",
        venue: "Stanford Medicine",
        topic:
            "Development and evaluation of an LLM Pharmacogenomics tool to integrate PGx in everyday clinical decision making",
        date: "2025",
        file: {
            // url: "https://example.com/stanford-pgx-llm.pdf",
            type: "pdf" as const,
            name: "Stanford_PGx_LLM_Grand_Rounds.pdf",
        },
    },
    {
        title: "CPIC Junior Investigators Webinar",
        topic: "Development of a Pharmacogenomics LLM model",
        date: "2025",
        file: {
            // url: "https://example.com/cpic-webinar.mp4",
            type: "video" as const,
            name: "CPIC_PGx_LLM_Webinar.mp4",
        },
    },
    {
        title: "Stanford CARE Lung Cancer Summit",
        venue: "Stanford University",
        role: "Junior Investigator & Panelist",
        topic:
            "Pharmacogenomics Applications for Medication Management in Precision Oncology",
        date: "2025",
        file: {
            // url: "https://example.com/care-lung-cancer.pdf",
            type: "pdf" as const,
            name: "CARE_Lung_Cancer_PGx_Presentation.pdf",
        },
    },
    {
        title: "QUAD Fellowship Summit",
        topic:
            "Repurposing ML topic modelling techniques from counterterrorism approaches, for Infectious Disease Surveillance",
        collaborators: "Thottunkal S., Vigil B., Matsumoto S.",
        date: "2025",
        file: {
            // url: "https://example.com/quad-ml-surveillance.pdf",
            type: "pdf" as const,
            name: "QUAD_ML_Surveillance_Presentation.pdf",
        },
    },
];

export function Presentations() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] =
        useState<ConferenceFile | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFileClick = (file: ConferenceFile) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 py-20 px-8">
            <FloatingBackButton />
            <div className="max-w-[1200px] mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
                >    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-['Clash_Grotesk:Medium',_sans-serif] text-[18px]">Back to Home</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <PresentationIcon className="w-12 h-12 text-blue-600" />
                        <h1 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[72px]">
                            Presentations
                        </h1>
                    </div>

                    {/* Conference Presentations */}
                    <section className="mb-16">
                        <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-blue-600">
                            Conference Presentations
                        </h2>

                        <div className="grid gap-6">
                            {conferences.map((conf, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-[14px] font-['Clash_Grotesk:Semibold',_sans-serif]">
                                                    {conf.role}
                                                </span>
                                            </div>
                                            <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[28px] mb-2 group-hover:text-blue-600 transition-colors">
                                                {conf.title}
                                            </h3>
                                            {conf.venue && (
                                                <p className="text-gray-500 text-[18px] mb-3">
                                                    {conf.venue}
                                                </p>
                                            )}
                                            <p className="font-['Clash_Grotesk:Medium',_sans-serif] text-[19px] text-gray-800 mb-3 leading-relaxed">
                                                {conf.topic}
                                            </p>
                                            {conf.collaborators && (
                                                <p className="text-gray-500 text-[15px] mb-4 italic">
                                                    {conf.collaborators}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap gap-4 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-5 h-5" />
                                                    <span className="text-[16px]">
                                                        {conf.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-5 h-5" />
                                                    <span className="text-[16px]">
                                                        {conf.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {conf.file?.url && (
                                            <motion.button
                                                onClick={() =>
                                                    handleFileClick(conf.file)
                                                }
                                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Paperclip className="w-5 h-5" />
                                                <span className="font-['Clash_Grotesk:Medium',_sans-serif]">
                                                    View {conf.file.type.toUpperCase()}
                                                </span>
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Invited Presentations */}
                    <section>
                        <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-purple-600">
                            Invited Presentations & Grand Rounds
                        </h2>

                        <div className="grid gap-6">
                            {presentations.map((pres, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-600 transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex-1">
                                            {pres.role && (
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-[14px] font-['Clash_Grotesk:Semibold',_sans-serif]">
                                                        {pres.role}
                                                    </span>
                                                </div>
                                            )}
                                            <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[28px] mb-2 group-hover:text-purple-600 transition-colors">
                                                {pres.title}
                                            </h3>
                                            {pres.venue && (
                                                <p className="text-gray-500 text-[18px] mb-3">
                                                    {pres.venue}
                                                </p>
                                            )}
                                            <p className="font-['Clash_Grotesk:Medium',_sans-serif] text-[19px] text-gray-800 mb-3 leading-relaxed">
                                                {pres.topic}
                                            </p>
                                            {pres.collaborators && (
                                                <p className="text-gray-500 text-[15px] mb-4 italic">
                                                    {pres.collaborators}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap gap-4 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-5 h-5" />
                                                    <span className="text-[16px]">
                                                        {pres.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {pres.file?.url && (
                                            <motion.button
                                                onClick={() =>
                                                    handleFileClick(pres.file)
                                                }
                                                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Paperclip className="w-5 h-5" />
                                                <span className="font-['Clash_Grotesk:Medium',_sans-serif]">
                                                    View {pres.file.type.toUpperCase()}
                                                </span>
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>

            {selectedFile && (
                <FileViewerModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    file={selectedFile}
                />
            )}

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}
