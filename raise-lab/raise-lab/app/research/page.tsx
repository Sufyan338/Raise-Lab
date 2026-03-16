'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ResearchCard from '@/components/ui/ResearchCard'
import { BookOpen, Database, FlaskConical, Cpu, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Vision Transformer for Medical Imaging',
    description: 'Fine-tuned ViT model for early detection of retinal diseases with 94.7% diagnostic accuracy.',
    tags: ['Computer Vision', 'PyTorch', 'ViT', 'Healthcare'],
    status: 'published' as const,
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    metrics: [{ label: 'Accuracy', value: '94.7%' }, { label: 'F1 Score', value: '0.941' }],
    slug: 'vision-transformer-medical',
  },
  {
    title: 'Multilingual NLP Chatbot',
    description: 'Context-aware conversational AI supporting 12 languages using mBERT and cross-lingual transfer.',
    tags: ['NLP', 'Transformers', 'mBERT', 'FastAPI'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [{ label: 'Languages', value: '12' }, { label: 'BLEU', value: '38.2' }],
    slug: 'multilingual-nlp-chatbot',
  },
  {
    title: 'Real-Time Fraud Detection',
    description: 'GNN pipeline for financial fraud detection processing 50K transactions/second.',
    tags: ['GNN', 'Fraud Detection', 'Kafka', 'TensorFlow'],
    status: 'completed' as const,
    github: 'https://github.com',
    metrics: [{ label: 'Precision', value: '99.2%' }, { label: 'Recall', value: '98.8%' }],
    slug: 'fraud-detection-gnn',
  },
  {
    title: 'Adaptive Recommendation System',
    description: 'Hybrid collaborative-content filtering with attention mechanisms for personalization.',
    tags: ['RecSys', 'Attention', 'Redis', 'Python'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [{ label: 'CTR Lift', value: '+23%' }, { label: 'NDCG', value: '0.872' }],
    slug: 'adaptive-recommendation',
  },
  {
    title: 'Autonomous Drone Navigation',
    description: 'Deep RL agent for obstacle avoidance and path planning in GPS-denied environments.',
    tags: ['Reinforcement Learning', 'PPO', 'ROS2', 'OpenCV'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [{ label: 'Success Rate', value: '89%' }, { label: 'Avg FPS', value: '45' }],
    slug: 'drone-navigation-rl',
  },
  {
    title: 'Text-to-3D Generation',
    description: 'Diffusion-based model for generating 3D meshes from natural language descriptions.',
    tags: ['Diffusion Models', 'NeRF', 'CLIP', 'Blender'],
    status: 'active' as const,
    github: 'https://github.com',
    metrics: [{ label: 'FID Score', value: '23.4' }, { label: 'CLIP Sim', value: '0.78' }],
    slug: 'text-to-3d',
  },
]

const papers = [
  {
    title: 'Cross-Domain Transfer Learning for Low-Resource Medical NLP',
    authors: ['A. Malik', 'B. Ahmed', 'F. Noor'],
    venue: 'ICML Workshop on ML4Health 2024',
    year: '2024',
    abstract: 'We propose a domain-adaptive pre-training strategy that achieves competitive performance on clinical NLP tasks with less than 1% of standard training data.',
    citations: 23,
    tags: ['NLP', 'Transfer Learning', 'Healthcare'],
    arxiv: 'https://arxiv.org',
  },
  {
    title: 'Efficient Attention Mechanisms for Real-Time Video Understanding',
    authors: ['H. Raza', 'A. Malik'],
    venue: 'CVPR 2024',
    year: '2024',
    abstract: 'A novel sparse attention pattern that reduces computational complexity from O(n²) to O(n log n) while maintaining 97% of dense attention performance.',
    citations: 47,
    tags: ['Computer Vision', 'Attention', 'Video'],
    arxiv: 'https://arxiv.org',
  },
  {
    title: 'Graph-Augmented Language Models for Knowledge Reasoning',
    authors: ['B. Ahmed', 'O. Farooq'],
    venue: 'EMNLP 2023',
    year: '2023',
    abstract: 'We integrate structured knowledge graphs directly into transformer attention layers, improving multi-hop reasoning accuracy by 15.3% on standard benchmarks.',
    citations: 61,
    tags: ['LLM', 'Knowledge Graphs', 'Reasoning'],
    arxiv: 'https://arxiv.org',
  },
]

const datasets = [
  {
    name: 'PakMed-X',
    description: 'Annotated Pakistani medical records dataset with 50K patient interactions for clinical NLP research.',
    size: '4.2 GB',
    samples: '50K',
    license: 'CC BY-NC 4.0',
    tags: ['Medical', 'NLP', 'Urdu', 'English'],
  },
  {
    name: 'UrduSenti-2024',
    description: 'Comprehensive Urdu sentiment analysis corpus covering news, social media, and reviews.',
    size: '1.8 GB',
    samples: '250K',
    license: 'MIT',
    tags: ['Sentiment', 'Urdu', 'NLP'],
  },
  {
    name: 'FraudGraph-PKR',
    description: 'Anonymized transaction graph data for financial fraud detection model training.',
    size: '12.6 GB',
    samples: '2M',
    license: 'CC BY-SA 4.0',
    tags: ['Finance', 'Fraud', 'Graph'],
  },
]

const tabs = [
  { id: 'projects', label: 'AI Projects', icon: <Cpu className="w-4 h-4" /> },
  { id: 'papers', label: 'Research Papers', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'datasets', label: 'Datasets', icon: <Database className="w-4 h-4" /> },
  { id: 'experiments', label: 'Experiments', icon: <FlaskConical className="w-4 h-4" /> },
]

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-cyan-ai/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider">
              RESEARCH HUB
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              Our <span className="gradient-text-cyan">Research</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              Explore projects, publications, and datasets from Raise Lab — advancing the state of the art in AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-6 sticky top-20 z-30 bg-navy/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-ai/15 text-cyan-ai border border-cyan-ai/30'
                    : 'text-slate-mid hover:text-slate-light hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SectionHeading label="Projects" title="AI Research" titleHighlight="Projects" align="left" />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {projects.map((p, i) => (
                    <ResearchCard key={p.title} {...p} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'papers' && (
              <motion.div
                key="papers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SectionHeading label="Publications" title="Research" titleHighlight="Papers" align="left" />
                <div className="space-y-6">
                  {papers.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-ai/20 transition-colors group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-grow">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {p.tags.map((t) => (
                              <span key={t} className="tag-badge">{t}</span>
                            ))}
                          </div>
                          <h3 className="font-orbitron text-base font-bold text-slate-light mb-1 group-hover:text-cyan-ai transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-xs text-slate-mid font-mono mb-2">
                            {p.authors.join(', ')} — {p.venue}
                          </p>
                          <p className="text-sm text-slate-mid leading-relaxed">{p.abstract}</p>
                        </div>
                        <div className="flex flex-row md:flex-col items-center gap-3 md:items-end">
                          <div className="flex items-center gap-1 text-purple-neon">
                            <Star className="w-4 h-4 fill-purple-neon" />
                            <span className="font-mono text-sm font-bold">{p.citations}</span>
                          </div>
                          <span className="font-mono text-xs text-slate-mid">{p.year}</span>
                          <a
                            href={p.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-cyan-ai hover:text-cyan-glow transition-colors"
                          >
                            arXiv <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'datasets' && (
              <motion.div
                key="datasets"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SectionHeading label="Open Data" title="Research" titleHighlight="Datasets" align="left" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {datasets.map((d, i) => (
                    <motion.div
                      key={d.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-neon/20 card-hover"
                    >
                      <Database className="w-8 h-8 text-purple-neon mb-4" />
                      <h3 className="font-orbitron text-sm font-bold text-slate-light mb-2">{d.name}</h3>
                      <p className="text-sm text-slate-mid mb-4 leading-relaxed">{d.description}</p>
                      <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-navy/50">
                        <div className="text-center">
                          <div className="font-mono text-xs text-purple-neon font-bold">{d.size}</div>
                          <div className="text-xs text-slate-mid mt-0.5">Size</div>
                        </div>
                        <div className="text-center">
                          <div className="font-mono text-xs text-purple-neon font-bold">{d.samples}</div>
                          <div className="text-xs text-slate-mid mt-0.5">Samples</div>
                        </div>
                        <div className="text-center">
                          <div className="font-mono text-xs text-cyan-ai font-bold text-[10px]">{d.license}</div>
                          <div className="text-xs text-slate-mid mt-0.5">License</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {d.tags.map((t) => (
                          <span key={t} className="tag-badge">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'experiments' && (
              <motion.div
                key="experiments"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SectionHeading label="Lab Notebook" title="Active" titleHighlight="Experiments" align="left" />
                <div className="glass-card rounded-2xl p-8 border border-white/5 text-center">
                  <FlaskConical className="w-12 h-12 text-cyan-ai mx-auto mb-4 opacity-50" />
                  <p className="text-slate-mid">Experiment tracking dashboard coming soon. Check back for live training runs and ablation studies.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
