import { Briefcase, Award, GraduationCap, Mail, BookOpen, Trophy } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h1 className="text-[56px] font-semibold text-black mb-4">Stefan Thottunkal</h1>
          <p className="text-[20px] text-gray-600 mb-6">
            Early Career Researcher, Public Servant, and Medical Student
          </p>
          <div className="flex gap-6 text-[15px]">
            <a href="mailto:stefan@example.com" className="flex items-center gap-2 text-[#0099ff] hover:text-[#0077cc] transition-colors">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href="#" className="flex items-center gap-2 text-[#0099ff] hover:text-[#0077cc] transition-colors">
              <BookOpen className="w-4 h-4" />
              Google Scholar
            </a>
            <a href="#" className="text-[#0099ff] hover:text-[#0077cc] transition-colors">
              ORCID
            </a>
          </div>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-black" />
            <h2 className="text-[32px] font-semibold text-black">Education</h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[22px] font-semibold text-black mb-2">
                M.S. in Community Health and Prevention Research
              </h3>
              <p className="text-[16px] font-medium text-gray-900 mb-1">Stanford University</p>
              <p className="text-gray-500 text-[14px] mb-3">2025-2026 | GPA: 4.075/4.3</p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-2">
                <span className="font-medium">QUAD Fellow 2025-2026</span>
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                <span className="font-medium">Thesis:</span> AI methods for pharmacogenomics-based prescribing in clinical practice
              </p>
              <p className="text-gray-500 text-[14px] mt-2">Advisor: Prof. Palaniappan</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[22px] font-semibold text-black mb-2">
                Doctor of Medicine
              </h3>
              <p className="text-[16px] font-medium text-gray-900 mb-1">Macquarie University</p>
              <p className="text-gray-500 text-[14px] mb-3">2023-2027</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Currently on a one year break for Master's degree
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[22px] font-semibold text-black mb-2">
                Bachelor of Health Science with First Class Honors
              </h3>
              <p className="text-[16px] font-medium text-gray-900 mb-1">Australian National University</p>
              <p className="text-gray-500 text-[14px] mb-3">2019-2023 | GPA: 6.92/7.0</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-black" />
            <h2 className="text-[32px] font-semibold text-black">Research Focus</h2>
          </div>

          <div className="bg-gray-50 rounded-[24px] p-8">
            <h3 className="text-[20px] font-semibold text-black mb-4">Current Research Areas</h3>
            <ul className="space-y-3 text-gray-700 text-[15px]">
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>AI methods for pharmacogenomics-based prescribing in clinical practice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>Health systems implementation for Indigenous Australians</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>AI-assisted diabetic retinopathy screening (Microsoft Healthcare from the Eye)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>Regulatory stringency impacts on medical device innovation and equity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black">•</span>
                <span>AI biosecurity and synthetic bioweapon detection</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-black" />
            <h2 className="text-[32px] font-semibold text-black">Awards & Honors</h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[20px] font-semibold text-black mb-2">
                IIE QUAD Fellowship
              </h3>
              <p className="text-gray-500 text-[14px] mb-2">2024</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Highly competitive fellowship supporting future leaders in STEM; awarded to only 100 scholars globally.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[20px] font-semibold text-black mb-2">
                MQ Equity Merit Scholarship
              </h3>
              <p className="text-gray-500 text-[14px] mb-2">2023</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                One of two recipients for the Doctor of Medicine degree at Macquarie University.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[20px] font-semibold text-black mb-2">
                Robert Menzies College Academic Scholarship
              </h3>
              <p className="text-gray-500 text-[14px]">2023</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[20px] font-semibold text-black mb-2">
                ANU Chancellor's Letter of Commendation
              </h3>
              <p className="text-gray-500 text-[14px]">2020 & 2022</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-[20px] font-semibold text-black mb-2">
                ANU Plus Award
              </h3>
              <p className="text-gray-500 text-[14px] mb-2">2022</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Completed 100 hours of volunteering and a structured reflexive community service program as part of the ANU Plus initiative.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-black" />
            <h2 className="text-[32px] font-semibold text-black">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-[16px] px-4 py-3 text-center"
              >
                <span className="text-[14px] font-medium text-gray-900">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
