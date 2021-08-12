import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { Bug, FileText, Bell, Tag, Archive, Trash } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="fixed-wrapper">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  width: ${(props) => (props.collapsed ? "48px" : "280px")};
  font-size: 11pt;
  font-weight: 500;
  padding-top: 8px;

  .fixed-wrapper {
    width: ${(props) => (props.collapsed ? "48px" : "280px")};
    position: fixed;
  }

  a {
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    ${(props) => (props.collapsed ? "margin-left: 12px;" : "padding-left: 12px;")};

    svg {
      height: 20px;
      width: 20px;
      margin: 0 12px;
    }

    span {
      margin-left: 24px;
      display: ${(props) => (props.collapsed ? "none" : "inherit")};
    }

    border-radius: ${(props) => (props.collapsed ? "99px" : "0 99px 99px 0")};
  }

  a:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  a.selected {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

export default NavBar;
