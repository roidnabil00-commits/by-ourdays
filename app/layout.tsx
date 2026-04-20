import type { Metadata } from 'next'
import { Cormorant_Garamond, Barlow } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ourdays — Workspace Instrument',
  description: 'Lilin aromaterapi premium dalam wadah gypsum handmade. Untuk pria yang sedang membangun sesuatu — dan tau kapan harus menepi.',
  keywords: ['ourdays', 'lilin aromaterapi', 'scented candle', 'workspace', 'premium candle indonesia'],
  openGraph: {
    title: 'Ourdays — Workspace Instrument',
    description: 'Silence the noise. Own your days.',
    url: 'https://byourdays.com',
    siteName: 'Ourdays',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${barlow.variable}`}>
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  )
}