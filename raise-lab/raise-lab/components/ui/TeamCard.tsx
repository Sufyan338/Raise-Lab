'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, BookOpen } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  avatar: string
  researchInterests: string[]
  skills: string[]
  github?: string
  linkedin?: string
  publications?: number
  index?: number
}

export default function TeamCard({
  name,
  role,
  avatar,
  researchInterests,
  skills,
  github,
  linkedin,
  publications = 0,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card rounded-2xl p-6 card-hover border border-white/5 hover:border-purple-neon/30 transition-colors h-full flex flex-col">
        {/* Avatar & Bio */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-neon/30 group-hover:border-purple-neon/60 transition-colors">
              <Image
                src={avatar}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-navy flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="flex-grow min-w-0">
            <h3 className="font-orbitron text-sm font-bold text-slate-light truncate group-hover:text-purple-neon transition-colors">
              {name}
            </h3>
            <p className="text-xs text-cyan-ai font-mono mt-0.5">{role}</p>
            {publications > 0 && (
              <div className="flex items-center gap-1 mt-1.5">
                <BookOpen className="w-3 h-3 text-slate-mid" />
                <span className="text-xs text-slate-mid">{publications} publications</span>
              </div>
            )}
          </div>
        </div>

        {/* Research interests */}
        <div className="mb-4">
          <div className="text-xs text-slate-mid uppercase tracking-wider mb-2 font-mono">
            Research Interests
          </div>
          <div className="flex flex-wrap gap-1.5">
            {researchInterests.map((interest) => (
              <span key={interest} className="tag-badge">{interest}</span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4 flex-grow">
          <div className="text-xs text-slate-mid uppercase tracking-wider mb-2 font-mono">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-0.5 rounded-md bg-purple-neon/10 border border-purple-neon/20 text-purple-neon font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-2 pt-4 border-t border-white/5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-slate-light/10 text-slate-mid hover:text-slate-light transition-colors text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-mid hover:text-blue-400 transition-colors text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
