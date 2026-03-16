'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink, Brain } from 'lucide-react'

interface ResearchCardProps {
  title: string
  description: string
  tags: string[]
  status: 'active' | 'completed' | 'published'
  github?: string
  demo?: string
  metrics?: { label: string; value: string }[]
  index?: number
  slug?: string
}

const statusConfig = {
  active: { label: 'Active', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  completed: { label: 'Completed', color: 'text-cyan-ai', bg: 'bg-cyan-ai/10', border: 'border-cyan-ai/30' },
  published: { label: 'Published', color: 'text-purple-neon', bg: 'bg-purple-neon/10', border: 'border-purple-neon/30' },
}

export default function ResearchCard({
  title,
  description,
  tags,
  status,
  github,
  demo,
  metrics,
  index = 0,
  slug,
}: ResearchCardProps) {
  const sc = statusConfig[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 card-hover h-full flex flex-col border border-white/5 hover:border-cyan-ai/30 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-ai/20 to-purple-neon/20 flex items-center justify-center border border-white/10 group-hover:border-cyan-ai/30 transition-colors">
            <Brain className="w-6 h-6 text-cyan-ai" />
          </div>
          <span className={`tag-badge ${sc.color} ${sc.bg} border ${sc.border} !text-xs`}>
            {sc.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-base font-semibold text-slate-light mb-2 group-hover:text-cyan-ai transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-mid text-sm leading-relaxed mb-4 flex-grow">{description}</p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-xl bg-navy/50 border border-white/5">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-mono text-sm font-bold text-cyan-ai">{m.value}</div>
                <div className="text-xs text-slate-mid mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="tag-badge">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-ai/20 text-slate-mid hover:text-cyan-ai transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-purple-neon/20 text-slate-mid hover:text-purple-neon transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          {slug && (
            <Link
              href={`/research/${slug}`}
              className="flex items-center gap-1.5 text-sm text-slate-mid hover:text-cyan-ai transition-colors group/link"
            >
              Details
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
