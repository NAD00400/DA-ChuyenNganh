
import {  AlertOutlined,  BarsOutlined, BookOutlined, HomeOutlined, MailOutlined, PlayCircleOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label:<Link to={"/admin"}> User</Link>,
  },
  {
    key: '2',
    icon:<SolutionOutlined />,
    label: <Link to={"programs-Management"}>Programs Management</Link>,
  },
  {
    key: '3',
    icon:<BarsOutlined />,
    label:<Link to={"categories-Management"}>Categories Management</Link>,
  },
  {
    key: '4',
    icon:<AlertOutlined />,
    label: <Link to={"event-Management"}> Event Management</Link>,
  },
  {
    key: '5',
    icon:<BookOutlined />,
    label: <Link to={"learning-Management"}>Learning Management</Link>,
  },
  {
    key: '6',
    icon: <PlayCircleOutlined />,
    label: <Link to={"courseVideo-Management"}>Course Video Management</Link>,
  },
  {
    key: '7',
    icon: <MailOutlined />,
    label: <Link to={"manage-Consultation-Form"}>Manage Consultation Form</Link>,
  },
  {
    key: '8',
    icon: <HomeOutlined />,
    label:<Link to={"/"}>Home</Link>,
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
                itemBg:"#D6BBC0",
                itemColor: "#000",
                itemHoverColor: "#fff",
                horizontalItemHoverColor: "#fff",
                itemSelectedColor:"#fff"
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