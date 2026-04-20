import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface DownloadProps {
  INNER: string
  EYEBROW: string
  fadeUp: Variants
  fadeLeft: Variants
  fadeRight: Variants
  badgePop: Variants
  transition: Transition
  transitionSlow: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Component ──────────────────────────────────────────────── */
export default function Download({
  INNER,
  EYEBROW,
  fadeUp,
  fadeLeft,
  fadeRight,
  transition,
  transitionSlow,
  viewportOnce,
}: DownloadProps) {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #1a4fd6 0%, #4a7ae0 30%, #a0baf5 60%, #dce8ff 85%, #ffffff 100%)' }}
    >
      {/* Decorative 3D spiral — left side only */}
      <motion.img
        src="/images/others/download_app.png"
        alt=""
        className="absolute left-0 top-50 w-[60%] pointer-events-none select-none"
        style={{ height: '90%', left: '-10%' }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />

      <div className={`${INNER} relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16`}>

        {/* ── Left content ── */}
        <motion.div
          className="flex-1 max-w-[480px]"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={`text-white ${EYEBROW}`}>GET STARTED TODAY</p>

          <h2 className="text-[clamp(32px,4.5vw,52px)] font-normal text-white mb-4 leading-tight">
            Download the App
          </h2>

          <p className="text-white mb-8 leading-relaxed text-[15px]">
            Take your career journey anywhere. Access AI-powered insights,
            interview prep, and job matching right from your pocket.
          </p>

          {/* Store buttons */}
          <motion.div
            className="flex gap-3 flex-wrap mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...transition, delay: 0.2 }}
          >
            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 no-underline px-5 py-3 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{ background: '#2563eb', boxShadow: '0 4px 16px rgba(37,99,235,0.40)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[10px] text-white/70 m-0 leading-none mb-0.5">Download on the</p>
                <p className="text-[14px] font-bold text-white m-0 leading-none">App Store</p>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 no-underline px-5 py-3 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{ background: '#2563eb', boxShadow: '0 4px 16px rgba(37,99,235,0.40)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div>
                <p className="text-[10px] text-white/70 m-0 leading-none mb-0.5">Get it on</p>
                <p className="text-[14px] font-bold text-white m-0 leading-none">Google Play</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Phone mockup ── */}
        <motion.div
          className="shrink-0 relative hidden lg:flex items-center justify-center"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transitionSlow}
        >
          {/* Phone image */}
          <img
            src="/images/others/mobile_mockup.png"
            alt="App mockup"
            className="h-[480px] w-auto object-contain"
            style={{ filter: 'drop-shadow(24px 32px 48px rgba(60,60,140,0.22))' }}
          />
        </motion.div>

      </div>
    </section>
  )
}
