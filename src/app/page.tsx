import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("drugs")
    .select("*");

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        BRAHMO India Clinical AI
      </h1>

      <p className="mt-4">
        Database Status:
        {error ? " ❌ Error" : " ✅ Connected"}
      </p>

      <h2 className="mt-8 text-2xl font-semibold">
        Drugs Table
      </h2>

      <ul className="mt-4">
        {data?.map((drug) => (
          <li key={drug.id}>
            {drug.generic_name} - {drug.indian_brand}
          </li>
        ))}
      </ul>
    </main>
  );
}