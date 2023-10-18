function ListPicker({ values }) {
  const rndIdx = Math.floor(Math.random() * values.length);
  const rndElement = values[rndIdx];
  return (
    <>
      <p>The List of values: {values} </p>
      <p>Trandom element is: {rndElement} </p>
    </>
  );
}

export { ListPicker };
