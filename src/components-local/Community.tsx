import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface CommunityProps {
  INNER: string
  BTN_PRI: string
  fadeUp: Variants
  stagger: Variants
  scaleIn: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Data ───────────────────────────────────────────────────── */
const STATS = [
  {
    value: '25,000+',
    label: 'Active Members',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '1,500+',
    label: 'Story Discussed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    value: '200+',
    label: 'Events This Month',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    value: '10,000+',
    label: 'Success Stories',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const FEATURES = [
  {
    title: 'Discussion Forums',
    desc: 'Engage in meaningful conversations with industry experts and peers. Share insights to common challenges faced in career management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    iconBg: '#6366f1',
  },
  {
    title: 'Live Workshops',
    desc: 'Participate in expert-led sessions on industry topics, career development, and professional skills to stay ahead.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    iconBg: '#8b5cf6',
  },
  {
    title: 'Networking Events',
    desc: 'Build meaningful connections with professionals in your field. Attend virtual and in-person networking events.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    iconBg: '#ec4899',
  },
  {
    title: 'Resource Library',
    desc: 'Access a curated collection of templates, guides, and resources created for the professional development journey.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    iconBg: '#f59e0b',
  },
  {
    title: 'Mentorship Program',
    desc: 'Get paired with experienced mentors to help you navigate your career journey, because finding an your way is easier.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    iconBg: '#10b981',
  },
  {
    title: 'Job Opportunities',
    desc: 'Community members share exclusive job opportunities and referrals from top companies before they go public.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    iconBg: '#3b82f6',
  },
]

const TESTIMONIALS = [
  {
    name: 'Maria Garcia',
    role: 'Product Manager',
    company: 'Google',
    avatar: 'MG',
    avatarBg: '#fee2e2',
    avatarText: '#dc2626',
    rating: 5,
    tag: 'Career Change',
    tagColor: '#3b82f6',
    text: 'This community transformed my career transition from marketing to product management. The mentorship connections and workshops are incredibly valuable. Highly recommend it!',
  },
  {
    name: 'James Wilson',
    role: 'Software Engineer',
    company: 'Microsoft',
    avatar: 'JW',
    avatarBg: '#dbeafe',
    avatarText: '#1d4ed8',
    rating: 5,
    tag: 'Skill Growth',
    tagColor: '#8b5cf6',
    text: 'Landed my dream job through a referral I got in the Job Opportunities channel. The community is full of genuinely helpful people who want to see others succeed.',
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist',
    company: 'Amazon',
    avatar: 'PP',
    avatarBg: '#dcfce7',
    avatarText: '#16a34a',
    rating: 5,
    tag: 'Technical Skills',
    tagColor: '#ec4899',
    text: 'The live workshops and resource library are gold. I\'ve learned more practical skills from this community in 3 months than I did in a whole year working on my own.',
  },
]

/* ── Component ──────────────────────────────────────────────── */
export default function Community({
  INNER,
  BTN_PRI,
  fadeUp,
  stagger,
  scaleIn,
  transition,
  viewportOnce,
}: CommunityProps) {
  return (
    <div id="community" className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #eef2ff 50%, #f3f0ff 100%)' }}>

      {/* Single bg image spanning ALL sub-sections */}
      <motion.img
        src="/images/others/com_bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />

      {/* ── 1. Hero + Stats ─────────────────────────────────── */}
      <section className="relative py-20">

        <div className={`${INNER} relative z-10`}>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h2 className="text-[clamp(32px,5.5vw,62px)] font-black text-[#1a1a2e] tracking-tight leading-none mb-5">
              JOIN OUR<br />COMMUNITY HUB
            </h2>
            <p className="text-[15px] text-[#666688] max-w-[560px] leading-relaxed">
              Connect with thousands of ambitious professionals, share experiences,
              learn from experts, and grow together in a supportive community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col justify-center items-center gap-3 px-5 py-4 rounded-2xl border border-white/30 backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.14)', boxShadow: '0 2px 16px rgba(100,120,255,0.10)' }}
                variants={fadeUp}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                {/* Icon pill */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' }}
                >
                  {s.icon}
                </div>
                <div className="text-center">
                  <p className="text-[40px] font-normal text-[#2563EB] leading-none">{s.value}</p>
                  <p className="text-[11px] text-[#8888aa] mt-0.5 leading-none">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 2. Ready to Join CTA card ───────────────────────── */}
      <section className="relative py-10">
        <div className={INNER}>
          <motion.div
            className="rounded-3xl py-14 px-10 flex flex-col items-center text-center gap-6 backdrop-blur-md border border-white/30"
            style={{
              background: 'rgba(255,255,255,0.12)',
              boxShadow: '0 8px 40px rgba(99,102,241,0.10)',
            }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h3 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#1a1a2e] leading-snug">
              Ready to Join Our Community HUB?
            </h3>
            <p className="text-[14px] text-[#555577] leading-relaxed max-w-[480px]">
              Connect with 25,000+ professionals who are growing their careers together.
              Get instant access to exclusive events, resources, and opportunities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#signup" className={`${BTN_PRI} px-7 py-3 rounded-xl text-[14px] gap-2`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Join the Community
              </a>
              <a href="#learn" className="text-[14px] font-semibold text-[#2563eb] hover:underline no-underline">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. What Makes Our Community Special ─────────────── */}
      <section className="relative py-20">

        <div className={`${INNER} relative z-10`}>

          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h2 className="text-[clamp(26px,4vw,42px)] font-bold text-[#1a1a2e] leading-tight">
              What Makes Our Community Special
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                className="rounded-2xl p-6 border border-white/25 backdrop-blur-sm hover:-translate-y-1 transition-all"
                style={{ background: 'rgba(255,255,255,0.10)', boxShadow: '0 4px 24px rgba(100,120,255,0.10)' }}
                variants={scaleIn}
                transition={transition}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.iconBg }}
                >
                  {f.icon}
                </div>
                <h4 className="text-[16px] font-semibold text-[#1a1a2e] mb-2">{f.title}</h4>
                <p className="text-[13px] text-[#555577] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 4. Community Success Stories ────────────────────── */}
      <section className="relative py-20">
        <div className={INNER}>

          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h2 className="text-[clamp(26px,4vw,42px)] font-bold text-[#1a1a2e]">
              Community Success Stories
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                className="rounded-2xl p-6 border border-[#f0f0f8] hover:shadow-lg hover:shadow-purple-100/50 transition-all"
                style={{ background: '#fafbff' }}
                variants={scaleIn}
                transition={transition}
              >
                {/* Top row */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0"
                    style={{ background: t.avatarBg, color: t.avatarText }}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-[#1a1a2e] leading-none mb-0.5 truncate">{t.name}</p>
                    <p className="text-[12px] text-[#8888aa] leading-none truncate">{t.role} · {t.company}</p>
                  </div>
                  {/* Tag badge */}
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: `${t.tagColor}15`, color: t.tagColor }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-[13px] text-[#555577] leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  )
}
