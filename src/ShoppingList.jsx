import { ShoppingListItem } from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem />
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
