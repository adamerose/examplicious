import { Card } from "antd";
import React from "react";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";
import * as Yup from "yup";
import styled from "styled-components";
import PageWrapper from "src/components/common/PageWrapper";

const StyledCard = styled(Card)`
  margin: auto;
  max-width: 500px;
`;

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

const uiSchema = {};

const extraProps = {
  username: { autoComplete: "username" },
  password: {
    type: "password",
    autoComplete: "new-password",
  },
};

const initialValues = {
  username: "",
  password: "",
  email: "",
};

const onSubmit = (values, actions) => {
  return store.register(values.username, values.password, values.email);
};

const CustomForm = () => {
  return (
    <PageWrapper>
      <StyledCard>
        <h5>Register</h5>
        <GenericForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          uiSchema={uiSchema}
          extraProps={extraProps}
          onSubmit={onSubmit}
          debug
        />
      </StyledCard>
    </PageWrapper>
  );
};

export default CustomForm;
