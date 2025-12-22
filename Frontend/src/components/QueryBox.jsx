function QueryBox({ query, setQuery, onAsk }) {
  return (
    <div className="query-box">
      <textarea
        placeholder="Ask a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={4}
      />

      <button onClick={onAsk}>
        Ask AI
      </button>
    </div>
  );
}

export default QueryBox;
