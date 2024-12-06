import { Button, Col, ConfigProvider, Flex, Form, Image, Input, message, Row } from "antd";

import { Link, useNavigate } from "react-router-dom";

import { getAccountAPI, loginAPI } from "../services/api.service";
import { useState } from "react";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const navigate = useNavigate({});
  const [loading, setLoading] = useState();


  const onFinish = async (value) => {
    setLoading(true);
    const res = await loginAPI(value.email, value.password);
    const userData = await getAccountAPI();

    if (userData){
      message.success("đăng nhập thành công ");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(userData.data);
      console.log("check user",user);
      if(userData.data.role_id==1){
        navigate("/admin");
      }else{
      navigate("/");
      }
    } else {
      message.error("xẩy ra lỗi");
    }
    setLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: "#faf9f6",
        width: "100%",
        height: "100vh",
      }}>
      <Col xs={16} sm={12} md={8}>
        <Image
          preview={{ visible: false, movable: false, mask: false }}
          src="src/assets/unnamed (4).webp">
          {" "}
        </Image>
      </Col>
      <Col xs={19} sm={12} md={8}>
        <Form
          form={form}
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
            label="Email"
            name="email"
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
                <Button
                  loading={loading}
                  type="primary"
                  onClick={() => {
                    form.submit();
                  }}>
                  Login
                </Button>
                
                <Link to="/">Quay lại</Link>
              </Flex>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export { LoginPage };
