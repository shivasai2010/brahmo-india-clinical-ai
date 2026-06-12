import { ClinicalContext } from "./context-builder";

export function buildPrompt(
  context: ClinicalContext,
  doctorQuestion: string
): string {
  const conditions = context.conditions ?? [];
  const medications = context.medications ?? [];

  return `
You are an Indian Clinical Decision Support AI.

Patient:
${context.patientName || "Unknown"}

Conditions:
${conditions.length > 0 ? conditions.join(", ") : "None reported"}

Medications:
${medications.length > 0 ? medications.join(", ") : "None reported"}

Question:
${doctorQuestion}

Rules:
- Answer in less than 100 words.
- Be concise and clinical.
- Give only:
  1. Recommendation
  2. Safety
  3. Monitoring
- Use bullet points.
- Do not provide lengthy explanations.
- Do not repeat the question.
- Do not write introductions or conclusions.
`;
}