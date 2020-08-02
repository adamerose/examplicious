import {
  Card,
  CardContent,
  Typography,
  Dialog,
  Button,
} from "@blueprintjs/core";
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
  password: { type: "password", autoComplete: "current-password" },
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
      <Dialog open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <StyledCard>
          <CardContent>
            <Typography variant="h5" align="center">
              Sign In
            </Typography>
            <GenericForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              uiSchema={uiSchema}
              extraProps={extraProps}
              onSubmit={onSubmit}
            />
          </CardContent>
        </StyledCard>
      </Dialog>
    </>
  );
};

export default SignIn;

const StyledCard = styled(Card)`
  margin: auto;
  max-width: 500px;
`;
