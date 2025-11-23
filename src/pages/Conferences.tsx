import {
  Mic,
  MapPin,
  Calendar,
  Presentation,
  Paperclip,
} from "lucide-react";

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
];

const presentations = [
  {
    title: "Stanford Prevention Research Centre Grand Rounds",
    venue: "Stanford Medicine",
    topic:
      "Development and evaluation of an LLM Pharmacogenomics tool to integrate PGx in everyday clinical decision making",
    date: "2025",
    file: {
      type: "pdf" as const,
      name: "Stanford_PGx_LLM_Grand_Rounds.pdf",
    },
  },
  {
    title: "CPIC Junior Investigators Webinar",
    topic: "Development of a Pharmacogenomics LLM model",
    date: "2025",
    file: {
      type: "video" as const,
      name: "CPIC_PGx_LLM_Webinar.mp4",
    },
  },
];

export function Conferences() {
  const handleFileClick = (file: ConferenceFile) => {
    if (file?.url) {
      window.open(file.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="flex items-center gap-4 mb-16">
            <Mic className="w-8 h-8 text-black" />
            <h1 className="text-[56px] font-semibold text-black">
              Conferences & Presentations
            </h1>
          </div>

          <section className="mb-16">
            <h2 className="text-[32px] font-semibold text-black mb-8">
              Conference Presentations
            </h2>

            <div className="space-y-8">
              {conferences.map((conf, index) => (
                <div
                  key={index}
                  className="border-l-4 border-black pl-6 py-2 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-black text-white rounded-full text-[12px] font-medium">
                          {conf.role}
                        </span>
                      </div>
                      <h3 className="text-[22px] font-semibold text-black mb-2">
                        {conf.title}
                      </h3>
                      {conf.venue && (
                        <p className="text-gray-500 text-[15px] mb-2">
                          {conf.venue}
                        </p>
                      )}
                      <p className="text-[15px] text-gray-700 mb-3 leading-relaxed">
                        {conf.topic}
                      </p>
                      {conf.collaborators && (
                        <p className="text-gray-500 text-[13px] mb-3 italic">
                          {conf.collaborators}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-gray-500 text-[14px]">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{conf.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{conf.date}</span>
                        </div>
                      </div>
                    </div>
                    {conf.file?.url && (
                      <button
                        onClick={() => handleFileClick(conf.file)}
                        className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Paperclip className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[32px] font-semibold text-black mb-8">
              Invited Presentations & Grand Rounds
            </h2>

            <div className="space-y-8">
              {presentations.map((pres, index) => (
                <div
                  key={index}
                  className="border-l-4 border-black pl-6 py-2 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <Presentation className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-[22px] font-semibold text-black">
                          {pres.title}
                        </h3>
                        {pres.file?.url && (
                          <button
                            onClick={() => handleFileClick(pres.file)}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-black hover:text-white transition-colors rounded-full text-[13px] font-medium"
                          >
                            <Paperclip className="w-4 h-4" />
                            <span>View {pres.file.type.toUpperCase()}</span>
                          </button>
                        )}
                      </div>
                      {pres.venue && (
                        <p className="text-gray-500 text-[15px] mb-2">
                          {pres.venue}
                        </p>
                      )}
                      <p className="text-[15px] text-gray-700 mb-3 leading-relaxed">
                        {pres.topic}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                        <Calendar className="w-4 h-4" />
                        <span>{pres.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
