import { Currency, LedgerPort } from "../ports/ledger-port";

export function withVat(amount: number, rate: number): number {
  return LedgerPort.round(amount * (1 + rate), Currency.EUR);
}
