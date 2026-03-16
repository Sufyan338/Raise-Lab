'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Cpu, Layers, Trophy, BookOpen, Users, Globe, Star, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const timeline = [
  {
    year: '2025',
    month: 'March',
    title: 'National AI Hackathon Champions',
    description: 'First place among 200+ teams at Pakistan\'s largest AI innovation hackathon, beating finalists from 15 universities with our real-time medical diagnosis system.',
    icon: <Trophy className="w-5 h-5" />,
    color: 'cyan',
    tags: ['Competition', 'Medical AI', 'First Place'],
  },
  {
    year: '2025',
    month: 'January',
    title: 'Google Research Credits Award',
    description: 'Awarded $15,000 in Google Cloud research credits enabling us to scale distributed training experiments for large language model fine-tuning.',
    icon: <Cpu className="w-5 h-5" />,
    color: 'purple',
    tags: ['Funding', 'Google', 'Cloud Computing'],
  },
  {
    year: '2024',
    month: 'October',
    title: 'ICML Workshop Publication',
    description: 'Research paper "Cross-Domain Transfer Learning for Low-Resource Medical NLP" accepted at the ICML 2024 Workshop on Machine Learning for Healthcare.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'cyan',
    tags: ['Publication', 'ICML', 'NLP'],
  },
  {
    year: '2024',
    month: 'July',
    title: 'CVPR 2024 Acceptance',
    description: 'Paper on efficient attention mechanisms for video understanding accepted at CVPR — one of the most competitive venues in computer vision research.',
    icon: <Star className="w-5 h-5" />,
    color: 'purple',
    tags: ['Publication', 'CVPR', 'Computer Vision'],
  },
  {
    year: '2024',
    month: 'April',
    title: '50+ Active Members Milestone',
    description: 'Raise Lab grew to over 50 active members across 8 universities, establishing cross-institutional research collaborations and mentorship programs.',
    icon: <Users className="w-5 h-5" />,
    color: 'cyan',
    tags: ['Community', 'Growth', 'Milestone'],
  },
  {
    year: '2024',
    month: 'February',
    title: 'PakMed-X Dataset Released',
    description: 'Open-sourced the first large-scale Pakistani medical records dataset with 50K annotated samples, now cited by 12 external research groups.',
    icon: <Globe className="w-5 h-5" />,
    color: 'purple',
    tags: ['Open Source', 'Dataset', 'Healthcare'],
  },
  {
    year: '2023',
    month: 'November',
    title: 'AI Research Bootcamp',
    description: 'Hosted a 2-week intensive AI research bootcamp for 120 students covering deep learning fundamentals to cutting-edge research methodology.',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'cyan',
    tags: ['Education', 'Community', 'Bootcamp'],
  },
  {
    year: '2023',
    month: 'August',
    title: 'First GitHub Repository: 1K Stars',
    description: 'Our open-source NLP toolkit reached 1,000 GitHub stars within 3 months of release, gaining international traction.',
    icon: <Zap className="w-5 h-5" />,
    color: 'purple',
    tags: ['Open Source', 'GitHub', 'Milestone'],
  },
  {
    year: '2023',
    month: 'March',
    title: 'Raise Lab Founded',
    description: 'Established as a student-led AI research community by 12 founding members from the Faculty of Computer Science, with the mission to democratize AI research.',
    icon: <Layers className="w-5 h-5" />,
    color: 'cyan',
    tags: ['Origin', 'Community', 'Launch'],
  },
]

const milestoneStats = [
  { value: '9', label: 'Major Milestones', color: 'cyan' },
  { value: '3', label: 'Research Awards', color: 'purple' },
  { value: '5', label: 'Publications', color: 'cyan' },
  { value: '2', label: 'Open-Source Releases', color: 'purple' },
]

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-cyan-ai/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider">
              <Award className="w-3.5 h-3.5" />
              MILESTONES
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              Our <span className="gradient-text-cyan">Achievements</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              A chronicle of breakthroughs, publications, awards, and community milestones since our founding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestone stats */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {milestoneStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-xl p-5 text-center border ${
                  s.color === 'cyan' ? 'border-cyan-ai/20' : 'border-purple-neon/20'
                }`}
              >
                <div
                  className={`font-orbitron text-3xl font-bold mb-1 ${
                    s.color === 'cyan' ? 'text-cyan-ai' : 'text-purple-neon'
                  }`}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-mid uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Timeline" title="Journey of" titleHighlight="Innovation" />

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-ai/60 via-purple-neon/40 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:gap-10`}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div
                        className={`glass-card rounded-2xl p-5 border transition-colors card-hover ${
                          item.color === 'cyan'
                            ? 'border-cyan-ai/15 hover:border-cyan-ai/30'
                            : 'border-purple-neon/15 hover:border-purple-neon/30'
                        }`}
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className="font-mono text-xs text-slate-mid">{item.month}</span>
                          <span
                            className={`font-orbitron text-xs font-bold ${
                              item.color === 'cyan' ? 'text-cyan-ai' : 'text-purple-neon'
                            }`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-orbitron text-sm font-bold text-slate-light mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-mid leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {item.tags.map((t) => (
                            <span key={t} className="tag-badge">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="relative flex-shrink-0 flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 ${
                          item.color === 'cyan'
                            ? 'bg-cyan-ai/20 border-cyan-ai text-cyan-ai'
                            : 'bg-purple-neon/20 border-purple-neon text-purple-neon'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div
                        className={`absolute inset-0 rounded-full blur-md opacity-40 ${
                          item.color === 'cyan' ? 'bg-cyan-ai' : 'bg-purple-neon'
                        }`}
                      />
                    </div>

                    {/* Spacer on opposite side */}
                    <div className="flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
