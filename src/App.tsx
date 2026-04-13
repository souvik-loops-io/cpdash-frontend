import './App.css'
import HeaderApp from './components-local/HeaderApp'
import HeroSection from './components-local/HeroSection'
import Feature from './components-local/Feature'
import HowItWorks from './components-local/HowItWorks'
import Pricing from './components-local/Pricing'
import Faq from './components-local/Faq'
import Contact from './components-local/Contact'
import Footer from './components-local/Footer'
import Download from './components-local/Download'
import { badgePop, BTN_OUT, BTN_PRI, EYEBROW, fadeDown, fadeLeft, fadeRight, fadeUp, FAQ_ITEMS, INNER, NAV_LINK, scaleIn, SECTION_H, stagger, transition, transitionSlow, viewportOnce } from './assets/utils/utils'


const FEATURES = [
  { color: 'bg-blue-500/10 text-blue-500', tag: 'CV Analysis', title: 'CV Analysis & ATS Score', desc: 'Get instant ATS compatibility scores with detailed optimization suggestions.', cta: 'Analyze Now', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />, icon2: <polyline points="14 2 14 8 20 8" /> },
  { color: 'bg-purple-500/10 text-purple-500', tag: 'Cover Letter', title: 'Cover Letter Generator', desc: 'Create personalized cover letters that match job requirements perfectly.', cta: 'Generate Letter', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></> },
  { color: 'bg-green-500/10 text-green-500', tag: 'Job Match', title: 'Job Match Engine', desc: 'Find opportunities that align with your skills, experience, and career goals.', cta: 'Find Matches', icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></> },
  { color: 'bg-orange-500/10 text-orange-500', tag: 'Skill Gap', title: 'Skill Gap Analysis', desc: 'Identify missing skills and get personalized learning recommendations.', cta: 'Analyze Skills', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
]

function App() {
  return (
    <>

      {/* ============================================================
          SECTION 1: HEADER
          → Extract to: components/Header.tsx
          ============================================================ */}

      <HeaderApp
        INNER={INNER}
        BTN_PRI={BTN_PRI}
        NAV_LINK={NAV_LINK}
      />
      {/* ============================================================
          SECTION 2: HERO
          → Extract to: components/Hero.tsx
          Note: wire up useState + setInterval for word cycling
          ============================================================ */}
      <HeroSection
        INNER={INNER}
        BTN_PRI={BTN_PRI}
        fadeUp={fadeUp}
        fadeRight={fadeRight}
        transition={transition}
        transitionSlow={transitionSlow}
        viewportOnce={viewportOnce}
      />

      {/* ============================================================
          SECTION 3: FEATURES
          → Extract to: components/Features.tsx
          Note: marquee duplicates items for seamless CSS loop
          ============================================================ */}
      <Feature
        INNER={INNER}
        EYEBROW={EYEBROW}
        SECTION_H={SECTION_H}
        features={FEATURES}
        fadeUp={fadeUp}
        stagger={stagger}
        transition={transition}
        viewportOnce={viewportOnce}
      />

      {/* ============================================================
          SECTION 4: HOW IT WORKS
          → Extract to: components/HowItWorks.tsx
          ============================================================ */}

      <HowItWorks
        INNER={INNER}
        fadeUp={fadeUp}
        fadeLeft={fadeLeft}
        stagger={stagger}
        transition={transition}
        viewportOnce={viewportOnce}
      />


      {/* ============================================================
          SECTION 5: DOWNLOAD THE APP
          → Extract to: components/AppDownload.tsx
          ============================================================ */}
      <Download
        INNER={INNER}
        EYEBROW={EYEBROW}
        fadeUp={fadeUp}
        fadeLeft={fadeLeft}
        fadeRight={fadeRight}
        badgePop={badgePop}
        transition={transition}
        transitionSlow={transitionSlow}
        viewportOnce={viewportOnce}
      />


      {/* ============================================================
          SECTION 6: PRICING
          → Extract to: components/Pricing.tsx
          ============================================================ */}
      <Pricing
        INNER={INNER}
        EYEBROW={EYEBROW}
        SECTION_H={SECTION_H}
        BTN_PRI={BTN_PRI}
        BTN_OUT={BTN_OUT}
        fadeUp={fadeUp}
        stagger={stagger}
        scaleIn={scaleIn}
        transition={transition}
        viewportOnce={viewportOnce}
      />


      {/* ============================================================
          SECTION 7: FAQ
          → Extract to: components/FAQ.tsx
          Note: <details> open/close is native HTML; no JS needed
          ============================================================ */}

      <Faq
        INNER={INNER}
        EYEBROW={EYEBROW}
        SECTION_H={SECTION_H}
        BTN_PRI={BTN_PRI}
        items={FAQ_ITEMS}
        fadeUp={fadeUp}
        stagger={stagger}
        transition={transition}
        transitionSlow={transitionSlow}
        viewportOnce={viewportOnce}
      />
      {/* ============================================================
          SECTION 8: CONTACT
          → Extract to: components/Contact.tsx
          ============================================================ */}
      <Contact
        INNER={INNER}
        fadeDown={fadeDown}
        fadeLeft={fadeLeft}
        fadeRight={fadeRight}
        transition={transition}
        viewportOnce={viewportOnce}
      />


      {/* ============================================================
          FOOTER
          → Extract to: components/Footer.tsx
          ============================================================ */}
      <Footer
        INNER={INNER}
        BTN_PRI={BTN_PRI}
        fadeUp={fadeUp}
        transition={transition}
        viewportOnce={viewportOnce}
      />

    </>
  )
}

export default App
