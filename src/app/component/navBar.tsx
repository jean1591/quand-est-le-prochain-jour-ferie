import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="h-20 bg-blue-50/25 text-xl font-normal">
      <div className="h-full px-4 mx-auto max-w-5xl flex items-center justify-center sm:justify-between font-bold leading-none tracking-tight">
        <Link href="/">Quand est le prochain jour férié ?</Link>

        <div className="hidden sm:block">
          <Link href="/a-propos" className="border-b-2 border-blue-900">
            À propos
          </Link>
        </div>
      </div>
    </div>
  );
};
