// misc helper moved here by the AI assistant
export function stringsHelper(value: any): any {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}
