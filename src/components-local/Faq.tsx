import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
export interface FaqItem {
  q: string
  a: string
  open?: boolean
}

interface FaqProps {
  /* layout */
  INNER: string
  EYEBROW: string
  SECTION_H: string
  BTN_PRI: string
  /* data */
  items: FaqItem[]
  /* animation */
  fadeUp: Variants
  stagger: Variants
  transition: Transition
  transitionSlow: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Component ──────────────────────────────────────────────── */
export default function Faq({
  INNER,
  EYEBROW,
  SECTION_H,
  BTN_PRI,
  items,
  fadeUp,
  stagger,
  transition,
  transitionSlow,
  viewportOnce,
}: FaqProps) {
  return (
    <section id="faq" className="py-20 bg-[#f7f8ff]">
      <div className={`${INNER} text-center`}>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <p className={EYEBROW}>FAQ SECTION</p>
          <h2 className={SECTION_H}>Frequently Asked Questions</h2>
          <p className="text-[#8888aa] mb-10">Find answers to common questions about our platform</p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="max-w-[700px] mx-auto text-left flex flex-col gap-2.5 mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map((item) => (
            <motion.details
              key={item.q}
              className="bg-white border border-[#e4e6f0] rounded-xl overflow-hidden group"
              {...(item.open ? { open: true } : {})}
              variants={fadeUp}
              transition={transition}
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-[18px] text-[15px] font-semibold text-[#1a1a2e] cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-xl text-[#6c63ff] shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="px-5 pb-[18px] text-sm text-[#8888aa] leading-relaxed">{item.a}</div>
            </motion.details>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transitionSlow}
        >
          <p className="text-sm text-[#8888aa]">Still have questions?</p>
          <a href="#contact" className={`${BTN_PRI} px-5 py-2.5`}>Contact Support</a>
        </motion.div>

      </div>
    </section>
  )
}
