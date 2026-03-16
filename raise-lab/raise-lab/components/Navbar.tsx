'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-navy/80 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-ai to-purple-neon flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-ai to-purple-neon opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-lg leading-none gradient-text-cyan">
                  RAISE
                </span>
                <span className="font-orbitron text-[10px] text-slate-mid tracking-[0.3em] leading-none mt-0.5">
                  LAB
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md group ${
                    pathname === link.href
                      ? 'text-cyan-ai'
                      : 'text-slate-mid hover:text-slate-light'
                  }`}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-cyan-ai/10 rounded-md border border-cyan-ai/20"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/community"
                className="hidden sm:flex btn-primary relative z-10 px-5 py-2.5 rounded-lg text-sm font-semibold text-white font-orbitron tracking-wider"
              >
                <span className="relative z-10">Join Lab</span>
              </Link>

              <button
                className="lg:hidden relative p-2 rounded-lg text-slate-mid hover:text-cyan-ai transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden glass-card border-b border-white/5 px-4 py-6"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-cyan-ai/10 text-cyan-ai border border-cyan-ai/20'
                        : 'text-slate-mid hover:bg-white/5 hover:text-slate-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link
                  href="/community"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-4 btn-primary px-5 py-3 rounded-lg text-center text-sm font-semibold text-white font-orbitron tracking-wider"
                >
                  <span className="relative z-10">Join Raise Lab</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
