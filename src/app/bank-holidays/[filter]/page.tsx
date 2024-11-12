import { bankHolidays, months } from '@/utils'

import { BankHolidaysList } from '../components/bankHolidaysList'
import { Header } from '../components/Header'
import { Metadata } from 'next'
import { metadata } from '@/app/layout'
import { redirect } from 'next/navigation'

interface Props {
  params: { filter: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const canonicalUrl = `https://quand-est-le-prochain-jour-ferie.fr/jours-feries-${params.filter}`

  return {
    ...metadata,
    title: `Jours fériés en ${params.filter}`,
    description: `Retrouver la liste des prochains jours fériés Français en ${params.filter} ainsi que le nombre de jours jusqu'à ces derniers. Restez informé si le prochain jour ferié offre un week-end de 3 jours ou un pont.`,
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default function BankHolidaysYearPage({ params }: Props) {
  let filter = ''
  const year = new Date().getFullYear()
  let bankHolidaysSelectedPeriod = bankHolidays[year]

  if (Object.keys(bankHolidays).includes(params.filter)) {
    filter = params.filter
    bankHolidaysSelectedPeriod = bankHolidays[filter]

    // Redirect is filter year is current year
    if (filter === year.toString()) {
      redirect('/')
    }
  }

  if (params.filter.includes('-')) {
    const month = params.filter.split('-')[0]
    const year = params.filter.split('-')[1]

    filter = `${month} ${year}`

    const monthIndex = months
      .map((month) => month.toLowerCase())
      .indexOf(month.toLowerCase())
    bankHolidaysSelectedPeriod = bankHolidays[year].filter(
      (day) => new Date(day.date).getMonth() === monthIndex
    )
  }

  if (
    months
      .map((month) => month.toLowerCase())
      .indexOf(params.filter.toLowerCase()) > -1
  ) {
    const month = params.filter.split('-')[0]

    filter = `${month} ${year}`

    const monthIndex = months
      .map((month) => month.toLowerCase())
      .indexOf(month.toLowerCase())
    bankHolidaysSelectedPeriod = bankHolidays[year].filter(
      (day) => new Date(day.date).getMonth() === monthIndex
    )
  }

  // TODO: create 404
  if (filter === '') {
    return <></>
  }

  return (
    <div>
      <Header bankHolidays={bankHolidaysSelectedPeriod} filter={filter} />
      <BankHolidaysList bankHolidays={bankHolidaysSelectedPeriod} />
    </div>
  )
}
