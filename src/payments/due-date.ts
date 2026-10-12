import moment from "moment";

export function dueDate(issuedAt: string, days: number): string {
  return moment(issuedAt).add(days, "days").format("YYYY-MM-DD");
}
