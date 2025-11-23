import { motion } from "motion/react";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

const peerReviewedArticles = [
  {
    authors: "Yu H., Thottunkal S., Yahya B. et al.",
    year: "2025",
    title: "Artificial intelligence in biomedical diagnostics: recent advances and transitions to liable regulation",
    journal: "MIT Science Policy Review",
    doi: "https://doi.org/10.38105/spr.608ii2mk00"
  },
  {
    authors: "Thottunkal, S., Spahn, C., Wang, B., Rohatgi, N., Hong, J., Khandelwal, A., Palaniappan, L.",
    year: "2025",
    title: "Clinician Experiences at the Frontier of Pharmacogenomics and Future Directions",
    journal: "MDPI: Journal of Personalized Medicine, 15(7), 294",
    doi: "https://doi.org/10.3390/jpm15070294"
  },
  {
    authors: "Yadav U., Thottunkal S., Agostino J.",
    year: "2025",
    title: "What influences the implementation of health checks in the prevention and early detection of chronic diseases among Aboriginal and Torres Strait Islander people in Australian primary health care?",
    journal: "BMC Health Systems and Policy",
    doi: "https://doi.org/10.1186/s12961-025-01325-9"
  },
  {
    authors: "Parry A., Campbell S., Thottunkal S., Mandal P., Salmon S.",
    year: "2024",
    title: "Stronger together: A bi-regional operational capacity review of the Global Outbreak Alert and Response Network",
    journal: "Western Pacific Surveillance and Response, World Health Organization",
    doi: "https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1109/1197"
  },
  {
    authors: "Hailu S., Hurst C., Cyphers G., Thottunkal S., Harley D., Viney K., Irwin A., Nourse C.",
    year: "2024",
    title: "Prevalence of Extra-pulmonary Tuberculosis in Africa: A Systematic Review and Meta-analysis",
    journal: "Tropical Medicine & International Health",
    doi: "https://doi.org/10.1111/tmi.13970"
  },
  {
    authors: "Joshy, G., Khalatbari-Soltani, S., Soga, K., Butow, P., Laidsaar-Powell, R., Koczwara, B., Rankin, N. M., Brown, S., Weber, M., Mazariego, C., Grogan, P., Stubbs, J., Thottunkal, S., Canfell, K., Blyth, F. M., & Banks, E.",
    year: "2023",
    title: "Pain and its interference with daily living in relation to cancer: a comparative population-based study of 16,053 cancer survivors and 106,345 people without cancer",
    journal: "BMC cancer, 23(1), 774",
    doi: "https://doi.org/10.1186/s12885-023-11214-5"
  },
  {
    authors: "Thottunkal, S.",
    year: "2021",
    title: "Perceptions of, factors underlying, and reasons for e-cigarette use among Australia's young adults",
    journal: "ANU Undergraduate Research Journal, 11(1), 125-132",
    doi: "https://studentjournals.anu.edu.au/index.php/aurj/article/view/647"
  }
];

const manuscriptsInProgress = [
  {
    title: "Comparing LLM Output to Physician Notes for Pharmacogenomics",
    status: "Under Review",
    journal: "MDPI: Journal of Personalized Medicine"
  },
  {
    title: "AI Enabled Synthetic Bioweapons, a critical perspective on the current landscape of nucleic screening, and considerations for the EO's AI Action Plan",
    status: "Submitted August 2025",
    journal: "Disaster Medicine and Public Health Preparedness, Cambridge Press"
  },
  {
    title: "Regulatory Stringency and Impacts on Equity and Innovation in Medical Devices: Insights from the EU MDR 2017 and Considerations for the FDA",
    status: "Revise and Resubmit July 2025",
    journal: "Journal of Regulatory Science"
  },
  {
    authors: "Sayeed, M. A., Colquhoun, S., Thottunkal, S., McLure, A., Schwessinger, B., Lal, A., & Rahaman, M. R.",
    title: "Systematic review and meta-analysis of childhood diarrhea attributed to enteropathogenic organisms in low- and middle-income countries",
    status: "Submitted 2025"
  },
  {
    authors: "Thottunkal, S., Chang K., Fan J., Nag A., Rhew D., Leng T., Bussina A.",
    title: "Behavioral Hazards, Externalities, and Cost–Benefit Dynamics of AI-Assisted Diabetic Retinopathy Screening: Microsoft's Healthcare from the Eye Initiative",
    status: "Study in Progress"
  }
];

const creativeWorks = [
  {
    title: "The Future In The Other: Levinasian Reflections On Identity, Responsibility, Humanity And Artificial Intelligence In Medicine",
    publication: "RMC Vera Cogitate",
    year: "2024"
  },
  {
    title: "'Charles Darwin', 'The Singularity' and 'Mass Extinction' – Ceramics",
    publication: "Burgmann Journal Artwork Publication",
    year: "2021"
  },
  {
    title: "'Journey of my life' – Woodwork/carving",
    publication: "QLD Creative Generations Exhibition",
    year: "2018"
  }
];

export function Publications() {
  return (
    <div className="min-h-screen bg-[#000000] text-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-12 h-12 text-[#EBFF57]" />
            <h1 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[72px]">Publications</h1>
          </div>

          {/* Peer-Reviewed Articles */}
          <section className="mb-16">
            <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-[#EBFF57]">
              Peer-Reviewed Articles
            </h2>
            
            <div className="space-y-6">
              {peerReviewedArticles.map((pub, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#EBFF57] transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <p className="text-gray-400 text-[16px] mb-2">{pub.authors}</p>
                      <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[22px] mb-3 leading-relaxed">
                        {pub.title}
                      </h3>
                      <p className="text-gray-300 text-[18px] mb-2">
                        <span className="italic">{pub.journal}</span> ({pub.year})
                      </p>
                      <a 
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#EBFF57] hover:underline text-[16px]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Manuscripts Under Review/In Preparation */}
          <section className="mb-16">
            <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-[#EBFF57]">
              Manuscripts Under Review/In Preparation
            </h2>
            
            <div className="space-y-6">
              {manuscriptsInProgress.map((pub, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <FileText className="w-6 h-6 text-[#EBFF57] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      {pub.authors && (
                        <p className="text-gray-400 text-[16px] mb-2">{pub.authors}</p>
                      )}
                      <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[22px] mb-3 leading-relaxed">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="px-3 py-1 bg-[#EBFF57]/20 text-[#EBFF57] rounded-full text-[14px] font-['Clash_Grotesk:Medium',_sans-serif]">
                          {pub.status}
                        </span>
                        {pub.journal && (
                          <p className="text-gray-300 text-[16px] italic">{pub.journal}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Creative Works */}
          <section>
            <h2 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[36px] mb-8 text-[#EBFF57]">
              Creative Works
            </h2>
            
            <div className="space-y-4">
              {creativeWorks.map((work, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.1)] rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[20px] mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-[16px]">
                    {work.publication} • {work.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
