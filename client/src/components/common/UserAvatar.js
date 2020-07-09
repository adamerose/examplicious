import { Button, Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import store from "src/store";
import styled from "styled-components";

const MenuFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 5px;
  & > * {
    margin: 5px;
    display: grid;
    place-items: center;
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  align-content: center;
  & > * {
    display: grid;
    place-items: center;
  }
`;
const UserAvatar = () => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <StyledAnchor {...bindTrigger(popupState)}>
            <AccountCircleIcon />
            <span>{store.userInfo.username}</span>
          </StyledAnchor>
          <Popover
            {...bindMenu(popupState)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <MenuFlex>
              <p>{store.userInfo.username}</p>
              {/* <p>{store.userInfo.email}</p> */}
              {/* <Link to="/settings" component={Button} variant="outlined">
                Settings
              </Link> */}

              <Button
                onClick={store.signOut}
                component={Button}
                variant="outlined"
              >
                Sign Out
              </Button>
            </MenuFlex>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default UserAvatar;
