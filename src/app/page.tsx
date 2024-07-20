import { BankHolidaysList } from "./component/bankHolidaysList";
import { NextBankHoliday } from "./component/nextBankHoliday";
import { bankHolidays } from "@/utils";
import { isPast } from "date-fns";

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
      <BankHolidaysList nextBankHoliday={nextBankHoliday} />
    </div>
  );
}

export const revalidate = 3600 * 24;
