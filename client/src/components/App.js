import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Nav from "src/components/common/Nav";
import ArticlePage from "src/components/pages/ArticlePage";
import CreatePage from "src/components/pages/CreatePage";
import HomePage from "src/components/pages/HomePage";
import RegisterPage from "src/components/pages/RegisterPage";
import SignInPage from "src/components/pages/SignInPage";
import history from "src/history";
import store from "src/store";
import "antd/dist/antd.dark.less";
// import "antd/dist/antd.less";
import "./main.css";
import { Container, colorShade } from "./utility";

const themeLight = {
  primary: "#077CBC",
  background: "#FFFFFF",
  text: "#000000",
  link: "#0090C8",
  danger: "#CC0000",
  caution: "#FB902D",
  success: "#80AE35",
  info: "#386BBD",
};

const themeDark = {
  primary: "#077CBC",
  background: "#000000",
  get background2() {
    return colorShade(this.background, 40);
  },
  get background3() {
    return colorShade(this.background, 80);
  },
  text: "#FFFFFF",
  link: "#9CD7F7",
  danger: "#EB999A",
  caution: "#FFD69F",
  success: "#94CE9C",
  info: "#67A9ED",
};

const GlobalStyle = createGlobalStyle`
  p, h1, h2, h3, h4, h5, h6, div, span {
    color: ${(props) => props.theme.text};
  }
  a {
    color: ${(props) => props.theme.link};
  }
  #root, html, body, div {
    background-color: ${(props) => props.theme.background};
  }
`;

const App = observer(() => {
  return (
    <Router history={history}>
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Container>
          <Nav />

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
        </Container>
      </ThemeProvider>
    </Router>
  );
});

export default App;
