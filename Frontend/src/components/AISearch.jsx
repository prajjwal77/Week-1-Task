import { useState } from "react";
import { askAI } from "../api/aiApi";

function AISearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await askAI(query);
    setAnswer(res);
  };

  return (
    <div className="ai-box">
      <textarea placeholder="Ask using Gemini AI..." onChange={e => setQuery(e.target.value)} />
      <button onClick={handleAsk}>Search</button>
      <pre>{answer}</pre>
    </div>
  );
}

export default AISearch;
