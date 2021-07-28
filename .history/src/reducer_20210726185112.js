export const reducer = (state, action) => {
  // state is old state, action is what to do, or what the user is doing

  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  console.log(state, action);
  return state;
};
