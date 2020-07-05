import { Card } from "antd";
import React from "react";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";
import * as Yup from "yup";

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
  remember: Yup.bool().label("Remember Me"),
});

const uiSchema = {};

const initialValues = {
  username: "",
  password: "",
  remember: true,
};

const extraProps = {
  username: { autoComplete: "username" },
  password: { type: "password", autoComplete: "current-password" },
};

const onSubmit = (values, actions) => {
  return store.signIn(values.username, values.password, values.remember);
};

const CustomForm = () => {
  return (
    <Card>
      <h5>Sign In</h5>
      <GenericForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        uiSchema={uiSchema}
        extraProps={extraProps}
        onSubmit={onSubmit}
        // debug
      />
    </Card>
  );
};

export default CustomForm;
