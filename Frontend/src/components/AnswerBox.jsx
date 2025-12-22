function AnswerBox({ answer }) {
  return (
    <div className="answer-box">
      <h3>Answer</h3>
      <pre>{answer}</pre>
    </div>
  );
}

export default AnswerBox;
