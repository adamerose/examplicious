import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.css";
import Header from "./Header";

import Home from "./pages/Home";
import Create from "./pages/Create";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import history from "../history";
import PrivateRoute from "./PrivateRoute";

const App = observer(() => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/create">
          <Create />
        </PrivateRoute>
      </Switch>
    </Router>
  );
});

export default App;
