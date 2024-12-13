import { useState } from "react";
import { Button, Col, ConfigProvider, Form, Image, Input, message, Row, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getAccountAPI, loginAPI, registerAPI } from "../services/api/auth.api"; // Đảm bảo có API đăng ký

const LoginPage = () => {
  const [form] = Form.useForm();
  const [registerForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // Điều khiển hiển thị modal đăng ký
  const [isRegistering, setIsRegistering] = useState(false); // Điều khiển trạng thái đăng ký
  const navigate = useNavigate();

  const onFinish = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await loginAPI(email, password);
      console.log("API response:", res); // Log đầy đủ dữ liệu trả về từ API

      if (res.data && res.data.access_token) {
        localStorage.setItem("access_token", res.data.access_token); // Lưu token vào localStorage
        // Kiểm tra và gọi getAccountAPI sau khi login thành công
        const userData = await getAccountAPI();
        message.success("Đăng nhập thành công");
        console.log(userData);

        navigate(userData.role_id === 1 ? "/admin" : "/");
      } else {
        message.error("Đã xảy ra lỗi, không nhận được access token.");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("Đăng nhập thất bại, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý đăng ký tài khoản
  const onRegisterFinish = async (values) => {
    setIsRegistering(true);
    try {
      const { name, email, password, password_confirmation } = values;
      const res = await registerAPI({ name, email, password, password_confirmation });

      if (res?.status === 200) {
        message.success("Đăng ký thành công! Bạn có thể đăng nhập.");
        setIsModalVisible(false); // Đóng modal sau khi đăng ký thành công
      } else {
        message.error("Đăng ký thất bại! Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Register error:", error);
      message.error("Đã xảy ra lỗi khi đăng ký.");
    } finally {
      setIsRegistering(false);
    }
  };

  // Hiển thị modal đăng ký
  const showRegisterModal = () => {
    setIsModalVisible(true);
  };

  // Đóng modal đăng ký
  const handleCancel = () => {
    setIsModalVisible(false);
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
              
                <Button type="primary" htmlType="submit" block loading={loading}>
                  Đăng nhập
                </Button>
                <div style={{ marginTop: 16, textAlign: "center" }}>
                <Button type="link" onClick={showRegisterModal}>
                  Đăng ký tài khoản
                </Button>
              </div>
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <Link to="/">Quay lại</Link>
              </div>
              
            </Form.Item>
          </Form>
        </Col>
      </Row>

      {/* Modal đăng ký */}
      <Modal
        title="Đăng ký tài khoản"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <Form
          form={registerForm}
          name="register"
          layout="vertical"
          onFinish={onRegisterFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
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

          <Form.Item
            label="Xác nhận mật khẩu"
            name="password_confirmation"
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isRegistering}>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export { LoginPage };
