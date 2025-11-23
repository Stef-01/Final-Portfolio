import { motion } from "motion/react";
import {
  Mic,
  MapPin,
  Calendar,
  Presentation,
  Paperclip,
} from "lucide-react";
import { useState } from "react";
import { FileViewerModal } from "../components/FileViewerModal";

interface ConferenceFile {
  url?: string;
  type: "pdf" | "video" | "image";
  name: string;
}

const conferences = [
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
      // url: "https://example.com/tethicon-presentation.pdf",
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
      // url: "https://example.com/lowitja-poster.pdf",
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
      // url: "https://example.com/oculomics-video.mp4",
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
      // url: "https://example.com/amsa-presentation.pdf",
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
      // url: "https://example.com/cei-poster.pdf",
      type: "pdf" as const,
      name: "CEI_Realist_Review_Poster.pdf",
    },
  },
];

const presentations = [
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

export function Conferences() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] =
    useState<ConferenceFile | null>(null);

  const handleFileClick = (file: ConferenceFile) => {
    setSelectedFile(file);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Mic className="w-12 h-12 text-[#EBFF57]" />
            <h1 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[72px]">
              Conferences & Presentations
            </h1>
          </div>

          {/* Conference Presentations */}
          <section className="mb-16">
            <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-[#EBFF57]">
              Conference Presentations
            </h2>

            <div className="grid gap-6">
              {conferences.map((conf, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#EBFF57] transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-4 py-1 bg-[#EBFF57] text-black rounded-full text-[14px] font-['Clash_Grotesk:Semibold',_sans-serif]">
                          {conf.role}
                        </span>
                      </div>
                      <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[28px] mb-2 group-hover:text-[#EBFF57] transition-colors">
                        {conf.title}
                      </h3>
                      {conf.venue && (
                        <p className="text-gray-400 text-[18px] mb-3">
                          {conf.venue}
                        </p>
                      )}
                      <p className="font-['Clash_Grotesk:Medium',_sans-serif] text-[19px] text-gray-200 mb-3 leading-relaxed">
                        {conf.topic}
                      </p>
                      {conf.collaborators && (
                        <p className="text-gray-400 text-[15px] mb-4 italic">
                          {conf.collaborators}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-gray-400">
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
                        className="w-20 h-20 bg-gradient-to-br from-[#EBFF57] to-[#c7d945] rounded-full flex items-center justify-center transition-transform flex-shrink-0 hover:shadow-xl hover:shadow-[#EBFF57]/50"
                        whileHover={{ scale: 1.15, rotate: 15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Paperclip className="w-8 h-8 text-black" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Invited Presentations */}
          <section>
            <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-[#EBFF57]">
              Invited Presentations & Grand Rounds
            </h2>

            <div className="grid gap-6">
              {presentations.map((pres, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#EBFF57] transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <Presentation className="w-8 h-8 text-[#EBFF57] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[26px] group-hover:text-[#EBFF57] transition-colors">
                          {pres.title}
                        </h3>
                        {pres.file?.url && (
                          <motion.button
                            onClick={() =>
                              handleFileClick(pres.file)
                            }
                            className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(235,255,87,0.2)] border border-[rgba(255,255,255,0.2)] hover:border-[#EBFF57] rounded-full text-[14px] font-['Clash_Grotesk:Medium',_sans-serif] transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Paperclip className="w-4 h-4 text-[#EBFF57]" />
                            <span className="text-gray-300 group-hover:text-[#EBFF57]">
                              View{" "}
                              {pres.file.type.toUpperCase()}
                            </span>
                          </motion.button>
                        )}
                      </div>
                      {pres.venue && (
                        <p className="text-gray-400 text-[18px] mb-3">
                          {pres.venue}
                        </p>
                      )}
                      {pres.role && (
                        <span className="inline-block px-3 py-1 bg-[#EBFF57]/20 text-[#EBFF57] rounded-full text-[14px] font-['Clash_Grotesk:Medium',_sans-serif] mb-3">
                          {pres.role}
                        </span>
                      )}
                      <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-[19px] text-gray-200 mb-3 leading-relaxed">
                        {pres.topic}
                      </p>
                      {pres.collaborators && (
                        <p className="text-gray-400 text-[15px] mb-3 italic">
                          {pres.collaborators}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-5 h-5" />
                        <span className="text-[16px]">
                          {pres.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      {/* File Viewer Modal */}
      <FileViewerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        fileUrl={selectedFile?.url}
        fileType={selectedFile?.type}
        fileName={selectedFile?.name}
      />
    </div>
  );
}