// Early payment discount (demo change to test the Copal review)
export function earlyPaymentDiscount(invoice: any, daysEarly: number): number {
  if (daysEarly <= 0) return 0;
  const rate = daysEarly >= 10 ? 0.02 : 0.01;
  return Math.round(invoice.total * rate * 100) / 100;
}
