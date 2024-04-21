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
  if (isNaN(price)) {
    return "";
  }
  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CNY",
    "INR",
    "BRL",
    "ZAR",
    "AUD",
    "NZD",
    "CAD",
  ];
  let obj = {};
  if (currencies.includes(currency)) {
    obj.currency = currency;
    obj.style = "currency";
  }
  return new Intl.NumberFormat("fi-FI", obj).format(price);
}

export function stripHtml(html) {
  const el = document.createElement("div");
  el.innerHTML = html;
  return el.textContent || el.innerText || "";
}