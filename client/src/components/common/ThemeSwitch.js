import { Switch } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import { Flex } from "src/components/utility";
import store from "src/store";

const ThemeSwitch = observer(() => {
  const url = store.darkTheme
    ? "https://image.flaticon.com/icons/svg/3127/3127165.svg"
    : "https://image.flaticon.com/icons/svg/3127/3127140.svg";
  return (
    <a onClick={store.toggleDarkTheme}>
      <img src={url} width="25" height="25" />
    </a>
  );
});

export default ThemeSwitch;
