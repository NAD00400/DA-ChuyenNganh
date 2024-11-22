

import { AimOutlined, DingtalkOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
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
      label: <Link to="/eventmanagement">Event</Link>,
      key: "new",
      icon:<DingtalkOutlined />
    },
    {
      label: <Link to="/programsmanagement">Programms</Link>,
      key: "progprams",
      icon:<AimOutlined />
    },
    {
        label: <Link to="/usermanagement">User</Link>,
        key: "Program",
        icon:<UserOutlined />
    },
  ];
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (

          <Menu
          mode="inline"
          defaultSelectedKeys={['231']}
          onClick={onClick}
          items={items}
          theme="dark"
          />

  );
};
export {MenuAdmin };
