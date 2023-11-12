import { useState } from "react";
import "./Toggler.css";

function ToggleCounter() {
  // Define a state variable to keep track of the mood
  const [isHappy, setisHappy] = useState(true);
  const [count, setCount] = useState(0);

  // Function to toggle the mood
  const toggleIsHappy = () => {
    // If the current mood is "happy," change it to "sad," and vice versa
    setisHappy(!isHappy);
  };
  const incrementCount = () => {
    return setCount(count + 2);
  };

  return (
    <div>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😄" : "😞😱"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+2 </button>
    </div>
  );
}

export { ToggleCounter };
