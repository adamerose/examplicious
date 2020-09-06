import { Card, Modal, Button } from "antd";
import React from "react";
import GenericForm from "src/components/common/GenericForm";
import store from "src/store";
import * as Yup from "yup";
import styled, { useTheme } from "styled-components";

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
  password: {
    type: "password",
    autoComplete: "current-password",
  },
};

const onSubmit = (values, actions) => {
  return store.signIn(values.username, values.password, values.remember);
};

const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <Button onClick={() => setOpen(true)}>Sign In</Button>
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <StyledCard>
          <h5>Sign In</h5>
          <GenericForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            uiSchema={uiSchema}
            extraProps={extraProps}
            onSubmit={onSubmit}
          />
        </StyledCard>
      </Modal>
    </>
  );
};

export default SignIn;

const StyledCard = styled(Card)`
  margin: auto;
  max-width: 500px;
`;
