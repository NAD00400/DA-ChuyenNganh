import { HomeOutlined, LoginOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons"
import { Button, ConfigProvider, Input, Typography } from "antd"

const {Text,Title}= Typography
const Footer =()=>{
    return(
    <div className="footer" style={{marginTop:"20px"}}>
            <div style={{display:"flex",flexDirection:"row", margin:"20px 180px" ,columnGap:"40px",height:"300px"} }>
                <div style={{display:"flex",flex:1,flexDirection:"column",maxWidth:"300"}}>
                    <div><Title level={5}>CÔNG TY CỔ PHẦN ABC</Title></div>
                    <div>
                        <Text type="secondary">Mã số thuế: 123456789 do 
                        Sở Kế hoạch và Đầu tư Thành phố ABC cấp ngày 01/01/2020</Text>
                    </div >
                    <div style={{display:"flex", flexDirection:"row", columnGap:"10px",margin:"10px 0"}}><HomeOutlined/> 
                        <Text>
                        18/18 bis,đường Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, Thành phố HCM</Text>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", columnGap:"10px",marginBottom:"10px"}}>
                        <MailOutlined/>
                        <Text>example@gmail.com</Text>                     
                    </div>
                    <div style={{display:"flex", flexDirection:"row", columnGap:"10px"}}> <PhoneOutlined />
                    <Text>099999999999</Text>        
                    </div>
                    
                </div>
                <div style={{display:"flex",flex:0.7,flexDirection:"column",}}>
                <div><Title level={5} >HƯỚNG DẪN GHI DANH</Title></div>
                    <div style={{height:"35px"}}>
                        <Text>Tư vấn trực tiếp</Text>
                    </div>
                    <div style={{height:"35px"}}> 
                        <Text type="secondary">Ghi danh cho học viên</Text>
                    </div>
                    <div style={{height:"35px"}}>
                        <Text type="secondary">Ghi Danh theo nhóm</Text>                        
                    </div>
                </div>
                <div style={{display:"flex",flex:0.7,flexDirection:"column",}}>
                    <div><Title level={5}>ĐĂNG KÝ NHẬN TIN</Title></div>
                    <div style={{marginBottom:"10px"}}>
                        <Text>nhập email của bạn </Text>
                    </div>
                    <div style={{marginBottom:"10px"}}> <Input placeholder="example@gmail.com" /></div>
                    <div >
                        <ConfigProvider
                        theme={{
                            components: {
                            Button: {
                                defaultColor:"#003049",
                                
                                defaultBg :"#FCBF49",
                                defaultHoverBg:"#003049",
                                defaultHoverColor:"#ffffff",
                                defaultHoverBorderColor:"#003049",
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
                    <Button  variant="filled" icon={<LoginOutlined />} >Gửi</Button>
                    </ConfigProvider>
                    </div>
                </div>
            </div>
    </div>)
}
export {Footer}