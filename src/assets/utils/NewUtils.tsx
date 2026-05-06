import { type Transition, type Variants } from 'motion/react'


export const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
export const fadeDown: Variants = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }
export const fadeLeft: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
export const fadeRight: Variants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
export const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }
export const badgePop: Variants = { hidden: { opacity: 0, scale: 0.5, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 10 } } }
export const stagger: Variants = { visible: { transition: { staggerChildren: 0.12 } } }

export const transition: Transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
export const transitionSlow: Transition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
export const viewportOnce = { once: true, margin: '-80px' } as const

/* ── Shared pieces ─────────────────────────────────────────── */
export const NAV_LINK = 'text-sm font-medium text-[#4a4a6a] px-3.5 py-1.5 rounded-lg hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-colors no-underline'
export const BTN_PRI = 'inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#2563EB] text-white rounded-lg transition-colors no-underline'
export const BTN_OUT = 'inline-flex items-center justify-center gap-2 text-sm font-semibold border-2 border-[#6c63ff] text-[#6c63ff] rounded-lg hover:bg-[#6c63ff] hover:text-white transition-colors no-underline'
export const EYEBROW = 'text-[11px] font-bold tracking-[0.12em] uppercase text-[#6c63ff] mb-2.5'
export const INNER = 'max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10'
export const SECTION_H = 'text-[clamp(26px,4vw,42px)] text-[#1a1a2e] mb-2.5'



export const FAQ_ITEMS = [
  { q: 'What is CPDASHAI?', a: 'CPDASHAI is an AI-powered Career Health System and Companion that helps you land your dream job with precision. It combines CV analysis, interview preparation, job matching, and personalised career coaching in one platform.' },
  { q: 'How does CPDASHAI work?', open: true, a: "Our advanced AI analyzes your CV against thousands of successful resumes in your industry, checking for formatting, keywords, achievements, and ATS compatibility. You'll receive instant, actionable feedback to improve your chances of landing interviews." },
  { q: 'How does AI analysis work?', a: 'Our AI scans your profile and CV using natural language processing to extract skills, experience, and achievements. It then benchmarks them against industry standards and live job requirements to surface precise gaps and opportunities.' },
  { q: 'What makes your interview preparation different?', a: 'Our AI simulates real interview scenarios with adaptive follow-up questions, giving you honest real-time feedback on your answers, tone, and structure — so you walk in confident every time.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Cancel at any time from your account settings — no questions asked, no hidden fees.' },
  { q: 'Is my data secure and private?', a: 'Absolutely. All data is encrypted at rest and in transit. We never sell your data and comply fully with GDPR and CCPA.' },
]

export const FOOTER_COLS = [
  { heading: 'PRODUCT', links: ['Home', 'Features', 'How It Works', 'Contact Sales'] },
  { heading: 'RESOURCES', links: ['Marketplace', 'Tutorials', 'Blog', 'Discord'] },
  { heading: 'USE CASES', links: ['Ecommerce', 'Creative and Tech', 'Portfolio'] },
  { heading: 'PLANS', links: ['Pricing'] },
]


export const SOCIAL_ICONS = 
[
    {
      name: 'discord',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      ),
    },
    {
      name: 'youtube',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'x',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ),
    },
    {
      name: 'linkedin',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'instagram',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
  ]