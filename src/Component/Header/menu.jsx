import { ConfigProvider, Menu } from "antd"

import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const MenuHeader =()=>{
    const location =useLocation()
    useEffect(() => {
        if (location && location.pathname) {
            const allRoutes = ["user", "book"];
            const currentRoute = allRoutes.find(item => `/${item}` === location.pathname);
            if (currentRoute) {
                setCurrent(currentRoute);
            } else {
                // setCurrent("home");
            }
        }
    }, [location])

    const [current,setCurrent]=useState();
    const items =[
        {
            label : <Link to="/" >Home</Link>,
            key:"home",
        },
        {
            label : <Link to="/new" >New</Link>,
            key:"new",
        },{
            label : <Link to="/programs" >Programms</Link>,
            key:"progprams",
        },{
            label : <Link to="/about" >About Us</Link>,
            key:"about",
        }
        ,{
            label : <Link to="/contact" >Contact</Link>,
            key:"contact",
        },
    ]
    const onClick =(e)=>
    {
        setCurrent(e.key);
    }
return(
    <ConfigProvider
        theme={{
        components: {
            Menu: {
                itemColor:"#22223bff",
                itemHoverColor:"#4a4e69ff",
                horizontalItemSelectedColor:"#D62828",
                activeBarWidth:"124213"
            },
            token:{
                
            }
        },
    }}
>
    <Menu     
    onClick={onClick} 
    selectedKeys={[current]} 
    mode="horizontal" 
    items={items} 
    />
    </ConfigProvider>
)
}
export { MenuHeader }
