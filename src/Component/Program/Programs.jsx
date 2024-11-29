import {Breadcrumb,Button,Card,Checkbox,Col,ConfigProvider,Flex,Form,Input,Row,Typography,
} from "antd";

import { Link, useLocation } from "react-router-dom";
const { Text, Title } = Typography;
export const Programs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const items = paths.map((path, index) => (
    <Breadcrumb.Item key={index}>
      <Link to={`/${path}`}>{path}</Link>
    </Breadcrumb.Item>
  ));
  return (
    <>
      <Flex style={{ padding: "20px 120px" }} vertical>
        <Breadcrumb style={{ margin: "0 0 16px 0" }}>/{items}</Breadcrumb>

        <Title level={3}>Our Study Programs</Title>
        
        <Row gutter={[16, 16]} wrap>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              hoverable
              style={{ width: "maxWidth" }}
              cover={
                <img
                  alt="example"
                  src="/src/assets/z6062077718605_ddde68fdc6e74f710873054d9419a3ee.jpg"
                />
              }>
              <Card.Meta
                title={
                  <Typography.Title level={5}>
                    Lorem ipsum dolor
                  </Typography.Title>
                }
                description="Lorem i
                psum dolor sit amet consectetur adipisicing elit. Debitis libero dolorum voluptatibus quisquam itaque mollitia esse"
              />
            </Card>
          </Col>
        </Row>
        <Flex
          vertical
          gap={10}
          justify="center"
          style={{
            padding: "30px",
            backgroundColor: "#FCBF49",
            color: "#003049",
            borderRadius: "8px",
            margin: "30px 0",
          }}>
          <Title level={3} style={{ margin: "0px" }}>
            You don&apos;t know what to learn? Let Tamp help you.{" "}
          </Title>
          <Text>
            Please provide your contact details and we will be in touch to
            answer any questions you may have and recommend the most suitable
            option for you.
          </Text>
          <Row justify={"space-between"}>
            <Form layout="inline" style={{ width: "100%" }}>
              <Col xs={24} md={7}>
                <Form.Item name="name">
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item name="phone">
                  <Input placeholder="Phone number +84" />
                </Form.Item>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item name="mail">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={2}>
                <Form.Item name="Select">
                  <Button
                    type="primary"
                    style={{
                      background: "#003049",
                      borderColor: "#003049",
                      color: "#FCBF49",
                    }}>
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Form>
            
              <ConfigProvider
                theme={{
                  token: { fontSize: 10 ,colorText:"#8C8C8C" ,colorPrimary:"#EAE2B7",colorBorder:"#EAE2B7"},
                }}>
                    <Checkbox style={{margin:"10px 0"}} >
           
                  Confirm your consent to the processing of personal data. We
                  undertake to use the information collected only within the
                  company., Not to be transferred to third parties Read more
               </Checkbox>
              </ConfigProvider>
           
          </Row>
        </Flex>
      </Flex>
    </>
  );
};
