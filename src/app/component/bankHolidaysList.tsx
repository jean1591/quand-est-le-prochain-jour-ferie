import { bankHolidays, classNames, formatDateToHumanDate } from "@/utils";
import { differenceInDays, isPast, isSameDay } from "date-fns";

import { BankHoliday } from "@/utils/interface/bankHolidays";

export const BankHolidaysList = ({
  nextBankHoliday,
}: {
  nextBankHoliday: BankHoliday;
}) => {
  const currentYear = new Date().getFullYear().toString();

  return (
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
  );
};

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
