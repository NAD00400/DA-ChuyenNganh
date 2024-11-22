

import {  ConfigProvider, Flex, Layout, Typography } from 'antd';
import { MenuAdmin } from './menuAdmin';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const {Text}= Typography;
const AdminPage =()=>{
    return (<>
    <Layout style={{overflow: 'hidden',width: "100%",height:"100vh",}}>
      <Header style={{textAlign:"center",color: '#fff',height: 64,padding :"0px",lineHeight: '64px',backgroundColor: '#000',}}>@Tampo Admin
       </Header>
      <Layout>
        <Sider width="13%" >
        <MenuAdmin/>
        </Sider>
        <Content style={{textAlign: 'center',minHeight: 120,lineHeight: '120px',color: '#fff',backgroundColor: '#fff',}}><Outlet/></Content>
      </Layout>
      <Flex vertical justify='center' align='center'style={{backgroundColor: '#000000',height:"64px"}}>
        <ConfigProvider
          theme={{
            token:{
              colorText:"#fff"
            }}
          }
        >
          <Text> Make by AZTech Company</Text>
          <Text> Technical Suport Team : +84 999999999</Text>

        </ConfigProvider>
        </Flex> 
    </Layout>
    </>
    )
}
export { AdminPage };
