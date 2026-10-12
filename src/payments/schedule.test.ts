import { describe, expect, it } from "vitest";
import { reminderDue } from "./schedule";

describe("reminderDue", () => {
  it("is due on day 7", () => expect(reminderDue(7)).toBe(true));
  it("is not due on day 8", () => expect(reminderDue(8)).toBe(false));
  it("is never due for negative ages", () => expect(reminderDue(-1)).toBe(false));
});
