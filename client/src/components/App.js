import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

// UI
import "antd/dist/antd.css";

// Local
import { store } from "src/store";
import history from "src/history";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import ArticlePage from "./pages/ArticlePage";
import SettingsPage from "./pages/SettingsPage";

import Nav from "./common/Nav";
import ErrorHandler from "./common/ErrorHandler";

const App = observer(() => {
  return (
    <Router history={history}>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/article/:id">
            <ArticlePage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
});

export default App;
