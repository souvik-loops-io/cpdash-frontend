import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import IconHeader from "./com-new/svg/IconHeader";

const NAV_ITEMS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Download the App', href: '/#download' },
  { label: "FAQ's", href: '/#faq' },
  { label: 'Support', href: '/support', route: true },
]

export default function HeaderApp({
    INNER,
    BTN_PRI,
    NAV_LINK,
}: {
    INNER: string;
    BTN_PRI: string;
    NAV_LINK: string;
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e4e6f0]">
        <div className={`${INNER} flex items-center h-16`}>

          {/* Left — Logo */}
          <a href="/" className="flex items-center gap-2 no-underline flex-1">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl shrink-0">
              <IconHeader />
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[7px] font-black leading-none rounded-full w-[14px] h-[14px] flex items-center justify-center shadow-sm border border-blue-100">
                AI
              </span>
            </div>
            <span className="text-[17px] font-extrabold text-blue-600 tracking-tight">CPDASHAI</span>
          </a>

          {/* Center — Nav pill (desktop) */}
          <nav className="hidden md:flex">
            <ul
              className="flex gap-0.5 list-none m-0 p-[10px] rounded-[10px]"
              style={{ background: 'linear-gradient(135deg, #dde4f8 0%, #ead6f5 100%)' }}
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {item.route ? (
                    <Link
                      to={item.href}
                      className={`${NAV_LINK} text-[#1a1a2e]! hover:text-[#6c63ff]! text-[13px]!`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`${NAV_LINK} text-[#1a1a2e]! hover:text-[#6c63ff]! text-[13px]!`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — CTA (desktop) */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-2.5">
            <a href="#login" className="text-sm font-semibold text-[#1a1a2e] px-3.5 py-2.5 rounded-lg hover:text-blue-600 transition-colors no-underline">
              Login
            </a>
            <a href="#signup" className={`${BTN_PRI} px-5 py-2.5 whitespace-nowrap bg-blue-600! hover:bg-blue-700! transition-colors`}>
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none p-1.5 ml-auto w-9 h-9"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(6px) rotate(45deg)' } : {}}
            />
            <span
              className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded transition-all duration-300"
              style={open ? { opacity: 0, transform: 'scaleX(0)' } : {}}
            />
            <span
              className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(-6px) rotate(-45deg)' } : {}}
            />
          </button>

        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.nav
              className="absolute top-0 right-0 h-full w-[75%] max-w-[320px] bg-white shadow-2xl flex flex-col pt-20 px-6 gap-2"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {NAV_ITEMS.map((item) =>
                item.route ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[16px] font-semibold text-[#1a1a2e] py-3 border-b border-[#f0f0f8] no-underline hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[16px] font-semibold text-[#1a1a2e] py-3 border-b border-[#f0f0f8] no-underline hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#login"
                  onClick={() => setOpen(false)}
                  className="text-center text-[15px] font-semibold text-[#1a1a2e] py-3 rounded-xl border border-[#e4e6f0] no-underline hover:border-blue-400 transition-colors"
                >
                  Login
                </a>
                <a
                  href="#signup"
                  onClick={() => setOpen(false)}
                  className={`${BTN_PRI} py-3 rounded-xl text-[15px] bg-blue-600! hover:bg-blue-700!`}
                >
                  Get started
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
