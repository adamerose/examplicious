// React
import React from "react";
// State
import { observer } from "mobx-react-lite";
import store from "src/store";
import history from "src/history";
// CSS
import "./main.css";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// Routing
import { Route, Router, Switch } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

const themeLight = {
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
      light: "rgb(71, 145, 219)",
      dark: "rgb(17, 82, 147)",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
      light: "rgb(227, 51, 113)",
      dark: "rgb(154, 0, 54)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
      level2: "#f5f5f5",
      level1: "#fff",
    },
  },
};

const themeDark = {
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
      light: "rgb(166, 212, 250)",
      dark: "rgb(100, 141, 174)",
    },
    secondary: {
      main: "#f48fb1",
      light: "rgb(246, 165, 192)",
      dark: "rgb(170, 100, 123)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      paper: "#424242",
      default: "#121212",
      level2: "#333",
      level1: "#212121",
    },
  },
};

const App = observer(() => {
  const theme = store.darkTheme ? themeDark : themeLight;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/articles/:hashId/:slug">
            <ArticlePage />
          </Route> */}
      </Switch>
    </Router>
  );
});

export default App;
