import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./store";

export const overmind = createOvermind(config, {
  devtools: true,
});

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);
