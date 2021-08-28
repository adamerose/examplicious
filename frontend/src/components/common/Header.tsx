import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { useActions } from "../../store";
import { List } from "react-bootstrap-icons";

const Header = () => {
  const actions = useActions();

  return (
    <StyledHeader>
      <Button onClick={actions.ui.collapseSidebar}>
        <List />
      </Button>
      <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
      <Title>Peek</Title>
      <Spacer />
      <Button onClick={actions.ui.toggleTheme}>💡</Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header(
  ({ theme, ...props }) => css`
    /* Layout */
    grid-area: header;
    z-index: 100;
    position: fixed;
    height: ${theme.spacing[7]};
    width: 100vw;

    /* Styling */
    background-color: ${theme.background};
    padding: 0 ${theme.spacing[3]};
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.border};
  `
);

const Spacer = styled.span`
  flex-grow: 1;
`;

const Title = styled.h1(
  ({ theme, ...props }) => css`
    font-family: Arial, sans-serif;
    font-size: 22px;
    font-weight: normal;
    color: ${theme.textSecondary};
  `
);

const Button = styled.button(
  ({ theme, ...props }) => css`
    display: grid;
    place-items: center;

    background-color: ${theme.background};
    border-radius: 999px;
    height: ${theme.spacing[6]};
    width: ${theme.spacing[6]};
    svg {
      height: ${theme.spacing[4]};
      width: ${theme.spacing[4]};
    }
    &:hover {
      background-color: ${theme.backgroundSecondary};
    }
  `
);

export default Header;
