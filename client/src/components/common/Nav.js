import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import ThemeSwitch from "src/components/common/ThemeSwitch";
import UserAvatar from "src/components/common/UserAvatar";
import store from "src/store";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
  },
  container: {
    composes: "container",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "&>*": {},
    "& img": {
      height: "28px",
      marginRight: "10px",
    },
    "& .active": {
      textDecoration: "underline",
    },
    "& a": {
      whiteSpace: "nowrap",
    },
  },
  navBar: {
    "&>*": { margin: 10 },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    "&>*": { margin: 0 },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const Nav = withRouter(
  observer(() => {
    const classes = useStyles();

    return (
      <AppBar className={classes.root} position="static">
        <div className={classes.container}>
          <Link to="/" className={classes.brand}>
            <img src="/brand-white.png" />
            <Typography variant="h6" className={classes.title}>
              Examplicious
            </Typography>
          </Link>

          <div className={classes.navBar}>
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
          </div>
        </div>
      </AppBar>
    );
  })
);

export default Nav;
