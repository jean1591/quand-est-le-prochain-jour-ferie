import { CTA } from './CTA'

export const PremierMai = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium leading-tight tracking-tight sm:text-4xl">
        Pourquoi le 1er Mai est férié ?
      </h1>

      <p>
        Le 1er mai est l’un des jours fériés les plus attendus en France. Chaque
        année, il est synonyme de repos pour les travailleurs, de muguet offert
        et parfois de manifestations. Mais pourquoi ce jour est-il férié ? D’où
        vient cette tradition, et pourquoi est-elle si importante ? Dans cet
        article, plongeons dans l’histoire, les traditions et la signification
        actuelle de cette journée emblématique.
      </p>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Les origines historiques
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une histoire internationale
      </h3>
      <p>
        Tout commence à Chicago, aux États-Unis, en 1886. À cette époque, les
        ouvriers luttent pour obtenir la journée de travail de huit heures.
        Jusqu’alors, il n’était pas rare de travailler jusqu’à 12 ou 14 heures
        par jour.
      </p>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Un tournant décisif</span> : le 1er mai
          1886, une grève générale est organisée pour revendiquer ce droit. À
          Chicago, cette grève se transforme en émeutes, connues sous le nom
          d’émeutes de Haymarket. Les affrontements avec la police font
          plusieurs morts.
        </li>
        <li className="ml-4">
          <span className="font-medium">Une date symbolique</span> : malgré ces
          événements tragiques, la date du 1er mai devient un symbole de lutte
          pour les droits des travailleurs.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        L'implantation en Europe et en France
      </h3>
      <p>
        L’idée de faire du 1er mai une journée de lutte ouvrière traverse
        rapidement l’Atlantique. En 1889, lors du Congrès socialiste de la IIe
        Internationale à Paris, il est décidé de faire du 1er mai une journée de
        mobilisation mondiale pour la journée de 8 heures.
      </p>

      <p>
        Ce n’est qu’en 1941, sous le régime de Vichy, que le 1er mai devient un
        jour férié En France. Après la Seconde Guerre mondiale, il est réaffirmé
        comme une "Fête du Travail" officielle.
      </p>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Le 1er mai en France : traditions et significations
      </h2>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Le muguet, un symbole bien français
      </h3>
      <p>
        Offrir du muguet le 1er mai est une tradition typiquement française qui
        remonte au XVIe siècle.
      </p>
      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Les origines</span> : en 1561, le roi
          Charles IX reçoit un brin de muguet comme porte-bonheur. Charmé par
          cette idée, il décide d’en offrir à toutes les dames de la cour. La
          tradition reste populaire dans certaines régions, mais elle prend une
          nouvelle dimension au début du XXe siècle, en s’associant au 1er mai.
        </li>
        <li className="ml-4">
          <span className="font-medium">Aujourd’hui</span> : chaque année, des
          millions de brins de muguet sont vendus ou cueillis pour être offerts
          comme symbole de bonheur et de prospérité. Il est également l’un des
          rares produits que l’on peut vendre sans autorisation ce jour-là.
        </li>
      </ul>

      <h3 className="font-medium leading-tight tracking-tight sm:text-xl">
        Une journée de manifestations et de solidarité
      </h3>
      <p>
        Le 1er mai est également marqué par des manifestations organisées par
        les syndicats pour défendre les droits des travailleurs.
      </p>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Des revendications historiques</span> :
          les premières manifestations étaient centrées sur la réduction du
          temps de travail. Aujourd’hui, elles abordent des enjeux variés comme
          l’égalité salariale, les retraites, ou encore les conditions de
          travail.
        </li>
        <li className="ml-4">
          <span className="font-medium">Un rendez-vous annuel</span> : chaque
          année, les grandes centrales syndicales (CGT, FO, CFDT, etc.)
          organisent des défilés à travers le pays. Ces rassemblements restent
          un moment fort de mobilisation pour les droits sociaux.
        </li>
      </ul>

      <CTA />

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Anecdotes et faits intéressants sur le 1er mai
      </h2>

      <ul className="list-disc space-y-2">
        <li className="ml-4">
          <span className="font-medium">Un jour récupéré par Vichy</span> : sous
          le régime de Vichy, le 1er mai devient "Fête du Travail et de la
          Concorde sociale", dans une tentative d’apaiser les tensions sociales.
        </li>
        <li className="ml-4">
          <span className="font-medium">Un record de muguet</span> : chaque
          année, près de 60 millions de brins de muguet sont vendus en France,
          principalement par de petits vendeurs ou des associations.
        </li>
        <li className="ml-4">
          <span className="font-medium">Un symbole mondial</span> : bien qu’il
          soit parfois controversé, le 1er mai reste l’une des célébrations
          internationales les plus partagées, avec des échos dans plus de 80
          pays.
        </li>
      </ul>

      <h2 className="font-medium leading-tight tracking-tight sm:text-2xl">
        Une journée pour se souvenir et célébrer
      </h2>
      <p>
        Le 1er mai est bien plus qu’un simple jour férié. Il porte en lui
        l’héritage de luttes sociales acharnées, des traditions ancrées comme le
        muguet, et une réflexion sur le monde du travail. Que vous choisissiez
        de manifester, d’offrir un brin de muguet ou simplement de vous reposer,
        cette journée est l’occasion idéale pour célébrer les droits des
        travailleurs et apprécier les acquis sociaux.
      </p>
    </div>
  )
}
