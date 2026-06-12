import { supabase } from "./lib/supabase";
import ClinicalChat from "./ClinicalChat";

export default async function Home() {
  const { data: patients } = await supabase
    .from("patient_profiles")
    .select("*");

  const { data: drugs } = await supabase
    .from("drugs")
    .select("*")
    .limit(10);

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      {/* Header */}

      <div className="bg-blue-700 text-white rounded-xl p-6 shadow-lg mb-8">
        <h1 className="text-4xl font-bold">
          BRAHMO India Clinical AI
        </h1>

        <p className="mt-2 text-blue-100">
          Clinical Decision Support for Indian Doctors
        </p>

        <p className="mt-3 text-green-200">
          ✅ Gemini Connected | ✅ Supabase Connected
        </p>
      </div>

      {/* Main Dashboard */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Patients */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">
            Patient Profiles
          </h2>

          <div className="space-y-4">
            {patients?.map((patient) => (
              <div
                key={patient.id}
                className="border rounded-lg p-4 bg-slate-50"
              >
                <h3 className="font-bold text-lg">
                  {patient.name}
                </h3>

                <p>
                  <strong>Age:</strong> {patient.age}
                </p>

                <p>
                  <strong>Diagnosis:</strong>{" "}
                  {patient.diagnosis}
                </p>

                <p>
                  <strong>Medications:</strong>{" "}
                  {patient.medications}
                </p>

                <p>
                  <strong>Notes:</strong>{" "}
                  {patient.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Assistant */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <ClinicalChat />
        </div>
      </div>

      {/* Safety Alerts */}

      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Safety Alerts
        </h2>

        <div className="space-y-3">
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-3">
            ⚠ Monitor renal function when using
            Metformin in CKD patients.
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-3">
            ⚠ Dual antiplatelet therapy may increase
            bleeding risk.
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-3">
            ⚠ Review medication combinations before
            prescribing.
          </div>
        </div>
      </div>

      {/* Drug Formulary */}

      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Drug Formulary
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {drugs?.map((drug) => (
            <div
              key={drug.id}
              className="border rounded-lg p-3 bg-slate-50"
            >
              <div className="font-semibold">
                {drug.generic_name}
              </div>

              <div className="text-sm text-gray-600">
                {drug.indian_brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}