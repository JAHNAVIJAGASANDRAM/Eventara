import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have real credentials
export const supabase = supabaseUrl.includes('placeholder') 
  ? null 
  : createClient(supabaseUrl, supabaseAnonKey)
