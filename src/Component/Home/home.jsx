import { Button, ConfigProvider, Divider, Flex, Image, Typography } from "antd";

const HomePage = () => {
  const { Title, Text } = Typography;
  return (
    <div style={{ margin: "80px " }}>
      <Flex justify="center" vertical gap={70}>
        <div style={{ textAlign: "center" }}>
          <Title level={2}>
            Kids Life Coaching <br /> That Educates, Motivates, And Inspires
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
                    defaultBg: "#F77F00",
                    defaultHoverColor: "#ffffff",
                    defaultHoverBg: "#003049",
                    defaultHoverBorderColor: "#003049",
                  },
                },
              }}>
              <Button>Get Started</Button>
            </ConfigProvider>
          </div>
        </div>
        <div>
          <Flex align="center" justify="center">
            <div>
              {" "}
              <Image
                preview={{ visible: false, movable: false, mask: false }}
                width={300}
                src="src/assets/unnamed.webp"
                alt=""
              />
            </div>
            <Flex vertical align="center" justify="center" gap={10}>
              <div style={{ width: "400px", textAlignLast: "center" }}>
                <Text>
                  Our global network of certified Play Based Coaches are on hand
                  to guide your child to become the leader of their own life and
                  reach for the stars! We support children with a practical set
                  of skills & tools that they can use to infinity and beyond!
                </Text>
              </div>
              <Flex>
                <div style={{ width: "180px", textAlign: "center" }}>
                  <Title level={1}>7k5+</Title>
                  <Text> total active students </Text>
                </div>
                <div style={{ width: "180px", textAlign: "center" }}>
                  <Title level={1}>6+</Title>
                  <Text> programs </Text>
                </div>
              </Flex>
              <Flex>
                <div style={{ width: "180px", textAlign: "center" }}>
                  <Title level={1}>80+</Title>
                  <Text> well-qualified teachers </Text>
                </div>
                <div style={{ width: "180px", textAlign: "center" }}>
                  <Title level={1}>2+</Title>
                  <Text> years of teaching </Text>
                </div>
              </Flex>
            </Flex>
            <div>
              <Image
                preview={{ visible: false, movable: false, mask: false }}
                width={300}
                src="src/assets/unnamed2.webp"
                alt=""
              />
            </div>
          </Flex>
        </div>
        <Divider plain> Popular Study Programs</Divider>
        <Flex gap={30} justify="center" align="center" wrap>
            <div style={{ width: "220px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "}}>
                <Flex gap={0} vertical>
                <Image src="src/assets/unnamed (5).webp" alt="" />
                <div style={{padding:"0 10px 10px 10px", borderRadius:"0 0 8px 8px" }}>
                    <div >
                        <Title level={5} style={{ margin: "5px 0" }}>
                            Lorem ipsum dolor
                        </Title>
                            <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11
                                },
                            }}
                            >
                            <Text >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            libero dolorum voluptatibus quisquam itaque mollitia esse
                            
                            </Text>
                            </ConfigProvider>
                    </div>
                    <Divider style={{margin:"5px"}}></Divider>
                    <Flex justify="space-between" align="center">
                        <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11,
                                colorText:"#006EA9"
                                },
                            }}
                            >
                            <Text>Learn more</Text>
                            <Title level={5} style={{margin:"0"}}>Contact</Title>
                            </ConfigProvider> </Flex>
                </div>
                </Flex>
            </div>
            <div style={{ width: "220px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "}}>
                <Flex gap={0} vertical>
                <Image src="src/assets/unnamed (5).webp" alt="" />
                <div style={{padding:"0 10px 10px 10px", borderRadius:"0 0 8px 8px" }}>
                    <div >
                        <Title level={5} style={{ margin: "5px 0" }}>
                            Lorem ipsum dolor
                        </Title>
                            <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11
                                },
                            }}
                            >
                            <Text >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            libero dolorum voluptatibus quisquam itaque mollitia esse
                            
                            </Text>
                            </ConfigProvider>
                    </div>
                    <Divider style={{margin:"5px"}}></Divider>
                    <Flex justify="space-between" align="center">
                        <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11,
                                colorText:"#006EA9"
                                },
                            }}
                            >
                            <Text>Learn more</Text>
                            <Title level={5} style={{margin:"0"}}>Contact</Title>
                            </ConfigProvider> </Flex>
                </div>
                </Flex>
            </div>
            <div style={{ width: "220px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "}}>
                <Flex gap={0} vertical>
                <Image src="src/assets/unnamed (5).webp" alt="" />
                <div style={{padding:"0 10px 10px 10px", borderRadius:"0 0 8px 8px" }}>
                    <div >
                        <Title level={5} style={{ margin: "5px 0" }}>
                            Lorem ipsum dolor
                        </Title>
                            <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11
                                },
                            }}
                            >
                            <Text >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            libero dolorum voluptatibus quisquam itaque mollitia esse
                            
                            </Text>
                            </ConfigProvider>
                    </div>
                    <Divider style={{margin:"5px"}}></Divider>
                    <Flex justify="space-between" align="center">
                        <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11,
                                colorText:"#006EA9"
                                },
                            }}
                            >
                            <Text>Learn more</Text>
                            <Title level={5} style={{margin:"0"}}>Contact</Title>
                            </ConfigProvider> </Flex>
                </div>
                </Flex>
            </div>
            <div style={{ width: "220px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "}}>
                <Flex gap={0} vertical >
                <Image src="src/assets/unnamed (5).webp" alt="" />
                <div style={{padding:"0 10px 10px 10px", borderRadius:"0 0 8px 8px" }}>
                    <div >
                        <Title level={5} style={{ margin: "5px 0" }}>
                            Lorem ipsum dolor
                        </Title>
                            <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11
                                },
                            }}
                            >
                            <Text >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            libero dolorum voluptatibus quisquam itaque mollitia esse
                            
                            </Text>
                            </ConfigProvider>
                    </div>
                    <Divider style={{margin:"5px"}}></Divider>
                    <Flex justify="space-between" align="center">
                        <ConfigProvider
                            theme={{
                                token: {
                                fontSize:11,
                                colorText:"#006EA9"
                                },
                            }}
                            >
                            <Text>Learn more</Text>
                            <Title level={5} style={{margin:"0"}}>Contact</Title>
                            </ConfigProvider> </Flex>
                </div>
                </Flex>
            </div>   
        </Flex>
      </Flex>
    </div>
  );
};
export { HomePage };
