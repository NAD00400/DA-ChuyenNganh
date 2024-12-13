import { Card, Col, ConfigProvider, Flex, Menu, Row, Typography } from "antd";
import { useEffect, useState } from "react";

import { AppstoreOutlined, } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getAllCategoriesAPI } from "../../services/api/categories.api";
import { getMyProgram } from "../../services/api/registration.api";


export const Leaning =()=>{
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [categories,setCategories] = useState([]);

    const [current,setCurrent] = useState("all");

    const [isMyProgram,setIsMyProgram] =useState([]);
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    
    useEffect(() => {
        const loadCategory = async () =>{const res = await getAllCategoriesAPI();
          if (res.data) {setCategories(res.data)}
        };
        loadCategory()
        const loadMyProgram = async () =>{const res = await getMyProgram();
            if (res.data) {setIsMyProgram(res.data)
                setFilteredPrograms(res.data); }
            
          };
        loadMyProgram()
    },[]);
    useEffect(() => {
        // Lọc khóa học theo thể loại khi `current` thay đổi
        if (current === 'all') {
          setFilteredPrograms(isMyProgram);
        } else {
          setFilteredPrograms(isMyProgram.filter(program => program.course_category.cat_slug === current));
        }
      }, [current, isMyProgram]);
    const itemsMenuProgram =[{
        label: 'Tất cả',
        key: 'all',
        icon: <AppstoreOutlined />,
      },
      ...categories.map ((category)=>({
        key: category.cat_slug, 
        label: category.cat_title, 
        icon: <AppstoreOutlined />,
      }))]
    const navigate = useNavigate();
    const handleCardClick = (courseId) => {
      navigate(`/learning-detail/${courseId}`);
    };
    return(<Flex gap={0} vertical>

        <Flex style={{backgroundColor:"#B12057", color:"#fff", padding:"20px 110px"}} vertical gap={0}>
        <ConfigProvider
          theme={{
            components: {
              Typography: {
                colorText: "#fafafa",
                colorTextHeading: "#fafafa",
                fontSize: 18,
              },
            },
          }}
        >
            <Typography.Title style={{margin:"20px 0"}}> Khóa học của bạn</Typography.Title>
        </ConfigProvider>
            
        </Flex>
        <div style={{ padding: "0 90px" }}>
        <Menu onClick={onClick} selectedKeys={current} mode="horizontal" items={itemsMenuProgram} />
        </div>
        <div style={{ padding: "20px 90px" }}>
            <Row gutter={[16, 16]}  align="top">
            {filteredPrograms.map((item) => (
              <Col xs={24} sm={12} md={6} lg={6} key={item.course_id}>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    maxWidth: "330px",
                    minHeight:"360px",
                    height: "100%",

                  }}
                  cover={
                    <img
                      alt={item.course_name}
                      src={item.course_thumbnail}
                      style={{ height: "200px", objectFit: "cover" }} // Đặt chiều cao và tỉ lệ hình ảnh
                    />
                  }
                  onClick={() => handleCardClick(item.course_id)} // Handle click
                >
                   
                  <Card.Meta
                    title={
                      <ConfigProvider
                        theme={{
                          token: {
                            colorText: "#000",
                          },
                        }}
                      >
                        <Typography.Title level={5}
                        ellipsis={{
                          rows: 1, // Giới hạn mô tả hiển thị 3 dòng
                          expandable: false,
                        }}>
                          {item.course_name}
                        </Typography.Title>
                      </ConfigProvider>
                    }
                    description={
                      <Typography.Paragraph
                        ellipsis={{
                          rows: 3, // Giới hạn mô tả hiển thị 3 dòng
                          expandable: false,
                        }}
                      >
                        {item.course_description}
                      </Typography.Paragraph>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
      </div>
        
        
    </Flex>)
}
