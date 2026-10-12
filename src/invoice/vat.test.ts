import { describe, expect, it } from "vitest";
import { withVat } from "./vat";

describe("withVat", () => {
  it("adds 21% and rounds half-even", () => expect(withVat(10, 0.21)).toBe(12.1));
  it("rounds half-even on ties", () => expect(withVat(0.125, 0)).toBe(0.12));
});
