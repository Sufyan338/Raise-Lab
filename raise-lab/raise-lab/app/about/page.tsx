'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import TeamCard from '@/components/ui/TeamCard'
import { Target, Eye, Heart, Zap } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Aisha Malik',
    role: 'Lab Director & Principal Researcher',
    avatar: 'https://ui-avatars.com/api/?name=Aisha+Malik&background=0F172A&color=06B6D4&bold=true&size=256',
    researchInterests: ['Computer Vision', 'Explainable AI', 'Medical Imaging'],
    skills: ['PyTorch', 'TensorFlow', 'Python', 'CUDA'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 14,
  },
  {
    name: 'Bilal Ahmed',
    role: 'NLP Research Lead',
    avatar: 'https://ui-avatars.com/api/?name=Bilal+Ahmed&background=0F172A&color=8B5CF6&bold=true&size=256',
    researchInterests: ['NLP', 'LLMs', 'Multilingual AI'],
    skills: ['HuggingFace', 'JAX', 'BERT', 'FastAPI'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 8,
  },
  {
    name: 'Zara Khan',
    role: 'ML Engineer & DevOps',
    avatar: 'https://ui-avatars.com/api/?name=Zara+Khan&background=0F172A&color=06B6D4&bold=true&size=256',
    researchInterests: ['MLOps', 'Distributed Training', 'AutoML'],
    skills: ['Kubernetes', 'Docker', 'MLflow', 'Ray'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 3,
  },
  {
    name: 'Hassan Raza',
    role: 'Deep Learning Researcher',
    avatar: 'https://ui-avatars.com/api/?name=Hassan+Raza&background=0F172A&color=8B5CF6&bold=true&size=256',
    researchInterests: ['GANs', 'Diffusion Models', 'Image Generation'],
    skills: ['PyTorch', 'Stable Diffusion', 'CLIP', 'ONNX'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 5,
  },
  {
    name: 'Fatima Noor',
    role: 'Data Scientist',
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Noor&background=0F172A&color=06B6D4&bold=true&size=256',
    researchInterests: ['Predictive Analytics', 'Time Series', 'XGBoost'],
    skills: ['Pandas', 'Scikit-learn', 'SQL', 'Tableau'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 2,
  },
  {
    name: 'Omar Farooq',
    role: 'Reinforcement Learning Engineer',
    avatar: 'https://ui-avatars.com/api/?name=Omar+Farooq&background=0F172A&color=8B5CF6&bold=true&size=256',
    researchInterests: ['RL', 'Multi-Agent Systems', 'Game Theory'],
    skills: ['OpenAI Gym', 'PPO', 'A3C', 'Unity ML'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    publications: 6,
  },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Mission',
    desc: 'To democratize AI research by building an inclusive community where every curious mind can contribute to advancing the field.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Vision',
    desc: 'A future where AI research is collaborative, transparent, and accessible — driving solutions to humanity\'s greatest challenges.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Values',
    desc: 'Open-source first, peer collaboration, intellectual honesty, and a commitment to ethical AI development.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Culture',
    desc: 'Fast-moving, experiment-driven environment where failure is celebrated as a step toward breakthrough discoveries.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-neon/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-neon/10 border border-purple-neon/30 text-purple-neon text-xs font-mono tracking-wider">
              WHO WE ARE
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              About <span className="gradient-text-cyan">Raise Lab</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              A passionate community of AI researchers, machine learning engineers, and data scientists
              united by a shared mission to advance intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-ai/20 transition-colors card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-ai/20 to-purple-neon/20 flex items-center justify-center text-cyan-ai mb-4 border border-white/10">
                  {v.icon}
                </div>
                <h3 className="font-orbitron text-sm font-bold text-slate-light mb-2">{v.title}</h3>
                <p className="text-sm text-slate-mid leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Team"
            title="Meet Our"
            titleHighlight="Researchers"
            description="The brilliant minds behind Raise Lab's groundbreaking AI research."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.name} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
