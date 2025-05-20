import { Form, Input, Button } from "antd";
import React from "react";

const SignIn = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>wtf</h1>
      <Form
        form={form}
        name="login"
        onFinish={handleSubmit}
        className="p-16 rounded-md border shadow-xl"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
