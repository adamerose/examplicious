import React, { useState } from "react";
import { Menu, Divider } from "antd";
import { Link, NavLink, withRouter } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

import history from "src/history";
import UserMenu from "src/components/common/UserMenu";

const Nav = observer(() => {
  console.log(history.location.pathname);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  const collapsible = collapsed ? "collapsed" : "";

  let navContent;
  if (store.isAuthenticated) {
    navContent = (
      <>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/create">Create Post</NavLink>
        <UserMenu />
      </>
    );
  } else {
    navContent = (
      <>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </>
    );
  }

  return (
    <header>
      <div id="nav-container">
        <div id="nav-topbar">
          <a id="nav-hamburger" onClick={toggleCollapsed}>
            <MenuOutlined />
          </a>
          <Link to="/" id="nav-logo">
            <img src="Examplicious-Logo.svg" />
          </Link>
        </div>

        <nav id="nav-links" className={collapsible}>
          {navContent}
        </nav>
      </div>
    </header>
  );
});

// https://stackoverflow.com/a/45036930/3620725
export default withRouter(Nav);
