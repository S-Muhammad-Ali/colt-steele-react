function handleCLicked() {
  alert("Button Has Been Clicked");
}

function Clicker() {
  return (
    <div>
      <p>CLick the Button</p>
      <button onClick={handleCLicked}>Click</button>
    </div>
  );
}

export { Clicker };
