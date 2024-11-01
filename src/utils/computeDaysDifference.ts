import { differenceInCalendarDays } from 'date-fns'

export const computeDaysDifference = (date: string) => {
  const daysDifference = differenceInCalendarDays(date, new Date())
  let message = ''

  if (daysDifference < 0) {
    message = `Il y a ${Math.abs(daysDifference)} jours`
  } else if (daysDifference === 0) {
    message = "C'est aujourd'hui !"
  } else {
    message = `Dans ${daysDifference} jours`
  }

  return message
}
