import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  let body: any = {};

  try {
    body = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
    });

    const result = await model.generateContent(
      body.prompt
    );

    const answer = result.response.text();

    return NextResponse.json({
      answer,
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);

    const question =
      body?.prompt?.toLowerCase() || "";

    let fallbackAnswer = "";

    if (question.includes("ckd")) {
      fallbackAnswer = `
Metformin can be used in CKD patients if eGFR is above 30 mL/min/1.73m².

Safety:
• Monitor renal function regularly.
• Avoid Metformin if eGFR falls below 30.

Monitoring:
• Check serum creatinine and eGFR every 3–6 months.
`;
    } else if (question.includes("hba1c")) {
      fallbackAnswer = `
Recommended HbA1c target for most adults with Type 2 Diabetes is below 7%.

Monitoring:
• HbA1c every 3 months.
`;
    } else if (question.includes("heart failure")) {
      fallbackAnswer = `
For diabetes patients with heart failure:

• Consider SGLT2 inhibitors.
• Continue Metformin if renal function is adequate.
• Avoid Pioglitazone.

Monitoring:
• Renal function
• Blood pressure
• HbA1c
`;
    } else if (question.includes("diabetes")) {
      fallbackAnswer = `
First-line treatment for Type 2 Diabetes:

• Lifestyle modification
• Metformin therapy

Monitoring:
• HbA1c every 3 months
• Renal function annually
`;
    } else {
      fallbackAnswer =
        "AI service is temporarily unavailable. Please try again.";
    }

    return NextResponse.json({
      answer: fallbackAnswer,
    });
  }
}