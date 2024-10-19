import { differenceInDays, isFriday, isMonday, isWeekend } from "date-fns";

import { BankHoliday } from "@/utils/interface/bankHolidays";
import { getMonthFromDate } from "@/utils";
import { padStart } from "lodash";

export const NextBankHoliday = ({
  nextBankHoliday,
}: {
  nextBankHoliday: BankHoliday;
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-blue-50 py-16">
      <div className="px-4 mx-auto max-w-5xl">
        <div className="flex items-baseline justify-start font-extrabold space-x-4">
          <h1 className="text-8xl">
            {new Date(nextBankHoliday.date)
              .getDate()
              .toString()
              .padStart(2, "0")}
          </h1>
          <h2 className="text-5xl">
            {getMonthFromDate(new Date(nextBankHoliday.date))}
          </h2>
        </div>

        <div className="mt-4">
          <p className="text-3xl font-bold uppercase">
            {nextBankHoliday.description} {nextBankHoliday.emoji}
          </p>
        </div>

        <div className="mt-16">
          <p className="text-2xl text-balance">
            {generateBaseline(nextBankHoliday.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

const generateBaseline = (date: string) => {
  let message = "en dehors d'un week-end 🌴";

  if (isWeekend(date)) {
    message = "pendant un week-end 😭";
  } else if (isFriday(date) || isMonday(date)) {
    message = "week-end de 3 jours 🎉";
  }

  return `Dans ${differenceInDays(date, new Date())} jours, ${message}`;
};
