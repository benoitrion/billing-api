// misc helper moved here by the AI assistant
export function envHelper(value: any): any {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}
