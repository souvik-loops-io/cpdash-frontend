import { useEffect, useRef } from 'react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Carousel ───────────────────────────────────────────────── */
const CAROUSEL_ITEMS = [
  'CV Insights',
  'Compelling Cover Letters',
  'Standout Portfolio',
  'Interview Confidence',
  'Career Clarity',
  'Perfect Job Matches',
  'Skill Growth Plans',
]

function HeroCarousel() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const id = setInterval(() => {
      if (!el) return
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      } else {
        el.scrollLeft += 1
      }
    }, 30)
    return () => clearInterval(id)
  }, [])

  const items = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS]

  return (
    <div
      ref={ref}
      className="overflow-x-hidden flex gap-3 mb-10 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          aria-hidden={idx >= CAROUSEL_ITEMS.length}
          className="shrink-0 px-9 py-4 border-2 border-[#5b89ef] text-[#2563EB] font-normal rounded-[15px] text-[clamp(39px,3vw,36px)] leading-tight whitespace-nowrap cursor-pointer bg-transparent"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

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
      className="bg-linear-to-br from-[#eef0ff] to-[#f7f8ff] overflow-hidden relative w-full"
    >
      {/* Hero image — slides in from right, desktop only */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[45%] hidden lg:flex items-center justify-end pointer-events-none"
        aria-hidden="true"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={transitionSlow}
      >
        <img
          src="/images/hero/heroimg.png"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </motion.div>

      <div className={`${INNER} relative flex flex-col justify-center py-20 min-h-[520px]`}>
        <motion.h1
          className="text-[clamp(48px,7vw,80px)] text-[#1a1a2e] leading-[1.05] tracking-tight mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          Automate ideas into
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.15 }}
        >
          <HeroCarousel />
        </motion.div>

        <motion.a
          href="#signup"
          className={`${BTN_PRI} px-7 py-3.5 text-[15px] rounded-xl self-start`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...transition, delay: 0.3 }}
        >
          Get started — it's free
        </motion.a>
      </div>
    </section>
  )
}
