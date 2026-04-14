import { motion, type Transition, type Variants } from 'motion/react'

/* ── Props ──────────────────────────────────────────────────── */
interface HeroSectionProps {
  INNER: string
  BTN_PRI: string
  fadeUp: Variants
  fadeRight: Variants
  transition: Transition
  transitionSlow: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Component ──────────────────────────────────────────────── */
export default function HeroSection({
  INNER,
  BTN_PRI,
  fadeUp,
  fadeRight,
  transition,
  transitionSlow,
  viewportOnce,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden w-full min-h-[520px] flex items-center"
    >
      {/* 3D spiral — slides in from right */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[55%] pointer-events-none"
        aria-hidden="true"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={transitionSlow}
      >
        <img
          src="/images/hero/hero_module.png"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </motion.div>

      {/* Content */}
      <div className={`${INNER} relative z-10 flex flex-col items-center text-center py-24 w-full`}>

        {/* Main title */}
        <motion.h1
          className="font-black text-blue-600 leading-none tracking-tighter mb-4"
          style={{ fontSize: 'clamp(64px, 12vw, 140px)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          CPDASHAI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#555] text-[15px] font-normal mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.12 }}
        >
          AI-powered Career Health System and Companion
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#signup"
          className={`${BTN_PRI} px-6 py-2.5 text-[14px] rounded-lg`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.24 }}
        >
          Get started
        </motion.a>
      </div>
    </section>
  )
}
