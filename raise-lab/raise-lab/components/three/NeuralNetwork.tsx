'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Node {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  layer: number
  pulseOffset: number
  size: number
}

interface Connection {
  from: number
  to: number
  strength: number
  signalPos: number
  signalSpeed: number
  active: boolean
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const timeRef = useRef(0)

  const initNetwork = useCallback((width: number, height: number) => {
    const nodes: Node[] = []
    const connections: Connection[] = []

    // Layer configuration
    const layers = [3, 5, 7, 5, 4, 3]
    const layerSpacing = width / (layers.length + 1)
    const centerY = height / 2

    let nodeIndex = 0
    const layerStartIndices: number[] = []

    layers.forEach((count, layerIdx) => {
      layerStartIndices.push(nodeIndex)
      const x = layerSpacing * (layerIdx + 1)
      const vertSpacing = Math.min(height * 0.6 / (count + 1), 80)

      for (let i = 0; i < count; i++) {
        const y = centerY - ((count - 1) * vertSpacing) / 2 + i * vertSpacing
        nodes.push({
          x,
          y,
          z: (Math.random() - 0.5) * 80,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.1,
          layer: layerIdx,
          pulseOffset: Math.random() * Math.PI * 2,
          size: 3 + Math.random() * 3,
        })
        nodeIndex++
      }
    })

    // Create connections between adjacent layers
    for (let l = 0; l < layers.length - 1; l++) {
      const fromStart = layerStartIndices[l]
      const toStart = layerStartIndices[l + 1]

      for (let f = 0; f < layers[l]; f++) {
        for (let t = 0; t < layers[l + 1]; t++) {
          if (Math.random() > 0.2) {
            connections.push({
              from: fromStart + f,
              to: toStart + t,
              strength: 0.3 + Math.random() * 0.7,
              signalPos: Math.random(),
              signalSpeed: 0.003 + Math.random() * 0.007,
              active: Math.random() > 0.3,
            })
          }
        }
      }
    }

    // Add some skip connections
    for (let i = 0; i < 8; i++) {
      const fromLayer = Math.floor(Math.random() * (layers.length - 2))
      const toLayer = fromLayer + 2
      const fromNode = layerStartIndices[fromLayer] + Math.floor(Math.random() * layers[fromLayer])
      const toNode = layerStartIndices[toLayer] + Math.floor(Math.random() * layers[toLayer])
      connections.push({
        from: fromNode,
        to: toNode,
        strength: 0.1 + Math.random() * 0.3,
        signalPos: Math.random(),
        signalSpeed: 0.002 + Math.random() * 0.004,
        active: Math.random() > 0.5,
      })
    }

    nodesRef.current = nodes
    connectionsRef.current = connections
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initNetwork(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      timeRef.current += 0.016

      const t = timeRef.current
      const mouse = mouseRef.current
      const nodes = nodesRef.current
      const connections = connectionsRef.current

      // Apply gentle rotation/movement influenced by time and mouse
      const rotX = Math.sin(t * 0.1) * 0.02 + (mouse.y / height - 0.5) * 0.03
      const rotY = Math.cos(t * 0.08) * 0.02 + (mouse.x / width - 0.5) * 0.03

      // Project 3D to 2D
      const project = (node: Node) => {
        const dx = node.x - width / 2
        const dy = node.y - height / 2
        const dz = node.z

        const x2 = dx * Math.cos(rotY) - dz * Math.sin(rotY)
        const z2 = dx * Math.sin(rotY) + dz * Math.cos(rotY)
        const y2 = dy * Math.cos(rotX) - z2 * Math.sin(rotX)
        const z3 = dy * Math.sin(rotX) + z2 * Math.cos(rotX)

        const fov = 1200
        const scale = fov / (fov + z3)

        return {
          x: width / 2 + x2 * scale,
          y: height / 2 + y2 * scale,
          scale,
        }
      }

      // Update signals
      connections.forEach((conn) => {
        if (conn.active) {
          conn.signalPos += conn.signalSpeed
          if (conn.signalPos > 1) {
            conn.signalPos = 0
            conn.active = Math.random() > 0.1
          }
        } else {
          if (Math.random() < 0.003) conn.active = true
        }
      })

      // Update node gentle drift (constrained)
      nodes.forEach((node, i) => {
        const baseX = nodesRef.current[i].x
        const driftMag = 8
        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        const origX = (node.layer + 1) * (canvasRef.current!.width / (6 + 1))
        if (Math.abs(node.x - origX) > driftMag) node.vx *= -0.8
        if (Math.abs(node.y - height / 2) > height * 0.35) node.vy *= -0.8
        if (Math.abs(node.z) > 60) node.vz *= -0.8
      })

      // Draw connections
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        if (!fromNode || !toNode) return

        const from = project(fromNode)
        const to = project(toNode)

        // Connection line
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        const alpha = conn.strength * 0.25 * Math.min(from.scale, to.scale)
        gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.8})`)
        gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha})`)

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = conn.strength * 0.8 * Math.min(from.scale, to.scale)
        ctx.stroke()

        // Signal particle
        if (conn.active) {
          const sx = from.x + (to.x - from.x) * conn.signalPos
          const sy = from.y + (to.y - from.y) * conn.signalPos
          const scale = from.scale + (to.scale - from.scale) * conn.signalPos

          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6 * scale)
          grad.addColorStop(0, `rgba(34, 211, 238, ${0.9 * scale})`)
          grad.addColorStop(0.4, `rgba(139, 92, 246, ${0.5 * scale})`)
          grad.addColorStop(1, 'rgba(6, 182, 212, 0)')

          ctx.beginPath()
          ctx.arc(sx, sy, 6 * scale, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        const { x, y, scale } = project(node)
        const pulse = Math.sin(t * 2 + node.pulseOffset) * 0.3 + 0.7
        const r = node.size * scale * pulse
        const isInput = node.layer === 0
        const isOutput = node.layer === 5
        const coreColor = isInput
          ? '34, 211, 238'
          : isOutput
          ? '167, 139, 250'
          : '6, 182, 212'

        // Outer glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, r * 4)
        glow.addColorStop(0, `rgba(${coreColor}, ${0.3 * scale})`)
        glow.addColorStop(1, 'rgba(6, 182, 212, 0)')
        ctx.beginPath()
        ctx.arc(x, y, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Core
        const core = ctx.createRadialGradient(x, y, 0, x, y, r)
        core.addColorStop(0, `rgba(255, 255, 255, ${0.9 * scale})`)
        core.addColorStop(0.4, `rgba(${coreColor}, ${0.8 * scale})`)
        core.addColorStop(1, `rgba(${coreColor}, ${0.2 * scale})`)
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = core
        ctx.fill()

        // Ring
        ctx.beginPath()
        ctx.arc(x, y, r * 1.8, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${coreColor}, ${0.15 * pulse * scale})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [initNetwork])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  )
}
