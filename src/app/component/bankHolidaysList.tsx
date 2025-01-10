import { bankHolidays, classNames, formatDateToHumanDate } from '@/utils'
import { isPast, isSameDay } from 'date-fns'

import { BankHoliday } from '@/utils/interface/bankHolidays'
import Link from 'next/link'
import { computeDaysDifference } from '@/utils/computeDaysDifference'

export const BankHolidaysList = ({
  nextBankHoliday,
}: {
  nextBankHoliday?: BankHoliday
}) => {
  const currentYear = new Date().getFullYear().toString()

  return (
    <div className="mx-auto mt-12 max-w-5xl px-4">
      {bankHolidays[currentYear].map(({ date, description, link }) => (
        <Link
          href={link}
          key={date.toString()}
          className={classNames(
            isPast(date) ? 'text-slate-400' : 'text-blue-800',
            nextBankHoliday && isSameDay(nextBankHoliday.date, date)
              ? 'bg-blue-50/75'
              : '',
            'flex items-center justify-between border-b border-blue-950 py-4'
          )}
        >
          <div>
            <p
              className={classNames(
                nextBankHoliday && isSameDay(nextBankHoliday.date, date)
                  ? 'font-bold'
                  : 'font-medium',
                'text-lg'
              )}
            >
              {formatDateToHumanDate(new Date(date))}
            </p>
            <p className="text-sm font-light">{computeDaysDifference(date)}</p>
          </div>
          <p className="text-lg font-light">{description}</p>
        </Link>
      ))}
    </div>
  )
}
