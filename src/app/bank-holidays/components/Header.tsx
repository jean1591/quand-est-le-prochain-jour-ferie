import { BankHoliday } from '@/utils/interface/bankHolidays'

export const Header = ({
  bankHolidays,
  filter,
}: {
  bankHolidays: BankHoliday[]
  filter: string
}) => {
  const { closeToWeekEnd, week, weekEnd } = categoriseBankHolidays(bankHolidays)

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-blue-50">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-balance text-4xl font-extrabold leading-none tracking-tight">
          Il y a <span className="text-5xl"> {bankHolidays.length}</span> jours
          fériés en {filter} 🎁
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-2 text-xl md:mt-4 md:grid-cols-3 md:text-base">
          <p className="text-balance">
            <span className="text-2xl font-bold md:text-xl">
              {closeToWeekEnd}
            </span>{' '}
            pour des week-end de 3 jours 🎉
          </p>{' '}
          <p className="text-balance">
            <span className="text-2xl font-bold md:text-xl">{week}</span> durant
            la semaine 🌴
          </p>{' '}
          <p className="text-balance">
            <span className="text-2xl font-bold md:text-xl">{weekEnd}</span>{' '}
            durant le week-end 😭
          </p>
        </div>
      </div>
    </div>
  )
}

interface CategorisedBankHolidays {
  closeToWeekEnd: number
  week: number
  weekEnd: number
}

const categoriseBankHolidays = (
  bankHolidays: BankHoliday[]
): CategorisedBankHolidays => {
  return bankHolidays.reduce(
    (acc, current) => {
      const dayOfTheWeek = new Date(current.date).getDay()

      if ([2, 3, 4].includes(dayOfTheWeek)) {
        return {
          ...acc,
          week: acc.week + 1,
        }
      }

      if ([6, 0].includes(dayOfTheWeek)) {
        return {
          ...acc,
          weekEnd: acc.weekEnd + 1,
        }
      }

      if ([1, 5].includes(dayOfTheWeek)) {
        return {
          ...acc,
          closeToWeekEnd: acc.closeToWeekEnd + 1,
        }
      }

      return acc
    },
    {
      closeToWeekEnd: 0,
      week: 0,
      weekEnd: 0,
    }
  )
}
