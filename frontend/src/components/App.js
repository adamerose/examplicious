import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import styled, { ThemeProvider, css } from "styled-components/macro";

import { GlobalStyle } from "./styling/globalStyle";
import { lightTheme, darkTheme } from "./styling/theme";
import "./styling/main.css";

import Debug from "./pages/Debug";
import Notes from "./pages/Notes";
import SideBar from "./common/SideBar";
import Header from "./common/Header";

import { useActions, useAppState } from "../store";

const App = () => {
  const state = useAppState();
  const actions = useActions();

  const themeName = state.ui.theme;
  const theme = themeName === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <SideBar />

        <StyledMain sidebarCollapsed={state.ui.sidebarCollapsed}>
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
        </StyledMain>
      </ThemeProvider>
    </Router>
  );
};

const StyledMain = styled.main(
  ({ theme, sidebarCollapsed }) => css`
    margin-left: ${sidebarCollapsed ? theme.sidebarWidthCollapsed : theme.sidebarWidth};
    margin-top: ${theme.headerHeight};

    transition: margin-left 250ms;
  `
);

export default App;
