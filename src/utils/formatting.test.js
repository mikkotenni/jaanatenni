import { suite, test } from "vitest";
import { formatCurrency, formatFinnishPhoneNumber } from "./formatting";

suite("formatCurrency tests", () => {
  test("formats a price using `fi-FI` locale", ({ expect }) => {
    // Use non-breaking space instead of regular space.
    expect(formatCurrency(123.45, "EUR")).toBe("123,45\u00A0€");
    expect(formatCurrency(123.45, "USD")).toBe("123,45\u00A0$");
  });
  test("returns empty string if price is not a number", ({ expect }) => {
    expect(formatCurrency("invalid", "EUR")).toBe("");
  });
  test("returns price but no currency character if currency is not valid", ({
    expect,
  }) => {
    expect(formatCurrency(123.45, "invalid")).toBe("123,45");
  });
});

suite("formatFinnishPhoneNumber tests", () => {
  test("formats a Finnish phone number as 044 123 4567", ({ expect }) => {
    expect(formatFinnishPhoneNumber("+358441234567")).toBe("044 123 4567");
    expect(formatFinnishPhoneNumber("0441234567")).toBe("044 123 4567");
  });
  test("returns the input if it is not a Finnish phone number", ({
    expect,
  }) => {
    expect(formatFinnishPhoneNumber("1234567")).toBe("1234567");
  });
});
