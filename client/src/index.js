import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Add things to window for debug
import history from "src/history";
window.debug = { history };

ReactDOM.render(<App />, document.getElementById("root"));
