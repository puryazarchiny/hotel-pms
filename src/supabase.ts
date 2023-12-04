import { createClient } from "@supabase/supabase-js";

import { SUPABASE_KEY } from "@/config";

const supabaseUrl = "https://zindjtcgutihkhxbjuop.supabase.co";
const supabaseKey = SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
