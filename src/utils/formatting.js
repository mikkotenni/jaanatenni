/**
 * Formats a Finnish phone number as 044 123 4567.
 * @param {string} phoneNumber
 * @returns {string}
 */
export function formatFinnishPhoneNumber(phoneNumber) {
  // Remove the country code (+358) and any leading zeros
  let localNumber = phoneNumber.replace(/^\+358/, "").replace(/^0+/, "");

  // Ensure the number starts with '0' if not already
  if (!localNumber.startsWith("0")) {
    localNumber = "0" + localNumber;
  }

  // Format the number as 044 123 4567
  // Split the string into parts and rejoin with spaces
  if (localNumber.length === 10) {
    // Check if the length is correct for this format
    return `${localNumber.substring(0, 3)} ${localNumber.substring(
      3,
      6
    )} ${localNumber.substring(6)}`;
  } else {
    // If the number doesn't match expected length, return it without formatting
    return phoneNumber;
  }
}
