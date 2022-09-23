import { useState } from "react";
import { diffInDays } from "../utils/datetime";

export function usePeriods() {
  const [periods, setPeriods] = useState<Array<[string, string]>>([]);
  const totalPeriod = periods.reduce((res, period) => {
    const [sDate, eDate] = period;
    return res + diffInDays(sDate, eDate);
  }, 0);
  const onAddPeriod = (sDate: string, eDate: string) => {
    setPeriods([...periods, [sDate, eDate]]);
  };

  return {
    periods,
    totalPeriod,
    onAdd: onAddPeriod,
  };
}
