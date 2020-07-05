import React from "react";
import { Menu, Dropdown, Button } from "antd";

import store from "src/store";
const menu = (
  <Menu>
    <div>
      <p>{store.userInfo?.username}</p>
      <p>{store.userInfo?.email}</p>
    </div>
    <Menu.Item>
      <a onClick={store.signOut}>Sign Out</a>
    </Menu.Item>
  </Menu>
);

const UserAvatar = () => {
  return (
    <Dropdown overlay={menu}>
      <Button>{store.userInfo?.username}</Button>
    </Dropdown>
  );
};

export default UserAvatar;
