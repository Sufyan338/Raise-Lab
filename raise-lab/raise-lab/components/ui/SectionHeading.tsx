'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  titleHighlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {label && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-cyan-ai/50" />
          <span className="font-mono text-xs text-cyan-ai tracking-[0.3em] uppercase">
            {label}
          </span>
          <span className="h-px w-8 bg-cyan-ai/50" />
        </div>
      )}
      <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-slate-light mb-4">
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text-cyan">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className={`text-slate-mid text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
