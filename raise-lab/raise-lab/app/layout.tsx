import type { Metadata } from 'next'
import { Orbitron, Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Raise Lab — AI Research Community',
    template: '%s | Raise Lab',
  },
  description:
    'Raise Lab is an advanced AI, Machine Learning, and Deep Learning research community advancing the frontiers of artificial intelligence.',
  keywords: [
    'AI research',
    'machine learning',
    'deep learning',
    'neural networks',
    'research community',
    'Raise Lab',
  ],
  authors: [{ name: 'Raise Lab Team' }],
  creator: 'Raise Lab',
  openGraph: {
    title: 'Raise Lab — AI Research Community',
    description: 'Advancing AI, Machine Learning & Deep Learning Research',
    type: 'website',
    locale: 'en_US',
    siteName: 'Raise Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raise Lab',
    description: 'Advancing AI, Machine Learning & Deep Learning Research',
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#0F172A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-navy text-slate-light antialiased noise-overlay">
        <div className="relative min-h-screen">
          {/* Background ambient glows */}
          <div
            aria-hidden
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          >
            <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-ai/5 blur-[120px]" />
            <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-neon/5 blur-[120px]" />
            <div className="absolute bottom-0 left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-ai/3 blur-[100px]" />
          </div>

          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
