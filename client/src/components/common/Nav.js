import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

import ThemeSwitch from "src/components/common/ThemeSwitch";
import UserAvatar from "src/components/common/UserAvatar";
import store from "src/store";
import { Flex, Spacer } from "src/components/utility.js";
import PaletteDisplay from "src/components/common/PaletteDisplay";

const Nav = withRouter(
  observer(() => {
    return (
      <Flex alignItem="middle">
        <Link to="/">
          <img src="/brand.png" height="20" />
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
        <PaletteDisplay />
      </Flex>
    );
  })
);

export default Nav;
