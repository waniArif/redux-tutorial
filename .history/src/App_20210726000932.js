import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

// dispatch method - sends actions to the store
// actions (objects) must have type property - what kind of an action
// don't mutate the state - redux built on immutability (copy)

// initial store
const initialStore = {
  count: 78,
};

// store.getState()

// reducer
const reducer = (state, action) => {
  // state is old state, action is what to do, or what the user is doing

  if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  }
  return state;
};
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
