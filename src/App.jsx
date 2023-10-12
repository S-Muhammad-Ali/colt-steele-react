// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Greeter } from "./Greeter";
import { Die } from "./Die";

function App() {
  return (
    <>
      {/* <Greeter person="Ali" from="Hyderabad" />
      <Greeter person="Maria" from="karachi" />
      <Greeter person="Son/Daughter" from="karachi" /> */}
      <Die numSides={20} />
      <Die numSides={70} />
      <Die numSides={10} />
    </>
  );
}

export default App;
