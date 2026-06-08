export interface ClinicalContext {
  patientName: string;
  conditions: string[];
  medications: string[];
  guidelines: string[];
  safetyAlerts: string[];
}

export function buildContext(
  patientName: string,
  conditions: string[],
  medications: string[],
  guidelines: string[],
  safetyAlerts: string[]
): ClinicalContext {
  return {
    patientName,
    conditions,
    medications,
    guidelines,
    safetyAlerts,
  };
}