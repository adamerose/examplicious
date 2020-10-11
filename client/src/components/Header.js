import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import store from "../store";
import styled from "styled-components/macro";
import { Button } from "antd";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav = withRouter(
  observer(() => (
    <StyledNav>
      <Link to="/">Examplicious</Link>
      {store.isAuthenticated ? (
        <>
          <NavLink to="/create">
            <Button>Create</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/sign-in">
            <Button>Sign In</Button>
          </NavLink>
          <NavLink to="/sign-up">
            <Button>Sign Up</Button>
          </NavLink>
        </>
      )}
    </StyledNav>
  ))
);

export default Nav;
