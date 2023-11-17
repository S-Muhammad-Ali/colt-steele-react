import { useState } from "react";

const allEmojis = ["😀", "😍", "🚀", "🌈", "🎉", "🐱", "🍕", "🎸", "📚", "🎃"];

const EmojiClicker = () => {
  const [emojis, setEmojis] = useState(["😁"]);
  const generateRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * allEmojis.length);
    const newRandomEmoji = allEmojis[randomIndex];
    // setEmojis([...emojis, newRandomEmoji]); one way of doing without callback syntax which is must when we change the state on the base of oldstate.
    setEmojis((oldEmojis) => [...oldEmojis, newRandomEmoji]);
  };
  return (
    <div>
      {emojis.map((e) => (
        <span style={{ fontSize: "4rem" }}>{e}</span>
      ))}
      <button onClick={generateRandomEmoji}>Add Emoji</button>
    </div>
  );
};

export { EmojiClicker };
