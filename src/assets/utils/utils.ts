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
export const BTN_PRI = 'inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#6c63ff] text-white rounded-lg transition-colors no-underline'
export const BTN_OUT = 'inline-flex items-center justify-center gap-2 text-sm font-semibold border-2 border-[#6c63ff] text-[#6c63ff] rounded-lg hover:bg-[#6c63ff] hover:text-white transition-colors no-underline'
export const EYEBROW = 'text-[11px] font-bold tracking-[0.12em] uppercase text-[#6c63ff] mb-2.5'
export const INNER = 'max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10'
export const SECTION_H = 'text-[clamp(26px,4vw,42px)] text-[#1a1a2e] mb-2.5'



export const FAQ_ITEMS = [
  { q: 'How does the AI-powered CV analysis work?', open: true, a: "Our advanced AI analyzes your CV against thousands of successful resumes in your industry, checking for formatting, keywords, achievements, and ATS compatibility. You'll receive instant, actionable feedback to improve your chances of landing interviews." },
  { q: 'What makes your interview preparation different?', a: 'Our AI simulates real interview scenarios with adaptive follow-up questions, giving you honest real-time feedback on your answers, tone, and structure.' },
  { q: 'How accurate is the job matching algorithm?', a: 'Our matching engine achieves a 98% relevance rate by combining skill vectors, location, salary range, and culture-fit signals from your profile.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Cancel at any time from your account settings — no questions asked, no hidden fees.' },
  { q: 'Do you offer refunds?', a: "We offer a full refund within 7 days of purchase if you're not satisfied." },
  { q: 'Is my data secure and private?', a: 'Absolutely. All data is encrypted at rest and in transit. We never sell your data and comply fully with GDPR and CCPA.' },
]

export const FOOTER_COLS = [
  { heading: 'PRODUCT', links: ['Home', 'Features', 'How It Works', 'Contact Sales'] },
  { heading: 'RESOURCES', links: ['Marketplace', 'Tutorials', 'Blog', 'Discord'] },
  { heading: 'USE CASES', links: ['Ecommerce', 'Creative and Tech', 'Portfolio'] },
  { heading: 'PLANS', links: ['Pricing'] },
]


