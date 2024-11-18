import { Button, ConfigProvider } from "antd"
import { LoginOutlined } from '@ant-design/icons';
import { MenuHeader } from "./menu"
import { Link } from "react-router-dom";


const Header =()=>{
    


    return(
    <div style={{display:"flex", margin:"0px 130px", alignItems:"center",justifyContent:"space-between",fontSize:"14px",height:"50px" ,backgroundColor:"#fff"}}>
            <div><img src="src/assets/logo.png" alt="logo" style={{height:"60px", maxHeight: '100%', maxWidth: '100%', objectFit:'contain'}}/></div>
            <div style={{width:"403px"}} ><MenuHeader/></div>     {/* style={{width:"403px"}} */}
            <div>
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
                <Button  variant="filled" icon={<LoginOutlined />} ><Link to="/login">login</Link> </Button>
                </ConfigProvider>
            </div>
    </div>)
}

export { Header }
