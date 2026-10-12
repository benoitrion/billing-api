export const REMINDER_DAYS = [7, 14, 30, 45, 60];

export function reminderDue(ageInDays: number): boolean {
  return REMINDER_DAYS.includes(ageInDays);
}
