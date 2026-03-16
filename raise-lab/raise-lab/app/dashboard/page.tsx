'use client'

import { motion } from 'framer-motion'
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts'
import { Brain, Users, BookOpen, GitBranch, TrendingUp, Activity, Cpu, Zap } from 'lucide-react'

const projectsOverTime = [
  { month: 'Mar', projects: 3, papers: 0 },
  { month: 'Jun', projects: 7, papers: 1 },
  { month: 'Sep', projects: 12, papers: 2 },
  { month: 'Dec', projects: 19, papers: 3 },
  { month: 'Mar', projects: 27, papers: 5 },
  { month: 'Jun', projects: 34, papers: 9 },
  { month: 'Sep', projects: 38, papers: 14 },
  { month: 'Now', projects: 42, papers: 18 },
]

const memberGrowth = [
  { month: 'Mar 23', members: 12 },
  { month: 'Jun 23', members: 18 },
  { month: 'Sep 23', members: 25 },
  { month: 'Dec 23', members: 31 },
  { month: 'Mar 24', members: 42 },
  { month: 'Jun 24', members: 54 },
  { month: 'Sep 24', members: 61 },
  { month: 'Mar 25', members: 67 },
]

const techStack = [
  { name: 'PyTorch', value: 34 },
  { name: 'TensorFlow', value: 18 },
  { name: 'HuggingFace', value: 22 },
  { name: 'Scikit-learn', value: 15 },
  { name: 'JAX', value: 11 },
]

const PIE_COLORS = ['#06B6D4', '#8B5CF6', '#22D3EE', '#A78BFA', '#0891B2']

const githubActivity = [
  { day: 'Mon', commits: 12 },
  { day: 'Tue', commits: 28 },
  { day: 'Wed', commits: 19 },
  { day: 'Thu', commits: 34 },
  { day: 'Fri', commits: 41 },
  { day: 'Sat', commits: 15 },
  { day: 'Sun', commits: 8 },
]

const kpis = [
  { label: 'Active Projects', value: '42', change: '+6 this month', icon: <Brain className="w-5 h-5" />, color: 'cyan' },
  { label: 'Total Members', value: '67', change: '+3 this week', icon: <Users className="w-5 h-5" />, color: 'purple' },
  { label: 'Publications', value: '18', change: '+2 this quarter', icon: <BookOpen className="w-5 h-5" />, color: 'cyan' },
  { label: 'Repositories', value: '124', change: '+12 this month', icon: <GitBranch className="w-5 h-5" />, color: 'purple' },
]

const TooltipStyle = {
  contentStyle: {
    background: 'rgba(15, 23, 42, 0.95)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    borderRadius: '12px',
    color: '#E2E8F0',
    fontSize: '12px',
    fontFamily: 'var(--font-jetbrains)',
  },
}

export default function DashboardPage() {
  return (
    <div className="pt-20">
      <section className="relative py-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-cyan-ai/10 border border-cyan-ai/30 text-cyan-ai text-xs font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  LIVE ANALYTICS
                </div>
                <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-light">
                  Research <span className="gradient-text-cyan">Dashboard</span>
                </h1>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Systems Online
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card rounded-2xl p-5 border ${
                  kpi.color === 'cyan' ? 'border-cyan-ai/15' : 'border-purple-neon/15'
                } card-hover`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={kpi.color === 'cyan' ? 'text-cyan-ai' : 'text-purple-neon'}>
                    {kpi.icon}
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div
                  className={`font-orbitron text-3xl font-bold mb-1 ${
                    kpi.color === 'cyan' ? 'text-cyan-ai' : 'text-purple-neon'
                  }`}
                >
                  {kpi.value}
                </div>
                <div className="text-xs text-slate-mid uppercase tracking-wider mb-1">{kpi.label}</div>
                <div className="text-xs text-green-400 font-mono">{kpi.change}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts row 1 */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Area chart - projects & papers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-card rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-orbitron text-sm font-bold text-slate-light">Growth Over Time</h3>
                <p className="text-xs text-slate-mid mt-0.5">Projects & publications since founding</p>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-ai">
                  <span className="w-3 h-0.5 bg-cyan-ai rounded" />
                  Projects
                </span>
                <span className="flex items-center gap-1.5 text-purple-neon">
                  <span className="w-3 h-0.5 bg-purple-neon rounded" />
                  Papers
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={projectsOverTime}>
                <defs>
                  <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPapers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...TooltipStyle} />
                <Area type="monotone" dataKey="projects" stroke="#06B6D4" strokeWidth={2} fill="url(#colorProjects)" />
                <Area type="monotone" dataKey="papers" stroke="#8B5CF6" strokeWidth={2} fill="url(#colorPapers)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie chart - tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6 border border-white/5"
          >
            <h3 className="font-orbitron text-sm font-bold text-slate-light mb-1">Tech Stack</h3>
            <p className="text-xs text-slate-mid mb-4">Framework usage across projects</p>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={techStack}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {techStack.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip {...TooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {techStack.map((t, i) => (
                <div key={t.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                    <span className="text-slate-mid">{t.name}</span>
                  </div>
                  <span className="font-mono text-slate-light">{t.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts row 2 */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Member growth line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-purple-neon" />
              <h3 className="font-orbitron text-sm font-bold text-slate-light">Member Growth</h3>
            </div>
            <p className="text-xs text-slate-mid mb-4">Community growth since founding</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={memberGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: '#94A3B8', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...TooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#8B5CF6"
                  strokeWidth={2.5}
                  dot={{ fill: '#8B5CF6', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: '#A78BFA' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* GitHub activity bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-1">
              <Cpu className="w-4 h-4 text-cyan-ai" />
              <h3 className="font-orbitron text-sm font-bold text-slate-light">GitHub Activity</h3>
            </div>
            <p className="text-xs text-slate-mid mb-4">Commits per day this week</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={githubActivity} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="day" tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...TooltipStyle} />
                <Bar dataKey="commits" fill="#06B6D4" radius={[4, 4, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
