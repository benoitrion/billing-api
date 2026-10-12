import { describe, expect, it } from "vitest";
import { convert } from "./convert";

describe("convert", () => {
  it("multiplies by the rate and rounds half-even", () => expect(convert(10, "USD", { USD: 1.08 })).toBe(10.8));
  it("refuses a missing rate instead of returning 0", () => expect(() => convert(10, "GBP", {})).toThrow(/GBP/));
});
