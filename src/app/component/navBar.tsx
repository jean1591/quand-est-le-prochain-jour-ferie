import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="h-20 bg-blue-900">
      <div className="h-full px-4 sm:px-0 mx-auto max-w-5xl flex items-center justify-center sm:justify-between">
        <Link
          href="/"
          className="text-xl sm:text-4xl font-normal text-blue-50"
        >
            Quand est le prochain jour férié ?
        </Link>

        <div className="hidden sm:block">
          <Link
            href="/a-propos"
            className="text-blue-50 border-b border-blue-50"
          >
            À propos
          </Link>
        </div>
      </div>
    </div>
  );
};
