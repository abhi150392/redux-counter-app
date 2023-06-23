import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
  if (action.type === "inc") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
