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

// reducer
const reducer = (state, action) => {
  // state is old state, action is what to do, or what the user is doing
  console.log({
    state,
    action,
  });
};
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
