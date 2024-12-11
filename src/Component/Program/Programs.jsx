import {Button,Card,Checkbox,Col,ConfigProvider,Flex,Form,Input,Menu,Row,Typography,
} from "antd";
import {useEffect, useState } from "react";

import {  useNavigate } from "react-router-dom";
import { getAllCategoriesAPI, getAllPrograms } from "../../services/api.service";

const { Text, Title } = Typography;

export const Programs = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataProgram, setDataProgram] = useState([]);
  const navigate = useNavigate();
 
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    const loadCategory = async () =>{const res = await getAllCategoriesAPI();
      if (res.data) {setCategories (res.data)}
    };
    loadCategory()
    const loadProgram = async () => {const res = await getAllPrograms();
    if (res.data) {setDataProgram(res.data);}
    };
    loadProgram();
    },[]);
const itemsMenuProgram =[{
  key: "all", 
  label: "Xem tất cả khóa học",
},
...categories.map ((category)=>({
  key: category.cat_slug, 
  label: category.cat_title, 
}))]
const onClick = (e) => {
  const selectedSlug = e.key;  // Lấy slug của thể loại đã chọn
  if (selectedSlug === "all") {
    setSelectedCategory(null); // Hiển thị tất cả khóa học
  } else {
    setSelectedCategory(selectedSlug);  // Lưu lại slug đã chọn
  }
};
const handleProgramClick= (id)=>{
  
  navigate(`/program-detail/${id}`);
}


const filteredPrograms = selectedCategory
    ? dataProgram.filter(
        (item) => item.course_category.cat_slug === selectedCategory
      )
    : dataProgram; // Nếu chưa chọn thể loại, hiển thị tất cả khóa học
  return (
    <>
    <Flex style={{ padding: "20px 120px" }} vertical>
      <Flex align="center" justify="center">
      <ConfigProvider
        theme={{
          token: {
            colorText:"#FCBF49"
          },
        }}
      >
      <Title level={3}>Our Study Programs</Title>
      </ConfigProvider>
      </Flex>
      <Row gutter={[16, 16]} wrap>
        {/* Chia layout thành hai cột */}
        <Col xs={24} md={6}>
          <Menu
            onClick={onClick}
            style={{
              width: "100%",
              position: 'sticky',top: 50,zIndex:1,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={itemsMenuProgram}
          />
        </Col>
  
          <Col xs={24} md={18}>
            <Row gutter={[16, 16]} wrap>
              {filteredPrograms.map((item) => (
                <Col xs={24} sm={12} md={12} lg={8} key={item.course_id}>
                  <Card
                    hoverable
                    style={{ width: '100%', minHeight:"235px" }}
                    cover={
                      <img
                        // alt={item.course_name}
                        // src={}
                    />
                  }
                  onClick={() => handleProgramClick(item.course_id)}
                >
                  <Card.Meta
                    title={
                      <ConfigProvider
                        theme={{
                          token: {
                            colorText:"#000"

                          },
                        }}
                      >
                        <Typography.Title level={5}>
                          
                        {item.course_name}
                        </Typography.Title>
                      </ConfigProvider>
                      
                    }
                    description={item.course_description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
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
              token: { fontSize: 10, colorText: "#8C8C8C", colorPrimary: "#EAE2B7", colorBorder: "#EAE2B7" },
            }}>
            <Checkbox style={{ margin: "10px 0" }}>
              Confirm your consent to the processing of personal data. We
              undertake to use the information collected only within the
              company, not to be transferred to third parties. Read more
            </Checkbox>
          </ConfigProvider>
  
        </Row>
      </Flex>
    </Flex>
  </>
  
  );
};
