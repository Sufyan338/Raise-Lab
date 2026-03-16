'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  icon: React.ReactNode
  color?: 'cyan' | 'purple'
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
  icon,
  color = 'cyan',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView && !started) {
      setStarted(true)
      const start = Date.now()
      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(tick)
        else setCount(end)
      }
      requestAnimationFrame(tick)
    }
  }, [inView, started, end, duration])

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-ai/10',
      border: 'border-cyan-ai/20',
      icon: 'text-cyan-ai',
      text: 'text-cyan-ai',
      glow: '0 0 20px rgba(6, 182, 212, 0.2)',
    },
    purple: {
      bg: 'bg-purple-neon/10',
      border: 'border-purple-neon/20',
      icon: 'text-purple-neon',
      text: 'text-purple-neon',
      glow: '0 0 20px rgba(139, 92, 246, 0.2)',
    },
  }[color]

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 text-center card-hover ${colorClasses.bg} border ${colorClasses.border}`}
      style={{ boxShadow: colorClasses.glow }}
    >
      <div className={`flex justify-center mb-4 ${colorClasses.icon}`}>{icon}</div>
      <div
        className={`font-orbitron text-4xl font-bold ${colorClasses.text} mb-2`}
        style={{ textShadow: color === 'cyan' ? '0 0 15px rgba(6, 182, 212, 0.6)' : '0 0 15px rgba(139, 92, 246, 0.6)' }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-slate-mid text-sm font-medium tracking-wider uppercase">
        {label}
      </div>
    </div>
  )
}
