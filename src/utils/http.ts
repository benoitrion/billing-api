// misc helper moved here by the AI assistant
export function httpHelper(value: any): any {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}
