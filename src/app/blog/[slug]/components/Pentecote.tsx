import { CTA } from './CTA'
import { TLDR } from './TLDR'

export const Pentecote = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi la Pentecôte est fériée ?
      </h1>

      <TLDR text="La Pentecôte est un jour férié chrétien qui commémore la descente du Saint-Esprit sur les apôtres, marquant ainsi le début de l'Église chrétienne. Cette fête, célébrée 50 jours après Pâques, est symbolique de la diffusion du message chrétien." />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Les origines religieuses de la Pentecôte
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        La signification chrétienne
      </h3>
      <p>
        La Pentecôte trouve son origine dans un événement fondamental de la
        tradition chrétienne. Cinquante jours après Pâques, elle commémore la
        venue de l’Esprit Saint sur les apôtres, un moment considéré comme la
        naissance de l’Église chrétienne. Les apôtres, inspirés et guidés, se
        lancèrent dans leur mission d’évangélisation à travers le monde.
      </p>

      <p>
        Ce jour est donc particulièrement important pour les chrétiens, car il
        symbolise la transmission de la foi et l’unité des croyants. La
        Pentecôte, dérivée du grec "pentecostê" signifiant "cinquantième", est
        célébrée dans de nombreuses églises et rassemble les fidèles pour des
        offices et des prières.
      </p>

      <CTA />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Pourquoi la Pentecôte est-elle fériée en France ?
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une particularité française
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Pourquoi le lundi est-il férié ?</span>{' '}
          En France, c’est le lundi de Pentecôte qui est férié, une spécificité
          héritée de la tradition chrétienne. Cette journée supplémentaire
          permettait aux fidèles de prolonger les célébrations et de consacrer
          plus de temps à la réflexion spirituelle.
        </li>

        <li className="ml-4">
          <span className="font-medium">Les modifications récentes :</span> En
          2004, le gouvernement a transformé le lundi de Pentecôte en "journée
          de solidarité". Les salariés étaient invités à travailler sans
          rémunération pour financer des actions en faveur des personnes âgées.
          Cette décision, largement controversée, a marqué un tournant dans
          l’histoire de ce jour férié.
        </li>

        <li className="ml-4">
          <span className="font-medium">Un jour aujourd’hui rétabli :</span>{' '}
          Face aux critiques, le lundi de Pentecôte est redevenu férié pour la
          plupart des professions. Cependant, certaines entreprises et
          organisations choisissent encore de le travailler ou de le marquer
          différemment.
        </li>
      </ul>

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Une fête entre tradition et modernité
      </h2>

      <p>
        La Pentecôte, au-delà de sa signification religieuse, reste un moment
        fort dans le calendrier français. Son caractère férié, profondément
        ancré dans l’histoire, rappelle l’héritage culturel et spirituel de
        notre pays. Que l’on soit croyant ou non, elle constitue une pause
        bienvenue et une occasion de se reconnecter aux traditions locales ou
        familiales.
      </p>
    </div>
  )
}
