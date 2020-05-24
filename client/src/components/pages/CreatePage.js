import React from "react";

// Store
import { observer } from "mobx-react-lite";
import store from "src/store";

import api from "src/api";

import { Card, Form, Input, Button, Checkbox } from "antd";

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

/////

const CreatePage = () => {
  const onSubmit = (values) => {
    store.postArticle(values.title, values.body);
  };

  const onSubmitFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="Create Post" className="dialog center">
      <StyledForm
        name="create-post"
        initialValues={{}}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: "Body is required" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </Card>
  );
};
export default CreatePage;
