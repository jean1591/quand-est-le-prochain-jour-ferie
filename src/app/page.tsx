import { bankHolidays, classNames, formatDateToHumanDate } from "@/utils";
import { NextBankHoliday } from "./component/nextBankHoliday";
import { differenceInDays, isPast, isSameDay } from "date-fns";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* NEXT BANK HOLIDAY */}
        <div>
          <NextBankHoliday nextBankHoliday={nextBankHoliday} />
        </div>

        {/* DETAILS */}
        <div>
          <h2 className="text-3xl font-medium">Jours fériés Français 2024</h2>
          <div className="mt-8">
            {bankHolidays["2024"].map(({ date, description }) => (
              <div
                key={date.toString()}
                className={classNames(
                  isPast(date)
                    ? "text-slate-500"
                    : "text-green-800 hover:text-green-950",
                  isSameDay(nextBankHoliday.date, date) ? "bg-green-50/75" : "",
                  "flex items-center justify-between border-b border-green-950 py-4"
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
