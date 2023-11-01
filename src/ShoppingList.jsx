// Parent Child
import { ShoppingListItem } from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          // {...i}
          name={i.name}
          quantity={i.quantity}
          completed={i.completed}
        />
      ))}
    </ul>
  );
}

export { ShoppingList };

// const data = [
//     { items: "eggs", quantity: 12, completed: false },
//     { items: "milk", quantity: 1, completed: true },
//     { items: "chicken breasts", quantity: 4, completed: false },
//     { items: "carrots", quantity: 6, completed: true },
//   ];

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
