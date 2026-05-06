import React from 'react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface PricingProps {
  INNER: string
  EYEBROW: string
  SECTION_H: string
  BTN_PRI: string
  BTN_OUT: string
  fadeUp: Variants
  stagger: Variants
  scaleIn: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Partner data ───────────────────────────────────────────── */
const PARTNERS = [
  {
    role: 'Recruiter',
    imgSrc: '/images/talent/talent1.png',
    imgClass: 'absolute inset-0 w-full -top-[44%] h-full object-contain object-center pointer-events-none select-none z-0',
    imgStyle: { opacity: 0.6, transform: 'scale(1.3)', transformOrigin: 'center' },
    imgBottomClass: 'absolute -bottom-[10%] left-0 w-[100%] h-[55%] object-contain object-bottom pointer-events-none select-none z-0',
    imgBottomStyle: { opacity: 0.45, transform: 'translateX(-50%) scaleX(-1)' },
    desc: 'Access our talent pool to find the perfect candidates for your clients.Streamline your workflow from discovery to placement with deep Al behavioral intelligence and Retention-First Recruiting.',
    features: [
      'AI-matched candidate profiles',
      'Skill verification reports',
      'Interview readiness scores',
      'Direct talent pipeline access',
      'Placement success analytics',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    role: 'HR',
    imgSrc: '/images/talent/talent2.png',
    imgClass: 'absolute -top-[20%] -right-[25%] h-full w-[85%] object-contain object-right pointer-events-none select-none z-0',
    imgStyle: { opacity: 0.55 },
    desc: "Build and retain your dream team with the world${apos}s first Al-powered Workforce Intelligence. Move beyond traditional HR with real-time engagement, behavior analytics, and Real-Time Workforce Heatmaps.",
    features: [
      'Bulk candidate screening',
      'Team fit assessments',
      'Automated shortlisting',
      'HR dashboard & analytics',
      'ATS integration support',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    role: 'Educational Institution',
    imgSrc: '/images/talent/talent3.png',
    imgClass: 'absolute -top-[10%] left-0 right-0 w-full h-[58%] object-contain object-top pointer-events-none select-none z-0',
    imgStyle: { opacity: 0.55 },
    desc: "Empower your students and bridge the gap between academia and industry. Leverage the world’s first AI-powered Student Success Intelligence to track readiness, wellbeing, and career outcomes.",
    features: [
      'Student placement tracking',
      'Industry-aligned curriculum insights',
      'Campus recruitment portal',
      'Career readiness reports',
      'Alumni network access',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

const STATS = [
  { value: '10,000+', label: 'Qualified Candidates' },
  { value: '500+',    label: 'Partner Companies'    },
  { value: '95%',     label: 'Placement Success'    },
  { value: '30 Days', label: 'Average Time to Hire' },
]


/* ── Component ──────────────────────────────────────────────── */
export default function Pricing({
  INNER,
  EYEBROW,
  fadeUp,
  stagger,
  scaleIn,
  transition,
  viewportOnce,
}: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #eef2ff 50%, #f3f0ff 100%)' }}
    >
      {/* Soft bg blob */}
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      <div className={`${INNER} relative z-10`}>

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          {/* Eyebrow with handshake icon */}
          <div className="inline-flex items-center gap-2 mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
            <p className={`${EYEBROW} !mb-0`}>PARTNER WITH US</p>
          </div>

          <h2 className="text-[clamp(32px,4.5vw,52px)] font-normal text-[#1a1a2e] mb-4 leading-tight">
            Become a Talent Partner
          </h2>

          <p className="text-[#8888aa] text-[15px] max-w-[480px] mx-auto leading-relaxed">
            Discover the perfect partnership opportunity for your organization.
            Choose the offer that fits your needs.
          </p>
        </motion.div>

        {/* Partner cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PARTNERS.map((p) => (
            <motion.div
              key={p.role}
              className="relative rounded-3xl overflow-hidden p-7 flex flex-col"
              style={{
                background: 'linear-gradient(145deg, #1e40af 0%, #2563eb 45%, #3b82f6 100%)',
                boxShadow: '0 12px 40px rgba(37,99,235,0.25), 0 2px 8px rgba(0,0,0,0.08)',
                minHeight: 550,
              }}
              variants={scaleIn}
              transition={transition}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(37,99,235,0.30)' }}
            >
              <motion.img
                src={p.imgSrc}
                alt=""
                className={p.imgClass}
                style={p.imgStyle}
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />

              {'imgBottomClass' in p && (
                <motion.img
                  src={p.imgSrc}
                  alt=""
                  className={p.imgBottomClass as string}
                  style={p.imgBottomStyle as React.CSSProperties}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                />
              )}

              <div
                className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                {p.icon}
              </div>

              <h3 className="relative z-10 text-[22px] font-bold text-white mb-2 leading-snug">
                {p.role}
              </h3>

              <p className="relative z-10 text-[13px] text-white/75 mb-6 leading-relaxed">
                {p.desc}
              </p>

              <ul className="relative z-10 flex flex-col gap-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/85">
                    <span
                      className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.25)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="relative z-10 w-full py-3 rounded-2xl text-[14px] font-semibold text-[#1e40af] transition-all hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                style={{ background: 'white' }}
              >
                Book a Demo
              </button>
            </motion.div>
          ))}


        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center px-4 py-6 rounded-2xl border border-white/70 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.55)', boxShadow: '0 2px 16px rgba(100,120,255,0.08)' }}
              variants={fadeUp}
              transition={{ ...transition, delay: i * 0.08 }}
            >
              <span className="text-[clamp(28px,4vw,40px)] font-normal text-[#1e40af] leading-none mb-1">
                {s.value}
              </span>
              <span className="text-[13px] text-[#8888aa] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
