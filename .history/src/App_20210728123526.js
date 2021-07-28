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
import { Provider } from "react-redux";

// dispatch method - sends actions to the store
// actions (objects) must have type property - what kind of an action
// don't mutate the state - redux built on immutability (copy)

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 1,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
