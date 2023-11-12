function ColorList({ colors }) {
  const list = colors.map((c) => <li style={{ color: c }}>{c}</li>);
  return (
    <>
      <p>Color List</p>
      {/* <p>{colors}</p> */}
      <ul>{list}</ul>
    </>
  );
}

export { ColorList };
