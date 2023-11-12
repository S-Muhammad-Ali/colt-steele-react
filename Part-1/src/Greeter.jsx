function Greeter({ person, from = "Ghar ka sarbrah" }) {
  return (
    <>
      <h1>Hi There!, {person}</h1>
      <h2>{from}</h2>
    </>
  );
}

export { Greeter };
