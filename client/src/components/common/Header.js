import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Popover, Button } from "antd";

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
            <NavLink to="/create">
              <Img
                src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/edit-box.svg"
                alt="Create Post"
              />
            </NavLink>
          </>
        ) : (
          <>
            <a>Sign In</a>
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

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 30px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Img = styled.img`
  height: 20px;
  cursor: pointer;
`;
