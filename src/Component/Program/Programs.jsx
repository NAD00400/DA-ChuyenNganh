import { Button, Card, Checkbox, Col, ConfigProvider, Flex, Form, Input, Menu, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategoriesAPI } from "../../services/api/categories.api";

import { createConsultationForm } from "../../services/api/consultations.api";
import { getAllProgramsClient } from "../../services/api/clientLeaning.api";

const { Text, Title } = Typography;

export const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataProgram, setDataProgram] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadCategory = async () => {
      const res = await getAllCategoriesAPI();
      if (res.data) {
        setCategories(res.data);
      }
    };
    loadCategory();

    const loadProgram = async () => {
      const res = await getAllProgramsClient();
      if (res.data) {
        setDataProgram(res.data);
      }
    };
    loadProgram();
  }, []);

  const itemsMenuProgram = [
    {
      key: "all", 
      label: "Xem tất cả khóa học",
    },
    ...categories.map((category) => ({
      key: category.cat_slug, 
      label: category.cat_title, 
    }))
  ];

  const onClick = (e) => {
    const selectedSlug = e.key;
    if (selectedSlug === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(selectedSlug);
    }
  };

  const handleProgramClick = (id) => {
    navigate(`/program-detail/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPrograms = selectedCategory
    ? dataProgram.filter(
        (item) => item.course_category.cat_slug === selectedCategory
      )
    : dataProgram.filter(
        (item) => item.course_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleConsultationSubmit = async (values) => {
    const { guest_name, guest_email, guest_phone } = values;
      await createConsultationForm({ guest_name, guest_email, guest_phone });
      alert('Tư vấn đã được gửi thành công!');
  };

  return (
    <>
      <Flex style={{ padding: "20px 120px" }} vertical>
        <Flex align="center" justify="center">
          <ConfigProvider
            theme={{
              token: {
                colorText: "#FCBF49"
              },
            }}
          >
            <Title level={3}>Our Study Programs</Title>
          </ConfigProvider>
        </Flex>

        <Row gutter={[16, 16]} wrap>
          {/* Menu bên trái */}
          <Col xs={24} md={6}>
            <Menu
              onClick={onClick}
              style={{
                width: "100%",
                position: 'sticky', top: 50, zIndex: 1,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={itemsMenuProgram}
            />
            <Input.Search
              placeholder="Tìm kiếm khóa học"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: '100%', marginTop: 20 }}
            />
          </Col>

          {/* Hiển thị khóa học */}
          <Col xs={24} md={18}>
            <Row gutter={[16, 16]} wrap>
            {filteredPrograms.map((item) => (
            <Col xs={24} sm={12} md={12} lg={8} key={item.course_id}>
              <Card
                hoverable
                style={{
                  width: '100%',
                  height: '400px',
                  minHeight: '235px',
                  transition: 'all 0.3s ease',
                }}
                cover={
                  <img
                    src={item.course_thumbnail}
                    alt={item.course_name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
                onClick={() => handleProgramClick(item.course_id)}
              >
                <Card.Meta
                  style={{
                    width: '100%',
                    height: '150px',
                    minHeight: '100px',
                  }}
                  title={
                    <Typography.Title
                      level={5}
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                    >
                      {item.course_name}
                    </Typography.Title>
                  }
                  description={
                    <div
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Số dòng hiển thị
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.course_description}
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}

            </Row>
          </Col>
        </Row>

        {/* Form tư vấn */}
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
          }}
        >
          <Title level={3} style={{ margin: "0px" }}>
            You don&apos;t know what to learn? Let Tamp help you.
          </Title>
          <Text>
            Please provide your contact details and we will be in touch to
            answer any questions you may have and recommend the most suitable
            option for you.
          </Text>
          <Row justify={"space-between"}>
            <Form layout="inline" style={{ width: "100%" }} onFinish={handleConsultationSubmit}>
              <Col xs={24} md={7}>
                <Form.Item name="guest_name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item name="guest_phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                  <Input placeholder="Phone number +84" />
                </Form.Item>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item name="guest_email" rules={[{ required: true, message: 'Please input your email!' }]}>
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
                    }}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Form>

            <ConfigProvider
              theme={{
                token: { fontSize: 10, colorText: "#8C8C8C", colorPrimary: "#EAE2B7", colorBorder: "#EAE2B7" },
              }}
            >
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
