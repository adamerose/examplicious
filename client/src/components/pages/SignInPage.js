import React, { useState, useEffect, useRef } from "react";

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

import { Alert, message, Button, Card, Space } from "antd";
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

const onSubmit = (values) => {
  return store.signIn(values.username, values.password, values.remember);
};

///////////

const CustomForm = () => {
  const [globalErrors, setGlobalErrors] = useState([]);

  return (
    <Card title="Register" className="dialog center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSubmit(values)
            .catch((error) => {
              setGlobalErrors([...globalErrors, error]);
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Space>
            {globalErrors.map((e) => (
              <ErrorAlert error={e} />
            ))}
            <Form
              className="dialog-contents center"
              layout="vertical"
              hideRequiredMark
            >
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
            </Form>
            {/* <FormikDebug /> */}
          </Space>
        )}
      </Formik>
    </Card>
  );
};

const ErrorAlert = ({ error }) => (
  <Alert
    message={error?.name || "Error"}
    description={
      error?.response?.data?.detail || error?.message || "An error occured"
    }
    type="error"
    closable
    showIcon
  />
);

export default CustomForm;
