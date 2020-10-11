import { Card } from "antd";
import React from "react";
import store from "../../store";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../Header";

const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title").required(),
  body: Yup.string().label("Body").required(),
});

const initialValues = {
  title: "",
  body: "",
};

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
        <select label="Category" name="category">
          {["awww", "news", "technology"].map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const Create = () => {
  return (
    <>
      <Header />
      <Card>
        <h5>Create Post</h5>
        <Form />
      </Card>
    </>
  );
};

export default Create;
