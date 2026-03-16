'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Send,
  Github,
  Upload,
  CheckCircle2,
  Brain,
  Zap,
  Globe,
  BookOpen,
  ArrowRight,
} from 'lucide-react'

const perks = [
  { icon: <Brain className="w-5 h-5" />, title: 'Research Access', desc: 'Join active research teams and contribute to published work' },
  { icon: <Globe className="w-5 h-5" />, title: 'Global Network', desc: 'Connect with AI researchers across 8+ universities' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'Learning Resources', desc: 'Exclusive papers, tutorials, and workshop recordings' },
  { icon: <Zap className="w-5 h-5" />, title: 'Compute Credits', desc: 'Access to shared GPU cluster and cloud credits' },
]

const interests = [
  'Computer Vision', 'NLP / LLMs', 'Reinforcement Learning',
  'Generative AI', 'MLOps', 'Data Science',
  'Robotics & Control', 'Healthcare AI', 'Edge AI',
]

export default function CommunityPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleInterest = (i: string) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan-ai/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider">
              <Users className="w-3.5 h-3.5" />
              OPEN APPLICATIONS
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              Join <span className="gradient-text-cyan">Raise Lab</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              Become part of Pakistan's most innovative AI research community. We welcome students,
              researchers, and engineers at all skill levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 border border-cyan-ai/10 hover:border-cyan-ai/25 transition-colors text-center"
              >
                <div className="text-cyan-ai mx-auto mb-3 w-fit">{p.icon}</div>
                <div className="font-orbitron text-xs font-bold text-slate-light mb-1">{p.title}</div>
                <div className="text-xs text-slate-mid leading-relaxed">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-12 text-center border border-green-400/20"
              >
                <div className="w-20 h-20 rounded-full bg-green-400/15 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="font-orbitron text-2xl font-bold text-slate-light mb-3">
                  Application Received!
                </h2>
                <p className="text-slate-mid mb-8 leading-relaxed">
                  Welcome to the waitlist! Our team reviews applications every two weeks.
                  You'll hear from us at the email you provided.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost px-6 py-3 rounded-xl text-sm font-orbitron tracking-wider inline-flex items-center gap-2"
                >
                  Submit Another
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5">
                  <h2 className="font-orbitron text-xl font-bold text-slate-light mb-2">
                    Apply to Join
                  </h2>
                  <p className="text-sm text-slate-mid mb-8">
                    Fill out the form below and our team will review your application.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-mid mb-1.5 font-mono">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-mid mb-1.5 font-mono">Email *</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* University */}
                    <div>
                      <label className="block text-xs text-slate-mid mb-1.5 font-mono">University / Institution *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. University of Engineering & Technology"
                        className="form-input"
                      />
                    </div>

                    {/* Research interests */}
                    <div>
                      <label className="block text-xs text-slate-mid mb-3 font-mono">
                        Research Interests * <span className="text-slate-mid/50">(select all that apply)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                              selected.includes(interest)
                                ? 'bg-cyan-ai/20 border-cyan-ai/50 text-cyan-ai'
                                : 'bg-white/5 border-white/10 text-slate-mid hover:border-white/20'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* GitHub */}
                    <div>
                      <label className="block text-xs text-slate-mid mb-1.5 font-mono">
                        GitHub Profile
                      </label>
                      <div className="relative">
                        <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-mid" />
                        <input
                          type="url"
                          placeholder="https://github.com/username"
                          className="form-input pl-10"
                        />
                      </div>
                    </div>

                    {/* Motivation */}
                    <div>
                      <label className="block text-xs text-slate-mid mb-1.5 font-mono">
                        Why do you want to join Raise Lab? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your background, goals, and what you'd like to contribute..."
                        className="form-input resize-none"
                      />
                    </div>

                    {/* CV upload */}
                    <div>
                      <label className="block text-xs text-slate-mid mb-1.5 font-mono">
                        Upload CV (optional)
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-white/15 hover:border-cyan-ai/30 cursor-pointer transition-colors group bg-navy/30">
                        <Upload className="w-5 h-5 text-slate-mid group-hover:text-cyan-ai transition-colors" />
                        <div>
                          <div className="text-sm text-slate-mid group-hover:text-slate-light transition-colors">
                            Click to upload PDF or DOCX
                          </div>
                          <div className="text-xs text-slate-mid/50">Max 5MB</div>
                        </div>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading || selected.length === 0}
                      className="w-full btn-primary relative px-6 py-4 rounded-xl text-white font-semibold font-orbitron text-sm tracking-wider flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="relative z-10">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Submit Application</span>
                          <Send className="w-4 h-4 relative z-10" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
