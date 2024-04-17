import { supabase } from "@/lib";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
