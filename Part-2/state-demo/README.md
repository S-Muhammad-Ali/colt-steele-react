# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

In Counter.jsx --> we learn "The right way to update states when our new state depends on the old state" which is THE CALLBACK SYNTAX, in the case of the color state in our last class we don't need to use the CALLBACK SYNTAX because our new state does not depend on the old state

In Dumbo.jsx --> we learn how to set our initial state with Complex Logic not just with simple boolean, number or string. It's not all that interesting, but this is something that can be useful when you are setting an initial state that's complex. You can use a separate function and you don't have to worry about rerunning every time the component re-renders as long as you pass the function through rather than executing the function. the example given below.

const [board, setBoard] = useState(GenerateGameBoard());
const [board, setBoard] = useState(GenerateGameBoard);

In ScoreKeeper.jsx (641. Working With Objects In State) --> we learn how to handle more than one state via objects because it's not practical to make a separate state variable for each score(in this case).

in EmojiCliker (642. Arrays In State) --> Next we're gonna talk about working with arrays and state which have the same problem. It's not a problem. But we have the same considerations when working with arrays and states as objects. Because both arrays and objects are mutable things. They're mutable objects, they're not primitives, which means if we change the inside of an array or the inside of an object, react doesn't know that anything is different. It makes comparisons based on the identity of an object or of an element. So it can compare the number one and the number five, and tell that they're different immediately. But if it compares one object to another object it doesn't look at what's inside. It looks at their identity in memory.
