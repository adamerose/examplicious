import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { MdLightbulbOutline } from "react-icons/md";
import { paper } from "../styling/commonStyles";

import Toggler from "./Toggler";

const NavBar = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Toggler toggleTheme={toggleTheme} />
      <p>This is my header</p>
      <div style={{ width: "70%" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export default NavBar;
