function ListPicker({ values }) {
  const rndIdx = Math.floor(Math.random() * values.length);
  const rndElement = values[rndIdx];
  console.log(rndIdx);
  console.log(rndElement);
  return (
    <>
      <p>The List of values: {values} </p>
      <p>Random element is: {rndElement} </p>
    </>
  );
}

export { ListPicker };
