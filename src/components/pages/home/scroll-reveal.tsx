'use client'

import { useEffect, useRef, ReactNode } from 'react'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
}

const animMap: Record<RevealDirection, string> = {
  up: 'animate-reveal',
  left: 'animate-reveal-left',
  right: 'animate-reveal-right',
  scale: 'animate-reveal-scale',
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mantém a opacidade 0 até a animação começar
          el.style.animationDelay = `${delay}ms`
          el.classList.add(animMap[direction])
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay, direction])

  return (
    // Removido o 'contents', adicionado um block/inline-block natural
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}
