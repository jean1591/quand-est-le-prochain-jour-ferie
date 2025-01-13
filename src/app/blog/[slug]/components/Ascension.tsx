import { CTA } from './CTA'
import { TLDR } from './TLDR'

export const Ascension = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi l'Ascension est fériée ?
      </h1>

      <TLDR text="L'Ascension est un jour férié chrétien célébrant l'élévation de Jésus-Christ au ciel, 40 jours après sa résurrection. Il marque un moment clé dans la tradition chrétienne et est observé comme un signe de l'espoir et de la foi chrétienne." />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Origines religieuses de l’Ascension
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        La signification chrétienne
      </h3>

      <p>
        L’Ascension est une fête chrétienne qui célèbre un moment clé de la vie
        de Jésus-Christ : sa montée au ciel. Selon les récits bibliques, cet
        événement se produit quarante jours après Pâques, la résurrection de
        Jésus.
      </p>

      <p>
        Cet épisode marque la fin de la présence physique du Christ sur Terre et
        le début de sa mission céleste. Il promet également l’envoi de l’Esprit
        Saint à ses disciples, un autre événement célébré dix jours plus tard
        lors de la Pentecôte.
      </p>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une tradition ancienne
      </h3>

      <p>
        L’Ascension est l’une des plus anciennes fêtes chrétiennes. Les
        premières célébrations remontent aux premiers siècles de l’Église. Dès
        le IVe siècle, des traces de cette fête apparaissent dans les écrits
        religieux et les pratiques liturgiques.
      </p>

      <p>
        Une question revient souvent : pourquoi l’Ascension tombe-t-elle
        toujours un jeudi ? La réponse réside dans le calcul des quarante jours
        après Pâques, qui est toujours célébrée un dimanche. En comptant
        précisément, le quarantième jour tombe invariablement un jeudi. Ce lien
        avec Pâques fait de l’Ascension une fête mobile, sa date variant chaque
        année en fonction du calendrier lunaire.
      </p>

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Pourquoi l’Ascension est-elle un jour férié en France ?
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une fête inscrite dans l’histoire de la France
      </h3>

      <p>
        Le statut férié de l’Ascension trouve ses racines dans l’histoire
        religieuse de la France. À cette époque, les fêtes religieuses
        rythmaient la vie quotidienne et étaient souvent des jours chômés pour
        permettre aux fidèles de participer aux célébrations liturgiques.
      </p>

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Une fête respectée malgré la laïcité
      </h2>

      <p>
        Avec la loi de séparation des Églises et de l’État en 1905, la France
        est devenue officiellement laïque. Cela signifiait que l’État ne
        favorisait plus aucune religion. Pourtant, certaines fêtes chrétiennes
        ont été conservées dans le calendrier civil en raison de leur importance
        culturelle et historique.
      </p>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Un ancrage dans la tradition</span> :
          l’Ascension est célébrée depuis des siècles et fait partie du
          patrimoine culturel français.
        </li>
        <li className="ml-4">
          <span className="font-medium">Un compromis pratique</span> : l’État a
          choisi de maintenir un certain nombre de jours fériés religieux pour
          préserver un équilibre entre tradition et modernité.
        </li>
        <li className="ml-4">
          <span className="font-medium">Une importance symbolique</span> : même
          pour les non-croyants, cette journée est perçue comme une occasion de
          se reposer ou de se retrouver en famille.
        </li>
      </ul>

      <CTA />

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Anecdotes et faits méconnus sur l’Ascension
      </h2>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Un jeudi toujours spécial</span> :
          l’Ascension est l’une des rares fêtes à tomber systématiquement un
          jeudi. Cela en fait une journée très attendue par ceux qui souhaitent
          prolonger leur repos grâce à un "pont" jusqu’au week-end.
        </li>
        <li className="ml-4">
          <span className="font-medium">Des traditions agricoles</span> : dans
          certaines régions, l’Ascension était autrefois associée à des rites
          agricoles. Les communautés rurales organisaient des processions dans
          les champs pour bénir les récoltes. Ces pratiques visaient à garantir
          une bonne moisson et à protéger les cultures des intempéries.
        </li>
      </ul>

      <h2 className="text-lg font-medium leading-tight tracking-tight sm:text-2xl">
        Une journée entre histoire et modernité
      </h2>

      <p>
        L’Ascension, bien qu’ancrée dans la tradition chrétienne, est devenue
        bien plus qu’une simple fête religieuse. Son statut férié témoigne de
        l’importance de préserver les traditions tout en s’adaptant aux réalités
        modernes.
      </p>

      <p>
        Qu’elle soit un jour de prière, un moment de réflexion ou simplement une
        occasion de se reposer, l’Ascension continue de rassembler les Français
        autour de son histoire unique. Profitez-en pour vous ressourcer et
        peut-être, pour transmettre un peu de son histoire à vos proches.
      </p>
    </div>
  )
}
