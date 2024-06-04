import { bankHolidays, formatDateToHumanDate } from "@/utils";
import { NextBankHoliday } from "./component/nextBankHoliday";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* NEXT BANK HOLIDAY */}
        <div>
          <NextBankHoliday />
        </div>

        {/* DETAILS */}
        <div className="col-span-1 sm:col-span-2">
          <h2 className="text-3xl font-medium">Jours fériés Français 2024</h2>
          <div className="mt-8">
            {bankHolidays["2024"].map(({ date, description }) => (
              <div
                id={date.toString()}
                key={date.toString()}
                className="flex items-center justify-between border-b border-green-950 py-4 text-green-800 hover:text-green-950"
              >
                <p className="text-lg font-medium">
                  {formatDateToHumanDate(new Date(date))}
                </p>
                <p className="text-lg font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
