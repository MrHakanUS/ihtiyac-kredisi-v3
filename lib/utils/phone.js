/**
 * Normalize phone number by removing all non-digit characters
 */
export function normalizePhone(phone) {
  if (!phone) return '';
  return String(phone).replace(/\D/g, '');
}

/**
 * Format phone number to Turkish format: +90 5XX XXX XX XX
 */
export function formatPhone(phone) {
  if (!phone) return '';
  const cleaned = normalizePhone(phone);
  if (cleaned.length !== 10) {
    // If it includes country code (12 digits), format accordingly
    if (cleaned.length === 12 && cleaned.startsWith('90')) {
      const withoutCountry = cleaned.slice(2);
      return `+90 ${withoutCountry.slice(0, 3)} ${withoutCountry.slice(3, 6)} ${withoutCountry.slice(6, 8)} ${withoutCountry.slice(8, 10)}`;
    }
    return phone;
  }

  return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`;
}

/**
 * Validate Turkish phone number
 */
export function isValidPhone(phone) {
  const cleaned = normalizePhone(phone);
  return cleaned.length === 10 && cleaned.startsWith('5');
}

