"use client";

import { useState } from "react";

export default function ClinicalChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    try {
      setLoading(true);
      setAnswer("");

      const response = await fetch(
        "/api/clinical-chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt: question,
            patientId: 1,
          }),
        }
      );

      const data =
        await response.json();

      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer(
          JSON.stringify(
            data,
            null,
            2
          )
        );
      }
    } catch (error) {
      console.error(error);

      setAnswer(
        "Error calling AI service."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Clinical AI Assistant
      </h2>

      <textarea
        className="border p-2 w-full mt-4 rounded"
        rows={5}
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask a clinical question..."
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
        onClick={askAI}
      >
        {loading
          ? "Generating..."
          : "Ask AI"}
      </button>

      <div className="mt-6 border p-4 rounded bg-white whitespace-pre-wrap">
        {answer}
      </div>
    </div>
  );
}