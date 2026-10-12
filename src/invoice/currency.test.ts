import { describe, expect, it } from "vitest";
import { convertToEUR, convertToUSD } from "./currency";

describe("currency conversion (current behaviour)", () => {
  it("converts to EUR", () => expect(convertToEUR(10, { EUR: 1 })).toBe(10));
  it("converts to USD", () => expect(convertToUSD(10, { USD: 1.08 })).toBe(10.8));
  it("returns 0 when the rate is missing", () => expect(convertToUSD(10, {})).toBe(0));
});
