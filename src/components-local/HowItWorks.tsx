import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface HowItWorksProps {
  /* layout */
  INNER: string
  /* animation */
  fadeUp: Variants
  fadeLeft: Variants
  stagger: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Steps data ─────────────────────────────────────────────── */
const STEPS = [
  'Upload Your CV & Profile',
  'Get AI-Powered Insights',
  'Match with Opportunities',
  'Land Your Dream Job',
]

/* ── Component ──────────────────────────────────────────────── */
export default function HowItWorks({
  INNER,
  fadeUp,
  fadeLeft,
  stagger,
  transition,
  viewportOnce,
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-[#f8f9fc] py-20 overflow-hidden relative">

      {/* Heading */}
      <div className={INNER}>
        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <h2 className="text-[clamp(40px,6vw,80px)] text-[#1a1a2e] tracking-tight leading-none mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-gray-500 mb-9 text-[12px] max-w-md text-center">
            Everything you need to land your dream job, from CV optimization to interview preparation.
          </p>
        </motion.div>
      </div>

      {/* Steps + background image */}
      <div className={`${INNER} relative flex items-center min-h-[600px]`}>

        {/* Background image — desktop only */}
        <div
          className="absolute inset-0 xl:block hidden pointer-events-none z-0"
          style={{
            backgroundImage: "url('/images/howitworks.png')",
            backgroundSize: 'auto 90%',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Content */}
        <div className="relative z-10 ml-auto w-full xl:w-[55%] pl-0 xl:pl-20">
          <motion.ol
            className="list-none flex flex-col gap-3 mb-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STEPS.map((label, i) => (
              <motion.li
                key={label}
                className="flex items-center gap-4 bg-transparent border border-black rounded-2xl px-6 py-5 transition-all w-[90%]"
                variants={fadeLeft}
                transition={transition}
              >
                <span className="text-[clamp(18px,2.5vw,28px)] text-[#1a1a2e] tracking-tight">
                  0{i + 1} {label.toUpperCase()}
                </span>
              </motion.li>
            ))}
          </motion.ol>

          <a
            href="#signup"
            className="px-10 py-5 w-[90%] flex items-center justify-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] rounded-3xl transition-colors tracking-tight"
          >
            <div className="flex justify-between w-full">
              <p className="text-white text-[clamp(40px,2.5vw,26px)] font-normal">GET STARTED</p>
              <span className="text-white text-[clamp(40px,2.5vw,26px)] font-normal">→</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
