import { LoginOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Image } from "antd";
import { Link } from "react-router-dom";
import { MenuHeader } from "./menu";


const Header =()=>{
    


    return(
        <Flex justify="space-around" align="center"  >
            <Image flex={1} src="src/assets/logo.png" preview={{visible:false,movable:false,mask:false }} width={80}></Image>
           <MenuHeader />  
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
                            contentFontSize:14,
                            },
                        token: {
                            
                            }
                        },
                    }}
                >
                <Button flex={1} variant="filled" icon={<LoginOutlined />} ><Link to="/login">login</Link> </Button>
            </ConfigProvider>
            
    </Flex>
    )
}

export { Header };

