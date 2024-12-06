import { DownOutlined, LoginOutlined, SmileOutlined, } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Dropdown, Image, message, Row,  } from "antd";
import { useContext, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { logoutAPI } from '../../services/api.service';
import { AuthContext } from '../context/auth.context';
import { MenuHeader } from "./menu";
import Typography from 'antd/es/typography/Typography';



const Header =()=>{
    const {Text}=Typography;
    const {user,setUser}= useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser({
                id: "",
                email: "",
                role_id: "",
                student:""
            })
            message.success("Logout thành công.");
            navigate("/");
        }
    }

    return(<>
        <Row justify="space-around" align="middle" wrap="false"
        style={{position: 'sticky',top: 0,zIndex: 1, backgroundColor:"#fff" }}>
            <Col xs={0} md={2}> <Image  src="src/assets/logo.png" preview={{visible:false,movable:false,mask:false }} width={80}></Image></Col>
            <Col > <MenuHeader /></Col>
            <Col xs={0} md={2}>
                {user.id ? (
                    <ConfigProvider     
                        theme={{
                            components: {
                            Button: {
                                defaultColor:"#EAE2B7",
                                defaultBg :"#003049",
                                defaultHoverColor:"#000000",
                                defaultHoverBorderColor:"#000000",
                                defaultShadow:"0 2px 0 rgba(0, 0, 0, 0.02)",
                                borderRadius :30,
                                paddingInline:15,
                                },
                            token: {
                                }
                            },
                        }}
                    >
                    <Button  variant="filled" icon={<LoginOutlined />} onClick={()=>{navigate("/login")}}>login</Button>
                    </ConfigProvider>
                    ) : (
                    <Button 
                    variant="filled" 
                    icon={<LoginOutlined/>} 
                    onClick={handleLogout}
                    >
                    Login
                    </Button>
                    )}
               
            </Col > 
            
            </Row>
        </>
    )
}

export { Header };

