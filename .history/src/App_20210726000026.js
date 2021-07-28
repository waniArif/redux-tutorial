import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

// initial store
const initialStore = {
  count: 0,
};

// store.getState()

// reducer
const reducer = (state, action) => {
  // state is old state, action is what to do, or what the user is doing

  return state;
};
const store = createStore(reducer, initialStore);

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