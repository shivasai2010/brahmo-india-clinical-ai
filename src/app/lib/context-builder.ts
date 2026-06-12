export interface ClinicalContext {
  patientName: string;
  age?: number;
  conditions: string[];
  medications: string[];
  guidelines: string[];
  safetyAlerts: string[];
}

export function buildContext(
  patient: any,
  guidelines: any[] = [],
  safetyAlerts: string[] = []
): ClinicalContext {
  return {
    patientName: patient?.name || "Unknown",
    age: patient?.age,

    // FIX: diagnosis → conditions (consistency fix)
    conditions: patient?.diagnosis
      ? patient.diagnosis.split(",").map((d: string) => d.trim())
      : [],

    medications: patient?.medications
      ? patient.medications.split(",").map((m: string) => m.trim())
      : [],

    guidelines: guidelines.map(
      (g) => g.title || g.guideline_text || ""
    ),

    safetyAlerts
  };
}