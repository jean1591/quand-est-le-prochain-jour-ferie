import { BankHoliday } from '@/utils/interface/bankHolidays'
import { computeDaysDifference } from '@/utils/computeDaysDifference'
import { formatDateToHumanDate } from '@/utils'

export const BankHolidaysList = ({
  bankHolidays,
}: {
  bankHolidays: BankHoliday[]
}) => {
  return (
    <div className="mx-auto mt-12 max-w-5xl px-4">
      {bankHolidays.map(({ date, description }) => (
        <div
          key={date.toString()}
          className="flex items-center justify-between border-b border-blue-950 py-4 text-blue-800"
        >
          <div>
            <p className="text-lg font-medium">
              {formatDateToHumanDate(new Date(date))}
            </p>
            <p className="text-sm font-light">{computeDaysDifference(date)}</p>
          </div>
          <p className="text-lg font-light">{description}</p>
        </div>
      ))}
    </div>
  )
}
