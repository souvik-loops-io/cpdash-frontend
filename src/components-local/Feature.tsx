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
  INNER: string
  EYEBROW: string
  SECTION_H: string
  features: FeatureItem[]
  fadeUp: Variants
  stagger: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Card meta ───────────────────────────────────────────────── */
const CARD_META: { label: string; Icon: LucideIcon }[] = [
  { label: 'Smart Analysis',       Icon: Sparkles   },
  { label: 'AI Powered',           Icon: FileText   },
  { label: 'Intelligent Matching', Icon: Target     },
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
    <section
      id="features"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e8e2f8 0%, #ede8fb 50%, #e4dff5 100%)' }}
    >
      {/* Full-section background image */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/images/others/platform_module.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className={`${INNER} relative z-10`}>

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={EYEBROW}>PLATFORM OVERVIEW</p>
          <h2 className={SECTION_H}>Powerful Features for Your Success</h2>
          <p className="text-[#8888aa] text-[14px] mt-2">
            Clarity Confidence and continuous improvement
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((f, i) => {
            const { label, Icon } = CARD_META[i] ?? { label: '', Icon: ArrowRight }

            return (
              <motion.div
                key={f.tag}
                className="rounded-2xl p-6 border border-white/60 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-200/40"
                style={{ background: 'rgba(255,255,255,0.45)' }}
                variants={fadeUp}
                transition={transition}
              >
                <p className="mb-2 text-[11px] text-[#8888aa] font-medium tracking-wide uppercase">
                  {label}
                </p>

                <h3 className="text-[1.6rem] font-normal text-[#1a1a2e] mb-3 leading-snug">
                  {f.title}
                </h3>

                <p className="text-[13px] text-[#666688] mb-5 leading-relaxed">{f.desc}</p>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-[13px] text-[#6c63ff] no-underline hover:underline">
                    {f.cta} →
                  </a>
                  <Icon size={16} className="text-[#2563eb]" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
