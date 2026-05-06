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
      // className="relative bg-white overflow-hidden w-full min-h-[520px] flex items-center"
      className="relative bg-white overflow-hidden w-full"
      style={{ height: '520px' }} 
    >
      {/* 3D spiral — fixed size, no responsive shrinking */}
      <motion.div
        className="absolute right-0 top-0 bottom-0"
        style={{ width: '70%', minWidth: '600px' }}
        aria-hidden="true"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={transitionSlow}
      >
        <motion.img
          src="/images/hero/hero_module.png"
          alt=""
          className="h-full w-full object-contain object-right"
          animate={{ y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content */}
      <div className={`${INNER} relative z-10 flex flex-col items-center text-center py-24 w-full`}>

        {/* Main title — fixed size, no clamping */}
        <motion.h1
          className="font-black text-blue-600 leading-none tracking-tighter mb-4
          text-[52px] md:text-[length:clamp(100px,12vw,220px)]"
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
          className="text-[#555] text-[25px] text-[#000000] font-normal mb-8"
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
          // style={{backgroundColor:'#2563EB'}}
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
