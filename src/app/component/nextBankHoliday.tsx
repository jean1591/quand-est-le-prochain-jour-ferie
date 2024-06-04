import { getMonthFromDate } from "@/utils";
import { BankHoliday } from "@/utils/interface/bankHolidays";
import { differenceInDays, isWeekend } from "date-fns";

export const NextBankHoliday = ({
  nextBankHoliday,
}: {
  nextBankHoliday: BankHoliday;
}) => {
  const happensDuringAWeekend = isWeekend(nextBankHoliday.date);

  return (
    <div className="w-full border-l-2 border-r-2 border-l-blue-900 border-r-blue-700 rounded-2xl bg-cover bg-center shadow-xl">
      <div className="border-t-2 border-blue-700 rounded-t-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-4"> {/* bg-gradient-to-r from-blue-800 to-blue-700 */}
        <p className="uppercase text-xl font-medium text-blue-50 text-center">{`Dans ${differenceInDays(
          nextBankHoliday.date,
          new Date()
        )} jours`}</p>
      </div>

      <div className="px-4 mt-16">
        <p className="text-lg">Prochain jour férié</p>
        <div className="mt-4 flex items-end justify-start">
          <p className="text-8xl font-medium border-b-4 border-blue-900">
            {new Date(nextBankHoliday.date).getDate()}
          </p>
          <p className="text-5xl font-medium border-b-4 border-blue-900">
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
        className="from-blue-900 to-blue-700 text-blue-50 mt-16 rounded-b-2xl bg-gradient-to-r py-2"
      >
        <p className="p-4 uppercase text-md font-medium text-center">{`${
          happensDuringAWeekend ? "Pendant" : "En dehors d'"
        } un week-end`}</p>
      </div>
    </div>
  );
};
