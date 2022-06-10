import { SupabaseClient } from "@supabase/supabase-js";

const env = [process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY];

for (const key in env) {
    if (!key) {
        console.log(`${key} is required`);
        process.exit(0);
    }
}

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = new SupabaseClient(supabaseUrl, supabaseAnonKey);
