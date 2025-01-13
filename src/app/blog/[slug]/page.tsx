import { Ascension } from './components/Ascension'
import { HuitMai } from './components/HuitMai'
import { Metadata } from 'next'
import { OnzeNovembre } from './components/OnzeNovembre'
import { Paques } from './components/Paques'
import { Pentecote } from './components/Pentecote'
import { PremierJanvier } from './components/PremierJanvier'
import { PremierMai } from './components/PremierMai'
import { PremierNovembre } from './components/PremierNovembre'
import { QuatorzeJuillet } from './components/QuatorzeJuillet'
import { QuinzeAout } from './components/QuinzeAout'
import { VingtCinqDecembre } from './components/VingtCinqDecembre'
import { metadata } from '@/app/layout'

type BankHolidayName =
  | '11 novembre'
  | '14 juillet'
  | '15 aout'
  | '1er janvier'
  | '1er mai'
  | '1er novembre'
  | '25 decembre'
  | '8 mai'
  | 'ascension'
  | 'lundi de paques'
  | 'pentecote'

interface Props {
  params: { slug: string }
}

type HolidayMapperType = {
  [key: string]: () => JSX.Element
}

const deslugify = (slug: string): BankHolidayName => {
  return slug
    .split('-')
    .slice(2, -2)
    .join('-')
    .replaceAll('-', ' ') as BankHolidayName
}

const holidayMapper: HolidayMapperType = {
  '11 novembre': OnzeNovembre,
  '14 juillet': QuatorzeJuillet,
  '15 aout': QuinzeAout,
  '1er janvier': PremierJanvier,
  '1er mai': PremierMai,
  '1er novembre': PremierNovembre,
  '25 decembre': VingtCinqDecembre,
  '8 mai': HuitMai,
  'lundi de paques': Paques,
  ascension: Ascension,
  pentecote: Pentecote,
}

const capitalize = (sentence: string): string => {
  return (
    sentence.charAt(0).toUpperCase() + sentence.replaceAll('-', ' ').slice(1)
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    ...metadata,
    title: capitalize(params.slug.replaceAll('-', ' ')),
    description: `Découvrez ${params.slug.replaceAll('-', ' ')} en France. Explorez l'histoire et les traditions derrière cette journée de célébration.`,
    alternates: {
      canonical: `https://quand-est-le-prochain-jour-ferie.fr/blog/${params.slug}`,
    },
  }
}

export default function ExplicationPage({ params }: Props) {
  const selectedBankHoliday = deslugify(params.slug)

  const HolidayComponent =
    holidayMapper[selectedBankHoliday.toLowerCase()] || null

  return (
    <div className="mx-auto max-w-5xl px-4">
      {HolidayComponent ? (
        <HolidayComponent />
      ) : (
        <p>Component not found for {selectedBankHoliday}</p>
      )}
    </div>
  )
}
