import { supabase } from "./supabase";

export async function getAllDrugs() {
  const { data, error } = await supabase
    .from("drugs")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
}