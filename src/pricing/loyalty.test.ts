import { describe, expect, it } from "vitest";
import { loyaltyDiscount } from "./loyalty";

describe("loyaltyDiscount", () => {
  it("gives 5% from the third paid invoice", () => expect(loyaltyDiscount(200, 3)).toBe(190));
  it("gives nothing before that", () => expect(loyaltyDiscount(200, 2)).toBe(200));
  it("rounds through the ledger", () => expect(loyaltyDiscount(0.25, 3)).toBe(0.24));
});
