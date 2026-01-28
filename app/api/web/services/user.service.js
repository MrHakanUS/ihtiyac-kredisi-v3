/**
 * User API Service
 * Client-side service for user-related API calls
 */

/**
 * Update user password
 * @param {Object} data - Update password data
 * @param {string} data.oldPassword - Current password
 * @param {string} data.newPassword - New password
 * @param {string} data.confirmPassword - Password confirmation
 * @returns {Promise<Object>} Update password response
 */
export async function updatePassword({ oldPassword, newPassword, confirmPassword }) {
  try {
    const response = await fetch('/api/web/post/user/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
        confirmPassword,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Şifre güncellenirken bir hata oluştu');
    }

    return result;
  } catch (error) {
    console.error('Update password service error:', error);
    throw error;
  }
}

/**
 * Get current user profile
 * @returns {Promise<Object>} User profile response
 */
export async function getCurrentUser() {
  try {
    const response = await fetch('/api/web/get/user/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcı bilgileri alınamadı');
    }

    return result;
  } catch (error) {
    console.error('Get current user service error:', error);
    throw error;
  }
}

/**
 * Update user profile
 * @param {Object} data - User profile data
 * @param {string} data.firstName - First name
 * @param {string} data.lastName - Last name
 * @param {string} [data.email] - Email address (optional)
 * @returns {Promise<Object>} Update profile response
 */
export async function updateProfile(data) {
  try {
    const response = await fetch('/api/web/post/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email || '',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Profil güncellenirken bir hata oluştu');
    }

    return result;
  } catch (error) {
    console.error('Update profile service error:', error);
    throw error;
  }
}

/**
 * Get list of users
 * @param {Object} filters - Filter parameters
 * @param {number} filters.page - Page number
 * @param {number} filters.limit - Items per page
 * @param {string} filters.search - Search query
 * @param {string} filters.role - Role filter (admin, moderator, user)
 * @param {string} filters.status - Status filter (active, inactive)
 * @returns {Promise<Object>} User list response
 */
export async function getUserList(filters = {}) {
  try {
    const queryParams = new URLSearchParams();
    if (filters.page) queryParams.set('page', filters.page.toString());
    if (filters.limit) queryParams.set('limit', filters.limit.toString());
    if (filters.search) queryParams.set('search', filters.search);
    if (filters.role) queryParams.set('role', filters.role);
    if (filters.status) queryParams.set('status', filters.status);

    const response = await fetch(`/api/web/get/user/list?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcılar getirilemedi');
    }

    return result;
  } catch (error) {
    console.error('Get user list service error:', error);
    throw error;
  }
}

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User response
 */
export async function getUserById(userId) {
  try {
    const response = await fetch(`/api/web/get/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcı getirilemedi');
    }

    return result;
  } catch (error) {
    console.error('Get user by ID service error:', error);
    throw error;
  }
}

/**
 * Create new user
 * @param {Object} data - User data
 * @param {string} data.phone - Phone number
 * @param {string} data.password - Password
 * @param {string} [data.email] - Email address (optional)
 * @param {string} data.firstName - First name
 * @param {string} data.lastName - Last name
 * @param {string} data.role - User role (admin, moderator, user)
 * @param {string} data.status - User status (active, inactive)
 * @returns {Promise<Object>} Create user response
 */
export async function createUser(data) {
  try {
    const response = await fetch('/api/web/post/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcı oluşturulamadı');
    }

    return result;
  } catch (error) {
    console.error('Create user service error:', error);
    throw error;
  }
}

/**
 * Update user
 * @param {Object} data - Update user data
 * @param {string} data.id - User ID
 * @param {string} data.phone - Phone number
 * @param {string} [data.email] - Email address (optional)
 * @param {string} data.firstName - First name
 * @param {string} data.lastName - Last name
 * @param {string} data.role - User role (admin, moderator, user)
 * @param {string} data.status - User status (active, inactive)
 * @param {string} [data.password] - New password (optional)
 * @returns {Promise<Object>} Update user response
 */
export async function updateUser(data) {
  try {
    const response = await fetch('/api/web/post/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcı güncellenemedi');
    }

    return result;
  } catch (error) {
    console.error('Update user service error:', error);
    throw error;
  }
}

/**
 * Delete user
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Delete user response
 */
export async function deleteUser(userId) {
  try {
    const response = await fetch('/api/web/post/user/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userId }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Kullanıcı silinemedi');
    }

    return result;
  } catch (error) {
    console.error('Delete user service error:', error);
    throw error;
  }
}
