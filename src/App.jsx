// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState } from "react";
import "./App.css";
import { Greeter } from "./Greeter";
import { Die } from "./Die";
import { ListPicker } from "./ListPicker";
import { DoubleDice } from "./DoubleDice";
import { Heading } from "./Heading";
import { ColorList } from "./ColorList";
import { Slots } from "./Slots";
import { SlotM } from "./SlotM";
import { ShoppingList } from "./ShoppingList";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

function App() {
  // let emoji = ["😊", "😒", "😜", "😁", "🤢", "😎", "😆", "🤔", "😍"];
  // let random = (mn, mx) => {
  //   return Math.random() * (mx - mn) + mn;
  // };
  // let onClic = () => {
  //   return emoji[Math.floor(random(1, 9)) - 1];
  // };

  // const [slot1, setSlot1] = useState(onClic());
  // const [slot2, setSlot2] = useState(onClic());
  // const [slot3, setSlot3] = useState(onClic());

  // const spinSlots = () => {
  //   setSlot1(onClic());
  //   setSlot2(onClic());
  //   setSlot3(onClic());
  // };
  return (
    <div className="SlotM">
      {/* <Greeter person="Ali" from="Hyderabad" />
      <Greeter person="Maria" from="karachi" />
      <Greeter person="Son/Daughter" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <ListPicker values={["a", "b", "c"]} /> */}
      {/* <ListPicker values={{ a: 1, b: 2 }} /> */}
      {/* <Heading color="magenta" text="welcome" fontSize="20px" />
      <Heading color="teal" text="Back" fontSize="80px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["Red", "purple", "pink", "teal"]} />
      <ColorList colors={["Blue", "orangered", "slategrey", "teal"]} /> */}
      {/* <Slots val1="⚔️" val2="⚔️" val3="⚔️" />
      <Slots val1="⚔️" val2="🪓" val3="⚔️" /> */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <SlotM x={slot1} y={slot2} z={slot3} />
      <button onClick={spinSlots}>Spin the Slots</button> */}
      {/* <SlotM x={onClic()} y={onClic()} z={onClic()} />
      <SlotM x={onClic()} y={onClic()} z={onClic()} />
      <SlotM x={onClic()} y={onClic()} z={onClic()} />
      <SlotM x={onClic()} y={onClic()} z={onClic()} />
      <SlotM x={onClic()} y={onClic()} z={onClic()} />
      <SlotM x={onClic()} y={onClic()} z={onClic()} /> */}
      {/* <SlotM x="😊" y="😊" z="😊" /> */}
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
