// Child Component
function ShoppingListItem({ name, quantity, completed }) {
  const style = {
    color: completed ? "green" : "red",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <>
      <li style={style}>
        {name} - {quantity}
      </li>
    </>
  );
}

export { ShoppingListItem };

// <li
//   key={i.id}
//   style={{
//     color: i.completed ? "green" : "red",
//     textDecoration: i.completed ? "line-through" : "none",
//   }}
// >
//   {/* if i.completed is true make it gray otherwise */}
//   {i.item.toUpperCase()} - {i.quantity}
// </li>;
