// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Greeter } from "./Greeter";
import { Die } from "./Die";
import { ListPicker } from "./ListPicker";
import { DoubleDice } from "./DoubleDice";

function App() {
  return (
    <>
      {/* <Greeter person="Ali" from="Hyderabad" />
      <Greeter person="Maria" from="karachi" />
      <Greeter person="Son/Daughter" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}
      {/* <ListPicker values={{ a: 1, b: 2 }} /> */}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </>
  );
}

export default App;
