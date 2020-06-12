import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";
import * as Yup from "yup";

const useStyles = makeStyles({
  Card: {
    margin: "auto",
    maxWidth: 500,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .label("Username")
    .required("Enter your username")
    .matches(/^[a-zA-Z0-9]+$/, "Must be only characters and digits")
    .min(3, "Username must be between 3 and 30 characters")
    .max(30, "Username must be between 3 and 30 characters"),
  password: Yup.string()
    .label("Password")
    .required("Enter your password")
    .min(8, "Password must be between 8 and 30 characters")
    .max(30, "Password must be between 8 and 30 characters"),
  email: Yup.string().label("Email").email().nullable(true).max(30),
});

const initialValues = {
  username: "",
  password: "",
  email: "",
};

const onSubmit = (values, actions) => {
  return store.register(values.username, values.password, values.email);
};

const CustomForm = () => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <CardContent>
        <Typography variant="h5" align="center">
          Register
        </Typography>
        <GenericForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          debug
        />
      </CardContent>
    </Card>
  );
};

export default CustomForm;
