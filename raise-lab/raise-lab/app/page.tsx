'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Brain,
  BarChart2,
  Users,
  GitBranch,
  Award,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ResearchCard from '@/components/ui/ResearchCard'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const NeuralNetwork = dynamic(() => import('@/components/three/NeuralNetwork'), {
  ssr: false,
})
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
})

const featuredResearch = [
  {
    title: 'Vision Transformer for Medical Imaging',
    description:
      'A fine-tuned ViT model for early detection of retinal diseases achieving 94.7% diagnostic accuracy on clinical datasets.',
    tags: ['Computer Vision', 'PyTorch', 'ViT', 'Healthcare'],
    status: 'published' as const,
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    metrics: [
      { label: 'Accuracy', value: '94.7%' },
      { label: 'F1 Score', value: '0.941' },
    ],
    slug: 'vision-transformer-medical',
  },
  {
    title: 'Multilingual NLP Chatbot',
    description:
      'Context-aware conversational AI supporting 12 languages with cross-lingual transfer learning built on mBERT.',
    tags: ['NLP', 'Transformers', 'mBERT', 'FastAPI'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [
      { label: 'Languages', value: '12' },
      { label: 'BLEU', value: '38.2' },
    ],
    slug: 'multilingual-nlp-chatbot',
  },
  {
    title: 'Real-Time Fraud Detection',
    description:
      'Graph neural network pipeline for financial fraud detection processing 50K transactions/second with sub-millisecond latency.',
    tags: ['GNN', 'Fraud Detection', 'Kafka', 'TensorFlow'],
    status: 'completed' as const,
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    metrics: [
      { label: 'Precision', value: '99.2%' },
      { label: 'Recall', value: '98.8%' },
    ],
    slug: 'fraud-detection-gnn',
  },
  {
    title: 'Adaptive Recommendation System',
    description:
      'Hybrid collaborative-content filtering system using attention mechanisms for personalized recommendations.',
    tags: ['RecSys', 'Attention', 'Redis', 'Python'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [
      { label: 'CTR Lift', value: '+23%' },
      { label: 'NDCG', value: '0.872' },
    ],
    slug: 'adaptive-recommendation',
  },
]

const achievements = [
  {
    year: '2025',
    title: 'National AI Hackathon Champions',
    desc: 'First place in Pakistan\'s largest AI hackathon with 200+ teams.',
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: '2024',
    title: 'ICML Workshop Publication',
    desc: 'Research paper accepted at the ICML 2024 Workshop on Trustworthy ML.',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    year: '2024',
    title: 'Google Research Grant',
    desc: 'Awarded $15,000 Google Research Credits for cloud computing resources.',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    year: '2023',
    title: 'Raise Lab Founded',
    desc: 'Established as a student-led AI research community with 12 founding members.',
    icon: <Layers className="w-5 h-5" />,
  },
]

const stats = [
  { end: 42, suffix: '+', label: 'Projects Completed', icon: <Brain className="w-7 h-7" />, color: 'cyan' as const },
  { end: 18, suffix: '', label: 'Research Papers', icon: <BarChart2 className="w-7 h-7" />, color: 'purple' as const },
  { end: 67, suffix: '+', label: 'Active Researchers', icon: <Users className="w-7 h-7" />, color: 'cyan' as const },
  { end: 120, suffix: '+', label: 'GitHub Repositories', icon: <GitBranch className="w-7 h-7" />, color: 'purple' as const },
]

export default function HomePage() {
  return (
    <>
      <ParticleField />

      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Neural network canvas */}
        <div className="absolute inset-0 z-0">
          <NeuralNetwork />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-ai animate-pulse" />
            SYSTEMS ONLINE — RESEARCH IN PROGRESS
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-ai animate-pulse" />
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
              <span className="block text-slate-light">RAISE</span>
              <span className="block gradient-text-cyan animate-text-glow">LAB</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-lg md:text-xl text-slate-mid max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Advancing{' '}
            <span className="text-cyan-ai font-medium">Artificial Intelligence</span>,{' '}
            <span className="text-purple-neon font-medium">Machine Learning</span> &{' '}
            <span className="text-cyan-glow font-medium">Deep Learning</span> Research
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-slate-mid/50 font-mono tracking-widest mb-10"
          >
            ── BUILDING THE FUTURE OF INTELLIGENT SYSTEMS ──
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/research"
              className="group btn-primary relative px-8 py-4 rounded-xl text-white font-semibold font-orbitron text-sm tracking-wider flex items-center gap-2.5"
            >
              <span className="relative z-10">Explore Research</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/community"
              className="btn-ghost px-8 py-4 rounded-xl text-slate-light font-semibold font-orbitron text-sm tracking-wider flex items-center gap-2.5 group"
            >
              Join Community
              <Users className="w-4 h-4 group-hover:text-cyan-ai transition-colors" />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-mid/50"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-cyan-ai/50" />
                <span className="font-mono text-xs text-cyan-ai tracking-[0.3em] uppercase">
                  About Us
                </span>
              </div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-slate-light mb-6 leading-tight">
                Where{' '}
                <span className="gradient-text-cyan">Curiosity</span>{' '}
                Meets{' '}
                <span className="gradient-text-purple">Computation</span>
              </h2>
              <p className="text-slate-mid leading-relaxed mb-4">
                Raise Lab is a student-led AI research community dedicated to pushing the boundaries
                of artificial intelligence. Founded in 2023, we bring together curious minds from
                diverse backgrounds to tackle real-world problems using cutting-edge ML & DL techniques.
              </p>
              <p className="text-slate-mid leading-relaxed mb-8">
                Our community fosters collaboration, open-source contribution, and peer-to-peer knowledge
                sharing. From image classification to large language models, our projects span the full
                spectrum of modern AI research.
              </p>
              <Link href="/about" className="btn-ghost px-6 py-3 rounded-xl text-sm font-orbitron tracking-wider inline-flex items-center gap-2 group">
                Meet the Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right — feature bullets */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: <Brain className="w-5 h-5" />, title: 'Deep Learning', desc: 'CNNs, Transformers, GANs & beyond' },
                { icon: <BarChart2 className="w-5 h-5" />, title: 'Data Science', desc: 'EDA, visualization & predictive analytics' },
                { icon: <Cpu className="w-5 h-5" />, title: 'MLOps', desc: 'Model deployment and CI/CD pipelines' },
                { icon: <Sparkles className="w-5 h-5" />, title: 'Research', desc: 'Publishing novel findings & papers' },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-ai/20 transition-colors group"
                >
                  <div className="text-cyan-ai mb-3 group-hover:scale-110 transition-transform inline-block">
                    {f.icon}
                  </div>
                  <h3 className="font-orbitron text-sm font-bold text-slate-light mb-1">{f.title}</h3>
                  <p className="text-xs text-slate-mid">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-800/50 to-navy" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Impact"
            title="Research in"
            titleHighlight="Numbers"
            description="Measuring our collective impact across research, development, and community growth."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED RESEARCH ─────────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Work"
            title="Latest"
            titleHighlight="Research"
            description="Explore our flagship AI and ML projects driving real-world impact."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredResearch.map((r, i) => (
              <ResearchCard key={r.title} {...r} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/research"
              className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-orbitron tracking-wider inline-flex items-center gap-2 group"
            >
              View All Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ──────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-neon/5 blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Milestones"
            title="Key"
            titleHighlight="Achievements"
            description="Highlights from our journey in AI research and community building."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-ai/50 via-purple-neon/50 to-transparent" />

            <div className="space-y-8">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 pl-4"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-ai to-purple-neon mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-cyan-ai/30 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-xl p-5 flex-grow border border-white/5 hover:border-cyan-ai/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="font-mono text-xs text-cyan-ai mb-1 block tracking-wider">
                          {a.year}
                        </span>
                        <h3 className="font-orbitron text-sm font-bold text-slate-light">{a.title}</h3>
                      </div>
                      <div className="text-purple-neon">{a.icon}</div>
                    </div>
                    <p className="text-sm text-slate-mid">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/achievements" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-orbitron tracking-wider inline-flex items-center gap-2 group">
              Full Timeline
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY CTA ─────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-ai/5 via-transparent to-purple-neon/5" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-10 md:p-16 border border-cyan-ai/20"
            style={{ boxShadow: '0 0 60px rgba(6, 182, 212, 0.1), 0 0 120px rgba(139, 92, 246, 0.05)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider mb-6">
              <Users className="w-3.5 h-3.5" />
              OPEN APPLICATIONS
            </div>

            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-slate-light mb-4">
              Ready to{' '}
              <span className="gradient-text-cyan">Shape AI</span>{' '}
              Research?
            </h2>

            <p className="text-slate-mid text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 67+ researchers, engineers, and visionaries building the next generation of AI systems.
              No experience required — just curiosity and commitment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/community" className="group btn-primary relative px-8 py-4 rounded-xl text-white font-semibold font-orbitron text-sm tracking-wider flex items-center gap-2.5">
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-ghost px-8 py-4 rounded-xl text-slate-light font-semibold font-orbitron text-sm tracking-wider">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
