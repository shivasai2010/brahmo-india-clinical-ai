"use client";

interface Props {
  patients: any[];
  selectedPatient: number;
  setSelectedPatient: (id: number) => void;
}

export default function PatientSelector({
  patients,
  selectedPatient,
  setSelectedPatient,
}: Props) {
  return (
    <div className="mb-6">
      <label className="font-semibold mr-3">
        Select Patient:
      </label>

      <select
        value={selectedPatient}
        onChange={(e) =>
          setSelectedPatient(Number(e.target.value))
        }
        className="border p-2 rounded"
      >
        {patients.map((patient) => (
          <option
            key={patient.id}
            value={patient.id}
          >
            {patient.name}
          </option>
        ))}
      </select>
    </div>
  );
}