import React from "react";
import ReactDOM from "react-dom";
// Debug
import history from "src/history";
import App from "./components/App";

window.d = { history };

ReactDOM.render(<App />, document.getElementById("root"));
