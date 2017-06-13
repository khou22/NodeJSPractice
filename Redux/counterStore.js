import { createStore } from "redux"; // Get the createStore export

// Setup the Redux instance
const counter = (state = 0, action) => { // Initially at 0
  console.log(action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter); // Use the callback

export default store;
