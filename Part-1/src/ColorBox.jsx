import { useState } from "react";
import "./ColorBox.css";

function RandomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getRandomShape() {
  const shapes = ["square", "rectangle", "rectangle2"];
  return RandomChoice(shapes);
}

function ColorBox({ colors }) {
  const [color, SetColor] = useState(RandomChoice(colors));
  const shapeClass = getRandomShape();
  const changeColor = () => {
    const randomColor = RandomChoice(colors);
    SetColor(randomColor);
  };
  return (
    <div
      className={`ColorBox ${shapeClass}`}
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export { ColorBox };

// const idx = Math.floor(Math.random() * colors.length);
// // SetColor(colors[idx]);
// const randomColor = colors[idx];
