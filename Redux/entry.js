require("./style.css"); // Include CSS
import React from "react"; // Include React
import ReactDom from "react-dom";

import Counter from "./content";
import store from "./counterStore"; // Don't use brackets because it is the default export

const render = () => {
  ReactDom.render(
    <Counter
      value = { store.getState() }
      onIncrement = { () =>
        store.dispatch({ type: 'INCREMENT' })
      }
      onDecrement = { () =>
        store.dispatch({ type: 'DECREMENT' })
      }
      />,
    document.getElementById('main')
  )
}

store.subscribe(render); // Subscribe to the live updates
render();
