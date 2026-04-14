import IconHeader from "./com-new/svg/IconHeader";

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

        {/* Center — Nav pill */}
        <nav className="hidden md:flex">
          <ul
            className="flex gap-0.5 list-none m-0 p-[10px] rounded-[10px]"
            style={{ background: 'linear-gradient(135deg, #dde4f8 0%, #ead6f5 100%)' }}
          >
            <li>
              <a href="#how-it-works" className={`${NAV_LINK} text-[#1a1a2e]! hover:text-[#6c63ff]! text-[13px]!`}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#download" className={`${NAV_LINK} text-[#1a1a2e]! hover:text-[#6c63ff]! text-[13px]!`}>
                Download the App
              </a>
            </li>
            <li>
              <a href="#faq" className={`${NAV_LINK} text-[#1a1a2e]! hover:text-[#6c63ff]! text-[13px]!`}>
                FAQ's
              </a>
            </li>
          </ul>
        </nav>

        {/* Right — CTA */}
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
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5 ml-auto"
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
