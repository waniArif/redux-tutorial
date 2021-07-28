import { CLEAR_CART, INCREASE } from "./actions";

const reducer = (state, action) => {
  // state is old state, action is what to do, or what the user is doing

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] };
  // }

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }

  // return state;
};

export default reducer;
