import { Form, Input, Button, notification } from "antd";
import React, { useEffect } from "react";
import { LoginAPI } from "../providers/auth";
import { redirect, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values);
    const data = await LoginAPI(values);
    console.log(data);
    if (data.status) openNotification(data.status, data.message);
    else {
      openNotification();
      navigate("/");
    }
  };
  const openNotification = (status, message) => {
    if (status) {
      api["error"]({
        message,
        description: message,
        placement: "topRight",
      });
    } else {
      api["success"]({
        message: "You have logged in successfully",
        description: "Welcome to HUST Docs",
        placement: "topRight",
      });
    }
  };
  useEffect(() => {}, []);

  return (
    <>
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
      {}
    </>
  );
};

export default SignIn;
