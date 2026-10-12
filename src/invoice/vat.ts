export function withVat(amount: number, rate: number): number {
  const v = amount * (1 + rate);
  return Math.round(v * 100) / 100;
}
