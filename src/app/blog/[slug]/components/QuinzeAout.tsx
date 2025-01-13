import { CTA } from './CTA'
import { TLDR } from './TLDR'

export const QuinzeAout = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi le 15 août est férié ?
      </h1>

      <TLDR text="Le 15 août est férié pour célébrer l'Assomption de la Vierge Marie, un événement important dans la foi chrétienne. Ce jour marque la montée au ciel de la Vierge Marie, un symbole d'espoir pour les croyants." />

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Les origines religieuses du 15 août
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        L’Assomption de la Vierge Marie
      </h3>

      <p>
        Le 15 août célèbre l’Assomption de la Vierge Marie, un événement central
        pour de nombreux chrétiens. Cette fête marque l’élévation de Marie, mère
        de Jésus, au ciel. Si elle n’est pas mentionnée explicitement dans les
        textes bibliques, cette croyance est enracinée dans les traditions
        chrétiennes depuis des siècles.
      </p>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une fête ancrée dans l’histoire
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Les premières célébrations</span> : dès
          le Moyen Âge, le 15 août était une journée de rassemblement spirituel
          marquée par des messes et des processions.
        </li>
        <li className="ml-4">
          <span className="font-medium">Le rôle de Louis XIII</span> : en 1638,
          le roi Louis XIII consacra la France à la Vierge Marie. Cette décision
          renforça l’importance de l’Assomption dans le calendrier religieux et
          culturel français.
        </li>
      </ul>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Pourquoi le 15 août est-il un jour férié en France ?
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une décision historique
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Un héritage chrétien</span> : le 15 août
          est resté férié grâce à l’influence durable de la religion sur la
          société française, même après l’instauration de la laïcité.
        </li>
        <li className="ml-4">
          <span className="font-medium">
            Napoléon et le rétablissement du férié
          </span>{' '}
          : en 1806, Napoléon réinstaure cette journée de repos, reconnaissant
          son importance religieuse et sociale.
        </li>
      </ul>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Le 15 août en France aujourd’hui : entre tradition et loisirs
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Les célébrations religieuses
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Messes et processions</span> : de
          nombreuses églises organisent encore des cérémonies pour honorer la
          Vierge Marie.
        </li>
        <li className="ml-4">
          <span className="font-medium">
            Lourdes et autres lieux de pèlerinage
          </span>{' '}
          : Lourdes, haut lieu de la foi catholique, attire des milliers de
          fidèles chaque année pour l’Assomption.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Un jour de détente estivale
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Des traditions familiales</span> :
          beaucoup de Français profitent de cette journée pour organiser des
          repas en famille ou des sorties conviviales.
        </li>
        <li className="ml-4">
          <span className="font-medium">Un impact touristique</span> : les
          festivals, marchés locaux et événements culturels autour du 15 août
          attirent des visiteurs dans toute la France.
        </li>
      </ul>

      <CTA />

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Le 15 août dans le monde
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une fête chrétienne internationale
      </h3>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Pays où l’Assomption est fériée</span> :
          cette journée est également un jour de congé en Italie, en Espagne, au
          Portugal, et dans plusieurs autres pays à forte tradition catholique.
        </li>
        <li className="ml-4">
          <span className="font-medium">Des célébrations variées</span> :
          processions en Italie, parades au Portugal ou encore festivités
          populaires en Espagne, les traditions diffèrent selon les régions.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Pays où le 15 août n’est pas célébré
      </h3>
      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">
            Une absence dans les calendriers fériés
          </span>{' '}
          : dans les pays protestants ou laïques, comme les États-Unis ou la
          Suède, le 15 août n’est pas reconnu comme férié.
        </li>
      </ul>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Une fête entre tradition et modernité
      </h2>

      <p>
        Le 15 août, bien plus qu’un simple jour de congé estival, porte une
        histoire riche et des traditions profondément enracinées dans la culture
        française. Entre célébrations religieuses et moments de détente, cette
        date offre un aperçu unique du mélange entre foi, histoire et modernité.
        Qu’il s’agisse d’une journée de spiritualité ou simplement de repos,
        chacun peut y trouver un sens personnel. Alors, comment allez-vous
        célébrer votre prochain 15 août ?
      </p>
    </div>
  )
}
