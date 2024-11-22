import { LoginOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Image, Row } from "antd";
import { Link } from "react-router-dom";
import { MenuHeader } from "./menu";
// import { useContext } from 'react';
// import { AuthContext } from '../authentication/auth.context';


const Header =()=>{
    
    // const data = useContext(AuthContext)

    return(
        <Row justify="space-around" align="middle" wrap="false"
        style={{position: 'sticky',top: 0,zIndex: 1, backgroundColor:"#fff" }}>
            <Col xs={0} md={2}> <Image  src="src/assets/logo.png" preview={{visible:false,movable:false,mask:false }} width={80}></Image></Col>
            <Col > <MenuHeader /></Col>
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
            </Col>
        </Row>
    )
}

export { Header };

