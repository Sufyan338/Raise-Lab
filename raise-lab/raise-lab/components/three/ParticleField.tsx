'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: 'dot' | 'trail'
  life: number
  maxLife: number
  trail: { x: number; y: number }[]
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const PARTICLE_COUNT = 80
    const COLORS = [
      'rgba(6, 182, 212, ',
      'rgba(139, 92, 246, ',
      'rgba(34, 211, 238, ',
      'rgba(167, 139, 250, ',
    ]

    const createParticle = (w: number, h: number): Particle => {
      const maxLife = 200 + Math.random() * 300
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.5,
        size: 0.5 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        type: Math.random() > 0.7 ? 'trail' : 'dot',
        life: 0,
        maxLife,
        trail: [],
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      )
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((p, i) => {
        p.life++

        // Mouse influence
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.015
          p.vx -= dx * force
          p.vy -= dy * force
        }

        p.x += p.vx
        p.y += p.vy

        // Gentle drift
        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.01
        p.vx *= 0.99
        p.vy *= 0.99

        // Life fade
        const lifeFrac = p.life / p.maxLife
        const fadeIn = Math.min(lifeFrac * 5, 1)
        const fadeOut = Math.max(1 - (lifeFrac - 0.7) / 0.3, 0)
        const alpha = p.opacity * fadeIn * fadeOut

        if (p.type === 'trail') {
          p.trail.push({ x: p.x, y: p.y })
          if (p.trail.length > 12) p.trail.shift()

          if (p.trail.length > 1) {
            for (let t = 1; t < p.trail.length; t++) {
              const ta = (t / p.trail.length) * alpha
              ctx.beginPath()
              ctx.moveTo(p.trail[t - 1].x, p.trail[t - 1].y)
              ctx.lineTo(p.trail[t].x, p.trail[t].y)
              ctx.strokeStyle = `${p.color}${ta})`
              ctx.lineWidth = p.size * (t / p.trail.length)
              ctx.lineCap = 'round'
              ctx.stroke()
            }
          }
        }

        // Draw dot
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        grd.addColorStop(0, `${p.color}${alpha})`)
        grd.addColorStop(0.5, `${p.color}${alpha * 0.4})`)
        grd.addColorStop(1, `${p.color}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Reset dead particles
        if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > width + 20) {
          particles[i] = createParticle(width, height)
          if (p.y < -20) {
            particles[i].y = height + 10
            particles[i].vy = -particles[i].vy
          }
        }
      })

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            const a = (1 - dist / 100) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
