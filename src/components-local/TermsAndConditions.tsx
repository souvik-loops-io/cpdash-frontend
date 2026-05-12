import { motion } from "motion/react"
import { INNER } from "../assets/utils/NewUtils"

const sections: { title: string; content: { subtitle?: string; text: string }[] }[] = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        text: "By accessing or using the Platform, including the Candidate Dashboard (for students to professionals and immigrants), Talent Partner Dashboard (for recruiters, human resources, and educational institutions), and Community Dashboard (for social networking, collaboration, and live streaming), the User agrees to be bound by these Terms and Conditions. If the User does not agree to these terms, they must not use the Platform.",
      },
      {
        text: "The User confirms that they are at least 16 years old and have the legal capacity to enter into this Agreement. If using the Platform on behalf of an organisation, the User represents that they have authority to bind that organisation.",
      },
    ],
  },
  {
    title: "2. Definitions",
    content: [
      {
        text: "- **Services**: All features of the Platform, including the Candidate Dashboard, Talent Partner Dashboard, Community Dashboard, job postings, applications, profiles, resumes, networking tools, collaboration spaces, and live streaming functionality.\n- **User**: Any individual or entity accessing or using the Services. Users may register as a Candidate, Talent Partner, or Community User.\n- **Candidate**: Students or professionals seeking career opportunities, uploading profiles/resumes, and applying for roles.\n- **Talent Partner**: Recruiters, HR professionals, or educational institutions posting opportunities, managing talent pipelines, or engaging with Candidates.\n- **Community User**: Any User participating in social features, collaboration, forums, or live streaming.\n- **Content**: Any text, graphics, images, videos, audio, resumes, job postings, profiles, comments, live streams, or other materials uploaded, posted, transmitted, or made available through the Platform.\n- **Indemnified Parties**: The Company, its affiliates, officers, directors, employees, agents, and any other party associated with the Company.",
      },
    ],
  },
  {
    title: "3. User Accounts",
    content: [
      {
        subtitle: "3.1 Account Creation",
        text: "To access certain features, Users must create an Account and provide accurate, current, and complete information. Different account types (Candidate, Talent Partner, or Community) may have role-specific features and verification requirements.",
      },
      {
        subtitle: "3.2 Account Security",
        text: "Users are responsible for maintaining the confidentiality of their Account credentials and for all activities under their Account. Users must notify the Company immediately of any unauthorised use or security breach.",
      },
      {
        subtitle: "3.3 Account Suspension",
        text: "The Company reserves the right to suspend or terminate any Account at its sole discretion, without notice, for conduct that violates these Terms or is harmful to other Users, the Company, or third parties.",
      },
    ],
  },
  {
    title: "4. User Responsibilities and Prohibited Conduct",
    content: [
      {
        subtitle: "4.1 General Obligations",
        text: "All Users agree to:\n(a) Use the Services only for lawful purposes and in accordance with this Agreement;\n(b) Provide accurate information (e.g., genuine resumes, job descriptions, qualifications);\n(c) Comply with all applicable laws, including the Equality Act 2010 (no discriminatory job postings or practices) and data protection laws;\n(d) Take responsibility for all activities under their Account.",
      },
      {
        subtitle: "4.2 Prohibited Activities",
        text: "Users shall not:\n(a) Use the Services for any illegal or unauthorised purpose, including posting misleading job opportunities or false profiles;\n(b) Interfere with or disrupt the Platform, servers, or networks;\n(c) Transmit viruses, malware, or destructive code;\n(d) Attempt unauthorised access to any part of the Platform;\n(e) Engage in harassment, discrimination, spam, or abusive behaviour, particularly in the Community Dashboard or live streams;\n(f) Record or distribute live streams without all participants' consent where required by law.",
      },
      {
        subtitle: "4.3 Role-Specific Obligations",
        text: "- **Candidates**: Ensure all profile and application information is truthful; applications are made in good faith.\n- **Talent Partners**: Job postings must be accurate, non-discriminatory, and compliant with employment legislation; no guarantees of filling positions are implied.\n- **Community Users**: Content in forums, collaborations, or live streams must be respectful and professional; the Platform is not liable for interactions between Users.",
      },
    ],
  },
  {
    title: "5. Content",
    content: [
      {
        subtitle: "5.1 User Content Licence",
        text: "Users are solely responsible for their Content. Users retain ownership of their Content but grant the Company a worldwide, non-exclusive, royalty-free, perpetual, irrevocable licence to use, reproduce, modify, publish, translate, distribute, and display such Content for the purpose of operating, promoting, and improving the Platform.",
      },
      {
        subtitle: "5.2 Content Moderation",
        text: "The Company has the right (but not the obligation) to monitor, review, remove, or refuse any Content that violates these Terms, including inappropriate live-stream material or discriminatory job postings.",
      },
      {
        subtitle: "5.3 Content Disclaimer",
        text: "The Company is not responsible for the accuracy, legality, or suitability of any User Content, job applications, or outcomes of hiring processes.",
      },
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      {
        text: "All intellectual property rights in the Platform, its design, features, and Company-generated Content are owned by the Company or its licensors. Users may not reproduce, modify, or exploit any such material without prior written consent.",
      },
      {
        text: "Trademarks, logos, and service marks of the Company may not be used without permission.",
      },
    ],
  },
  {
    title: "7. Third-Party Links and Integrations",
    content: [
      {
        text: "The Platform may contain links to third-party websites or services (e.g., external job boards or payment processors). The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of such third parties. Use of third-party services is at the User's own risk.",
      },
    ],
  },
  {
    title: "8. Privacy and Data Protection",
    content: [
      {
        text: "The Company processes personal data in accordance with its Privacy Policy (available on the Platform) and the UK Data Protection Act 2018 / UK GDPR. By using the Services, Users consent to such processing. Talent Partners and Candidates acknowledge that sharing data (e.g., resumes or contact details) occurs at their own risk, and the Company is not liable for misuse by other Users.",
      },
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      {
        subtitle: "9.1 Exclusion of Damages",
        text: "To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, arising from:\n(a) Use of or inability to use the Services;\n(b) Any conduct or Content of any third party (including hiring decisions, interview outcomes, or Community interactions);\n(c) Any Content obtained from the Services; or\n(d) Unauthorised access to or alteration of User transmissions or Content.",
      },
      {
        subtitle: "9.2 Platform Disclaimer",
        text: "The Company is not an employment agency, recruiter, or party to any employment contract. It provides a platform for connections only and makes no guarantees regarding job placements, candidate suitability, or employment outcomes. The Company bears no liability for disputes between Candidates and Talent Partners.",
      },
      {
        subtitle: "9.3 Liability Cap",
        text: "The Company's total liability for any claims arising out of or relating to this Agreement shall not exceed the amount paid by the User to the Company for the Services (if any) in the twelve (12) months preceding the claim.",
      },
    ],
  },
  {
    title: "10. Indemnification",
    content: [
      {
        subtitle: "10.1 User Indemnity",
        text: "The User agrees to indemnify, defend, and hold harmless the Indemnified Parties from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:\n(a) The User's use of the Services;\n(b) Any breach of this Agreement by the User;\n(c) Any violation of applicable laws or regulations (including employment or data protection laws) by the User;\n(d) Any claims made by third parties arising from the User's actions or omissions (including discriminatory practices or Community conduct).",
      },
      {
        subtitle: "10.2 Cooperation",
        text: "The User shall promptly notify the Company of any claim and cooperate in its defence. The Company reserves the right to assume exclusive control of the defence.",
      },
    ],
  },
  {
    title: "11. Termination",
    content: [
      {
        text: "The Company may suspend or terminate a User's access to the Services at any time, with or without notice, for breach of these Terms or other reasonable cause.",
      },
      {
        text: "Upon termination, the User's right to use the Services ceases immediately, but certain obligations (including indemnification and liability limitations) survive.",
      },
    ],
  },
  {
    title: "12. Modifications to the Agreement",
    content: [
      {
        text: "The Company reserves the right to modify this Agreement at any time. Changes will be effective immediately upon posting the revised Agreement on the Platform.",
      },
      {
        text: "Continued use of the Services after modifications constitutes acceptance of the updated terms. Users are responsible for reviewing the Agreement periodically.",
      },
    ],
  },
  {
    title: "13. Governing Law and Jurisdiction",
    content: [
      {
        text: "This Agreement shall be governed by and construed in accordance with the laws of England and Wales.",
      },
      {
        text: "Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      },
    ],
  },
  {
    title: "14. Miscellaneous",
    content: [
      {
        text: "14.1 If any provision is held invalid, the remainder shall continue in full force.\n14.2 This Agreement constitutes the entire understanding between the parties regarding the Services and supersedes prior agreements.\n14.3 The Company's failure to enforce any right does not constitute a waiver.\n14.4 Users may not assign this Agreement without the Company's consent; the Company may assign freely.",
      },
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <main
      className="min-h-screen py-20"
      style={{ background: 'linear-gradient(135deg, #dce8fb 0%, #eef2ff 45%, #dce8fb 100%)' }}
    >
      <div className={INNER}>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6c63ff] mb-2.5">
              Legal Agreement
            </p>
            <h1 className="text-[clamp(32px,5vw,56px)] font-black text-[#0d0d1a] tracking-tight leading-none mb-3">
              Terms & <span style={{ color: '#6c63ff' }}>Conditions</span>
            </h1>
            <p className="text-[#6b7280] text-[15px] max-w-md mx-auto">
              Effective from 1st January 2026
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#e4e6f0] rounded-2xl p-6 sm:p-8 mb-6"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
          >
            <p className="text-[#4a4a6a] leading-relaxed">
              This Terms and Conditions document (&ldquo;Agreement&rdquo;) is made between{" "}
              <span className="text-[#0d0d1a] font-medium">CPDASH.AI LTD</span>, a company registered in the
              United Kingdom with company number 16849312 and registered office at 3rd Floor, 86-90 Paul
              Street, London, England, United Kingdom, EC2A 4NE, and the user (&ldquo;User&rdquo;) who
              accesses or uses the services provided by the Company through the end-to-end career journey
              platform known as CPDASHAI AI-powered Career Health and Companion.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="bg-white border border-[#e4e6f0] rounded-2xl p-6 sm:p-8"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#0d0d1a] mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold" style={{ color: '#6c63ff' }}>
                          {item.subtitle}
                        </h3>
                      )}
                      <div className="text-[#4a4a6a] leading-relaxed whitespace-pre-line">
                        {item.text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <span key={i} className="text-[#0d0d1a] font-medium">
                                {part.slice(2, -2)}
                              </span>
                            );
                          }
                          return part;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#e4e6f0] rounded-2xl p-6 sm:p-8 mt-6 text-center"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
          >
            <p className="text-[#4a4a6a] leading-relaxed mb-4">
              By using the Platform, you acknowledge that you have read, understood, and agree to these
              Terms and Conditions.
            </p>
            <p className="text-[#6b7280] text-sm">
              To contact us, please fill out our{" "}
              <a href="/contact" style={{ color: '#6c63ff' }} className="hover:underline transition-colors">
                Contact us form
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
