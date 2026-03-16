'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building2, Shield, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const certifications = [
  {
    title: 'Deep Learning Specialization',
    org: 'Coursera — deeplearning.ai',
    date: 'March 2025',
    category: 'Deep Learning',
    level: 'Advanced',
    instructor: 'Andrew Ng',
    member: 'Dr. Aisha Malik',
    color: 'cyan',
    verified: true,
    url: '#',
  },
  {
    title: 'Machine Learning Engineer Professional',
    org: 'Google Cloud',
    date: 'January 2025',
    category: 'MLOps',
    level: 'Professional',
    instructor: 'Google Cloud',
    member: 'Zara Khan',
    color: 'purple',
    verified: true,
    url: '#',
  },
  {
    title: 'AWS Certified Machine Learning — Specialty',
    org: 'Amazon Web Services',
    date: 'November 2024',
    category: 'Cloud ML',
    level: 'Specialty',
    instructor: 'AWS',
    member: 'Bilal Ahmed',
    color: 'cyan',
    verified: true,
    url: '#',
  },
  {
    title: 'TensorFlow Developer Certificate',
    org: 'Google TensorFlow',
    date: 'September 2024',
    category: 'Frameworks',
    level: 'Intermediate',
    instructor: 'TensorFlow Team',
    member: 'Hassan Raza',
    color: 'purple',
    verified: true,
    url: '#',
  },
  {
    title: 'Natural Language Processing Specialization',
    org: 'Coursera — deeplearning.ai',
    date: 'July 2024',
    category: 'NLP',
    level: 'Advanced',
    instructor: 'Younes Bensouda Mourri',
    member: 'Bilal Ahmed',
    color: 'cyan',
    verified: true,
    url: '#',
  },
  {
    title: 'Applied Data Science with Python',
    org: 'University of Michigan — Coursera',
    date: 'May 2024',
    category: 'Data Science',
    level: 'Intermediate',
    instructor: 'Chris Brooks',
    member: 'Fatima Noor',
    color: 'purple',
    verified: true,
    url: '#',
  },
  {
    title: 'Reinforcement Learning Specialization',
    org: 'University of Alberta — Coursera',
    date: 'April 2024',
    category: 'Reinforcement Learning',
    level: 'Advanced',
    instructor: 'Martha White',
    member: 'Omar Farooq',
    color: 'cyan',
    verified: false,
    url: '#',
  },
  {
    title: 'MLOps Zoomcamp',
    org: 'DataTalks.Club',
    date: 'February 2024',
    category: 'MLOps',
    level: 'Intermediate',
    instructor: 'DataTalks Team',
    member: 'Zara Khan',
    color: 'purple',
    verified: true,
    url: '#',
  },
  {
    title: 'Hugging Face NLP Course',
    org: 'Hugging Face',
    date: 'December 2023',
    category: 'NLP',
    level: 'Intermediate',
    instructor: 'HF Team',
    member: 'Bilal Ahmed',
    color: 'cyan',
    verified: true,
    url: '#',
  },
]

const levelColors: Record<string, string> = {
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/30',
  Professional: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  Specialty: 'text-purple-neon bg-purple-neon/10 border-purple-neon/30',
  Intermediate: 'text-cyan-ai bg-cyan-ai/10 border-cyan-ai/30',
}

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-purple-neon/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-neon/10 border border-purple-neon/30 text-purple-neon text-xs font-mono tracking-wider">
              <Award className="w-3.5 h-3.5" />
              VERIFIED CREDENTIALS
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              Team <span className="gradient-text-purple">Certifications</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              Verified credentials and professional certifications earned by Raise Lab members from top institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-wrap gap-8 justify-center md:justify-between">
            {[
              { value: certifications.length.toString(), label: 'Total Certifications' },
              { value: certifications.filter((c) => c.verified).length.toString(), label: 'Verified' },
              { value: [...new Set(certifications.map((c) => c.org))].length.toString(), label: 'Institutions' },
              { value: [...new Set(certifications.map((c) => c.member))].length.toString(), label: 'Team Members' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-orbitron text-2xl font-bold text-cyan-ai">{s.value}</div>
                <div className="text-xs text-slate-mid uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cert grid */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Credentials" title="Certified" titleHighlight="Expertise" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group"
              >
                <div
                  className={`glass-card rounded-2xl p-6 h-full flex flex-col card-hover border transition-colors ${
                    cert.color === 'cyan'
                      ? 'border-cyan-ai/10 hover:border-cyan-ai/30'
                      : 'border-purple-neon/10 hover:border-purple-neon/30'
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        cert.color === 'cyan'
                          ? 'bg-cyan-ai/15 text-cyan-ai'
                          : 'bg-purple-neon/15 text-purple-neon'
                      }`}
                    >
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {cert.verified && (
                        <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2 py-0.5">
                          <Shield className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                      <span className={`text-xs rounded-full px-2 py-0.5 border ${levelColors[cert.level] || 'text-slate-mid'}`}>
                        {cert.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-orbitron text-sm font-bold text-slate-light mb-1 group-hover:text-cyan-ai transition-colors leading-tight flex-grow">
                    {cert.title}
                  </h3>

                  <div className="space-y-1.5 mt-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-mid">
                      <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                      {cert.org}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-mid">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      {cert.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-mid">
                      <Star className="w-3.5 h-3.5 flex-shrink-0" />
                      {cert.member}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="tag-badge">{cert.category}</span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-mid hover:text-cyan-ai transition-colors"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
