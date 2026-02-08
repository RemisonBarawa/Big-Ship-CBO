import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Big Ship Organization - Community Empowerment & Environmental Conservation',
  description: 'Big Ship CBO is a community empowerment organization focused on environmental conservation, waste management, and youth empowerment in Mombasa County, Kenya.',
  icons: {
    icon: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg',
    shortcut: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg',
    apple: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg',
  },
  openGraph: {
    title: 'Big Ship Organization - Community Empowerment & Environmental Conservation',
    description: 'Big Ship CBO is a community empowerment organization focused on environmental conservation, waste management, and youth empowerment in Mombasa County, Kenya.',
    url: 'https://yourwebsite.com', // Replace with your actual domain
    siteName: 'Big Ship Organization',
    images: [
      {
        url: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg',
        width: 1200,
        height: 630,
        alt: 'Big Ship Organization Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Ship Organization - Community Empowerment & Environmental Conservation',
    description: 'Big Ship CBO is a community empowerment organization focused on environmental conservation, waste management, and youth empowerment in Mombasa County, Kenya.',
    images: ['https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="bigship-theme">
          <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Animated background blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" />
              <div className="absolute top-1/2 -left-40 w-96 h-96 bg-ocean-300/20 dark:bg-ocean-500/10 rounded-full blur-3xl animate-float-delayed" />
              <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}