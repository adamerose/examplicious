import { StylesProvider } from "@material-ui/styles";
import jss from "jss";
import preset from "jss-preset-default";
import React from "react";
import ReactDOM from "react-dom";
// Debug
import history from "src/history";
import App from "./components/App";

window.d = { history };

// Add JSS features
// https://github.com/mui-org/material-ui/issues/9342#issuecomment-541268461
jss.setup(preset());
const FinalApp = () => (
  <StylesProvider jss={jss}>
    <App />
  </StylesProvider>
);

ReactDOM.render(<FinalApp />, document.getElementById("root"));
