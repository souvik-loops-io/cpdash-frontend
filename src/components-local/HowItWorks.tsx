import { motion, type Transition, type Variants } from 'motion/react'

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
    color: '#4f8ef7',
    bg: '#e8f0fe',
    initials: 'R',
    desc: 'Confirms Clear Communication & Questions\nCareer Roadblocks: Identify & plan your path\nSkill to Interview Mastery\nCategory & Career Strategy Expert',
  },
  {
    name: 'CLARA',
    color: '#a78bfa',
    bg: '#ede9fe',
    initials: 'C',
    desc: null,
  },
  {
    name: 'OLIVER',
    color: '#34d399',
    bg: '#d1fae5',
    initials: 'O',
    desc: null,
  },
]

function Avatar({ initials, color, bg, size = 56 }: { initials: string; color: string; bg: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold shrink-0"
      style={{ width: size, height: size, background: bg, color, fontSize: size * 0.38 }}
    >
      {initials}
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
  const ray = TEAM[0]

  return (
    <section
      id="how-it-works"
      className="py-20 overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #eaf1ff 60%, #f0ebff 100%)' }}
    >
      <div className={`${INNER} flex flex-col items-center`}>

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
          <p className="text-gray-400 text-[14px] max-w-xs mx-auto leading-relaxed">
            Everything you need to land your dream job<br />with your well-being protected.
          </p>
        </motion.div>


        <motion.div
          className="w-full rounded-3xl border border-white/50 backdrop-blur-md p-8 shadow-xl shadow-blue-100/40"
          style={{ background: 'rgba(255,255,255,0.35)' }}
        >
        {/* Sub-heading */}
        <motion.h3
          className="text-[clamp(20px,3vw,32px)] font-semibold text-[#1a1a2e] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.1 }}
        >
          Your AI Career Dream Team
        </motion.h3>

        {/* Three avatar cards row */}
        <motion.div
          className="flex gap-4 mb-8 flex-wrap justify-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl px-6 py-4 shadow-sm min-w-[120px]"
              variants={fadeUp}
              transition={transition}
            >
              <Avatar initials={member.initials} color={member.color} bg={member.bg} size={52} />
              <span className="text-[12px] font-semibold" style={{ color: member.color }}>
                Meet {member.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row — phone + detail card */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 w-full items-end justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.2 }}
        >

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end max-w-[280px] mx-auto lg:mx-0">
            <div
              className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white"
              style={{ width: 200, height: 380, background: 'linear-gradient(160deg,#eaf1ff,#f5f0ff)' }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span className="text-[9px] font-semibold text-[#1a1a2e]">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-1.5 rounded-sm bg-[#1a1a2e]/40" />
                  <div className="w-1 h-1 rounded-full bg-[#1a1a2e]/40" />
                </div>
              </div>
              {/* App screen content */}
              <div className="flex flex-col items-center gap-3 px-4 pt-4">
                <Avatar initials={ray.initials} color={ray.color} bg={ray.bg} size={56} />
                <span className="text-[11px] font-bold text-[#4f8ef7]">Meet RAY</span>
                <div className="w-full flex flex-col gap-2">
                  {['CV Analysis', 'Job Matching', 'Interview Prep'].map(item => (
                    <div key={item} className="bg-white/80 rounded-xl px-3 py-2 text-[9px] text-[#555] font-medium shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="w-full mt-1 bg-[#4f8ef7] text-white text-[9px] font-bold rounded-xl py-2 text-center">
                  Chat with RAY
                </div>
              </div>
            </div>
          </div>

          {/* RAY detail card */}
          <div className="flex-1 max-w-[360px] mx-auto lg:mx-0">
            <div className="bg-white/80 backdrop-blur-sm border border-white/90 rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={ray.initials} color={ray.color} bg={ray.bg} size={48} />
                <span className="text-[18px] font-bold text-[#4f8ef7]">Meet RAY</span>
              </div>
              <ul className="flex flex-col gap-2 mb-5">
                {ray.desc.split('\n').map((line, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#444]">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#4f8ef7] shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#4f8ef7] hover:bg-[#3b7de8] text-white text-[13px] font-semibold rounded-xl py-3 transition-colors">
                Chat with RAY
              </button>
            </div>
          </div>

        </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
