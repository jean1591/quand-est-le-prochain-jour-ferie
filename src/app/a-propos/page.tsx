import Link from "next/link";

export default function About() {
  return (
    <div className="px-4 mx-auto max-w-5xl">
      <h1 className="text-xl sm:text-4xl font-normal">À propos</h1>

      <p className="mt-4 text-xl">
        Retrouvez tous les jours fériés Français sur un seul et même site.
      </p>

      <p className="mt-12 text-3xl">Concept</p>
      <p className="mt-4 text-xl">
        Basé sur une idée originale de{" "}
        <Link
          target="_blank"
          className="border-b border-blue-900"
          href="https://pcraig.ca/"
        >
          Paul Craig
        </Link>
        , découvert sur{" "}
        <Link
          target="_blank"
          className="border-b border-blue-900"
          href="https://canada-holidays.ca/"
        >
          canada-holidays.ca
        </Link>
        .
      </p>

      <div className="flex">
        <p className="mt-12 text-3xl">Derrière le clavier 👨🏽‍💻</p>
      </div>
      <p className="mt-4 text-xl">
        Je m'appelle{" "}
        <Link
          target="_blank"
          className="border-b border-blue-900"
          href="https://jeanrobertou.com/"
        >
          Jean Robertou
        </Link>
        , je fais de l'ordinateur (en tant que lead développeur web) et crée des
        apps web pour m'amuser.
      </p>

      <p className="text-xl">
        Si le code de ce site vous intéresse, c'est par{" "}
        <Link
          target="_blank"
          className="border-b border-blue-900"
          href="https://github.com/jean1591/quand-est-le-prochain-jour-ferie/"
        >
          ici
        </Link>
        .
      </p>
    </div>
  );
}
