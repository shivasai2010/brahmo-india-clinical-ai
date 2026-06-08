export interface PatientProfile {
  id: number;
  patient_name: string;
  age: number;
  gender: string;
  conditions: string[];
}

export interface DrugInteraction {
  id: number;
  drug_a_id: number;
  drug_b_id: number;
  severity: string;
  mechanism: string;
  clinical_effect: string;
  management: string;
}