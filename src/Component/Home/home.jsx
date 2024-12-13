/* eslint-disable react/jsx-key */
import { Button, Col, ConfigProvider, Divider, Flex, Image, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const { Title, Text } = Typography;
  return (
      <Flex justify="center" vertical gap={70} style={{paddingTop:"60px"}}>
        <Row align={"middle"} justify={"center"} style={{textAlign:"center"}}>
          <Col xs={22} md={16} >
            <Title level={2}>
              Kids Life Coaching That Educates, Motivates, And Inspires
            </Title>
            <Text>
              We know that life sometimes throws curve balls, but now’s the time
              to throw them right back!{" "}
            </Text>
            <div style={{ marginTop: "15px" }}>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultColor: "#000",
                      defaultBg: "#FCBF49",
                      defaultHoverColor: "#ffffff",
                      defaultHoverBg: "#003049",
                      defaultHoverBorderColor: "#003049",
                    },
                  },
                }}>
                <Button onClick={() => navigate("/programs")}>Get Started</Button>
              </ConfigProvider>
            </div>
          </Col>
        </Row >
        <Row justify={"center"} wrap>
          
            <Col xs={22} md={6} xl={6} style={{display:"flex" ,justifyContent:"center"}} >                
              <Image preview={{ visible: false, movable: false, mask: false }}width={300}src="src/assets/unnamed.webp"alt=""/>
            </Col>
          <Col xs={22} md={12} xl={12} style={{textAlignLast: "center" }}>
            <Flex vertical align="center" justify="center" gap={10}>
                  <Row>
                    <Text>
                      Our global network of certified Play Based Coaches are on hand
                      to guide your child to become the leader of their own life and
                      reach for the stars! We support children with a practical set
                      of skills & tools that they can use to infinity and beyond!
                    </Text>
                  </Row>
                <Row justify={"space-around"}>
                  <Col xs={10} md={12} >
                    <Title level={1}>7k5+</Title>
                    <Text> total active students </Text>
                  </Col>
                  <Col xs={10}  md={12}>
                    <Title level={1}>6+</Title>
                    <Text> programs </Text>
                  </Col>
                  <Col xs={10}  md={12}>
                    <Title level={1}>80+</Title>
                    <Text> well-qualified teachers </Text>
                  </Col>
                  <Col xs={10} md={12}>
                    <Title level={1} >2+</Title>
                    <Text > years of teaching </Text>
                  </Col>
                </Row>
              </Flex>
          </Col>
            <Col xs={0} md={6} xl={6}  style={{display:"flex" ,justifyContent:"center"}}>
            
                <Image
                  preview={{ visible: false, movable: false, mask: false }}
                  width={300}
                  src="src/assets/unnamed2.webp"
                  alt=""
                />
            </Col>
        </Row>
        <Divider plain> Popular Study Programs</Divider>
      </Flex>
  );
};
export { HomePage };
