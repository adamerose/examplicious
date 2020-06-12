import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { observer } from "mobx-react-lite";
import React from "react";
import Flex from "src/components/common/Flex";
import store from "src/store";

const useStyles = makeStyles((theme) => ({
  root: {},
  switchBase: {
    color: "white",
    "&$checked": {
      color: "white",
      "& + $track": {
        backgroundColor: "black",
        opacity: 0.4,
      },
    },
  },
  thumb: {},
  track: {
    backgroundColor: "black",
    opacity: 0.4,
  },
  checked: {},
}));

const ThemeSwitch = observer(() => {
  const classes = useStyles();

  return (
    <Flex>
      <WbSunnyIcon fontSize="small" />
      <Switch classes={classes} onChange={store.toggleDarkTheme} />
      <NightsStayIcon fontSize="small" />
    </Flex>
  );
});

export default ThemeSwitch;
