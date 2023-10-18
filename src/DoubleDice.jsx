// *4* NEW & SHORTER APPROCH WHEN WE DONT WANT ALTERNATIVE

function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;

  return (
    <>
      <h2>Double Dice</h2>
      <h3>{num1 === num2 ? "You Win :)" : null}</h3>
      {/* OR */}
      {/* {num1 === num2 && <h3>You Win :)</h3>} */}
      <p>Num1: {num1} </p>
      <p>Num2: {num2} </p>
    </>
  );
}

export { DoubleDice };

// *3* NEW & SHORTER APPROCH by TYPING REACT CONDITIONALS

// function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <>
//       <h2>{num1 === num2 ? "You Win :)" : "You Loose :("}</h2>
//       <p>Num1: {num1} </p>
//       <p>Num2: {num2} </p>
//     </>
//   );
// }

// export { DoubleDice };

// *2* SHORT APPROCH by TYPING REACT CONDITIONALS

// function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You Win :)" : "You Loose :(";
//   return (
//     <>
//       <h2>{result}</h2>
//       <p>Num1: {num1} </p>
//       <p>Num2: {num2} </p>
//     </>
//   );
// }

// export { DoubleDice };

// *1* OLD & CLUNKY APPROCH
// function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   if (num1 === num2) {
//     return (
//       <>
//         <h2>You win :)</h2>
//         <p>Num1: {num1} </p>
//         <p>Num2: {num2} </p>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>You Loose :(</h2>
//       <p>Num1: {num1} </p>
//       <p>Num2: {num2} </p>
//     </>
//   );
// }

// export { DoubleDice };
