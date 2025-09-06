import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yloptztnpoexynypgxau.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
export const supabase = createClient(supabaseUrl, supabaseKey);
export async function addUserInfo(phone, name, email, address) {
  const { error } = await supabase.from("user_info").upsert([
    {
      id: phone,
      name,
      email,
      phone,
      address
    }
  ]);

  if (error) console.error(error);
}
