# 🤖 Raise Lab — AI Research Community Website

> A production-ready, futuristic AI research community platform built with Next.js 14, Three.js, Framer Motion, and MongoDB.

![Raise Lab](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-cyan?logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-8-green?logo=mongodb)

---

## ✨ Features

- 🧠 **3D Neural Network Animation** — Canvas-based animated neural network with glowing nodes and signal particles
- ✨ **Floating Particle System** — Interactive particles that react to mouse movement with light trails
- 🎨 **Glassmorphism UI** — Deep navy theme with cyan/purple neon accents and frosted glass cards
- 📊 **Research Dashboard** — Recharts analytics showing project growth, member trends, GitHub activity
- 🔄 **Framer Motion Animations** — Smooth page transitions, scroll reveals, and micro-interactions
- 📱 **Fully Responsive** — Mobile-first design that works on all screen sizes
- 🗃️ **MongoDB Backend** — Full Mongoose schemas for all data models
- 🔌 **REST API Routes** — Next.js API routes for contact, community, projects, and members

---

## 📁 Project Structure

```
raise-lab/
├── app/
│   ├── layout.tsx              # Root layout with fonts & global providers
│   ├── page.tsx                # Homepage (Hero + Stats + Research + CTA)
│   ├── about/page.tsx          # Team profiles and mission
│   ├── research/page.tsx       # Projects, papers, datasets
│   ├── achievements/page.tsx   # Animated vertical timeline
│   ├── certifications/page.tsx # Certification grid
│   ├── blog/page.tsx           # Article listing with categories
│   ├── community/page.tsx      # Application form
│   ├── dashboard/page.tsx      # Analytics charts
│   ├── contact/page.tsx        # Contact form + social links
│   └── api/
│       ├── contact/route.ts    # POST contact messages
│       ├── community/route.ts  # POST/GET applications
│       ├── projects/route.ts   # GET/POST projects
│       └── members/route.ts    # GET/POST members
├── components/
│   ├── Navbar.tsx              # Sticky navbar with mobile menu
│   ├── Footer.tsx              # Footer with links and social
│   ├── three/
│   │   ├── NeuralNetwork.tsx   # Canvas neural network animation
│   │   └── ParticleField.tsx   # Interactive particle system
│   └── ui/
│       ├── AnimatedCounter.tsx # Animated number counters
│       ├── SectionHeading.tsx  # Reusable section headers
│       ├── ResearchCard.tsx    # Project/research cards
│       └── TeamCard.tsx        # Team member profiles
├── models/
│   └── index.ts                # All Mongoose schemas
├── lib/
│   └── db.ts                   # MongoDB connection utility
├── styles/
│   └── globals.css             # Tailwind + custom CSS
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone or download the project
cd raise-lab

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and other settings

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#0F172A` | Page background |
| `--color-cyan` | `#06B6D4` | Primary accent |
| `--color-purple` | `#8B5CF6` | Secondary accent |
| Font: Orbitron | `--font-orbitron` | All headings |
| Font: Inter | `--font-inter` | Body text |
| Font: JetBrains Mono | `--font-jetbrains` | Code, labels |

---

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set environment variables in the Vercel dashboard matching `.env.example`.

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage with 3D neural network hero |
| `/about` | Mission, vision, team profiles |
| `/research` | Projects, papers, datasets, experiments |
| `/achievements` | Animated timeline of milestones |
| `/certifications` | Team certification gallery |
| `/blog` | AI research articles |
| `/community` | Join application form |
| `/dashboard` | Research analytics |
| `/contact` | Contact form + social |

---

## 🤝 Contributing

Raise Lab is open to contributions! Fork the repo, make your changes, and submit a PR.

---

## 📜 License

MIT © 2025 Raise Lab
