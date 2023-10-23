function Slots(props) {
  const isWinner = props.val1 === props.val2 && props.val1 === props.val3;

  return (
    <div>
      <h1>
        {props.val1} {props.val2} {props.val3}
      </h1>
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You Win!" : "You Lose"}
      </h2>
      {/* <h1>{isWinner ? "Congratulation" : null}</h1> */}
      {isWinner && <h1> Congratulation</h1>}
    </div>
  );
}
export { Slots };
