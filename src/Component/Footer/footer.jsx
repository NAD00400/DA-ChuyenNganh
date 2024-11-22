import {
  HomeOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Col, ConfigProvider, Flex, Input, Row, Typography } from "antd";

const { Text, Title } = Typography;
const Footer = () => {
  return (
    <Row  justify="space-around" wrap style={{marginTop:"60px"}}>
      
      <Col xs={6}md={6} >
        <Flex vertical gap={10}>
          <Title level={5}>CÔNG TY CỔ PHẦN ABC</Title>
          <Text type="secondary">
            Mã số thuế: 123456789 do Sở Kế hoạch và Đầu tư Thành phố ABC cấp ngày
            01/01/2020
          </Text>
          <Flex gap={10}>
            <HomeOutlined />
            <Text>
              18/18 bis,đường Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, Thành
              phố HCM
            </Text>
          </Flex>
          <Flex gap={10}>
            <MailOutlined />
            <Text>example@gmail.com</Text>
          </Flex>
          <Flex gap={10}>
            <PhoneOutlined />
            <Text>099999999999</Text>
          </Flex>
        </Flex>
      </Col >
      <Col xs={6}md={6}>
        <Flex vertical gap={10}>
          <Title level={5}>HƯỚNG DẪN GHI DANH</Title>
  
          <Text>Tư vấn trực tiếp</Text>
  
          <Text type="secondary">Ghi danh cho học viên</Text>
  
          <Text type="secondary">Ghi Danh theo nhóm</Text>
        </Flex>
      </Col>
      <Col Vxs={6}md={6}>
        <Flex vertical gap={10}>
          <Title level={5}>ĐĂNG KÝ NHẬN TIN</Title>
  
          <Text>nhập email của bạn </Text>
  
          <Input style={{margin:"0"}} placeholder="example@gmail.com" />
  
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultColor: "#003049",
  
                  defaultBg: "#FCBF49",
                  defaultHoverBg: "#003049",
                  defaultHoverColor: "#ffffff",
                  defaultHoverBorderColor: "#003049",
                  defaultShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
                  borderRadius: 30,
                  paddingInline: 15,
                  contentFontSize: 14,
                },
                token: {},
              },
            }}>
            <div> 
              <Button variant="filled" icon={<LoginOutlined />}>
                Gửi
              </Button>
            </div>
          </ConfigProvider>
        </Flex>
      </Col>
    </Row>
  );
};
export { Footer };
