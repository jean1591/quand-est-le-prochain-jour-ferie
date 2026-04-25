import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
} from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="space-y-2">
            <p className="text-on-surface flex items-center gap-2 font-bold">
              Quand est le prochain jour férié
            </p>
            <div className="flex gap-1 text-sm text-gray-500">
              <p>Fait avec ❤️ par</p>
              <Link href="https://jeanrobertou.com" className="hover:underline">
                Jean Robertou
              </Link>
            </div>
          </div>

          <div className="text-on-surface-variant flex items-center justify-center space-x-8">
            <Link
              href="/jours-feries-2025"
              className="hover:text-primary hover:underline"
            >
              2025
            </Link>
            <Link
              href="/jours-feries-2026"
              className="hover:text-primary hover:underline"
            >
              2026
            </Link>
            <Link
              href="/jours-feries-2027"
              className="hover:text-primary hover:underline"
            >
              2027
            </Link>
          </div>

          <div className="text-on-surface-variant flex items-center gap-x-2">
            <Link
              href="https://jeanrobertou.com"
              target="_blank"
              className="hover:text-primary flex items-center justify-center"
            >
              <PiIdentificationBadge className="h-8 w-8" />
            </Link>
            <Link
              href="https://github.com/jean1591"
              target="_blank"
              className="hover:text-primary flex items-center justify-center"
            >
              <PiGithubLogo className="h-8 w-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/robertoujean/"
              target="_blank"
              className="hover:text-primary flex items-center justify-center"
            >
              <PiLinkedinLogo className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
