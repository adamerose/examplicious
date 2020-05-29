import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Debug
import history from "src/history";
window.d = { history };
ReactDOM.render(<App />, document.getElementById("root"));
