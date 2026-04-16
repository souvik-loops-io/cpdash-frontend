import { useState } from 'react'
import { ArrowRight, FileText, Sparkles, Target, Mic, Link2, TrendingUp, type LucideIcon } from 'lucide-react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface FeatureProps {
  INNER: string
  EYEBROW: string
  SECTION_H: string
  fadeUp: Variants
  stagger: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── All feature cards ───────────────────────────────────────── */
interface FeatureCard {
  label: string
  Icon: LucideIcon
  tag: string
  title: string
  desc: string
  cta: string
}

const FEATURES: FeatureCard[] = [
  {
    label: 'Smart Analysis',
    Icon: Sparkles,
    tag: 'CV Analysis',
    title: 'CV Analysis & ATS Score',
    desc: 'Get instant ATS compatibility scores with detailed optimization suggestions.',
    cta: 'Analyze Now',
  },
  {
    label: 'AI Powered',
    Icon: FileText,
    tag: 'Cover Letter',
    title: 'Cover Letter Generator',
    desc: 'Create personalized cover letters that match job requirements perfectly.',
    cta: 'Generate Letter',
  },
  {
    label: 'Intelligent Matching',
    Icon: Target,
    tag: 'Job Match',
    title: 'Job Match Engine',
    desc: 'Find opportunities that align with your skills, experience, and career goals.',
    cta: 'Find Matches',
  },
  {
    label: 'Career Growth',
    Icon: ArrowRight,
    tag: 'Skill Gap',
    title: 'Skill Gap Analysis',
    desc: 'Identify missing skills and get personalized learning recommendations.',
    cta: 'Analyze Skills',
  },
  {
    label: 'Interview Prep',
    Icon: Mic,
    tag: 'Interview',
    title: 'AI Interview Coach',
    desc: 'Practice with realistic mock interviews and receive instant feedback on your answers.',
    cta: 'Start Practice',
  },
  {
    label: 'Profile Boost',
    Icon: Link2,
    tag: 'LinkedIn',
    title: 'LinkedIn Optimizer',
    desc: 'Supercharge your LinkedIn profile with AI-driven keyword and headline suggestions.',
    cta: 'Optimize Profile',
  },
  {
    label: 'Earn More',
    Icon: TrendingUp,
    tag: 'Salary',
    title: 'Salary Insights',
    desc: 'Benchmark your worth with live market data and negotiate with confidence.',
    cta: 'See My Worth',
  },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Feature({
  INNER,
  EYEBROW,
  SECTION_H,
  fadeUp,
  transition,
  viewportOnce,
}: FeatureProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section
      id="features"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e8e2f8 0%, #ede8fb 50%, #e4dff5 100%)' }}
    >
      {/* Full-section background image */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.img
          src="/images/others/platform_module.png"
          alt=""
          className="w-full h-full object-cover object-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
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

      </div>

      {/* ── Carousel (full-bleed, no INNER constraint) ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ ...transition, delay: 0.15 }}
      >
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track — doubled for seamless loop */}
          <div
            className="flex gap-5 w-max px-5"
            style={{
              animation: 'marquee-scroll 32s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {[...FEATURES, ...FEATURES].map((f, i) => (
              <div
                key={`${f.tag}-${i}`}
                className="rounded-2xl p-6 border border-white/60 backdrop-blur-sm shrink-0 flex flex-col text-left hover:-translate-y-1 transition-transform"
                style={{
                  width: 260,
                  background: 'rgba(255,255,255,0.45)',
                  boxShadow: '0 2px 20px rgba(100,80,200,0.08)',
                }}
              >
                <p className="mb-2 text-[11px] text-[#8888aa] font-medium tracking-wide uppercase">
                  {f.label}
                </p>

                <h3 className="text-[1.4rem] font-normal text-[#1a1a2e] mb-3 leading-snug">
                  {f.title}
                </h3>

                <p className="text-[13px] text-[#666688] mb-5 leading-relaxed flex-1">{f.desc}</p>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-[13px] text-[#6c63ff] no-underline hover:underline">
                    {f.cta} →
                  </a>
                  <f.Icon size={16} className="text-[#2563eb]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}
