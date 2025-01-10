import { Ascension } from './components/Ascension'
import { HuitMai } from './components/HuitMai'
import { Paques } from './components/Paques'
import { PremierJanvier } from './components/PremierJanvier'
import { PremierMai } from './components/PremierMai'

type HolidayMapperType = {
  [key: string]: () => JSX.Element
}

const holidayMapper: HolidayMapperType = {
  '1er janvier': PremierJanvier,
  '1er mai': PremierMai,
  '8 mai': HuitMai,
  ascension: Ascension,
  'lundi de paques': Paques,
}

export default function ExplicationPage({
  params,
}: {
  params: { slug: string }
}) {
  const selectedBankHoliday = params.slug
    .split('-')
    .slice(2, -2)
    .join('-')
    .replaceAll('-', ' ')

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
