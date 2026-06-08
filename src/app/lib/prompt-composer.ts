import { ClinicalContext } from "./context-builder";

export function buildPrompt(
  context: ClinicalContext,
  doctorQuestion: string
): string {
  return `
PATIENT:
${context.patientName}

CONDITIONS:
${context.conditions.join(", ")}

MEDICATIONS:
${context.medications.join(", ")}

GUIDELINES:
${context.guidelines.join("\n")}

SAFETY ALERTS:
${context.safetyAlerts.join("\n")}

DOCTOR QUESTION:
${doctorQuestion}

Provide an evidence-based recommendation for an Indian doctor.
`;
}