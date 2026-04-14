import { AnimatePresence } from 'framer-motion'
import './App.css'
// import { ScrollProvider } from './assets/utils/context/ScrollContext'
import HeaderApp from './components-local/HeaderApp'
import { BTN_PRI, EYEBROW, fadeLeft, fadeRight, fadeUp, INNER, NAV_LINK, SECTION_H, stagger, transition, transitionSlow, viewportOnce } from './assets/utils/NewUtils'
import HeroSection from './components-local/HeroSection'
import Feature from './components-local/Feature'
import HowItWorks from './components-local/HowItWorks'
// import CustomCursor from './components-local/com-new/CustomCursor'


const FEATURES = [
  { color: 'bg-blue-500/10 text-blue-500', tag: 'CV Analysis', title: 'CV Analysis & ATS Score', desc: 'Get instant ATS compatibility scores with detailed optimization suggestions.', cta: 'Analyze Now', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />, icon2: <polyline points="14 2 14 8 20 8" /> },
  { color: 'bg-purple-500/10 text-purple-500', tag: 'Cover Letter', title: 'Cover Letter Generator', desc: 'Create personalized cover letters that match job requirements perfectly.', cta: 'Generate Letter', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></> },
  { color: 'bg-green-500/10 text-green-500', tag: 'Job Match', title: 'Job Match Engine', desc: 'Find opportunities that align with your skills, experience, and career goals.', cta: 'Find Matches', icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></> },
  { color: 'bg-orange-500/10 text-orange-500', tag: 'Skill Gap', title: 'Skill Gap Analysis', desc: 'Identify missing skills and get personalized learning recommendations.', cta: 'Analyze Skills', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
]

function App() {
  return (
  <AnimatePresence>
    {/* <CustomCursor /> */}
    {/* <ScrollProvider> */}
      <HeaderApp INNER={INNER} BTN_PRI={BTN_PRI} NAV_LINK={NAV_LINK} />
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
        features={FEATURES}
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
    {/* </ScrollProvider> */}
  </AnimatePresence>
  )
}

export default App
