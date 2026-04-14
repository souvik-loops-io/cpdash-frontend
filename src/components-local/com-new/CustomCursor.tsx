import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'click'

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('default')
  const [visible, setVisible] = useState(false)

  // Raw mouse position
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Dot follows instantly
  const dotX = useSpring(rawX, { stiffness: 1000, damping: 50, mass: 0.1 })
  const dotY = useSpring(rawY, { stiffness: 1000, damping: 50, mass: 0.1 })

  // Ring follows with lag → 3D depth illusion
  const ringX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.5 })
  const ringY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.5 })

  // Trailing "aura" follows even slower
  const auraX = useSpring(rawX, { stiffness: 50, damping: 15, mass: 1 })
  const auraY = useSpring(rawY, { stiffness: 50, damping: 15, mass: 1 })

  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        rawX.set(e.clientX)
        rawY.set(e.clientY)
      })
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onDown = () => setState('click')
    const onUp   = () => setState(prev => prev === 'click' ? 'default' : prev)

    // Detect interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor="hover"], input, textarea, select, label')
      setState(interactive ? 'hover' : 'default')
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [visible, rawX, rawY])

  const isHover = state === 'hover'
  const isClick = state === 'click'

  return (
    <>
      {/* Outer soft aura — slowest, fades on hover */}
      <motion.div
        className="cursor-aura"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible && !isHover ? 1 : 0,
        }}
      />

      {/* Mid ring — medium lag, expands on hover */}
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClick ? 0.7 : isHover ? 2.2 : 1,
          opacity: visible ? 1 : 0,
          borderColor: isHover ? 'rgba(139,92,246,0.9)' : 'rgba(139,92,246,0.5)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />

      {/* Inner dot — instant, shrinks on hover */}
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClick ? 0.5 : isHover ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />

      {/* 3D depth "shadow dot" — offset slightly, creates parallax layer */}
      <motion.div
        className="cursor-shadow-dot"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClick ? 0.4 : isHover ? 1.8 : 0.6,
          opacity: visible ? (isHover ? 0.3 : 0.15) : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </>
  )
}
