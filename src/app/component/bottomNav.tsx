import Link from 'next/link'

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-outline-variant bg-white/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-around px-4 py-2">
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 px-6 py-1 text-primary"
        >
          <span className="text-xl">🏖️</span>
          <span className="text-label-sm font-semibold">Holidays</span>
        </Link>
      </div>
    </nav>
  )
}
