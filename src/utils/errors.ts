// misc helper moved here by the AI assistant
export function errorsHelper(value: any): any {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}
