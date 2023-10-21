function ColorList({ colors }) {
  const list = colors.map((color) => <li>{color}</li>);
  return (
    <>
      <p>Color List</p>
      {/* <p>{colors}</p> */}
      <ul>{list}</ul>
    </>
  );
}

export { ColorList };
