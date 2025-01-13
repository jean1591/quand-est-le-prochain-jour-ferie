import { CTA } from './CTA'
import { TLDR } from './TLDR'

export const PremierNovembre = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi le 1er novembre est férié ?
      </h1>

      <TLDR text="Le 1er novembre est la Toussaint, une fête catholique honorant tous les saints et martyrs. Ce jour est l'occasion de se souvenir des défunts et de célébrer la sainteté de ceux qui ont mené une vie exemplaire." />

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Origines historiques et religieuses du 1er novembre
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        La Toussaint : une fête catholique
      </h3>
      <p>
        La Toussaint, qui signifie littéralement "la fête de tous les saints", a
        été instituée par l'Église catholique pour célébrer tous les saints,
        connus et inconnus. Cette fête trouve ses racines au VIIe siècle lorsque
        le pape Boniface IV a consacré le Panthéon de Rome à la Vierge Marie et
        à tous les martyrs. La date du 1er novembre a ensuite été fixée par le
        pape Grégoire III au VIIIe siècle pour coïncider avec la dédicace d'une
        chapelle en l'honneur de tous les saints à Rome.
      </p>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Les traditions du 1er novembre en France
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Honorer les défunts
      </h3>
      <p>
        Bien que la Toussaint célèbre les saints, elle est souvent associée à la
        commémoration des morts, qui a lieu officiellement le 2 novembre.
        Cependant, par commodité, beaucoup de familles rendent hommage à leurs
        proches disparus le 1er novembre. Les traditions incluent :
      </p>
      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">La visite des cimetières :</span> ce
          jour-là, les familles se réunissent pour se rendre sur les tombes de
          leurs proches, y déposer des fleurs et nettoyer les sépultures.
        </li>
        <li className="ml-4">
          <span className="font-medium">Le fleurissement des tombes :</span> les
          chrysanthèmes, symboles d'immortalité, sont les fleurs privilégiées
          pour honorer les défunts.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        La chrysanthème : une fleur emblématique
      </h3>
      <p>
        Le choix des chrysanthèmes pour orner les tombes remonte à 1919, après
        la Première Guerre mondiale. Ces fleurs, résistantes au froid, étaient
        idéales pour un hommage automnal. Aujourd'hui, elles sont devenues un
        symbole incontournable de la Toussaint.
      </p>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Le 1er novembre dans d’autres cultures
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Célébrations similaires dans le monde
      </h3>
      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Au Mexique :</span> le "Día de los
          Muertos" (Jour des Morts) est une fête vivante et colorée où les
          familles se réunissent pour honorer leurs défunts avec des offrandes,
          des autels et des célébrations joyeuses.
        </li>
        <li className="ml-4">
          <span className="font-medium">Dans les pays anglo-saxons :</span>{' '}
          Halloween (31 octobre) et All Souls’ Day (2 novembre) rappellent les
          racines religieuses et culturelles de ces traditions.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Les pays où le 1er novembre n’est pas férié
      </h3>
      <p>
        Si la Toussaint est largement célébrée dans les pays catholiques, elle
        n'est pas fériée partout. Par exemple, dans les pays protestants ou
        laïcs, cette date est souvent marquée de manière plus discrète ou n'est
        pas observée du tout.
      </p>

      <CTA />

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Pourquoi le 1er novembre reste important aujourd’hui
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une journée de réflexion et de recueillement
      </h3>
      <p>
        Dans une époque où les rythmes de vie sont souvent effrénés, le 1er
        novembre offre une pause précieuse pour se souvenir de ceux qui nous ont
        quittés. Qu'il s'agisse d'un moment de spiritualité ou simplement d'un
        geste d'amour envers les disparus, cette journée reste une source de
        réconfort et de lien familial. Elle nous rappelle aussi l'importance de
        préserver ces traditions, qui continuent de donner un sens profond à
        notre existence collective.
      </p>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Une fête entre tradition et modernité
      </h2>
      <p>
        Le 1er novembre est bien plus qu’un simple jour férié. Chargé
        d’histoire, de spiritualité et de traditions, il traverse les époques et
        les générations tout en s'adaptant à notre époque. Que l'on soit croyant
        ou non, cette journée de la Toussaint est l'occasion de se reconnecter
        avec ses racines, de rendre hommage à ses proches disparus et de
        réfléchir au passage du temps. Alors, cette année, prenez un moment pour
        visiter une tombe, offrir des fleurs ou simplement vous souvenir des
        êtres chers qui ont marqué votre vie.
      </p>
    </div>
  )
}
