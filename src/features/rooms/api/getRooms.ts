import { supabase } from "@/lib";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log(error);
    throw new Error("Rooms could not be loaded");
  }

  return data;
}
