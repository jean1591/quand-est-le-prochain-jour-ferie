import { bankHolidays, months } from '@/utils'

import { BankHolidaysList } from '../components/bankHolidaysList'
import { Header } from '../components/Header'

interface Props {
  params: { filter: string }
}

export default function BankHolidaysYearPage({ params }: Props) {
  let filter = ''
  let bankHolidaysSelectedPeriod = bankHolidays['2024']

  if (Object.keys(bankHolidays).includes(params.filter)) {
    filter = params.filter
    bankHolidaysSelectedPeriod = bankHolidays[filter]
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
    const year = new Date().getFullYear()

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
