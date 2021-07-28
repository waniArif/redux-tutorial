import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

// dispatch method - sends actions to the store
// actions (objects) must have type property - what kind of an action
// don't mutate the state - redux built on immutability (copy)

// initial store
const initialStore = {
  count: 0,
  name: "Arif",
};

// store.getState()

// reducer

const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

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
