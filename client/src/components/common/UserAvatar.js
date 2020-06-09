import { Button, Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import { Link } from "react-router-dom";
import store from "src/store";
const useStyles = makeStyles((theme) => ({
  menu: {
    "&>*": { margin: 2 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  userIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const UserAvatar = () => {
  const classes = useStyles();

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <Link className={classes.userIcon} {...bindTrigger(popupState)}>
            <AccountCircleIcon />
            {store.userInfo.username}
          </Link>
          <Popover
            {...bindMenu(popupState)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <div className={classes.menu}>
              <Typography>{store.userInfo.username}</Typography>
              <Typography>{store.userInfo.email}</Typography>
              {/* <Link to="/settings" component={Button} variant="outlined">
                Settings
              </Link> */}

              <Link
                onClick={store.signOut}
                component={Button}
                variant="outlined"
              >
                Sign Out
              </Link>
            </div>
          </Popover>
        </>
      )}
    </PopupState>
  );
};

export default UserAvatar;
