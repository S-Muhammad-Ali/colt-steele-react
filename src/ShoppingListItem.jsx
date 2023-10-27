function ShoppingListItem({ params }) {
  return;
  <li
    key={i.id}
    style={{
      color: i.completed ? "green" : "red",
      textDecoration: i.completed ? "line-through" : "none",
    }}
  >
    {/* if i.completed is true make it gray otherwise */}
    {i.item.toUpperCase()} - {i.quantity}
  </li>;
}

export { ShoppingListItem };
