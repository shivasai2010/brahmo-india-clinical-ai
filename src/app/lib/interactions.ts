import { supabase } from "./supabase";

export async function getDrugInteractions() {
  const { data, error } = await supabase
    .from("drug_interactions")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
}