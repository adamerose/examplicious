import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "src/components/common/ThemeSwitch";
import SignIn from "src/components/common/SignIn";
import Register from "src/components/common/Register";
import { Popover, Button } from "@material-ui/core";

import store from "src/store";

const Nav = withRouter(
  observer(() => {
    const UserMenu = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      return (
        <>
          <a onClick={(event) => setAnchorEl(event.currentTarget)}>
            <Img
              src="https://fonts.gstatic.com/s/i/materialicons/account_circle/v7/24px.svg"
              alt="Create Post"
            />
            <span>{store.userInfo.username}</span>
          </a>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => {
              setAnchorEl(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transitionDuration={0}
          >
            <Button onClick={store.signOut}>Sign Out</Button>
          </Popover>
        </>
      );
    };

    return (
      <Flex>
        <Link to="/">
          <Img src="/brand.png" alt="Examplicious" />
        </Link>

        <Spacer />

        {store.isAuthenticated ? (
          <>
            <NavLink to="/create">
              <Img
                src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/edit-box.svg"
                alt="Create Post"
              />
            </NavLink>
            <ThemeSwitch />
            <UserMenu />
          </>
        ) : (
          <>
            <a>
              <SignIn />
            </a>
            {/* <Register /> */}
            <ThemeSwitch />
          </>
        )}
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
    grid-template-columns: auto auto;
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
