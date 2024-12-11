import { LoginOutlined, LogoutOutlined, } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Image, Menu, message, Row} from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../services/api.service";
import { AuthContext } from "../context/auth.context";



const HeaderMenu = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (location && location.pathname) {
      const allRoutes = ["home", "new", "programs", "about" ,"learning"];
      const currentRoute = allRoutes.find((item) => `/${item}` === location.pathname);
      if (currentRoute) {
        setCurrent(currentRoute);
      } else {
        setCurrent("");
      }
    }
  }, [location]);

  const handleLogout = async () => {
    try {
      const res = await logoutAPI();
      if (res.data) {
        localStorage.removeItem("access_token");
        setUser({
          id: "",
          email: "",
          role_id: "",
          student: "",
        });
        message.success("Logout thành công.");
        navigate("/");
      }
    } catch (error) {
      message.error("Có lỗi khi đăng xuất.",error);
    }
  };

  const menuItems = [
    {
      label: (
          <Image
            src="./src/assets/logo.png"
            preview={{ visible: false, movable: false, mask: false }}
            width={80}
            height={38}
            style={{position:"sticky", top:"0px"}}
          />
      ),
      key: "logo", // Không chọn được
      disabled: true,
    },
    {
      label: <Link to="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link to="/new">Event</Link>,
      key: "new",
    },
    {
      label: <Link to="/programs">Programs</Link>,
      key: "programs",
    },
    {
      label: <Link to="/about">About Us</Link>,
      key: "about",
    },
    user.id && {
        label: <Link to="/learning">Học Tập</Link>,
        key: "learning",
      },
    {
      label: user.id ? (
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ color: "#D62828" }}
        >
          Logout
        </Button>
      ) : (
        <Button
          type="text"
          icon={<LoginOutlined />}
          onClick={() => navigate("/login")}
          style={{ color: "#003049" }}
        >
          Login
        </Button>
      ),
      key: "auth",
    },
  ];
  return (
    <Row justify="center" align="middle" style={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "#fff" ,}}>
      <Col span={9}>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemColor: "#22223bff",
                itemHoverColor: "#4a4e69ff",
                horizontalItemSelectedColor: "#D62828",
              },
            },
          }}
        >
          <Menu
            style={{ width: "100%" }}
            onClick={(e) => setCurrent(e.key)}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems.filter(Boolean)}  
          />
        </ConfigProvider>
      </Col>
    </Row>
  );
};

export { HeaderMenu };
