import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Flex: (props) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    ...(props.vertical && { flexDirection: "column" }),
  }),
});

const Flex = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.Flex} style={{ ...props }}>
      {props.children}
    </div>
  );
};

export default Flex;
