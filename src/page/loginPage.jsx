import { useState } from "react";
import { Button, Col, ConfigProvider, Form, Image, Input, message, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getAccountAPI, loginAPI } from "../services/api.service";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await loginAPI(email, password);
      if (res) {
        localStorage.setItem("access_token", res.data.access_token);
        const userData = await getAccountAPI();
        message.success("Đăng nhập thành công");
        navigate(userData.data.role_id === 1 ? "/admin" : "/");
      } else {
        message.error("Đã xảy ra lỗi");
      }
    } catch (error) {
      message.error("Không thể đăng nhập, vui lòng thử lại.",error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#003049",
          colorPrimaryHover: "#D62828",
          borderRadius: 8,
        },
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: "#faf9f6",
          width: "100%",
          height: "100vh",
          padding: "0 16px",
        }}
      >
        <Col xs={24} sm={12} md={8} style={{ textAlign: "center", marginBottom: 32 }}>
          <Image
            preview={false}
            src="src/assets/unnamed (4).webp"
            alt="Login Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form
            form={form}
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ maxWidth: 400, margin: "0 auto" }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email của bạn!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                Đăng nhập
              </Button>
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <Link to="/">Quay lại</Link>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export { LoginPage };
