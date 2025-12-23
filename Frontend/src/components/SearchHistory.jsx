function SearchHistory({ history }) {
  return (
    <div className="history-panel">
      <h4>Search History</h4>
      {history.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default SearchHistory;
