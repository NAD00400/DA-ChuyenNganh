import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllEvent } from "../../services/api.service";


const Event =()=>{
    const [eventData,setEventData]=useState([]);
    useEffect(()=>{
        loadEvent()
    },[])
    const loadEvent=async()=>{
        const res =await getAllEvent();
        if (res.data) {
            setEventData(res.data)
        }
    }

    return (
      <><Flex vertical justify="center" align="center" style={{marginTop:"30px"}}>
        <Typography.Title level={4}>Us Event</Typography.Title>
      </Flex>
        <Row wrap ={true}
          gutter={[16, 16]} 
          style={{ margin: "16px", }}
        >
          {eventData.map((event) => (
            <Col
              key={event.id} xs={24} sm={12} md={8} 
              lg={6} 
              style={{
                display: "flex",
              }}
            >
              <Card
                style={{
                  flex: 1,
                  borderRadius: 8,
                  border: "1px solid #333", // Đổi màu viền để phù hợp nền tối
                  backgroundColor: "#000", // Nền đen
                  color: "#fff", // Màu chữ trắng
                }}
              >
                <Flex direction="column"gap={16} justify="space-between" vertical>
                  <iframe
                    title={event.name}
                    src={`${event.url}`}
                    style={{
                      width: "100%", 
                      height: "170px",
                      borderRadius: 8,
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <Flex direction="column" gap={8} justify="space-between" vertical>
                    <Typography.Title level={5}style={{
                      color: "#fff",
                    }}>{event.event_name}</Typography.Title>
                    <Typography.Text style={{
                      color: "#fff",
                    }}>{event.event_description}</Typography.Text>
                  </Flex>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

export { Event };