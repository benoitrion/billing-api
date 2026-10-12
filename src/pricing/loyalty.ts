import { Currency, LedgerPort } from "../ports/ledger-port";

/** 5% off once a customer has paid at least 3 invoices. */
export function loyaltyDiscount(amount: number, paidInvoices: number): number {
  const rate = paidInvoices >= 3 ? 0.05 : 0;
  return LedgerPort.round(amount * (1 - rate), Currency.EUR);
}
