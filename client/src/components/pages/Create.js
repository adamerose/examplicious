import { Card } from "antd";
import React from "react";
import store from "../../store";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        body: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().label("Title").required(),
        body: Yup.string().label("Body").required(),
      })}
      onSubmit={(values, actions) => {
        store.createPost(values.title, values.body).then(() => {
          actions.setSubmitting(false);
        });
      }}
    >
      <Form>
        <input label="Title" name="title" type="text" />
        <input label="Body" name="body" type="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const Create = () => {
  return (
    <>
      <Card>
        <h5>Create Post</h5>
        <Form />
      </Card>
    </>
  );
};

export default Create;
