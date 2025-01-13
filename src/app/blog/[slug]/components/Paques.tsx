import { CTA } from './CTA'
import { TLDR } from './TLDR'

export const Paques = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi le Lundi de Pâques est férié ?
      </h1>

      <TLDR text="Le Lundi de Pâques est un jour férié en France pour commémorer la résurrection de Jésus-Christ, un événement majeur dans le christianisme. Il clôture les festivités pascales et marque un temps de réflexion et de célébration spirituelle pour les croyants." />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Des origines religieuses
      </h2>
      <p>
        Le Lundi de Pâques trouve ses racines dans l’idée d’accorder du temps
        supplémentaire pour célébrer Pâques avec la famille et la communauté.
      </p>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          Dans la tradition chrétienne, cette journée permettait aux croyants de
          poursuivre les festivités liturgiques ou de rendre visite à leurs
          proches après la grande messe pascale.
        </li>
        <li className="ml-4">
          Dans la vie quotidienne, ce jour a pris une signification plus laïque
          : une occasion pour les familles de se réunir, de partager un repas ou
          simplement de se reposer après les célébrations du dimanche.
        </li>
      </ul>

      <CTA />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Le Lundi de Pâques à l'international
      </h2>
      <p>
        Si le Lundi de Pâques est férié dans de nombreux pays comme la France,
        l’Allemagne ou encore la Suisse, ce n’est pas le cas partout dans le
        monde. Voici quelques raisons pour lesquelles certains pays n’ont pas
        intégré ce jour à leur calendrier férié :
      </p>
      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">États-Unis</span>: bien que Pâques soit
          une fête très importante pour les chrétiens américains, elle n’est pas
          associée à un jour férié supplémentaire. Les traditions se concentrent
          principalement sur le dimanche de Pâques, et le lundi est un jour de
          travail normal.
        </li>
        <li className="ml-4">
          <span className="font-medium">Espagne</span>: dans certaines régions
          d’Espagne, Pâques est célébrée avec ferveur, mais le Lundi de Pâques
          n’est pas férié à l’échelle nationale. Cela reflète des choix
          régionaux et une volonté de limiter le nombre de jours fériés
          officiels.
        </li>
      </ul>

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Un jour férié chargé de sens
      </h2>

      <p>
        Le Lundi de Pâques, avec ses origines religieuses et son évolution
        historique, est bien plus qu’un simple jour de repos. C’est une journée
        qui reflète l’histoire, les traditions et les valeurs de nombreuses
        cultures. Si ce jour est férié chez vous, profitez-en pour réfléchir à
        son importance, pour partager des moments avec vos proches ou simplement
        pour savourer une pause bien méritée dans votre quotidien.
      </p>
    </div>
  )
}
