/**
 * Authentication-related interfaces and types
 */

/**
 * Login Request Interface
 * @typedef {Object} LoginRequest
 * @property {string} phone - Phone number
 * @property {string} password - Password
 */

/**
 * Register Request Interface
 * @typedef {Object} RegisterRequest
 * @property {string} phone - Phone number
 * @property {string} password - Password
 * @property {string} confirmPassword - Password confirmation
 * @property {string} [email] - Email address (optional)
 * @property {string} firstName - First name
 * @property {string} lastName - Last name
 * @property {boolean} terms - Terms acceptance
 */

/**
 * OTP Send Request Interface
 * @typedef {Object} OTPSendRequest
 * @property {string} phone - Phone number
 */

/**
 * OTP Verify Request Interface
 * @typedef {Object} OTPVerifyRequest
 * @property {string} phone - Phone number
 * @property {string} code - 6-digit OTP code
 */

/**
 * Auth Response Interface
 * @typedef {Object} AuthResponse
 * @property {string} message - Success message
 * @property {Object} [user] - User data (if login/register)
 * @property {boolean} [verified] - OTP verification status
 * @property {string} [error] - Error message (if failed)
 */

export const AuthInterfaces = {
  LoginRequest: {
    phone: String,
    password: String,
  },
  RegisterRequest: {
    phone: String,
    password: String,
    confirmPassword: String,
    email: String,
    firstName: String,
    lastName: String,
    terms: Boolean,
  },
  OTPSendRequest: {
    phone: String,
  },
  OTPVerifyRequest: {
    phone: String,
    code: String,
  },
  AuthResponse: {
    message: String,
    user: Object,
    verified: Boolean,
    error: String,
  },
};
