import { useState } from "react";

function Counter(params) {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    // setCount(count + 1); worng method because count never incremented here
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={addOne}>Add+1</button>
      <button onClick={addThree}>Add+3</button>
    </div>
  );
}

export { Counter };
