import { useState } from "react";

function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  const increaseP1Score = () => {
    setScores((oldScore) => {
      return { ...oldScore, p1Score: oldScore.p1Score + 1 };
    });
  };
  const increaseP2Score = () => {
    setScores((oldScore) => {
      return { ...oldScore, p2Score: oldScore.p2Score + 1 };
    });
  };

  return (
    <div>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={increaseP1Score}>+1 Player 1</button>
      <button onClick={increaseP2Score}>+1 Player 2</button>
    </div>
  );
}

export { ScoreKeeper };

// function Counter(params) {
//     const [count, setCount] = useState(0);
//     const addOne = () => {
//       setCount(count + 1);
//     };
//     const addThree = () => {
//       setCount((previousCount) => previousCount + 1);
//       setCount((previousCount) => previousCount + 1);
//       setCount((previousCount) => previousCount + 1);
//     };
