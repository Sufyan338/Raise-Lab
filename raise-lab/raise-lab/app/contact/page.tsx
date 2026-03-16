'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, Github, Twitter, Linkedin, CheckCircle2, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              REACH OUT
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-slate-light mb-6">
              Get in <span className="gradient-text-cyan">Touch</span>
            </h1>
            <p className="text-slate-mid text-xl max-w-2xl mx-auto leading-relaxed">
              Have a research idea, collaboration proposal, or just want to say hello?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-6 border border-white/5"
              >
                <h3 className="font-orbitron text-sm font-bold text-slate-light mb-5">Contact Info</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'contact@raiselab.ai' },
                    { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: 'Lahore, Pakistan' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-ai/10 border border-cyan-ai/20 flex items-center justify-center text-cyan-ai flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-slate-mid">{item.label}</div>
                        <div className="text-sm text-slate-light">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6 border border-white/5"
              >
                <h3 className="font-orbitron text-sm font-bold text-slate-light mb-5">Follow Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Github className="w-4 h-4" />, label: 'GitHub', handle: '@raise-lab-ai', href: 'https://github.com', color: 'hover:text-slate-light' },
                    { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', handle: '@RaiseLabAI', href: 'https://twitter.com', color: 'hover:text-sky-400' },
                    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', handle: 'Raise Lab', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-slate-mid ${s.color} group`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-xs text-slate-mid">{s.label}</div>
                        <div className="text-sm font-mono">{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Status */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl p-5 border border-green-400/15"
              >
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono">Response Status</span>
                </div>
                <p className="text-xs text-slate-mid">
                  We typically respond within <span className="text-slate-light">24–48 hours</span> on business days.
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-3xl p-12 text-center border border-green-400/20 h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-400/15 border border-green-400/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="font-orbitron text-xl font-bold text-slate-light mb-2">Message Sent!</h2>
                    <p className="text-slate-mid mb-6 text-sm">We'll get back to you within 24–48 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-ghost px-6 py-2.5 rounded-xl text-sm font-orbitron"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="glass-card rounded-3xl p-8 border border-white/5">
                      <h2 className="font-orbitron text-lg font-bold text-slate-light mb-6">
                        Send a Message
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-slate-mid mb-1.5 font-mono">Name *</label>
                            <input required type="text" placeholder="Your name" className="form-input" />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-mid mb-1.5 font-mono">Email *</label>
                            <input required type="email" placeholder="your@email.com" className="form-input" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-mid mb-1.5 font-mono">Subject</label>
                          <input type="text" placeholder="Research collaboration, question, etc." className="form-input" />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-mid mb-1.5 font-mono">Message *</label>
                          <textarea
                            required
                            rows={6}
                            placeholder="Tell us what's on your mind..."
                            className="form-input resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full btn-primary relative px-6 py-4 rounded-xl text-white font-semibold font-orbitron text-sm tracking-wider flex items-center justify-center gap-2.5 disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="relative z-10">Sending...</span>
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Send Message</span>
                              <Send className="w-4 h-4 relative z-10" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
