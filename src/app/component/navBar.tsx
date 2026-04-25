import Link from 'next/link'

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-primary text-xl font-bold tracking-tight"
        >
          Quand est le prochain jour férié ?
        </Link>

        <nav className="hidden sm:block">
          <Link
            href="/a-propos"
            className="text-on-surface-variant text-sm font-medium"
          >
            À propos
          </Link>
        </nav>
      </div>
    </header>
  )
}
