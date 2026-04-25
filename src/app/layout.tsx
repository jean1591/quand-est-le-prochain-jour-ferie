import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { BottomNav } from './component/bottomNav'
import { Footer } from './component/footer'
import { Metadata } from 'next'
import { NavBar } from './component/navBar'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { classNames } from '@/utils'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
})

const metaDescription =
  "Retrouver la liste des prochains jours fériés Français ainsi que le nombre de jours jusqu'à ces derniers. Restez informé si le prochain jour ferié offre un week-end de 3 jours ou un pont."

export const metadata: Metadata = {
  title: 'Quand est le prochain jour férié ?',
  description: metaDescription,
  metadataBase: new URL('https://quand-est-le-prochain-jour-ferie.fr/'),
  openGraph: {
    title: 'Quand est le prochain jour férié ?',
    description: metaDescription,
    url: 'https://quand-est-le-prochain-jour-ferie.fr/',
    siteName: 'Quand est le prochain jour férié ?',
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://quand-est-le-prochain-jour-ferie.fr/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={classNames(
          plusJakartaSans.variable,
          plusJakartaSans.className,
          'flex min-h-screen flex-col bg-surface text-on-background'
        )}
      >
        <NavBar />
        <div className="flex-1 pb-16 md:pb-0">
          {children}
          <Analytics />
        </div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
