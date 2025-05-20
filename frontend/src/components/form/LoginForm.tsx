import { Button, Form, Input } from "antd";
import { FieldNamesType } from "antd/es/cascader";

interface LoginValue {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: LoginValue) => {
    console.log(values);
  };
  return (
    <Form
      form={fom}
      name="login"
      onFinish={handleSubmit}
      className="p-16 rounded-md border shadow-xl"
    >
      <Form.Item<FieldNamesType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldNamesType>
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
  );
};

export default LoginForm;
