import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
// 
import Nav from "src/components/common/Nav";
import ArticlePage from "src/components/pages/ArticlePage";
import CreatePage from "src/components/pages/CreatePage";
import HomePage from "src/components/pages/HomePage";
import RegisterPage from "src/components/pages/RegisterPage";
import SignInPage from "src/components/pages/SignInPage";
import history from "src/history";
import store from "src/store";
import 'antd/dist/antd.css';
import './App.scss'
const App = observer(() => {

  return (
    <Router history={history}>
      <Nav />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/articles/:hashId/:slug">
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
