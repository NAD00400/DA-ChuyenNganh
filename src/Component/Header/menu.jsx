import { Col, ConfigProvider, Menu, Row, Typography } from "antd";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const { Text } = Typography;
const MenuHeader = () => {
  const location = useLocation();
  useEffect(() => {
    if (location && location.pathname) {
      const allRoutes = ["user", "book"];
      const currentRoute = allRoutes.find(
        (item) => `/${item}` === location.pathname
      );
      if (currentRoute) {
        setCurrent(currentRoute);
      } else {
        // setCurrent("home");
      }
    }
  }, [location]);

  const [current, setCurrent] = useState();
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link to="/new">Event</Link>,
      key: "new",
    },
    {
      label: <Link to="/programs">Programms</Link>,
      key: "progprams",
    },
    {
      label: <Link to={"/about"}>About Us</Link>,
      key: "about",
    },
  ];
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Row>
     <Col md={10}>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemColor: "#22223bff",
                itemHoverColor: "#4a4e69ff",
                horizontalItemSelectedColor: "#D62828",
                activeBarWidth: "124213",
              },
            },
          }}>
          <Menu
            style={{ minWidth: "329px" }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </ConfigProvider>
     </Col>
    </Row>
  );
};
export { MenuHeader };
