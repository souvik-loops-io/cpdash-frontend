import { ArrowRight, FileText, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
export interface FeatureItem {
  tag: string
  title: string
  desc: string
  cta: string
}

interface FeatureProps {
  /* layout */
  INNER: string
  EYEBROW: string
  SECTION_H: string
  /* data */
  features: FeatureItem[]
  /* animation */
  fadeUp: Variants
  stagger: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Card meta (label + icon) keyed by position ─────────────── */
const CARD_META: { label: string; Icon: LucideIcon }[] = [
  { label: 'Smart Analysis',       Icon: Sparkles  },
  { label: 'AI Powered',           Icon: FileText  },
  { label: 'Intelligent Matching', Icon: Target    },
  { label: 'Career Growth',        Icon: ArrowRight },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Feature({
  INNER,
  EYEBROW,
  SECTION_H,
  features,
  fadeUp,
  stagger,
  transition,
  viewportOnce,
}: FeatureProps) {
  return (
    <section id="features" className="py-20 overflow-hidden bg-white">
      <div className={INNER}>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={EYEBROW}>PLATFORM OVERVIEW</p>
          <h2 className={SECTION_H}>Powerful Features for Your Success</h2>
          <p className="text-[#8888aa] mb-9">
            Everything you need to land your dream job, from CV optimization to interview preparation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((f, i) => {
            const { label, Icon } = CARD_META[i] ?? { label: '', Icon: ArrowRight }
            const isGradient = i === 0 || i === 2

            return (
              <motion.div
                key={f.tag}
                className={`${isGradient ? 'bg-linear-to-b from-[#ede9f8] to-[#ddd5f0] border-[#d5cdf0]' : 'bg-white border-[#e4e6f0]'} border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}
                variants={fadeUp}
                transition={transition}
              >
                <p className="mb-2 text-[12px]">{label}</p>

                <h3 className="text-[2rem] font-normal text-[#1a1a2e] mb-3 leading-snug">
                  {f.title}
                </h3>

                <p className="text-[14px] text-[#666688] mb-5">{f.desc}</p>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-normal text-[#6c63ff] no-underline hover:underline">
                    {f.cta} →
                  </a>
                  <Icon className="text-[#2563eb]" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
