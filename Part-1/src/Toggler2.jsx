// Another example of code from ChatGPT
import React, { useState } from "react";

function Toggler2() {
  // Define a state variable to keep track of the mood
  const [mood, setMood] = useState("happy");

  // Function to toggle the mood
  const toggleMood = () => {
    // If the current mood is "happy," change it to "sad," and vice versa
    setMood(mood === "happy" ? "sad" : "happy");
  };

  return (
    <div>
      <h1>My Mood Toggler</h1>
      <p>Current Mood: {mood}</p>
      <button onClick={toggleMood}>Toggle Mood</button>
    </div>
  );
}

export { Toggler2 };
