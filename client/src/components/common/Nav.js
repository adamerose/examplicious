import React, { useState } from "react";
import { Menu, Divider, Dropdown, Avatar, Typography, Space } from "antd";
import { Link, NavLink, withRouter } from "react-router-dom";

import { UserOutlined, DownOutlined } from "@ant-design/icons";
// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

import history from "src/history";

const Nav = withRouter(
  observer(() => {
    const UserAvatarMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item>
          <a onClick={store.signOut}>Sign Out</a>
        </Menu.Item>
      </Menu>
    );

    const UserAvatar = (
      <Dropdown overlay={UserAvatarMenu} trigger={["click"]}>
        <Space>
          <Avatar shape="square" size={24} icon={<UserOutlined />} />
          <Typography>{store.userInfo?.username}</Typography>
        </Space>
      </Dropdown>
    );

    const auth = store.isAuthenticated;

    return (
      <Menu selectedKeys={["/"]} mode="horizontal">
        <NavItem id="/">Home</NavItem>
        {auth && <NavItem id="/create">Create Post</NavItem>}
        {auth && <Menu.Item>{UserAvatar}</Menu.Item>}
        {!auth && <NavItem id="/sign-in">Sign In</NavItem>}
        {!auth && <NavItem id="/register">Register</NavItem>}
      </Menu>
    );
  })
);

const NavItem = (props) => (
  <Menu.Item key={props.id} {...props}>
    <NavLink exact to={props.id}>
      {props.children}
    </NavLink>
  </Menu.Item>
);

export default Nav;
