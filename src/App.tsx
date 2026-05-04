import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderApp from './components-local/HeaderApp'
import Support from './components-local/Support'
import { badgePop, BTN_OUT, BTN_PRI, EYEBROW, FAQ_ITEMS, fadeLeft, fadeRight, fadeUp, INNER, NAV_LINK, scaleIn, SECTION_H, stagger, transition, transitionSlow, viewportOnce, fadeDown } from './assets/utils/NewUtils'
import HeroSection from './components-local/HeroSection'
import Feature from './components-local/Feature'
import HowItWorks from './components-local/HowItWorks'
import Download from './components-local/Download'
import Pricing from './components-local/Pricing'
import Community from './components-local/Community'
import Faq from './components-local/Faq'
import BlogSection from './components-local/BlogSection'
import Contact from './components-local/Contact'
import Footer from './components-local/Footer'



function Landing() {
  return (
    <AnimatePresence>
      <HeroSection INNER={INNER} BTN_PRI={BTN_PRI}
        fadeUp={fadeUp}
        fadeRight={fadeRight}
        transition={transition}
        transitionSlow={transitionSlow}
        viewportOnce={viewportOnce}
      />
      <Feature
        INNER={INNER}
        EYEBROW={EYEBROW}
        SECTION_H={SECTION_H}
        fadeUp={fadeUp}
        stagger={stagger}
        transition={transition}
        viewportOnce={viewportOnce}
      />
      <HowItWorks
        INNER={INNER}
        fadeUp={fadeUp}
        transition={transition}
        viewportOnce={viewportOnce}
        stagger={stagger}
        fadeLeft={fadeLeft}
      />
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
      <Community
       INNER={INNER}
       BTN_PRI={BTN_PRI}
       fadeUp={fadeUp}
       stagger={stagger}
       scaleIn={scaleIn}
       transition={transition}
       viewportOnce={viewportOnce}
      />
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
      <BlogSection
       INNER={INNER}
       EYEBROW={EYEBROW}
       BTN_PRI={BTN_PRI}
       fadeUp={fadeUp}
       stagger={stagger}
       scaleIn={scaleIn}
       transition={transition}
       viewportOnce={viewportOnce}
      />
      <Contact
        INNER={INNER}
        fadeDown={fadeDown}
        fadeLeft={fadeLeft}
        fadeRight={fadeRight}
        transition={transition}
        viewportOnce={viewportOnce}
      />
      <Footer
        INNER={INNER}
        BTN_PRI={BTN_PRI}
        fadeUp={fadeUp}
        transition={transition}
        viewportOnce={viewportOnce}
      />
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
      <HeaderApp INNER={INNER} BTN_PRI={BTN_PRI} NAV_LINK={NAV_LINK} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  )
}

export default App
