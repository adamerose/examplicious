import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "src/components/common/ThemeSwitch";
import UserAvatar from "src/components/common/UserAvatar";
import store from "src/store";

const Nav = withRouter(
  observer(() => {
    return (
      <Flex>
        <Link to="/">
          <Img src="/brand.png" alt="Examplicious" />
        </Link>

        <Spacer />

        {store.isAuthenticated ? (
          <>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/create">New Post</NavLink>
            <UserAvatar />
          </>
        ) : (
          <>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        <ThemeSwitch />
      </Flex>
    );
  })
);

export default Nav;

const Flex = styled.div`
  display: flex;
  align-content: center;
  padding: 0 10px;
  & > * {
    margin: 10px;
    display: grid;
    place-items: center;
  }

  & .active {
    text-decoration: underline;
  }

  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 30px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Img = styled.img`
  height: 20px;
  cursor: pointer;
  ${({ theme }) => theme.palette.type == "dark" && "filter: invert(1)"}
`;
