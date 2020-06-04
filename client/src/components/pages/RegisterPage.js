import React from "react";
import * as Yup from "yup";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";

import { Container, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Card: {
    margin: "auto",
    maxWidth: 500,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string().label("Username").required("Enter your username"),
  password: Yup.string().label("Password").required("Enter your password"),
  email: Yup.string().label("Email").email().nullable(true),
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
