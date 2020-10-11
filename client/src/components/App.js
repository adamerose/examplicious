import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.css";
import PostPage from "./pages/Profile";
import CreatePage from "./pages/Create";
import HomePage from "./pages/Home";
import history from "../history";
import Header from "./Header";

const App = observer(() => {
  const pages = [
    { path: "/", component: <HomePage /> },
    { path: "/create", component: <CreatePage /> },
    { path: "/e/:category/:id", component: <PostPage /> },
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
