import fetch from "node-fetch";

async function generateAnswer(question, context, sources) {
  const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3",
      prompt: `
You are an enterprise assistant.
Answer ONLY using the context below.

Context:
${context}

Question:
${question}

Give a short, clear answer.
`,
      stream: false,
    }),
  });

  const data = await ollamaResponse.json();

  // 🔥 IMPORTANT FIX
  const answerText =
    data.response && data.response.trim()
      ? data.response
      : "No relevant answer found in the provided documents.";

  return {
    answer: answerText,
    sources,
  };
}

export { generateAnswer };
