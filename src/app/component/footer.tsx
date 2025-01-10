import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
} from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="sticky w-full bg-blue-900/50 text-lg text-blue-50 sm:text-lg">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="block items-center justify-between font-normal sm:flex">
          <div className="flex items-center justify-center gap-2 font-bold sm:justify-start">
            <p>Fait avec ❤️ par</p>
            <Link href="https://jeanrobertou.com">Jean Robertou</Link>
          </div>

          <div className="mt-4 flex items-center justify-center gap-x-2 sm:mt-0 sm:justify-end">
            <Link
              href="https://jeanrobertou.com"
              target="_blank"
              className="flex items-center justify-center"
            >
              <PiIdentificationBadge className="h-8 w-8" />
            </Link>
            <Link
              href="https://github.com/jean1591"
              target="_blank"
              className="flex items-center justify-center"
            >
              <PiGithubLogo className="h-8 w-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/robertoujean/"
              target="_blank"
              className="flex items-center justify-center"
            >
              <PiLinkedinLogo className="h-8 w-8" />
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-center font-bold">Jours fériés en</p>
          <div className="flex items-center justify-center space-x-8">
            <Link href="/jours-feries-2025">2025</Link>
            <Link href="/jours-feries-2026">2026</Link>
            <Link href="/jours-feries-2027">2027</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
