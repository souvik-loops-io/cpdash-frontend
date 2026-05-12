import { motion } from "motion/react"
import { INNER } from "../assets/utils/NewUtils"

const sections: { title: string; content: { subtitle?: string; text: string }[] }[] = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you join our waitlist or contact us, we collect personal information you voluntarily provide, including your name, email address, and any other details you choose to share through our forms.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "We may automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behaviour on our site. We use cookies and similar tracking technologies (such as Google Tag Manager) to collect this data.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect for the following purposes:",
      },
      {
        text: "- To manage your waitlist registration and communicate updates about CPDash.ai\n- To send you relevant news, product updates, and early access invitations\n- To respond to your enquiries and provide customer support\n- To analyse website usage and improve our services\n- To comply with legal obligations and protect our rights",
      },
    ],
  },
  {
    title: "3. Email Marketing",
    content: [
      {
        text: "We use Brevo (formerly Sendinblue) as our email marketing platform. By joining our waitlist, you consent to receiving email communications from us. Each email includes an unsubscribe link, allowing you to opt out at any time. Your email data is stored securely on Brevo's servers in compliance with GDPR.",
      },
    ],
  },
  {
    title: "4. Data Sharing and Disclosure",
    content: [
      {
        text: "We do not sell, trade, or rent your personal information to third parties. We may share your data with:",
      },
      {
        text: "- **Service Providers**: Trusted third-party services that help us operate our platform (e.g., Brevo for email, Vercel for hosting)\n- **Legal Requirements**: When required by law, regulation, or legal process\n- **Business Transfers**: In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction",
      },
    ],
  },
  {
    title: "5. Data Security",
    content: [
      {
        text: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "6. Your Rights (GDPR)",
    content: [
      {
        text: "If you are located in the European Economic Area (EEA) or the United Kingdom, you have certain rights under the General Data Protection Regulation (GDPR), including:",
      },
      {
        text: "- **Right of Access**: Request a copy of the personal data we hold about you\n- **Right to Rectification**: Request correction of inaccurate or incomplete data\n- **Right to Erasure**: Request deletion of your personal data\n- **Right to Restrict Processing**: Request that we limit how we use your data\n- **Right to Data Portability**: Request your data in a structured, machine-readable format\n- **Right to Object**: Object to the processing of your personal data\n- **Right to Withdraw Consent**: Withdraw consent at any time where processing is based on consent",
      },
      {
        text: "To exercise any of these rights, please contact us at contact@cpdash.ai. We will respond to your request within 30 days.",
      },
    ],
  },
  {
    title: "7. Cookies and Tracking",
    content: [
      {
        text: "We use cookies and similar technologies to enhance your experience on our website. These include:",
      },
      {
        text: "- **Essential Cookies**: Required for the website to function properly\n- **Analytics Cookies**: Help us understand how visitors interact with our website (e.g., Google Analytics via Google Tag Manager)\n- **Marketing Cookies**: Used to deliver relevant content and measure campaign effectiveness",
      },
      {
        text: "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.",
      },
    ],
  },
  {
    title: "8. Data Retention",
    content: [
      {
        text: "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Waitlist data will be retained until the platform launches and you create an account, or until you request deletion.",
      },
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      {
        text: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly.",
      },
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page and updating the \"Last updated\" date. We encourage you to review this page periodically.",
      },
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      {
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      },
      {
        text: "**CPDash.ai**\nLondon, United Kingdom\nEmail: contact@cpdash.ai",
      },
    ],
  },
]

export default function PrivacyPolicy() {
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
              Your Privacy Matters
            </p>
            <h1 className="text-[clamp(32px,5vw,56px)] font-black text-[#0d0d1a] tracking-tight leading-none mb-3">
              Privacy <span style={{ color: '#6c63ff' }}>Policy</span>
            </h1>
            <p className="text-[#6b7280] text-[15px] max-w-md mx-auto">
              Last updated: March 4, 2026
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
              At CPDash.ai, we are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, store,
              and protect your data when you interact with our website and services. By using our
              platform, you agree to the practices described in this policy.
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
        </div>
      </div>
    </main>
  )
}
