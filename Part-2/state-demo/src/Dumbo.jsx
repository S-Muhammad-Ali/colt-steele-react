import { useState } from "react";

function GenerateGameBoard(params) {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000);
}

function Dumbo(params) {
  const [board, setBoard] = useState(GenerateGameBoard);
  return (
    <div>
      <button onClick={() => setBoard("Hello!")}>
        Click me to change state
      </button>
    </div>
  );
}

export { Dumbo };
