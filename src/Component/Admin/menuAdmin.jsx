
import { ConfigProvider, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: '1',
    label:<Link to={"/admin"}> User</Link>,
  },
  {
    key: '2',
    // icon: <PieChartOutlined />,
    label: <Link to={"programs-Management"}>Programs Management</Link>,
  },
  {
    key: '3',
    label:<Link to={"categories-Management"}>Categories Management</Link>,
  },
  {
    key: '4',

    label: <Link to={"event-Management"}> Event Management</Link>,
  },
  {
    key: '5',

    label: <Link to={"learning-Management"}>Learning Management</Link>,
  },
  {
    key: '6',
    // icon: <DesktopOutlined />,
    label: <Link to={"courseVideo-Management"}>Learning Management</Link>,
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