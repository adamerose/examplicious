import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import {
  AssignmentOutlined,
  NotificationsNoneOutlined,
  LabelOutlined,
  ArchiveOutlined,
  DeleteOutlined,
} from "@material-ui/icons";

import { paper } from "../styling/commonStyles";
const NavBar = () => {
  return (
    <Wrapper>
      <div className="fixed-wrapper">
        <NavLink to="/notes" activeClassName="selected">
          <AssignmentOutlined />
          <span>Notes</span>
        </NavLink>
        <NavLink to="/reminders" activeClassName="selected">
          <NotificationsNoneOutlined />
          <span>Reminders</span>
        </NavLink>

        <NavLink to="/labels" activeClassName="selected">
          <LabelOutlined />
          <span>Labels</span>
        </NavLink>

        <NavLink to="/archive" activeClassName="selected">
          <ArchiveOutlined />
          <span>Archive</span>
        </NavLink>

        <NavLink to="/trash" activeClassName="selected">
          <DeleteOutlined />
          <span>Trash</span>
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
  font-size: 14px;
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
      height: 24px;
      width: 24px;
      margin: 0 12px;
    }

    span {
      margin-left: 16px;
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
