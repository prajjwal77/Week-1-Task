import { useState } from "react";
import QueryBox from "./components/QueryBox";
import AnswerBox from "./components/AnswerBox";
import Loader from "./components/Loader";
import { askRag } from "./api/ragApi";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await askRag(query);
      setAnswer(response);
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🔍 RAG AI Search</h1>

      <QueryBox
        query={query}
        setQuery={setQuery}
        onAsk={handleAsk}
      />

      {loading && <Loader />}

      {answer && <AnswerBox answer={answer} />}
    </div>
  );
}

export default App;
