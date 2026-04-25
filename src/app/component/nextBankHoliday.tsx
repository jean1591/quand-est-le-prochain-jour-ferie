import {
  differenceInCalendarDays,
  isFriday,
  isMonday,
  isWeekend,
} from 'date-fns'

import { BankHoliday } from '@/utils/interface/bankHolidays'
import Image from 'next/image'
import Link from 'next/link'
import { getMonthFromDate } from '@/utils'

const IMAGE_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBE-PTE7s4qYudklZRHFHkMFiJ-TP09gFMBLimuSEAi4Ze3uhDjp-5HDa6O4LBbc9xm7Dum69K4cibj5EzlGZtpfcsXsydHmlo1vLoqB0L5WnH1pvDnaoCS4uhFQZl0HsX48Tv-CIRwDqtU3q0yoYn-_6dZ9NWXZH-Q7QT2L2h9OP9gNLuCzIupY7c8uO7dEnCYxaoqIDtt8zr2bvJDhkljFDMadfPYudygfa86pp7mxjAqAYImSh-a4R5UPhjVe_LqS9GJEtIAOpAr'

export const NextBankHoliday = ({
  nextBankHoliday,
}: {
  nextBankHoliday: BankHoliday
}) => {
  const day = new Date(nextBankHoliday.date)
    .getDate()
    .toString()
    .padStart(2, '0')
  const month = getMonthFromDate(new Date(nextBankHoliday.date))

  return (
    <section className="mb-xl mx-auto max-w-7xl px-6 pt-8">
      <div className="border-surface-container overflow-hidden rounded-xl border bg-white shadow-[0_8px_30px_rgb(0,99,154,0.12)]">
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="flex flex-col justify-center p-md md:p-lg md:w-1/2">
            <div className="bg-primary-container/20 text-primary mb-md inline-flex w-fit items-center gap-2 rounded-full px-3 py-1">
              <span className="text-sm">📅</span>
              <span className="text-label-md">Prochain Jour Férié</span>
            </div>

            <h1 className="text-headline-xl text-on-surface mb-sm">
              {day} {month} – {nextBankHoliday.description}
            </h1>

            <p className="text-body-lg text-primary mb-lg font-semibold">
              {generateBaseline(nextBankHoliday.date)}
            </p>

            <div className="flex gap-4">
              <Link
                href={nextBankHoliday.link}
                className="border-outline-variant text-on-surface hover:bg-surface-container px-lg py-sm text-label-md rounded-xl border transition-all duration-300"
              >
                Voir les détails
              </Link>
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative min-h-[300px] md:w-1/2">
            <Image
              src={IMAGE_SRC}
              alt={nextBankHoliday.description}
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-transparent to-transparent md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

const generateBaseline = (date: string) => {
  let message = "en dehors d'un week-end 🌴"

  if (isWeekend(date)) {
    message = 'pendant un week-end 😭'
  } else if (isFriday(date) || isMonday(date)) {
    message = 'week-end de 3 jours 🎉'
  }

  return `Dans ${differenceInCalendarDays(date, new Date())} jours, ${message}`
}
