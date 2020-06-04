import { Container, CssBaseline, withStyles } from "@material-ui/core";
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
    primary: { main: "#1976D2" },
    secondary: { main: "#ffffff" },
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const theme = store.isThemeDark ? themeDark : themeLight;

const overrides = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    MuiTab: {
      root: {
        minWidth: "72px !important",
      },
    },

    MuiAvatar: {
      colorDefault: {
        color: "black",
        backgroundColor: "#ffffff",
      },
    },
    MuiIconButton: {
      root: {
        color: theme.palette.secondary.main,
      },
    },
  },
});

const GlobalCss = withStyles({
  "@global": {
    "#root": {},
    body: {
      backgroundColor: "#DDD",
    },
    "html,body,#root": {
      width: "100%",
      minHeight: "100vh",
    },
    a: {
      textDecoration: "unset",
      color: "unset",
    },
  },
})(() => null);

const App = observer(() => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={overrides}>
          <CssBaseline />
          <GlobalCss />
          <Nav />

          <Container>
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
          </Container>
        </ThemeProvider>
      </ThemeProvider>
    </Router>
  );
});

export default App;
