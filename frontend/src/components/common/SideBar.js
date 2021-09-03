import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { Bug, FileText, Bell, Tag, Archive, Trash, Calculator } from "react-bootstrap-icons";
// Redux imports
import { useSelector, useDispatch } from "react-redux";

const SideBar = () => {
  const sidebarCollapsed = useSelector((state) => state.ui.sidebarCollapsed);

  return (
    <StyledSideBar sidebarCollapsed={sidebarCollapsed}>
      <NavLink to="/notes" activeClassName="selected">
        <FileText />
        <span>Notes</span>
      </NavLink>

      <NavLink to="/reminders" activeClassName="selected">
        <Bell />
        <span>Reminders</span>
      </NavLink>

      <NavLink to="/labels" activeClassName="selected">
        <Tag />
        <span>Labels</span>
      </NavLink>

      <NavLink to="/archive" activeClassName="selected">
        <Archive />
        <span>Archive</span>
      </NavLink>

      <NavLink to="/trash" activeClassName="selected">
        <Trash />
        <span>Trash</span>
      </NavLink>

      <NavLink to="/debug" activeClassName="selected">
        <Bug />
        <span>Debug</span>
      </NavLink>

      <NavLink to="/counter" activeClassName="selected">
        <Calculator />
        <span>Counter</span>
      </NavLink>
    </StyledSideBar>
  );
};

////////////////////
// Styled Components

const StyledSideBar = styled.nav(
  ({ theme, sidebarCollapsed }) => css`
    /* Layout */
    top: ${theme.headerHeight};
    z-index: 100;
    position: fixed;
    width: ${sidebarCollapsed ? theme.sidebarWidthCollapsed : theme.sidebarWidth};
    height: calc(100% - ${theme.headerHeight});

    /* Styling */
    --item-size: ${theme.spacing[6]};
    font-size: 11pt;
    font-weight: 400;
    padding-top: 8px;
    z-index: 100;
    overflow: hidden;
    background-color: ${theme.background};
    box-shadow: ${theme.shadow[1]};

    span {
      width: ${sidebarCollapsed ? 0 : "auto"};
      margin-left: ${theme.spacing[4]};

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 150px;
      display: inline-block;
    }

    /* NavLink */
    a {
      height: var(--item-size);
      width: 100%;
      display: flex;
      align-items: center;

      ${
        sidebarCollapsed
          ? /* Collapsed style */
            css`
              border-radius: 999px;
              margin-left: ${theme.spacing[3]};
              width: var(--item-size);
            `
          : /* Expanded style */
            css`
              border-radius: 0 999px 999px 0;
              padding-left: ${theme.spacing[3]};
              width: 280px;
            `
      };

      svg {
        height: ${theme.spacing[4]};
        width: ${theme.spacing[4]};
        min-width: ${theme.spacing[4]};
        margin: calc(${theme.spacing[4]} / 2);
      }

      &:hover {
        background-color: ${theme.backgroundSecondary};
      }

      &.selected {
        background-color: ${theme.primaryColor};
      }
    }
  }

  &,
  & * {
    transition-duration: 0.25s;
    transition-property: margin, width, min-width, padding, border-radius;
  `
);

export default SideBar;
