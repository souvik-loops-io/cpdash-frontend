import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface PricingProps {
  /* layout */
  INNER: string
  EYEBROW: string
  SECTION_H: string
  BTN_PRI: string
  BTN_OUT: string
  /* animation */
  fadeUp: Variants
  stagger: Variants
  scaleIn: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

interface Plan {
  name: string
  subtitle: string
  price: string
  priceUnit?: string
  features: string[]
  cta: string
  ctaHref: string
  featured?: boolean
}

/* ── Plans data ─────────────────────────────────────────────── */
const PLANS: Plan[] = [
  {
    name: 'Starter',
    subtitle: 'Perfect for exploring career possibilities',
    price: 'Free',
    features: [
      'Basic CV Analysis',
      '3 AI Interview Sessions/month',
      'Job Matching Algorithm',
      'Career Resources Library',
      'Community Access',
    ],
    cta: 'Get Started',
    ctaHref: '#signup',
  },
  {
    name: 'Professional',
    subtitle: 'For serious job seekers ready to level up',
    price: '$29',
    priceUnit: '/month',
    featured: true,
    features: [
      'Advanced CV Optimization',
      'Unlimited AI Interviews',
      'Priority Job Matching',
      'Personalized Career Roadmap',
      '1-on-1 Career Coaching Call',
      'Resume Templates Library',
      'Cover Letter Generator',
    ],
    cta: 'Get Started',
    ctaHref: '#signup',
  },
  {
    name: 'Enterprise',
    subtitle: 'Tailored solutions for teams and organizations',
    price: 'Custom',
    features: [
      'Everything in Professional',
      'Team Analytics Dashboard',
      'Bulk User Management',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Priority Support',
    ],
    cta: 'Contact Sales',
    ctaHref: '#contact',
  },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Pricing({
  INNER,
  EYEBROW,
  SECTION_H,
  BTN_PRI,
  BTN_OUT,
  fadeUp,
  stagger,
  scaleIn,
  transition,
  viewportOnce,
}: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className={`${INNER} text-center`}>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={EYEBROW}>SIMPLE PRICING</p>
          <h2 className={SECTION_H}>Choose Your Plan</h2>
          <p className="text-[#8888aa] mb-12">
            Choose the perfect plan to accelerate your career journey
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              className={
                plan.featured
                  ? 'bg-white border-2 border-[#6c63ff] rounded-2xl p-8 relative shadow-[0_8px_40px_rgba(108,99,255,0.15)]'
                  : 'bg-white border border-[#e4e6f0] rounded-2xl p-8 hover:shadow-[0_8px_40px_rgba(108,99,255,0.1)] transition-shadow'
              }
              variants={scaleIn}
              transition={transition}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6c63ff] text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-[#1a1a2e] mb-1.5">{plan.name}</h3>
              <p className="text-[13px] text-[#8888aa] mb-5">{plan.subtitle}</p>

              {plan.priceUnit ? (
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-[40px] font-extrabold text-[#1a1a2e]">{plan.price}</span>
                  <span className="text-sm text-[#8888aa]">{plan.priceUnit}</span>
                </div>
              ) : (
                <p className="text-[40px] font-extrabold text-[#1a1a2e] mb-6">{plan.price}</p>
              )}

              <ul className="list-none flex flex-col gap-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#4a4a6a]">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`${plan.featured ? BTN_PRI : BTN_OUT} w-full py-2.5 rounded-xl`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
