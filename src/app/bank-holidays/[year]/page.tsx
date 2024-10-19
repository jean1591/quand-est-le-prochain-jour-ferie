import { BankHolidaysList } from '../components/bankHolidaysList'
import { Header } from '../components/Header'
import { bankHolidays } from '@/utils'

interface Props {
  params: { year: string }
}

export default function BankHolidaysYearPage({ params }: Props) {
  const bankHolidaysSelectedyear = bankHolidays[params.year]

  return (
    <div>
      <Header bankHolidays={bankHolidaysSelectedyear} filter={params.year} />
      <BankHolidaysList bankHolidays={bankHolidaysSelectedyear} />
    </div>
  )
}
