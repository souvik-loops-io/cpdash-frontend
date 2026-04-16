import { createContext, useContext } from 'react'
import { useScroll, useSpring, MotionValue } from 'motion/react'

const ScrollCtx = createContext<{ scrollY: MotionValue<number> } | null>(null)

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, { stiffness: 80, damping: 20 })
  return <ScrollCtx.Provider value={{ scrollY: smoothY }}>{children}</ScrollCtx.Provider>
}

export const useScrollContext = () => useContext(ScrollCtx)!