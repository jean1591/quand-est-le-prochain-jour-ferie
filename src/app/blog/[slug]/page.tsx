import { Ascension } from './components/Ascension'
import { HuitMai } from './components/HuitMai'
import { Metadata } from 'next'
import { Paques } from './components/Paques'
import { Pentecote } from './components/Pentecote'
import { PremierJanvier } from './components/PremierJanvier'
import { PremierMai } from './components/PremierMai'
import { QuatorzeJuillet } from './components/QuatorzeJuillet'
import { QuinzeAout } from './components/QuinzeAout'
import { metadata } from '@/app/layout'

type BankHolidayName =
  | '14 juillet'
  | '15 aout'
  | '1er janvier'
  | '1er mai'
  | '8 mai'
  | 'lundi de paques'
  | 'ascension'
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
  '14 juillet': QuatorzeJuillet,
  '15 aout': QuinzeAout,
  '1er janvier': PremierJanvier,
  '1er mai': PremierMai,
  '8 mai': HuitMai,
  'lundi de paques': Paques,
  ascension: Ascension,
  pentecote: Pentecote,
}

const leLaMapper: Record<BankHolidayName, 'le' | 'la' | "l'"> = {
  '14 juillet': 'le',
  '15 aout': 'le',
  '1er janvier': 'le',
  '1er mai': 'le',
  '8 mai': 'le',
  'lundi de paques': 'le',
  ascension: "l'",
  pentecote: 'la',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const canonicalUrl = `https://quand-est-le-prochain-jour-ferie.fr/blog/${params.slug}`

  const bankHoliday = deslugify(params.slug)

  return {
    ...metadata,
    title: `Pourquoi ${leLaMapper[bankHoliday]} ${bankHoliday} est férié ?`,
    description: `Découvrez pourquoi ${leLaMapper[bankHoliday]} ${bankHoliday} est férié en France. Explorez l'histoire et les traditions derrière cette journée de célébration.`,
    alternates: {
      canonical: canonicalUrl,
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
