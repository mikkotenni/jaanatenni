/**
 * Formats a Finnish phone number as 044 123 4567.
 * @param {string} phoneNumber
 * @returns {string}
 */
export function formatFinnishPhoneNumber(phoneNumber) {
  let localNumber = phoneNumber.replace(/^\+358/, "").replace(/^0+/, "");
  if (!localNumber.startsWith("0")) {
    localNumber = "0" + localNumber;
  }

  if (localNumber.length === 10) {
    return `${localNumber.substring(0, 3)} ${localNumber.substring(
      3,
      6
    )} ${localNumber.substring(6)}`;
  } else {
    return phoneNumber;
  }
}

/**
 * Formats a price using `fi-FI` locale.
 * @param {number} price
 * @param {string} currency as ISO 4217 code (e.g. "EUR" or "USD")
 * @returns {string} as formatted price (e.g. "123,45 €" or "123,45 $")
 */
export function formatCurrency(price, currency) {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: currency,
  }).format(price);
}
