import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { observer } from "mobx-react-lite";
import React from "react";

const useStyles = makeStyles((theme) => ({
  thumb: {
    marginTop: -5,
    height: 20,
    width: 20,
    backgroundColor: "black",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
  },
  switchBase: {
    height: "100%",
    color: "lightblue",

    "&$checked": {
      color: "yellow",
    },

    "&$checked + $track": {
      backgroundColor: "yellow",
    },
  },
  checked: {},
  track: {
    backgroundColor: "lightblue",
  },
}));

const ThemeSwitch = observer(() => {
  const classes = useStyles();

  return (
    <Switch
      classes={classes}
      icon={<NightsStayIcon />}
      checkedIcon={<WbSunnyIcon />}
    />
  );
});

export default ThemeSwitch;
