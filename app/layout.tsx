import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ApplyModal } from '@/components/apply-modal'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'B.M. Study Abroad Consultancy - Best Education Consultancy in Nepal',
  description:
    'B.M. Study Abroad Consultancy is a leading education consultancy in Nepal for USA, UK, Australia, Canada, New Zealand, Ireland, and Germany. Best IELTS, PTE, TOEFL, SAT, GRE, and GMAT classes in Kathmandu.',
  icons: {
    icon: '/images/bm-logo.png',
    apple: '/images/bm-logo.png',
  },
}

export const viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ApplyModal />
        <Analytics />
      </body>
    </html>
  )
}
