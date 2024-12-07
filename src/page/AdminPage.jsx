
import { Outlet } from "react-router"

import { Flex } from "antd"
import { MenuAdmin } from "../Component/Admin/menuAdmin";



export const AdminPage =()=> {
    // Admin-specific layout and navigation
    return (
        <Flex vertical>
        <MenuAdmin/>
        <Outlet/>
        </Flex>
    );
  }
