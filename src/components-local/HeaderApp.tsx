// const NAV_LINK = 'text-sm font-medium text-[#4a4a6a] px-3.5 py-1.5 rounded-lg hover:text-[#6c63ff] hover:bg-[#6c63ff]/10 transition-colors no-underline'
// const BTN_PRI  = 'inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#6c63ff] text-white rounded-lg transition-colors no-underline'
// const INNER    = 'max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10'

export default function HeaderApp({
    INNER,
    BTN_PRI,
    NAV_LINK,
}: {
    INNER: string;
    BTN_PRI: string;
    NAV_LINK: string;
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f8ff]/90 backdrop-blur-md border-b border-[#e4e6f0]">
      <div className={`${INNER} flex items-center gap-8 h-16`}>

        {/* Logo */}
        <span className="text-[17px] font-extrabold text-[#1a1a2e] tracking-tight">CPDASHAI</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex bg-blue-500 p-[10px] rounded-[10px]">
          <ul className="flex gap-0.5 list-none m-0 p-0">
            <li><a href="#how-it-works" className={`${NAV_LINK} text-white hover:text-white`}>How It Works</a></li>
            <li><a href="#download"      className={`${NAV_LINK} text-white hover:text-white`}>Download the App</a></li>
            <li><a href="#pricing"       className={`${NAV_LINK} text-white hover:text-white`}>Pricing</a></li>
            <li><a href="#faq"           className={`${NAV_LINK} text-white hover:text-white`}>FAQ's</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="ml-auto hidden md:flex items-center gap-2.5">
          <a href="#login" className="text-sm font-semibold text-[#1a1a2e] px-3.5 py-2.5 rounded-lg hover:text-[#6c63ff] transition-colors no-underline">
            Login
          </a>
          <a href="#signup" className={`${BTN_PRI} px-5 py-2.5 whitespace-nowrap bg-blue-500`}>
            Get started — it's free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ml-auto"
          aria-label="Open menu"
        >
          <span className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded" />
          <span className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded" />
          <span className="block w-[22px] h-0.5 bg-[#1a1a2e] rounded" />
        </button>

      </div>
    </header>
  )
}
