import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import store from "../store";

const Nav = withRouter(
  observer(() => (
    <div style="display: flex; flex-direction: row">
      <Link to="/">Examplicious</Link>
      <div style="flex-grow: 1">
        {store.isAuthenticated ? (
          <>
            <NavLink to="/create">Create</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </>
        )}
      </div>{" "}
    </div>
  ))
);

export default Nav;
