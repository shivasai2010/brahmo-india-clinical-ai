export interface ClinicalContext {
  patientName: string;
  conditions: string[];
  medications: string[];
}

export function buildContext(
  patientName: string,
  conditions: string[],
  medications: string[]
): ClinicalContext {
  return {
    patientName,
    conditions,
    medications
  };
}