import { CssBaseline, withStyles } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Nav from "src/components/common/Nav";
import ArticlePage from "src/components/pages/ArticlePage";
import CreatePage from "src/components/pages/CreatePage";
import HomePage from "src/components/pages/HomePage";
import RegisterPage from "src/components/pages/RegisterPage";
import SignInPage from "src/components/pages/SignInPage";
import history from "src/history";
import store from "src/store";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "./main.css";

export const Container = styled.div`
  max-width: 1024px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  width: 100%;
`;

const App = () => (
  <>
    <Nav />
    <Container>
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
  </>
);

const themeLight = createMuiTheme({
  palette: {
    type: "light",

    primary: {
      main: "#1976D2",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1976D2",
    },
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

const WrappedApp = observer(() => {
  const theme = store.darkTheme ? themeDark : themeLight;

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </Router>
  );
});

export default WrappedApp;
