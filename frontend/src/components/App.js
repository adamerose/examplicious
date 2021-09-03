import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import styled, { ThemeProvider, css } from "styled-components/macro";

import { GlobalStyle } from "./styling/globalStyle";
import { lightTheme, darkTheme } from "./styling/theme";
import "./styling/main.css";

import Debug from "./pages/Debug";
import Notes from "./pages/Notes";
import Counter from "./pages/Counter";
import SideBar from "./common/SideBar";
import Header from "./common/Header";

// Redux imports
import { useSelector } from "react-redux";

const App = () => {
  const themeName = useSelector((state) => state.ui.theme);
  const sidebarCollapsed = useSelector((state) => state.ui.sidebarCollapsed);
  const theme = themeName === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <SideBar />

        <StyledMain sidebarCollapsed={sidebarCollapsed}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/notes" />
            </Route>
            <Route path="/debug">
              <Debug />
            </Route>
            <Route path="/counter">
              <Counter />
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
