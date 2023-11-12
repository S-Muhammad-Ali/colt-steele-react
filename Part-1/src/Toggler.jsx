import { useState } from "react";
import "./Toggler.css";

function Toggler() {
  // Define a state variable to keep track of the mood
  const [isHappy, setisHappy] = useState(true);

  // Function to toggle the mood
  const toggleIsHappy = () => {
    // If the current mood is "happy," change it to "sad," and vice versa
    setisHappy(!isHappy);
  };

  return (
    <p className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? "😄" : "😞😱"}
    </p>
  );
}

export { Toggler };
