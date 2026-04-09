import { motion } from "motion/react";
import { Briefcase, Award, GraduationCap, Mail, BookOpen, Trophy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { useEffect } from "react";

export function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100svh] bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8">
      <FloatingBackButton />
      <div className="max-w-[1200px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-['Clash_Grotesk:Medium',_sans-serif] text-[18px]">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] md:text-[72px] mb-4 leading-[1]">Stefan Thottunkal</h1>
            <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-[20px] md:text-[24px] text-gray-700 mb-4">
              Early Career Researcher, Public Servant, and Medical Student
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-[16px] md:text-[18px] text-gray-500">
              <a href="mailto:stefan@example.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <BookOpen className="w-5 h-5" />
                Google Scholar
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                ORCID
              </a>
            </div>
          </div>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[30px] md:text-[42px]">Education</h2>
            </div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[22px] md:text-[28px] mb-2">
                  M.S. in Community Health and Prevention Research
                </h3>
                <p className="text-blue-600 text-[18px] md:text-[20px] mb-2">Stanford University</p>
                <p className="text-gray-500 text-[16px] md:text-[18px] mb-3">2025-2026 | GPA: 4.075/4.3</p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed mb-2">
                  <span className="font-['Clash_Grotesk:Medium',_sans-serif]">QUAD Fellow 2025-2026</span>
                </p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed">
                  <span className="font-['Clash_Grotesk:Medium',_sans-serif]">Thesis:</span> AI methods for pharmacogenomics-based prescribing in clinical practice
                </p>
                <p className="text-gray-500 text-[15px] md:text-[16px] mt-2">Advisor: Prof. Palaniappan</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  Doctor of Medicine
                </h3>
                <p className="text-blue-600 text-[20px] mb-2">Macquarie University</p>
                <p className="text-gray-500 text-[18px] mb-3">2023-2027</p>
                <p className="text-gray-700 text-[18px] leading-relaxed">
                  Currently on a one year break for Master's degree
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  Bachelor of Health Science with First Class Honors
                </h3>
                <p className="text-blue-600 text-[20px] mb-2">Australian National University</p>
                <p className="text-gray-500 text-[18px] mb-3">2019-2023 | GPA: 6.92/7.0</p>
              </div>
            </motion.div>
          </section>

          {/* Research Focus Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[42px]">Research Focus</h2>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[24px] mb-4">Current Research Areas</h3>
                <ul className="space-y-3 text-gray-700 text-[18px]">
                  <li className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>AI methods for pharmacogenomics-based prescribing in clinical practice</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>Health systems implementation for Indigenous Australians</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>AI-assisted diabetic retinopathy screening (Microsoft Healthcare from the Eye)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>Regulatory stringency impacts on medical device innovation and equity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600">•</span>
                    <span>AI biosecurity and synthetic bioweapon detection</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Awards & Honors Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-blue-600" />
              <h2 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[42px]">Awards & Honors</h2>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  IIE QUAD Fellowship
                </h3>
                <p className="text-gray-500 text-[18px] mb-3">2024</p>
                <p className="text-gray-700 text-[18px] leading-relaxed">
                  Highly competitive fellowship supporting future leaders in STEM; awarded to only 100 scholars globally.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  MQ Equity Merit Scholarship
                </h3>
                <p className="text-gray-500 text-[18px] mb-3">2023</p>
                <p className="text-gray-700 text-[18px] leading-relaxed">
                  One of two recipients for the Doctor of Medicine degree at Macquarie University.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  Robert Menzies College Academic Scholarship
                </h3>
                <p className="text-gray-500 text-[18px] mb-3">2023</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  ANU Chancellor's Letter of Commendation
                </h3>
                <p className="text-gray-500 text-[18px] mb-3">2020 & 2022</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[28px] mb-2">
                  ANU Plus Award
                </h3>
                <p className="text-gray-500 text-[18px] mb-3">2022</p>
                <p className="text-gray-700 text-[18px] leading-relaxed">
                  Completed 100 hours of volunteering and a structured reflexive community service program as part of the ANU Plus initiative.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Skills & Expertise Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="font-['Clash_Grotesk:Medium',_sans-serif] text-[42px]">Skills & Expertise</h2>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                'Health Systems Design',
                'Pharmacogenomics',
                'AI in Healthcare',
                'Implementation Science',
                'Indigenous Health',
                'Public Health Policy',
                'Precision Medicine',
                'Digital Health',
                'Biosecurity',
                'Medical Device Regulation',
                'Systematic Reviews',
                'Qualitative Research'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(235,255,87,0.5)" }}
                >
                  <span className="font-['Clash_Grotesk:Medium',_sans-serif] text-[16px]">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </motion.div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
