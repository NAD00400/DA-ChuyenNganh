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
                email: "",
                phone: "",
                fullName: "",
                role: "",
                id: ""
            })
            message.success("Logout thành công.");
            navigate("/");
        }
    }
 // const data = useContext(AuthContext)
    return(<>
        <Row justify="space-around" align="middle" wrap="false"
        style={{position: 'sticky',top: 0,zIndex: 1, backgroundColor:"#fff" }}>
            <Col xs={0} md={2}> <Image  src="src/assets/logo.png" preview={{visible:false,movable:false,mask:false }} width={80}></Image></Col>
            <Col > <MenuHeader /></Col>
            {!user.id ?(
                <Col xs={0} md={2}>
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
                        <Button  variant="filled" icon={<LoginOutlined />} ><Link to="/login">login</Link> </Button>
                    </ConfigProvider>
                </Col > 
            ):(
        
                <Col xs={0} md={2}>
                    <Dropdown 
                        menu={{
                            items: [
                                {
                                    key: 'logOut',
                                    label: (
                                        <span onClick={() => handleLogout()}>
                                            <ConfigProvider
                                            theme={{
                                                token: {
                                                    colorText:"#D62828" 
                                                },
                                            }}
                                            ><Text>Log Out</Text>
                                            </ConfigProvider>
                                        </span>
                                    ),
                                    icon: <SmileOutlined />,
                                }
                            ],
                        }}
                    
                        placement="bottomRight"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <ConfigProvider
                            theme={{
                                token: {
                                    colorText:"#D62828"
                                },
                            }}
                            ><Text>Hi, {user.fullName} <DownOutlined/></Text>
                            </ConfigProvider>
                        </a>
                    </Dropdown>

                </Col>
            )}
        </Row>
        </>
    )
}

export { Header };

