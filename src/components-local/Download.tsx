import type { ReactNode } from 'react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface DownloadProps {
  INNER: string
  EYEBROW: string
  fadeUp: Variants
  fadeLeft: Variants
  fadeRight: Variants
  badgePop: Variants
  transition: Transition
  transitionSlow: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Static data ────────────────────────────────────────────── */
interface FeatureItem {
  cls: string
  title: string
  desc: string
  svg: ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    cls: 'bg-blue-500/10 text-blue-500',
    title: 'AI-Powered Analysis',
    desc: 'Get instant feedback on your CV and career profile',
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>,
  },
  {
    cls: 'bg-blue-500/10 text-blue-500',
    title: 'Interview Prep',
    desc: 'Practice with AI-driven mock interviews anytime',
    svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>,
  },
  {
    cls: 'bg-blue-500/10 text-blue-500',
    title: 'Job Matching',
    desc: 'Discover opportunities tailored to your skills',
    svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
  },
]

const SKILL_BARS = [
  { label: 'Technical',   pct: '82%', color: '#ff6b35', w: '82%' },
  { label: 'Leadership',  pct: '67%', color: '#ffbe50', w: '67%' },
  { label: 'Soft Skills', pct: '55%', color: '#ff5a82', w: '55%' },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Download({
  INNER,
  EYEBROW,
  fadeUp,
  fadeLeft,
  fadeRight,
  badgePop,
  transition,
  transitionSlow,
  viewportOnce,
}: DownloadProps) {
  return (
    <section
      id="download"
      className="py-20 relative overflow-hidden"
      style={{ background: '#eaecf8', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Glow accents — clipped by overflow-hidden */}
      <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: 40,  width: 300, height: 300, background: 'radial-gradient(circle, rgba(120,110,220,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className={`max-w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16`}>

        {/* ── Left content ── */}
        <motion.div
          className="flex-1"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={EYEBROW}>GET STARTED TODAY</p>

          <h2
            className="text-[clamp(28px,4vw,46px)] font-normal text-[#1a1a2e] mb-3.5 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Download the App
          </h2>

          <p className="text-[#6b6b8a] mb-7 max-w-[400px] leading-relaxed">
            Take your career journey anywhere. Access AI-powered insights, interview prep, and job matching right from your pocket.
          </p>

          {/* Feature list */}
          <ul className="list-none flex flex-col gap-[18px] mb-8">
            {FEATURES.map((item, i) => (
              <motion.li
                key={item.title}
                className="flex items-start gap-3.5"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ ...transition, delay: 0.35 + i * 0.1 }}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.cls}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {item.svg}
                  </svg>
                </span>
                <div>
                  <strong className="block text-sm text-[#1a1a2e]">{item.title}</strong>
                  <p className="text-[13px] text-[#7a7a99] m-0">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Store buttons */}
          <div className="flex gap-3 mb-5 flex-wrap">
            <a href="#" className="flex items-center gap-2.5 bg-blue-500 text-white no-underline px-[18px] py-2.5 rounded-xl hover:opacity-85 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[10px] opacity-60 m-0">Download on the</p>
                <p className="text-sm font-bold m-0" style={{ fontFamily: "'Syne', sans-serif" }}>App Store</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-2.5 bg-blue-500 text-white no-underline px-[18px] py-2.5 rounded-xl hover:opacity-85 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div>
                <p className="text-[10px] opacity-60 m-0">Get it on</p>
                <p className="text-sm font-bold m-0" style={{ fontFamily: "'Syne', sans-serif" }}>Google Play</p>
              </div>
            </a>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center gap-2 text-[13px] text-[#7a7a99]">
            <span className="text-[#d4900a] font-semibold">★★★★★ 4.9</span>
            <span>·</span>
            <span>50k+ Downloads</span>
          </div> */}
        </motion.div>

        {/* ── Phone mockup ── */}
        <motion.div
          className="shrink-0 relative hidden lg:block"
          aria-hidden="true"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transitionSlow}
          style={{ padding: '30px 40px' }}
        >
          {/* 98% badge */}
          <motion.div
            className="absolute top-1 right-1 bg-white rounded-xl px-4 py-2.5 text-center z-10"
            style={{ boxShadow: '0 8px 24px rgba(100,100,180,0.2)', transform: 'rotate(-4deg)' }}
            variants={badgePop}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...transitionSlow, delay: 1.0 }}
          >
            <span className="block text-[22px] font-extrabold text-[#ff6b35]" style={{ fontFamily: "'Syne', sans-serif" }}>98%</span>
            <span className="text-[11px] text-[#8888aa] font-semibold">Success Rate</span>
          </motion.div>

          {/* Phone frame */}
          <div
            className="w-[220px] h-[420px] bg-[#18182e] rounded-[36px] border-[6px] border-[#2a2a45] relative overflow-hidden"
            style={{ transform: 'rotate(8deg)', boxShadow: '24px 32px 64px rgba(60,60,140,0.22)' }}
          >
            {/* Notch */}
            <div className="h-9 bg-[#1a1a35] flex items-center justify-center">
              <div className="w-[60px] h-[14px] bg-[#0d0d1a] rounded-b-[10px]" />
            </div>

            {/* Screen */}
            <div className="flex flex-col gap-2.5 p-3.5 h-full">
              {/* Score card */}
              <div className="bg-[#1f1f3a] rounded-xl p-3">
                <p className="text-[9px] text-[#7a7aaa] uppercase tracking-widest m-0 mb-1">Match Score</p>
                <p className="text-lg font-bold text-[#f5f0e8] m-0" style={{ fontFamily: "'Syne', sans-serif" }}>94</p>
                <p className="text-[9px] text-[#ff6b35] m-0">↑ +12 this week</p>
              </div>

              {/* Skill bars */}
              <div className="bg-[#1f1f3a] rounded-xl p-3 flex flex-col gap-1.5">
                {SKILL_BARS.map((bar) => (
                  <div key={bar.label} className="flex flex-col gap-[3px]">
                    <div className="flex justify-between text-[8px] text-[#7a7aaa]">
                      <span>{bar.label}</span><span>{bar.pct}</span>
                    </div>
                    <div className="h-[5px] bg-[#2a2a45] rounded-full overflow-hidden">
                      <div style={{ width: bar.w, background: bar.color }} className="h-full rounded-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div
                className="rounded-xl h-8 flex items-center justify-center text-[11px] font-semibold text-[#0d0d1a]"
                style={{ background: 'linear-gradient(90deg, #ff6b35, #ffbe50)', fontFamily: "'Syne', sans-serif" }}
              >
                Start Interview Prep →
              </div>
            </div>
          </div>

          {/* 50k+ badge */}
          <motion.div
            className="absolute bottom-1 left-0 bg-white rounded-xl px-4 py-2.5 z-10"
            style={{ border: '1px solid #e0e0f0', boxShadow: '0 8px 24px rgba(100,100,180,0.15)', transform: 'rotate(2deg)' }}
            variants={badgePop}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...transitionSlow, delay: 1.15 }}
          >
            <span className="block text-base font-bold text-[#d4900a]" style={{ fontFamily: "'Syne', sans-serif" }}>50k+</span>
            <span className="text-[10px] text-[#9999bb]">Downloads</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
