import { differenceInDays } from "date-fns";

export const diffInDays = (sDate: string, eDate: string) => {
  return differenceInDays(new Date(eDate), new Date(sDate));
};
