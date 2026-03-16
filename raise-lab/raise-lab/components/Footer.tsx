import Link from 'next/link'
import { Zap, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'

const navGroups = [
  {
    title: 'Research',
    links: [
      { label: 'AI Projects', href: '/research' },
      { label: 'Research Papers', href: '/research#papers' },
      { label: 'Datasets', href: '/research#datasets' },
      { label: 'Experiments', href: '/research#experiments' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Lab', href: '/community' },
      { label: 'Team', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Achievements', href: '/achievements' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Contact', href: '/contact' },
      { label: 'GitHub', href: 'https://github.com', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy/80 backdrop-blur-sm">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-ai/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 w-fit group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-ai to-purple-neon flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-lg leading-none gradient-text-cyan">RAISE</span>
                <span className="font-orbitron text-[10px] text-slate-mid tracking-[0.3em] leading-none mt-0.5">LAB</span>
              </div>
            </Link>

            <p className="text-slate-mid text-sm leading-relaxed max-w-xs mb-6">
              Advancing the frontiers of Artificial Intelligence, Machine Learning, and Deep Learning through
              collaborative research and innovation.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <Github className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
                { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />, href: 'mailto:contact@raiselab.ai', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-ai/20 text-slate-mid hover:text-cyan-ai transition-all border border-white/5 hover:border-cyan-ai/30 flex items-center justify-center"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-orbitron text-xs font-bold tracking-widest text-slate-light uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-mid hover:text-cyan-ai transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-mid hover:text-cyan-ai transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-mid text-xs font-mono">
            © {new Date().getFullYear()} Raise Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-mid text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  )
}
