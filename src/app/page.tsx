import { bankHolidays, classNames, formatDateToHumanDate } from "@/utils";
import { differenceInDays, isPast, isSameDay } from "date-fns";

import { NextBankHoliday } from "./component/nextBankHoliday";

export default function Home() {
  const currentYear = new Date().getFullYear().toString();
  let bankHolidayIndex = 0;
  let nextBankHoliday = bankHolidays[currentYear][bankHolidayIndex];

  while (isPast(nextBankHoliday.date)) {
    bankHolidayIndex++;

    // After YYYY-12-25, get the first element of next year
    if (bankHolidayIndex === bankHolidays[currentYear].length) {
      nextBankHoliday = bankHolidays[currentYear + 1][0];
      break;
    }

    nextBankHoliday = bankHolidays[currentYear][bankHolidayIndex];
  }

  return (
    <div>
      <NextBankHoliday nextBankHoliday={nextBankHoliday} />

      <div className="px-4 mx-auto max-w-5xl mt-12">
        {bankHolidays[currentYear].map(({ date, description }) => (
          <div
            key={date.toString()}
            className={classNames(
              isPast(date) ? "text-slate-400" : "text-blue-800",
              isSameDay(nextBankHoliday.date, date) ? "bg-blue-50/75" : "",
              "flex items-center justify-between border-b border-blue-950 py-4"
            )}
          >
            <div>
              <p className="text-lg font-medium">
                {formatDateToHumanDate(new Date(date))}
              </p>
              <DaysDifference date={date} />
            </div>
            <p className="text-lg font-light">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const DaysDifference = ({ date }: { date: string }) => {
  const daysDifference = differenceInDays(date, new Date());
  let message = "";

  if (daysDifference < 0) {
    message = `Il y a ${Math.abs(daysDifference)} jours`;
  } else if (daysDifference === 0) {
    message = "C'est aujourd'hui !";
  } else {
    message = `Dans ${daysDifference} jours`;
  }

  return <p className="text-sm font-light">{message}</p>;
};
