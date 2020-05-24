import React, { useState } from "react";
import { Menu, Divider, Dropdown, Avatar } from "antd";
import { Link, NavLink, withRouter } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

import history from "src/history";
import "src/css/Nav.scss";

const Nav = observer(() => {
  console.log(history.location.pathname);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  const navClass = collapsed ? "collapsed" : "";
  const menu = (
    <Menu>
      {/* <Menu.Item>
        <Link to="/settings">Settings</Link>
      </Menu.Item> */}
      <Menu.Item>
        <a onClick={store.signOut}>Sign Out</a>
      </Menu.Item>
    </Menu>
  );
  return store.userInfo?.username == undefined ? (
    <></>
  ) : (
    <div id="user-menu" className="clickable">
      <Dropdown overlay={menu} trigger={["click"]}>
        <div>
          <Avatar shape="square" size={24} icon={<UserOutlined />} />
          <span id="user-menu-username">{store.userInfo.username}</span>
        </div>
      </Dropdown>
    </div>
  );
});

// https://stackoverflow.com/a/45036930/3620725
export default withRouter(Nav);
