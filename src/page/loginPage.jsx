import {
  Button,
  Checkbox,
  ConfigProvider,
  Flex,
  Form,
  Image,
  Input,
} from "antd";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginPage = () => {
  return (
    <body
      style={{
        backgroundColor: "#faf9f6",
        width: "100%",
        height: "100vh",
        margin: "0px",
      }}>
      <Flex justify="center" align="center">
        <Image
          preview={{ visible: false, movable: false, mask: false }}
          src="src/assets/unnamed (4).webp">
          {" "}
        </Image>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultColor: "#EAE2B7",
                    defaultBg: "#003049",
                    defaultHoverColor: "#ffffff",
                    defaultHoverBg: "#D62828",
                    defaultHoverBorderColor: "#D62828",
                  },
                },
              }}>
              <Flex gap={10} align="center">
                <Button type="primary">Login</Button>
                <Link to="/">Quay lại</Link>
              </Flex>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </Flex>
    </body>
  );
};
export { LoginPage };
