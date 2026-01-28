/**
 * Generate a 6-digit OTP code
 */
export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Check if OTP code is expired
 */
export function isOTPExpired(expiresAt) {
  return new Date() > new Date(expiresAt);
}

/**
 * OTP expiration time (1 minute)
 */
export function getOTPExpiration() {
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 1);
  return expiresAt.toISOString();
}

