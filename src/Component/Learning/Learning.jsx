import { Card, Col, ConfigProvider, Flex, Menu, Typography } from "antd"
import {  useEffect, useState } from "react";

import { AppstoreOutlined,  } from "@ant-design/icons";
import { getAllCategoriesAPI, getMyprogram } from "../../services/api.service";

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
        const loadMyProgram = async () =>{const res = await getMyprogram();
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
        <Flex wrap="wrap" gap={16}>
          {filteredPrograms.map((item) => (
            <Col xs={24} md={7} key={item.course_id}>
              <Card
                hoverable
                style={{ width: '100%', minHeight: "235px" }}
                cover={
                  <img
                    alt={item.course_name}
                    src={item.course_thumbnail ? `path/to/images/${item.course_thumbnail}` : 'default_image.jpg'}
                  />
                }
                onClick={() => console.log(`Clicked on course ID: ${item.course_id}`)} // Handle click
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
        </Flex>
      </div>
        
        
    </Flex>)
}
