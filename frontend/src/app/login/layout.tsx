import { Flex } from "antd";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex align="center" vertical justify="center" className="min-h-screen">
      {children}
    </Flex>
  );
};
export default LoginLayout;
