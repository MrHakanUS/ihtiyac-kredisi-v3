-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (WARNING: This will delete all data!)
-- Uncomment the following lines if you want to start fresh:
-- DROP TABLE IF EXISTS otp_settings CASCADE;
-- DROP TABLE IF EXISTS otp_codes CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OTP Codes table
CREATE TABLE IF NOT EXISTS otp_codes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OTP Settings table
CREATE TABLE IF NOT EXISTS otp_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enabled BOOLEAN DEFAULT FALSE,
  updated_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for users table (only if table exists and column exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users') THEN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'phone') THEN
      CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'email') THEN
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'role') THEN
      CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'status') THEN
      CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'created_at') THEN
      CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at DESC);
    END IF;
  END IF;
END $$;

-- Create indexes for otp_codes table
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'otp_codes') THEN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'phone') THEN
      CREATE INDEX IF NOT EXISTS idx_otp_codes_phone ON otp_codes(phone);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'code') THEN
      CREATE INDEX IF NOT EXISTS idx_otp_codes_code ON otp_codes(code);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'used') THEN
      CREATE INDEX IF NOT EXISTS idx_otp_codes_used ON otp_codes(used);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'expires_at') THEN
      CREATE INDEX IF NOT EXISTS idx_otp_codes_expires_at ON otp_codes(expires_at);
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'phone') 
       AND EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'otp_codes' AND column_name = 'used') THEN
      CREATE INDEX IF NOT EXISTS idx_otp_codes_phone_used ON otp_codes(phone, used);
    END IF;
  END IF;
END $$;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for users table (only if table exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users') THEN
    DROP TRIGGER IF EXISTS update_users_updated_at ON users;
    CREATE TRIGGER update_users_updated_at
      BEFORE UPDATE ON users
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Trigger for otp_settings table (only if table exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'otp_settings') THEN
    DROP TRIGGER IF EXISTS update_otp_settings_updated_at ON otp_settings;
    CREATE TRIGGER update_otp_settings_updated_at
      BEFORE UPDATE ON otp_settings
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Function to clean up expired OTP codes (optional, can be run periodically)
CREATE OR REPLACE FUNCTION cleanup_expired_otp_codes()
RETURNS void AS $$
BEGIN
  DELETE FROM otp_codes
  WHERE expires_at < NOW() - INTERVAL '1 day';
END;
$$ LANGUAGE plpgsql;

-- Row Level Security (RLS) Policies
-- Note: This application uses NextAuth for authentication, not Supabase Auth
-- Authorization is handled in the application layer (middleware.js, API routes)
-- Service role key bypasses RLS, so we disable RLS for simplicity
-- If you want to enable RLS later, you'll need to create policies that work with your auth system

-- Disable RLS (authorization handled in application layer)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users') THEN
    ALTER TABLE users DISABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'otp_codes') THEN
    ALTER TABLE otp_codes DISABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'otp_settings') THEN
    ALTER TABLE otp_settings DISABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Alternative: If you want to enable RLS in the future, you can use service role bypass
-- Service role automatically bypasses RLS, so these policies would only affect anon key usage
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Service role bypass" ON users FOR ALL USING (true) WITH CHECK (true);
-- CREATE POLICY "Service role bypass" ON otp_codes FOR ALL USING (true) WITH CHECK (true);
-- CREATE POLICY "Service role bypass" ON otp_settings FOR ALL USING (true) WITH CHECK (true);
