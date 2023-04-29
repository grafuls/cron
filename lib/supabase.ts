import { createClient } from '@supabase/supabase-js'


let supabase_url = process.env.SUPABASE_URL || '';
let supabase_key = process.env.SUPABASE_KEY || '';

export const supabase = createClient(supabase_url, supabase_key);

