import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

console.log("SUPERMAN", process.env.REACT_APP_NAME);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
