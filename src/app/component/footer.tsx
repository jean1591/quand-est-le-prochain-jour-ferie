import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
} from "react-icons/pi";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className="sticky top-[100vh] h-24 w-full bg-blue-900/50">
      <div className="h-full flex items-center justify-between px-4 sm:px-0 mx-auto max-w-5xl text-indigo-50 text-lg font-normal">
        <p className="text-left text-base sm:text-lg">
          Fait avec ❤️ par Jean Robertou
        </p>

        <div className="flex items-center justify-center sm:justify-end gap-x-2">
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
    </div>
  );
};
