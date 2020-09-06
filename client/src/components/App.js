import React from "react";
import { Route, Router, Switch } from "react-router-dom";
// State
import { observer } from "mobx-react-lite";
import store from "src/store";
import history from "src/history";
// CSS
import "./App.css";
// Pages
import ArticlePage from "./pages/ArticlePage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

const App = observer(() => {
  const pages = [
    { path: "/", component: <HomePage /> },
    { path: "/create", component: <CreatePage /> },
    { path: "/articles/:hashId/:slug", component: <ArticlePage /> },
  ];

  return (
    <Router history={history}>
      <Switch>
        {pages.map((page) => (
          <Route exact path={page.path}>
            {page.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
});

export default App;
