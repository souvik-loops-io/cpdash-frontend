import { type Transition, type Variants } from 'motion/react'
import IconHeader from './com-new/svg/IconHeader'

/* ── Types ──────────────────────────────────────────────────── */
interface FooterProps {
  INNER: string
  BTN_PRI: string
  fadeUp: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Nav columns ────────────────────────────────────────────── */
const FOOTER_COLS = [
  {
    heading: 'PRODUCT',
    links: ['Home', 'Features', 'How It Works'],
  },
  {
    heading: 'RESOURCES',
    links: ['Marketplace', 'Tutorials', 'Blog', 'Careers', 'Contact Sales'],
  },
  {
    heading: 'USE CASES',
    links: ['End to end career journey', 'Creative and Tech', 'Portfolio'],
  },
  {
    heading: 'LEGAL',
    links: ['Privacy Policy', 'Cookies Policy', 'Terms and Conditions'],
  },
]

/* ── Social icons ───────────────────────────────────────────── */
const SOCIALS = [
  {
    name: 'cpdashai',
    svg: (
      <div className="w-4 h-4 flex items-center justify-center">
        <IconHeader />
      </div>
    ),
  },
  {
    name: 'youtube',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'x',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: 'linkedin',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'instagram',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'facebook',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'tiktok',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Footer({
  INNER,
}: FooterProps) {
  return (
    <footer id="footer" className="bg-[#3B5FD9]">

      {/* ── Top CTA ── */}
      <div className="py-16 flex flex-col items-center text-center gap-7">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl shrink-0 overflow-hidden bg-white">
            <div style={{ transform: 'scale(0.52)', transformOrigin: 'center' }}>
              <IconHeader />
            </div>
          </div>
          <span className="text-white font-extrabold text-[18px] tracking-tight">CPDASHAI</span>
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(32px,5vw,58px)] font-bold text-white leading-tight">
          Start building magic today.
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#how-it-works"
            className="px-6 py-3 rounded-2xl border border-white/60 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors no-underline"
          >
            How It Works
          </a>
          <a
            href="#signup"
            className="px-6 py-3 rounded-2xl bg-white text-[#3B5FD9] text-[14px] font-semibold hover:bg-white/90 transition-colors no-underline"
          >
            Get started
          </a>
        </div>
      </div>

{/* ── Nav columns ── */}
      <div className="py-10 flex flex-wrap justify-center gap-x-12 gap-y-8 px-6">
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">
              {col.heading}
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-white/75 no-underline hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Social icons ── */}
      <div className={`${INNER} py-6 flex justify-center gap-3 flex-wrap`}>
        {SOCIALS.map(({ name, svg }) => (
          <a
            key={name}
            href="#"
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors text-white no-underline"
          >
            {svg}
          </a>
        ))}
      </div>
        <p className="text-[12px] text-white/40 tracking-wide uppercase">CPDASH.AI LTD © 2026</p>
    </footer>
  )
}
