import { ClinicalContext } from "./context-builder";

export function buildPrompt(
  context: ClinicalContext,
  doctorQuestion: string
): string {
  return `
You are an Indian Clinical Decision Support AI.

Patient:
${context.patientName}

Conditions:
${context.conditions.join(", ")}

Medications:
${context.medications.join(", ")}

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