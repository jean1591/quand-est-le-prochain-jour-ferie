import Link from 'next/link'
import { bankHolidays } from '@/utils'
import { differenceInCalendarDays } from 'date-fns'

const MONTH_ABBR = [
  'JANV',
  'FÉVR',
  'MARS',
  'AVRIL',
  'MAI',
  'JUIN',
  'JUIL',
  'AOÛT',
  'SEPT',
  'OCT',
  'NOV',
  'DÉC',
]
const MONTH_FULL = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]
const DAYS = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
]

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const BankHolidaysList = () => {
  const currentYear = new Date().getFullYear().toString()
  const holidays = bankHolidays[currentYear]
  const now = new Date()
  const nextIndex = holidays.findIndex(
    (h) => differenceInCalendarDays(h.date, now) >= 0
  )

  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      <div className="mb-md flex items-end justify-between">
        <div>
          <h2 className="text-headline-md text-on-background">
            Calendrier {currentYear}
          </h2>
          <p className="mt-xs text-body-md text-on-surface-variant">
            Les jours fériés en France
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {holidays.map(({ date, description, link }, index) => {
          const d = new Date(date)
          const daysDiff = differenceInCalendarDays(date, now)
          const isPast = daysDiff < 0
          const isNext = index === nextIndex

          const daysLabel =
            daysDiff < 0
              ? `Il y a ${Math.abs(daysDiff)} jour${Math.abs(daysDiff) > 1 ? 's' : ''}`
              : daysDiff === 0
                ? "Aujourd'hui"
                : `Dans ${daysDiff} jour${daysDiff > 1 ? 's' : ''}`

          const fullDate = `${DAYS[d.getDay()]} ${d.getDate()} ${MONTH_FULL[d.getMonth()]} ${d.getFullYear()}`
          const monthAbbr = MONTH_ABBR[d.getMonth()]
          const dayNum = d.getDate().toString().padStart(2, '0')

          if (isPast) {
            return (
              <Link
                key={date}
                href={`/${link}`}
                className="flex items-center gap-4 px-2 py-3"
              >
                <div className="w-12 flex-shrink-0 text-center">
                  <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                    {monthAbbr}
                  </p>
                  <p className="text-2xl font-bold leading-tight text-gray-300">
                    {dayNum}
                  </p>
                </div>
                <div className="h-10 w-px flex-shrink-0 bg-gray-200" />
                <div className="min-w-0 flex-1">
                  <p className="text-base font-medium text-gray-400">
                    {description}
                  </p>
                  <p className="text-sm text-gray-300">{fullDate}</p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-3">
                  <span className="text-sm text-gray-400">{daysLabel}</span>
                  <Link
                    href={`/${link}`}
                    className="text-gray-300 transition-colors hover:text-gray-500"
                  >
                    <ArrowIcon />
                  </Link>
                </div>
              </Link>
            )
          }

          return (
            <Link
              key={date}
              href={`/${link}`}
              className={`flex items-center gap-4 rounded-2xl border bg-white px-5 py-4 transition-shadow hover:shadow-md ${
                isNext ? 'border-blue-100 shadow-sm' : 'border-gray-100'
              }`}
            >
              <div className="w-12 flex-shrink-0 text-center">
                <p
                  className={`text-[10px] font-semibold tracking-wider ${
                    isNext ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {monthAbbr}
                </p>
                <p
                  className={`text-2xl font-bold leading-tight ${
                    isNext ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {dayNum}
                </p>
              </div>
              <div
                className={`h-10 w-px flex-shrink-0 ${
                  isNext ? 'bg-blue-100' : 'bg-gray-200'
                }`}
              />
              <div className="min-w-0 flex-1">
                <p
                  className={`text-lg font-semibold ${
                    isNext ? 'text-gray-900' : 'text-gray-800'
                  }`}
                >
                  {description}
                </p>
                <p className="text-sm text-gray-500">{fullDate}</p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3">
                {isNext && (
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                )}
                <span
                  className={`text-sm ${isNext ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  {daysLabel}
                </span>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    isNext
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-200 text-gray-400'
                  }`}
                >
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
