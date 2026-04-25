import { bankHolidays, formatDateToHumanDate } from '@/utils'
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

  const upcomingHolidays = bankHolidays[currentYear]
    .filter((h) => !isPast(h.date) || (nextBankHoliday && isSameDay(h.date, nextBankHoliday.date)))
    .slice(0, 5)

  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      {/* Section heading */}
      <div className="mb-md flex items-end justify-between">
        <div>
          <h2 className="text-headline-md text-on-background">
            Calendrier {currentYear}
          </h2>
          <p className="mt-xs text-body-md text-on-surface-variant">
            Les prochains jours fériés en France
          </p>
        </div>
        <Link
          href={`/jours-feries-${currentYear}`}
          className="text-label-md text-primary hover:underline"
        >
          Voir tout le calendrier →
        </Link>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-md md:grid-cols-3">
        {upcomingHolidays.map((holiday, index) => {
          const isLarge = index === 0
          return (
            <Link
              key={holiday.date}
              href={holiday.link}
              className={
                isLarge
                  ? 'md:col-span-2 rounded-xl border border-surface-container-high bg-surface-container-low p-6 transition-shadow hover:shadow-md'
                  : 'rounded-xl border border-outline-variant bg-white p-5 transition-shadow hover:shadow-md'
              }
            >
              <div className="mb-sm flex items-center justify-between">
                <span className="text-label-sm text-primary">
                  {formatDateToHumanDate(new Date(holiday.date))}
                </span>
                <span className={isLarge ? 'text-3xl' : 'text-2xl'}>{holiday.emoji}</span>
              </div>

              <p className={isLarge ? 'text-headline-md text-on-background' : 'text-body-lg font-semibold text-on-background'}>
                {holiday.description}
              </p>

              <p className="mt-xs text-body-md text-on-surface-variant">
                {computeDaysDifference(holiday.date)}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
