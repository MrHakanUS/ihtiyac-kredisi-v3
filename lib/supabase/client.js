import { createClient } from '@supabase/supabase-js';

let supabaseInstance = null;

function createSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// Lazy initialization - only create client when accessed
// This prevents build-time errors when environment variables are not set
export const supabase = new Proxy({}, {
  get(target, prop) {
    if (!supabaseInstance) {
      supabaseInstance = createSupabase();
    }
    const value = supabaseInstance[prop];
    return typeof value === 'function' ? value.bind(supabaseInstance) : value;
  }
});

