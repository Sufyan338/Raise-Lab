'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, ArrowRight, Tag, Flame } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const posts = [
  {
    slug: 'understanding-attention-mechanisms',
    title: 'Understanding Attention Mechanisms in Transformers',
    excerpt: 'A deep dive into how self-attention enables transformers to capture long-range dependencies and why it revolutionized NLP and beyond.',
    author: 'Bilal Ahmed',
    date: 'Feb 28, 2025',
    readTime: '12 min',
    category: 'Deep Learning',
    tags: ['Transformers', 'Attention', 'NLP'],
    featured: true,
    color: 'cyan',
  },
  {
    slug: 'diffusion-models-explained',
    title: 'Diffusion Models from Scratch: Math to Code',
    excerpt: 'Breaking down the DDPM paper with complete PyTorch implementations, intuitive explanations, and visualizations of the denoising process.',
    author: 'Hassan Raza',
    date: 'Feb 14, 2025',
    readTime: '18 min',
    category: 'Generative AI',
    tags: ['Diffusion', 'PyTorch', 'Generative'],
    featured: false,
    color: 'purple',
  },
  {
    slug: 'graph-neural-networks-guide',
    title: 'Graph Neural Networks: A Practical Guide',
    excerpt: 'Everything you need to know about GNNs — from message passing to graph transformers, with hands-on examples using PyG.',
    author: 'Omar Farooq',
    date: 'Jan 30, 2025',
    readTime: '15 min',
    category: 'Machine Learning',
    tags: ['GNN', 'PyTorch Geometric', 'Graphs'],
    featured: false,
    color: 'cyan',
  },
  {
    slug: 'mlops-production-ml',
    title: 'MLOps Best Practices for Production ML Systems',
    excerpt: 'A comprehensive guide to deploying, monitoring, and maintaining machine learning models in production with real-world case studies.',
    author: 'Zara Khan',
    date: 'Jan 15, 2025',
    readTime: '20 min',
    category: 'MLOps',
    tags: ['MLOps', 'Docker', 'Kubernetes', 'MLflow'],
    featured: false,
    color: 'purple',
  },
  {
    slug: 'building-rag-systems',
    title: 'Building Production-Ready RAG Systems',
    excerpt: 'From naive RAG to advanced retrieval strategies — chunking, embeddings, reranking, and evaluation for real-world deployments.',
    author: 'Bilal Ahmed',
    date: 'Dec 22, 2024',
    readTime: '14 min',
    category: 'LLMs',
    tags: ['RAG', 'LLM', 'LangChain', 'Embeddings'],
    featured: false,
    color: 'cyan',
  },
  {
    slug: 'medical-image-classification',
    title: 'Medical Image Classification with ViT Fine-Tuning',
    excerpt: 'Step-by-step walkthrough of our published research on fine-tuning Vision Transformers for retinal disease detection.',
    author: 'Dr. Aisha Malik',
    date: 'Dec 5, 2024',
    readTime: '10 min',
    category: 'Computer Vision',
    tags: ['ViT', 'Medical AI', 'Fine-tuning'],
    featured: false,
    color: 'purple',
  },
]

const categories = ['All', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'Generative AI', 'LLMs', 'Machine Learning']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory))

  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || activeCategory !== 'All')

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider">
              RESEARCH BLOG
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              AI <span className="gradient-text-cyan">Insights</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              Deep technical articles, tutorials, and research breakdowns from the Raise Lab team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featured && activeCategory === 'All' && (
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-ai/20 hover:border-cyan-ai/40 transition-all card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-cyan-ai/5 blur-[80px]" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">
                        <Flame className="w-3 h-3" />
                        Featured
                      </span>
                      <span className="tag-badge">{featured.category}</span>
                    </div>

                    <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-slate-light mb-4 group-hover:text-cyan-ai transition-colors leading-snug max-w-3xl">
                      {featured.title}
                    </h2>
                    <p className="text-slate-mid text-lg max-w-2xl mb-6 leading-relaxed">{featured.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="text-sm text-slate-mid">By <span className="text-slate-light">{featured.author}</span></div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-mid">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime} read
                      </div>
                      <div className="text-sm text-slate-mid">{featured.date}</div>
                      <div className="ml-auto flex items-center gap-2 text-cyan-ai font-medium text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section className="pb-8 sticky top-20 z-30 bg-navy/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-ai/15 text-cyan-ai border border-cyan-ai/30'
                    : 'text-slate-mid hover:text-slate-light bg-white/5 hover:bg-white/10'
                }`}
              >
                <Tag className="w-3 h-3" />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'All' ? rest : filtered).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div
                    className={`glass-card rounded-2xl p-6 h-full flex flex-col card-hover border transition-colors ${
                      post.color === 'cyan'
                        ? 'border-white/5 hover:border-cyan-ai/25'
                        : 'border-white/5 hover:border-purple-neon/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="tag-badge">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-mid">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-orbitron text-sm font-bold text-slate-light mb-2 group-hover:text-cyan-ai transition-colors leading-snug flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-mid leading-relaxed mb-4">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-mid font-mono"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="text-xs text-slate-mid">
                        <span className="text-slate-light">{post.author}</span> · {post.date}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-mid group-hover:text-cyan-ai group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
