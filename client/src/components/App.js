import React from "react";
import {
  Router,
  Switch,
  Route,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from "react-router-dom";
import history from "src/history";

import { message, Alert, Layout, Spin, Menu } from "antd";

// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import ArticlePage from "./pages/ArticlePage";
import SettingsPage from "./pages/SettingsPage";

import Nav from "./common/Nav";

import "src/css/main.scss";
import "antd/dist/antd.css";

const App = observer(() => {
  const content = (
    <Router history={history}>
      <>
        <Nav />
        <main>
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
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </main>
      </>
    </Router>
  );

  return store.loading ? <Spin tip="Loading...">{content}</Spin> : content;
});

export default App;
