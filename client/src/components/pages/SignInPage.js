import * as React from "react";
import { Formik } from "formik";
import {
  SubmitButton,
  ResetButton,
  FormikDebug,
  Form,
  Input,
  Checkbox,
} from "formik-antd";
import * as Yup from "yup";

import { message, Button, Card } from "antd";
import store from "src/store";

const validationSchema = Yup.object().shape({
  username: Yup.string().label("Username").required(),
  password: Yup.string().label("Password").required(),
  remember: Yup.boolean().label("Remember Me").required(),
});

const initialValues = {
  username: "",
  password: "",
  remember: true,
};

export const SignInPage = () => {
  return (
    <Card title="Sign In" className="dialog center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          // store
          //   .signIn(values.username, values.password, values.remember)
          //   .catch(actions.setSubmitting(false));
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <>
            <StyledForm>
              <Form.Item name="username" label="Username">
                <Input name="username" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password name="password" />
              </Form.Item>
              <Form.Item name="remember">
                <Checkbox name="remember">Remember Me</Checkbox>
              </Form.Item>
              <Button.Group style={{ marginBottom: 20 }}>
                <SubmitButton>Submit</SubmitButton>
              </Button.Group>
            </StyledForm>
            {/* <FormikDebug /> */}
          </>
        )}
      </Formik>
    </Card>
  );
};

const StyledForm = (props) => (
  <Form
    className="dialog-contents center"
    layout="vertical"
    hideRequiredMark={true}
    {...props}
  >
    {props.children}
  </Form>
);

export default SignInPage;