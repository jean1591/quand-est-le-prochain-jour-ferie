import { bankHolidays, formatDateToHumanDate } from "@/utils";
import { differenceInDays, isPast } from "date-fns";

import Link from "next/link";

export const Hero = () => {
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
    <div className="py-8 bg-gradient-to-r from-green-900 to-green-700 text-green-50">
      <div className="mx-auto max-w-5xl">
        <p className="text-2xl font-normal">Le prochain jour férié est</p>
        <Link href={`#${nextBankHoliday.date.toString()}`}>
          <h1 className="mt-4 text-6xl font-medium border-b-4 border-green-50">
            {formatDateToHumanDate(new Date(nextBankHoliday.date))}
          </h1>
        </Link>

        <p className="mt-4 text-5xl font-normal">
          {nextBankHoliday.description}
        </p>

        <p className="mt-16 text-2xl font-normal">{`C'est dans ${differenceInDays(
          nextBankHoliday.date,
          new Date()
        )} jours`}</p>
      </div>
    </div>
  );
};
