import { motion, type Transition, type Variants } from 'motion/react'
import { SOCIAL_ICONS } from '../assets/utils/NewUtils'

/* ── Types ──────────────────────────────────────────────────── */
interface FooterProps {
  INNER: string
  BTN_PRI: string
  fadeUp: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Nav columns data ───────────────────────────────────────── */
const FOOTER_COLS = [
  { heading: 'PRODUCT',   links: ['Home', 'Features', 'How It Works', 'Contact Sales'] },
  { heading: 'RESOURCES', links: ['Marketplace', 'Tutorials', 'Blog', 'Discord'] },
  { heading: 'USE CASES', links: ['Ecommerce', 'Creative and Tech', 'Portfolio'] },
  { heading: 'PLANS',     links: ['Pricing'] },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Footer({
  INNER,
  BTN_PRI,
  fadeUp,
  transition,
  viewportOnce,
}: FooterProps) {
  return (
   
    <footer id="footer" className="bg-[#3B5FD9]">
  <div className="py-16 flex flex-col items-center text-center gap-6">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
        <span className="text-white text-xs font-bold">AI</span>
      </div>
      <span className="text-white font-extrabold text-lg tracking-tight">CPDASHAI</span>
    </div>

    {/* Headline */}
    <h2 className="text-4xl font-bold text-white">
      Start building <em className="not-italic italic">magic</em> today.
    </h2>

    {/* Buttons */}
    <div className="flex gap-3">
      <a href="#how-it-works" className="px-5 py-2.5 rounded-[15px] border border-white/60 text-white text-sm font-medium hover:bg-white/10 transition-colors">
        How It Works
      </a>
      <a href="#signup" className="px-5 py-2.5 rounded-[15px] bg-white text-[#3B5FD9] text-sm font-semibold hover:bg-white/90 transition-colors">
        Get started — it's free
      </a>
    </div>
  </div>

  {/* Nav columns */}
  <div className="border-t border-white/20">
    <div className={`${INNER} py-10 flex justify-center gap-16 flex-wrap`}>
      {FOOTER_COLS.map((col) => (
        <div key={col.heading}>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3.5">
            {col.heading}
          </h4>
          <ul className="list-none flex flex-col gap-2">
            {col.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-white/80 no-underline hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

  {/* Social icons row */}
  <div className={`${INNER} pb-4 flex justify-center gap-4`}>
  {SOCIAL_ICONS.map(({ name, svg }) => (
    <a key={name} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
      <span className="text-white">{svg}</span>
    </a>
  ))}
</div>

  {/* Bottom bar */}
  <div className={`${INNER} py-4 flex justify-center`}>
    <p className="text-[13px] text-white/50">CPDASHAI Ltd © 2026</p>
  </div>

</footer>
  )
}
