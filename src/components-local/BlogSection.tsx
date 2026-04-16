import { motion, type Transition, type Variants } from 'motion/react'

/* ── Types ──────────────────────────────────────────────────── */
interface BlogSectionProps {
  INNER: string
  EYEBROW: string
  BTN_PRI: string
  fadeUp: Variants
  stagger: Variants
  scaleIn: Variants
  transition: Transition
  viewportOnce: { once: boolean; margin: string }
}

/* ── Data ───────────────────────────────────────────────────── */
const POSTS = [
  {
    img: '/images/blog/post1.jpg',
    imgFallback: 'linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)',
    date: 'March 3, 2026',
    read: '5 min read',
    title: '10 AI-Powered Tips to Transform Your Resume in 2026',
    desc: 'Discover how artificial intelligence is revolutionising resume writing and learn the strategies top candidates are using to stand out.',
    author: 'David Johnson',
    authorInitials: 'DJ',
    authorBg: '#dbeafe',
    authorText: '#1d4ed8',
  },
  {
    img: '/images/blog/post2.jpg',
    imgFallback: 'linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%)',
    date: 'March 4, 2026',
    read: '8 min read',
    title: 'Mastering the Virtual Interview: Your Complete Guide',
    desc: 'From technical setup to body language, discover every aspect of virtual interviews with our comprehensive guide backed by hiring managers.',
    author: 'Michael Chen',
    authorInitials: 'MC',
    authorBg: '#dcfce7',
    authorText: '#15803d',
  },
  {
    img: '/images/blog/post3.jpg',
    imgFallback: 'linear-gradient(135deg, #fde68a 0%, #fca5a5 100%)',
    date: 'March 5, 2026',
    read: '6 min read',
    title: 'The Future of Work: AI Tools Every Professional Needs',
    desc: 'Stay ahead of the curve with the essential AI tools that are transforming how professionals work, learn, and grow in their careers.',
    author: 'Emily Rodriguez',
    authorInitials: 'ER',
    authorBg: '#fce7f3',
    authorText: '#be185d',
  },
  {
    img: '/images/blog/post4.jpg',
    imgFallback: 'linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)',
    date: 'February 28, 2026',
    read: '7 min read',
    title: 'Building Your Personal Brand on LinkedIn in 2026',
    desc: 'Learn how to craft a powerful personal brand on LinkedIn that attracts recruiters and opens doors to next-level opportunities.',
    author: 'David Park',
    authorInitials: 'DP',
    authorBg: '#e0e7ff',
    authorText: '#4338ca',
  },
  {
    img: '/images/blog/post5.jpg',
    imgFallback: 'linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%)',
    date: 'February 20, 2026',
    read: '9 min read',
    title: 'Career Transition Success Stories: From Tech to Leadership',
    desc: 'Hear from real professionals who successfully pivoted their careers and discover the lessons they learned along the way.',
    author: 'Jessica Williams',
    authorInitials: 'JW',
    authorBg: '#fef9c3',
    authorText: '#a16207',
  },
  {
    img: '/images/blog/post6.jpg',
    imgFallback: 'linear-gradient(135deg, #f0f4ff 0%, #c7d2fe 100%)',
    date: 'February 15, 2026',
    read: '6 min read',
    title: 'Remote Work Productivity: Tools and Techniques That Work',
    desc: 'Maximise your productivity while working remotely with these proven tools, strategies, and habits from top performers.',
    author: 'Alex Thompson',
    authorInitials: 'AT',
    authorBg: '#fee2e2',
    authorText: '#b91c1c',
  },
]

/* ── Blog Card ──────────────────────────────────────────────── */
function BlogCard({ post, variants, transition }: { post: typeof POSTS[0]; variants: Variants; transition: Transition }) {
  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden border border-[#f0f0f8] flex flex-col hover:shadow-lg hover:shadow-purple-100/50 hover:-translate-y-1 transition-all"
      variants={variants}
      transition={transition}
    >
      {/* Thumbnail */}
      <div className="w-full h-[180px] overflow-hidden shrink-0">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget
            el.style.display = 'none'
            const parent = el.parentElement
            if (parent) parent.style.background = post.imgFallback
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date + read time */}
        <div className="flex items-center gap-2 text-[11px] text-[#aaaacc] mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#ccccee]" />
          <span>{post.read}</span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-bold text-[#1a1a2e] leading-snug mb-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-[#8888aa] leading-relaxed mb-4 flex-1">
          {post.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f8]">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
              style={{ background: post.authorBg, color: post.authorText }}
            >
              {post.authorInitials}
            </div>
            <span className="text-[12px] text-[#555577] font-medium">{post.author}</span>
          </div>
          {/* Read more */}
          <a
            href="#"
            className="text-[12px] font-semibold text-[#2563eb] no-underline hover:underline flex items-center gap-0.5"
          >
            Read More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

/* ── Component ──────────────────────────────────────────────── */
export default function BlogSection({
  INNER,
  EYEBROW,
  BTN_PRI,
  fadeUp,
  stagger,
  scaleIn,
  transition,
  viewportOnce,
}: BlogSectionProps) {
  return (
    <div id="blog">

      {/* ── Blog grid ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className={INNER}>

          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <p className={EYEBROW}>INSIGHTS &amp; RESOURCES</p>
            <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-[#1a1a2e] mb-3 leading-tight">
              Latest from Our Blog
            </h2>
            <p className="text-[14px] text-[#8888aa] max-w-[440px] mx-auto leading-relaxed">
              Expert career advice, industry insights, and actionable tips to help you
              succeed in your professional journey.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {POSTS.map((post) => (
              <BlogCard
                key={post.title}
                post={post}
                variants={scaleIn}
                transition={transition}
              />
            ))}
          </motion.div>

          {/* View all CTA */}
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <a
              href="#"
              className={`${BTN_PRI} px-8 py-3 rounded-xl text-[14px] gap-2`}
            >
              View All Articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────── */}
      <section className="py-10 pb-20 bg-white">
        <div className={INNER}>
          <motion.div
            className="rounded-3xl px-8 py-14 flex flex-col items-center text-center"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b5bdb 60%, #4f46e5 100%)' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition}
          >
            <h2 className="text-[clamp(24px,3.5vw,40px)] font-bold text-white mb-3 leading-tight">
              Never Miss an Update
            </h2>
            <p className="text-[14px] text-white/70 max-w-[420px] leading-relaxed mb-8">
              Get the latest career tips, industry insights, and exclusive resources
              delivered straight to your inbox every week.
            </p>

            {/* Input row */}
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[460px] mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-xl text-[13px] text-[#1a1a2e] outline-none border-none"
                style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}
              />
              <button
                className="px-6 py-3 rounded-xl text-[13px] font-semibold text-[#2563eb] whitespace-nowrap bg-white hover:bg-white/90 transition-opacity"
              >
                Subscribe Now
              </button>
            </div>

            <p className="text-[11px] text-white/50">
              Join 50,000+ professionals already subscribed • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
