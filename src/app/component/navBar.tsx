import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="h-20 bg-blue-900 text-xl font-normal text-blue-50">
      <div className="h-full px-4 sm:px-0 mx-auto max-w-5xl flex items-center justify-center sm:justify-between">
        <Link
          href="/"
        >
            Quand est le prochain jour férié ?
        </Link>

        <div className="hidden sm:block">
          <Link
            href="/a-propos"
            className="border-b border-blue-50"
          >
            À propos
          </Link>
        </div>
      </div>
    </div>
  );
};
