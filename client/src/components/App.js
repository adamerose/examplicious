import { CssBaseline, withStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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

// import "./App.scss";

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

const App = observer(() => {
  const theme = store.darkTheme ? themeDark : themeLight;

  const GlobalCss = withStyles({
    "@global": {
      "#root": {},
      "html,body,#root": {
        width: "100%",
        minHeight: "100vh",
      },
      a: {
        textDecoration: "unset",
        color: "unset",
        cursor: "pointer",
      },
      "a,button": {
        userSelect: "none",
        userDrag: "none",
      },
      ".container": {
        maxWidth: "1000px",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        width: "100%",
      },
    },
  })(() => null);

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
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
      </ThemeProvider>
    </Router>
  );
});

export default App;
