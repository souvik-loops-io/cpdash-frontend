import type { ReactNode } from 'react'
import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface ContactProps {
  INNER: string
  fadeDown: Variants
  fadeLeft: Variants
  fadeRight: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Static data ────────────────────────────────────────────── */
interface ContactInfo {
  cls: string
  label: string
  value: string
  href?: string
  svg: ReactNode
}

const CONTACT_INFO: ContactInfo[] = [
  {
    cls: 'bg-blue-500/20 text-blue-400',
    label: 'Email',
    value: 'hello@cpdashai.com',
    href: 'mailto:hello@cpdashai.com',
    svg: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    cls: 'bg-purple-500/20 text-purple-400',
    label: 'Phone',
    value: '+91 (555) 123-4567',
    href: 'tel:+915551234567',
    svg: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
    ),
  },
  {
    cls: 'bg-green-500/20 text-green-400',
    label: 'Location',
    value: 'New Delhi, India',
    svg: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
]

const FORM_FIELDS = [
  { id: 'c-name',    label: 'Name',    type: 'text',  placeholder: 'Your name',           required: true  },
  { id: 'c-email',   label: 'Email',   type: 'email', placeholder: 'your@email.com',       required: true  },
  { id: 'c-subject', label: 'Subject', type: 'text',  placeholder: 'What is this about?',  required: false },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Contact({
  INNER,
  fadeDown,
  fadeLeft,
  fadeRight,
  transition,
  viewportOnce,
}: ContactProps) {
  return (
    // <section id="contact" className="bg-[#1a1a2e] py-20">
    //   <div className={INNER}>

    //     {/* Heading */}
    //     <motion.div
    //       className="text-center mb-14"
    //       variants={fadeDown}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={viewportOnce}
    //       transition={transition}
    //     >
    //       <h2 className="text-[clamp(40px,7vw,80px)] font-black text-white tracking-tight leading-none mb-3">
    //         GET IN TOUCH
    //       </h2>
    //       <p className="text-white/50 text-[15px]">
    //         Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    //       </p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">

    //       {/* Contact info */}
    //       <motion.div
    //         variants={fadeLeft}
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={viewportOnce}
    //         transition={transition}
    //       >
    //         <h3 className="text-xl font-bold text-white mb-1.5">Contact Information</h3>
    //         <p className="text-white/40 text-[13px] mb-7">Reach out to us through any of these channels</p>

    //         <ul className="list-none flex flex-col gap-[18px]">
    //           {CONTACT_INFO.map((item) => (
    //             <li key={item.label} className="flex items-start gap-3.5">
    //               <span className={`w-[38px] h-[38px] rounded-xl flex items-center justify-center shrink-0 ${item.cls}`}>
    //                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    //                   {item.svg}
    //                 </svg>
    //               </span>
    //               <div>
    //                 <strong className="block text-[13px] text-white/50 mb-0.5">{item.label}</strong>
    //                 {item.href
    //                   ? <a href={item.href} className="text-sm text-white no-underline hover:text-[#00c2ff] transition-colors">{item.value}</a>
    //                   : <span className="text-sm text-white">{item.value}</span>
    //                 }
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </motion.div>

    //       {/* Contact form */}
    //       <motion.form
    //         className="bg-white rounded-2xl p-8 flex flex-col gap-[18px]"
    //         onSubmit={(e) => e.preventDefault()}
    //         variants={fadeRight}
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={viewportOnce}
    //         transition={transition}
    //       >
    //         {FORM_FIELDS.map((f) => (
    //           <div key={f.id} className="flex flex-col gap-1.5">
    //             <label htmlFor={f.id} className="text-[13px] font-semibold text-[#1a1a2e]">{f.label}</label>
    //             <input
    //               id={f.id}
    //               type={f.type}
    //               placeholder={f.placeholder}
    //               required={f.required}
    //               className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#1a1a2e] text-sm px-3.5 py-2.5 outline-none focus:border-[#6c63ff] transition-colors w-full"
    //             />
    //           </div>
    //         ))}

    //         <div className="flex flex-col gap-1.5">
    //           <label htmlFor="c-message" className="text-[13px] font-semibold text-[#1a1a2e]">Message</label>
    //           <textarea
    //             id="c-message"
    //             rows={5}
    //             placeholder="Tell us more about your inquiry..."
    //             required
    //             className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#1a1a2e] text-sm px-3.5 py-2.5 outline-none focus:border-[#6c63ff] transition-colors w-full resize-y font-[inherit]"
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full text-sm font-semibold bg-[#6c63ff] text-white py-3 rounded-xl hover:bg-[#5a52e0] transition-colors cursor-pointer border-none"
    //         >
    //           Send Message →
    //         </button>
    //       </motion.form>

    //     </div>
    //   </div>
    // </section>


    <section
      id="contact"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #dce8fb 0%, #eef2ff 45%, #dce8fb 100%)",
      }}
    >
      <div className={INNER}>
 
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          <h2 className="text-[clamp(40px,7vw,80px)] font-normal text-[#0d0d1a] tracking-tight leading-none mb-3">
            GET IN TOUCH
          </h2>
          <p className="text-[#6b7280] text-[15px]">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">
 
          {/* Contact info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h3 className="text-xl font-bold text-[#0d0d1a] mb-1.5">Contact Information</h3>
            <p className="text-[#9ca3af] text-[13px] mb-7">Reach out to us through any of these channels</p>
 
            <ul className="list-none flex flex-col gap-3.5">
              {CONTACT_INFO.map((item) => (
                <li
                  key={item.label}
                  className="bg-white rounded-2xl px-[18px] py-4 flex items-center gap-3.5"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                >
                  <span className="w-[42px] h-[42px] rounded-xl bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      {item.svg}
                    </svg>
                  </span>
                  <div>
                    <strong className="block text-[12px] font-medium text-[#9ca3af] mb-0.5">{item.label}</strong>
                    {item.href
                      ? <a href={item.href} className="text-sm text-[#0d0d1a] font-medium no-underline hover:text-[#3b82f6] transition-colors">{item.value}</a>
                      : <span className="text-sm text-[#0d0d1a] font-medium">{item.value}</span>
                    }
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
 
          {/* Contact form */}
          <motion.form
            className="bg-white border rounded-2xl p-8 flex flex-col gap-[18px]"
            onSubmit={(e) => e.preventDefault()}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
          >
            {FORM_FIELDS.map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-[13px] font-semibold text-[#0d0d1a]">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.required}
                  className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#0d0d1a] text-sm px-3.5 py-2.5 outline-none focus:border-[#3b82f6] transition-colors w-full"
                />
              </div>
            ))}
 
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-message" className="text-[13px] font-semibold text-[#0d0d1a]">Message</label>
              <textarea
                id="c-message"
                rows={5}
                placeholder="Tell us more about your inquiry..."
                required
                className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#0d0d1a] text-sm px-3.5 py-2.5 outline-none focus:border-[#3b82f6] transition-colors w-full resize-y font-[inherit]"
              />
            </div>
 
            <button
              type="submit"
              className="w-full text-sm font-semibold bg-[#3b82f6] text-white py-3 rounded-xl hover:bg-[#2563eb] transition-colors cursor-pointer border-none flex items-center justify-center gap-2"
            >
              Send Message
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </motion.form>
 
        </div>
      </div>
    </section>
  )
}
