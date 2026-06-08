import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: patients } = await supabase
    .from("patient_profiles")
    .select("*");

  const { data: drugs } = await supabase
    .from("drugs")
    .select("*")
    .limit(10);

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">
        BRAHMO India Clinical AI
      </h1>

      <p className="mb-8 text-green-600">
        ✅ Connected to Supabase
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Patient Profiles
        </h2>

        <ul>
          {patients?.map((patient) => (
            <li
              key={patient.id}
              className="border p-4 mb-3 rounded bg-white"
            >
              <strong>{patient.name}</strong>
              <br />
              Age: {patient.age}
              <br />
              Diagnosis: {patient.diagnosis}
              <br />
              Medications: {patient.medications}
              <br />
              Notes: {patient.notes}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Drug Formulary
        </h2>

        <ul>
          {drugs?.map((drug) => (
            <li key={drug.id}>
              {drug.generic_name} - {drug.indian_brand}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}