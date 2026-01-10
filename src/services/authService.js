/**
 * Authentication Service
 * 
 * This file contains Supabase authentication functions.
 * Supabase handles password hashing, JWT tokens, and session management automatically.
 */

import { supabase } from '../lib/supabase';

/**
 * Login function using Supabase
 * 
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, user?: object, error?: string}>}
 */
export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message || 'Invalid credentials',
      };
    }

    if (data?.user) {
      return {
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name || data.user.email?.split('@')[0],
          role: data.user.user_metadata?.role || 'admin',
        },
        session: data.session,
      };
    }

    return {
      success: false,
      error: 'Login failed - no user data received',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'An error occurred during login',
    };
  }
};

/**
 * Verify session function using Supabase
 * 
 * @returns {Promise<{success: boolean, user?: object}>}
 */
export const verifySession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error || !session) {
      return {
        success: false,
        error: 'No active session',
      };
    }

    return {
      success: true,
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
        role: session.user.user_metadata?.role || 'admin',
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Session verification failed',
    };
  }
};

/**
 * Supabase Configuration
 * 
 * Supabase is configured in src/lib/supabase.js
 * Environment variables are set in .env file:
 * - VITE_SUPABASE_URL
 * - VITE_SUPABASE_ANON_KEY
 * 
 * Supabase automatically handles:
 * - Password hashing (bcrypt)
 * - JWT token generation and validation
 * - Session management
 * - User authentication
 * 
 * To create admin users, use the Supabase dashboard:
 * 1. Go to Authentication > Users
 * 2. Click "Add user" or "Invite user"
 * 3. Set email and password
 * 4. Optionally add user metadata (name, role) in the user_metadata field
 */

