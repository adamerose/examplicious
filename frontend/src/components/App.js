import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";

import { GlobalStyle } from "./styling/globalStyle";
import { lightTheme, darkTheme } from "./styling/theme";

import Debug from "./pages/Debug";
import Notes from "./pages/Notes";
import NavBar from "./common/NavBar";
import Header from "./common/Header";
import { useDarkMode } from "./common/useDarkMode";

import "./App.css";

const App = () => {
  const [themeName, themeToggler] = useDarkMode();

  const theme = themeName === "light" ? lightTheme : darkTheme;

  const MainContent = () => (
    <Switch>
      <Route exact path="/">
        <Redirect to="/notes" />
      </Route>
      <Route path="/debug">
        <Debug />
      </Route>
      <Route path="/notes">
        <Notes />
      </Route>
      <Route path="/reminders"></Route>
      <Route path="/labels"></Route>
      <Route path="/archive"></Route>
      <Route path="/trash"></Route>
    </Switch>
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <OuterWrapper>
          <header>
            <Header toggleTheme={themeToggler} />
          </header>

          <InnerWrapper>
            <NavBar />
            <main>
              <MainContent />
            </main>
          </InnerWrapper>
        </OuterWrapper>
      </ThemeProvider>
    </Router>
  );
};

const OuterWrapper = styled.div`
  width: 100%;

  header {
    position: fixed;
    top: 0;
    height: ${({ theme }) => theme.headerHeight};
    width: 100%;
    z-index: 1;
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${({ theme }) => theme.headerHeight};
  main {
    z-index: 0;
    flex-grow: 1;
  }
`;
export default App;
