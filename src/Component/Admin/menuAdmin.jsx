import { ContainerOutlined, DesktopOutlined,  PieChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: <Link to={"/admin"}>Programs</Link>,
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: <Link to={"eventManagement"}> Event</Link>,
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label:<Link to={"userManagement"}> User</Link>,
  },
];
export const MenuAdmin =()=>{
  const onClick = (e) => {
    console.log('click ', e);
  };
    return(<>
    <Menu
      onClick={onClick}
      style={{
        width:"15%",
        height:"100vh"
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /></>)
}