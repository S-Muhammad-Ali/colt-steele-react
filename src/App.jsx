// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Greeter } from "./Greeter";
import { Die } from "./Die";
import { ListPicker } from "./ListPicker";
import { DoubleDice } from "./DoubleDice";
import { Heading } from "./Heading";
import { ColorList } from "./ColorList";
import { Slots } from "./Slots";

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
      {/* <Heading color="magenta" text="welcome" fontSize="20px" />
      <Heading color="teal" text="Back" fontSize="80px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["Red", "purple", "pink", "teal"]} />
      <ColorList colors={["Blue", "orangered", "slategrey", "teal"]} /> */}
      <Slots val1="⚔️" val2="⚔️" val3="⚔️" />
      <Slots val1="⚔️" val2="🪓" val3="⚔️" />
    </>
  );
}

export default App;
