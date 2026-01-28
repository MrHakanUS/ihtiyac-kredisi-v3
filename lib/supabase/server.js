import { createClient } from '@supabase/supabase-js';

let supabaseAdminInstance = null;
let supabaseInstance = null;

function createSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

function createSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// Lazy initialization - only create clients when accessed
// This prevents build-time errors when environment variables are not set
export const supabaseAdmin = new Proxy({}, {
  get(target, prop) {
    if (!supabaseAdminInstance) {
      supabaseAdminInstance = createSupabaseAdmin();
    }
    const value = supabaseAdminInstance[prop];
    return typeof value === 'function' ? value.bind(supabaseAdminInstance) : value;
  }
});

export const supabase = new Proxy({}, {
  get(target, prop) {
    if (!supabaseInstance) {
      supabaseInstance = createSupabase();
    }
    const value = supabaseInstance[prop];
    return typeof value === 'function' ? value.bind(supabaseInstance) : value;
  }
});

