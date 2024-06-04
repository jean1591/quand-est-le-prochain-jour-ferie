import { bankHolidays, classNames, getMonthFromDate } from "@/utils";
import { differenceInDays, isPast, isWeekend } from "date-fns";

export const NextBankHoliday = () => {
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

  const happensDuringAWeekend = isWeekend(new Date(nextBankHoliday.date));

  return (
    <div className="w-full border-l border-r border-green-700 rounded-2xl bg-cover bg-center">
      <div className="rounded-t-2xl bg-gradient-to-r from-green-800 to-green-700 p-4">
        <p className="uppercase text-xl font-medium text-green-50 text-center">{`Dans ${differenceInDays(
          nextBankHoliday.date,
          new Date()
        )} jours`}</p>
      </div>

      <div className="px-4 mt-16">
        <p className="text-lg">Prochain jour férié</p>
        <div className="mt-4 flex items-end justify-start">
          <p className="text-8xl font-medium border-b-4 border-green-900">
            {new Date(nextBankHoliday.date).getDate()}
          </p>
          <p className="text-5xl font-medium border-b-4 border-green-900">
            {getMonthFromDate(new Date(nextBankHoliday.date))}
          </p>
        </div>
      </div>

      <div className="px-4 mt-4">
        <p className="text-2xl font-medium uppercase">
          {nextBankHoliday.description}
        </p>
      </div>

      <div
        className={classNames(
          happensDuringAWeekend
            ? "from-red-800 to-red-700 text-red-50"
            : "from-green-800 to-green-700 text-green-50",
          "mt-16 rounded-b-2xl bg-gradient-to-r py-2"
        )}
      >
        <p className="p-4 uppercase text-md font-medium text-center">{`${
          happensDuringAWeekend ? "Pendant" : "En dehors d'"
        } un week-end`}</p>
      </div>
    </div>
  );
};
