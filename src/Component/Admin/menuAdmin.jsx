
import { ConfigProvider, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: '1',
    // icon: <ContainerOutlined />,
    label:<Link to={"/admin"}> User</Link>,
  },
  {
    key: '2',
    // icon: <PieChartOutlined />,
    label: <Link to={"programs-Management"}>Programs</Link>,
  },
  
  
  {
    key: '3',
    label:<Link to={"categories-Management"}>Categories</Link>,
  },
  {
    key: '4',
    // icon: <DesktopOutlined />,
    label: <Link to={"event-Management"}> Event</Link>,
  },
  
];
export const MenuAdmin =()=>{
  const [currentMenuAdmin,setCurrentMenuAdmin]=useState(null)
  const onClick = (e) => {

    setCurrentMenuAdmin(e)
  };
    return(<>
    <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemColor: "#22223bff",
                itemHoverColor: "#4a4e69ff",
                inlineItemSelectedColor: "#D62828",
              },
            },
          }}
        >
      <Menu
      onClick={onClick}
      selectedKeys={currentMenuAdmin}
      mode="horizontal"
      items={items}
    />
    </ConfigProvider></>)
}