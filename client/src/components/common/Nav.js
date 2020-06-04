import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import ThemeSwitch from "src/components/common/ThemeSwitch";
import store from "src/store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
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
        <Link to="/" className={classes.brand}>
          <img src="brand-white.png" />
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
              <div className={classes.userIcon}>
                <AccountCircleIcon />
                {store.userInfo.username}
              </div>
              <Link onClick={store.signOut}>Sign Out</Link>
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
      </AppBar>
    );
  })
);

export default Nav;
