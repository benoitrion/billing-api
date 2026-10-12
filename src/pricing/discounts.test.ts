import { describe, expect, it } from "vitest";
import { applyDiscount } from "./discounts";

const order = (segment: string, amount: number, coupon?: number) => ({
  customer: { segment },
  lines: [{ amount, qty: 1 }],
  coupon: coupon ? { value: coupon } : undefined,
});

describe("applyDiscount (current behaviour)", () => {
  it("gives 10% over 1000", () => expect(applyDiscount(order("retail", 1200))).toBe(1080));
  it("gives 5% over 500", () => expect(applyDiscount(order("retail", 600))).toBe(570));
  it("gives 2% below 500", () => expect(applyDiscount(order("retail", 100))).toBe(98));
  it("subtracts the coupon after the discount", () => expect(applyDiscount(order("retail", 100, 10))).toBe(88));
});
