import { Currency, LedgerPort } from "../ports/ledger-port";

export function convert(amount: number, to: string, rates: Record<string, number>): number {
  const rate = rates[to];
  if (rate === undefined) throw new Error(`No exchange rate for ${to}`);
  return LedgerPort.round(amount * rate, Currency.EUR);
}
