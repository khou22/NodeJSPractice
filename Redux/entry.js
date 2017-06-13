require("./style.css"); // Include CSS
import React from "react"; // Include React
import ReactDom from "react-dom";

import Counter from "./content";

ReactDom.render(
  <Counter name="Kevin"/>,
  document.getElementById('main')
)
