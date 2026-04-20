import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface HowItWorksProps {
  INNER: string
  fadeUp: Variants
  fadeLeft: Variants
  stagger: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── AI Team data ───────────────────────────────────────────── */
const TEAM = [
  {
    name: 'RAY',
    nameColor: '#1a1a2e',
    accentColor: '#22d3ee',
    avatarBg: '#e0f9ff',
    initials: 'R',
    imgSrc: '/images/work/RAY.png',
    cardBg: 'rgba(255,255,255,0.18)',
    large: false,
    cardDesc: 'Your AI career coach for precise strategy and direction.',
    handSrc: '/images/work/hand/ray_hand.png',
    bulletDesc: 'Conflict and Communication Questions\nCareer Readiness Probability Engine\nSkill-to-Outcome Mapping\nAdaptive Career Strategy Engine',
  },
  {
    name: 'CLARA',
    nameColor: '#7c3aed',
    accentColor: '#a78bfa',
    avatarBg: '#ede9fe',
    initials: 'C',
    imgSrc: '/images/work/CLARA.png',
    cardBg: 'rgba(237,233,254,0.22)',
    large: true,
    cardDesc: 'Your AI companion for career clarity, confidence, and emotional support.',
    handSrc: '/images/work/hand/clara_hand.png',
    bulletDesc: 'Emotional Intelligence Coaching\nCareer Confidence Builder\nPersonality-to-Role Matching\nMindset & Resilience Toolkit',
  },
  {
    name: 'OLIVER',
    nameColor: '#d97706',
    accentColor: '#f59e0b',
    avatarBg: '#fef3c7',
    initials: 'O',
    imgSrc: '/images/work/oliver.png',
    cardBg: 'rgba(255,255,255,0.18)',
    large: false,
    cardDesc: 'Your mentor for skill growth, real-world project simulations, and professional guidance.',
    handSrc: '/images/work/hand/oliver_hand.png',
    bulletDesc: 'Real-World Project Simulations\nSkill Gap Identification Engine\nProfessional Network Strategy\nIndustry Readiness Assessment',
  },
]

/* ── Avatar ─────────────────────────────────────────────────── */
function Avatar({
  imgSrc,
  initials,
  avatarBg,
  size = 56,
}: {
  imgSrc: string
  initials: string
  avatarBg: string
  size?: number
}) {
  return (
    <div
      className="rounded-full overflow-hidden shrink-0"
      style={{ width: size, height: size, background: avatarBg }}
    >
      <img
        src={imgSrc}
        alt={initials}
        className="w-full h-full object-cover object-top"
      />
    </div>
  )
}

/* ── Component ──────────────────────────────────────────────── */
export default function HowItWorks({
  INNER,
  fadeUp,
  stagger,
  transition,
  viewportOnce,
}: HowItWorksProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = TEAM[selectedIndex]
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSelectedIndex(prev => (prev + 1) % TEAM.length)
    }, 3000)
  }, [])

  useEffect(() => {
    startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startInterval])

  const handleSelect = (i: number) => {
    setSelectedIndex(i)
    startInterval()
  }

  return (
    <section
      id="how-it-works"
      className="py-20 overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #eaf1ff 60%, #f0ebff 100%)' }}
    >
      {/* Full-section background image */}
      <div className="absolute top-40 inset-0 pointer-events-none select-none">
        <motion.img
          src="/images/others/bg_hiw.png"
          alt=""
          className="w-full h-[70%] object-cover object-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
      </div>

      <div className={`${INNER} relative z-10 flex flex-col items-center`}>

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <h2 className="text-[clamp(36px,6vw,72px)] font-bold text-[#1a1a2e] tracking-tight leading-none mb-3">
            HOW IT WORKS
          </h2>
          <p className="text-black text-[14px] max-w-xs mx-auto leading-relaxed">
            Everything you need to land your dream job<br />with your well-being protected.
          </p>
        </motion.div>

        {/* Glass container */}
        <motion.div
          className="w-full rounded-3xl border border-white/50 backdrop-blur-md p-4 sm:p-8 shadow-xl shadow-blue-100/40"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          {/* Sub-heading */}
          <motion.h3
            className="text-[clamp(20px,3vw,32px)] font-semibold text-[#1a1a2e] mb-8 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...transition, delay: 0.1 }}
          >
            Your AI Career Dream Team
          </motion.h3>

          {/* Three avatar cards — items-end so CLARA (taller) rises above */}
          <motion.div
            className="flex gap-5 mb-8 flex-wrap justify-center items-end"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {TEAM.map((member, i) => {
              const isActive = selectedIndex === i
              const avatarSize = member.large ? 110 : 88
              const cardPadding = member.large ? 'px-8 pt-8 pb-6' : 'px-6 pt-6 pb-5'

              return (
                <motion.div
                  key={member.name}
                  onClick={() => handleSelect(i)}
                  className={`${cardPadding} flex flex-col items-center rounded-3xl backdrop-blur-sm border transition-all cursor-pointer select-none w-full max-w-[280px] ${member.large ? 'sm:w-[240px]' : 'sm:w-[200px]'}`}
                  style={{
                    background: member.cardBg,
                    borderColor: isActive ? member.accentColor : 'rgba(255,255,255,0.7)',
                    boxShadow: isActive
                      ? `0 0 0 1.5px ${member.accentColor}, 0 4px 24px ${member.accentColor}30`
                      : '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                  variants={fadeUp}
                  transition={transition}
                  whileHover={{ y: -4, boxShadow: `0 8px 24px ${member.accentColor}25` }}
                >
                  <Avatar
                    imgSrc={member.imgSrc}
                    initials={member.initials}
                    avatarBg={member.avatarBg}
                    size={avatarSize}
                  />

                  <p className="mt-3 text-[14px] text-[#555] font-normal">
                    Meet{' '}
                    <span className="font-bold" style={{ color: member.nameColor }}>
                      {member.name}
                    </span>
                  </p>

                  <p className="mt-2 text-[12px] text-[#888] text-center leading-relaxed">
                    {member.cardDesc}
                  </p>

                  {/* Active dot */}
                  <span
                    className="mt-4 w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? member.accentColor : 'rgba(0,0,0,0.12)',
                      transform: isActive ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom row — hand + detail card */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 w-full rounded-3xl border border-white/60 backdrop-blur-sm overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.14)', boxShadow: '0 8px 40px rgba(100,120,255,0.10), 0 2px 8px rgba(0,0,0,0.04)' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...transition, delay: 0.2 }}
          >
            {/* Hand holding phone image — desktop only */}
            <div className="hidden lg:flex items-end justify-center h-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.name + '-hand'}
                  src={selected.handSrc}
                  alt={`${selected.name} app`}
                  className="h-full w-auto object-contain object-bottom"
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -48 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </AnimatePresence>
            </div>

            {/* Detail panel */}
            <div className="flex items-center justify-center p-4 sm:p-5 lg:h-[420px] lg:p-0">
              <div
                className="relative w-full lg:w-[75%] rounded-3xl shadow-xl shadow-black/10 border border-white/30 backdrop-blur-sm overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.16)', minHeight: 380 }}
              >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.name}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-7"
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -48 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Avatar
                    imgSrc={selected.imgSrc}
                    initials={selected.initials}
                    avatarBg={selected.avatarBg}
                    size={90}
                  />

                  <h4 className="mt-3 text-[20px] font-semibold text-[#1a1a2e]">
                    Meet{' '}
                    <span className="italic font-bold" style={{ color: selected.accentColor }}>
                      {selected.name}
                    </span>
                  </h4>

                  <p className="mt-1 mb-4 text-[12px] text-[#888] leading-relaxed max-w-[280px]">
                    {selected.cardDesc}
                  </p>

                  <ul className="w-full flex flex-col gap-2 mb-5 text-left">
                    {selected.bulletDesc.split('\n').map((line: string, i: number) => (
                      <li key={i} className="flex items-center gap-2.5 text-[12px] text-[#444]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: selected.accentColor }} />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <button
                    className=" cursor-pointer w-full text-white text-[13px] font-semibold rounded-2xl py-3 transition-opacity hover:opacity-90"
                    style={{ background: selected.accentColor }}
                  >
                    Start With {selected.name}
                  </button>
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
