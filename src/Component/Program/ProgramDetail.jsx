import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";
import { Button, Col, ConfigProvider, Flex, Row, Spin, Typography } from "antd";
import { getProgramById } from "../../services/api.service";
import { CaretRightOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";


const ProgramDetail=()=> {
  const [isFilled, setIsFilled] = useState(false);
  const { idP } = useParams();
  const [dataProgramDetail,setDataProgramDetail]=useState({})
  const [loading, setLoading] = useState(true); // Thêm state loading
  console.log("data" ,dataProgramDetail);

  
  const handleClickHeart = () => {
    // Chuyển đổi trạng thái giữa true và false
    setIsFilled(!isFilled);
  };

  const loadProgramDetail = async () => {
    try {
      const res = await getProgramById(idP);
      if (res?.data) {
        setDataProgramDetail(res.data);
      } else {
        console.error("No data returned from API");
      }
    } catch (error) {
      console.error("Error fetching program details:", error);
    } finally {
      setLoading(false); // Đặt loading thành false khi API đã trả về dữ liệu hoặc lỗi
    }
  };
 
  useEffect (()=>{
    console.log("useEffect triggered with id:", idP);
  if (idP) {
    loadProgramDetail();
  }
  }, [idP]);
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" /> {/* Hiển thị spinner khi đang tải */}
      </div>
    );
  }
  return (
    <div>
      <Flex vertical>
      {/* Row 1 */}
      <div style={{ backgroundColor: "#120338", padding: "80px 800px 40px 80px" }}>
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
          <Typography.Title>{dataProgramDetail.course_name}</Typography.Title>
          <Typography.Paragraph>
            Mô tả: {dataProgramDetail.course_description}
          </Typography.Paragraph>
          <Typography.Text>
            Thể Loại Khóa Học : {dataProgramDetail.course_type.type_name}
          </Typography.Text>
        </ConfigProvider>
      </div>

      {/* Row 2 */}
      <Row gutter={16} justify={"space-between"} style={{ position: "relative" }}>
        {/* Col 1 */}
        <Col
          sm={15}
          
          style={{
            
            margin: "30px 0 0 20px",
            padding:"30px 40px 40px 60px",
            border: "1px solid #000",
            borderRadius: "14px",
            
          }}
        >
          <Typography.Title level={5}>Nội Dung Khóa Học</Typography.Title>
          {dataProgramDetail?.course_videos?.map((video) => (
            <Flex key={video.video_id} style={{margin:"5px"}}>
              <CaretRightOutlined />
              <Typography.Text>{video.video_title}</Typography.Text>
            </Flex>
          )) || <Typography.Text>No videos available</Typography.Text>}
        </Col>

        {/* Col 2 */}
        <Col
          sm={9}
          style={{
            margin: "20px 0",
            padding:"1px"
            ,backgroundColor:"#fff" ,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            position: "fixed",
            top: "50px", // Điều chỉnh để cố định theo chiều dọc (ngang với Row trên hoặc thấp hơn)
            right:"30px", // Đẩy cột thứ 2 sang phải
          }}
        >
          <Flex vertical>
          <video controls width="500">
          {dataProgramDetail.course_videos && dataProgramDetail.course_videos.length > 0 ? (
            <source
              src="{dataProgramDetail.course_videos[0].video_url}"
              
              type="video/mp4"
            />
          ) : (
            <p>Không có video để hiển thị</p>
          )}
          Trình duyệt của bạn không hỗ trợ video.
          </video>
            <Flex align="flex-start" vertical justify="" style={{ padding:"20px"}}>
              <Typography.Title level={3}>{dataProgramDetail.price}</Typography.Title>
              <Flex style={{width:"100%"}} justify="space-between" gap={10}>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultColor: "#FFF",
                      defaultBg: "#D62828",
                      defaultHoverColor:"#fff",
                      defaultHoverBorderColor: "#D62828",
                      defaultBorderColor:"#D62828",
                      defaultHoverBg:"#D62828",
                    },
                  },
                }}>
               
                  <Button style={{width:"87%", borderRadius:"0px ", padding:"20px"}}>ĐĂNG KÝ NGAY</Button>
                </ConfigProvider>      
                <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultColor: "#D62828",
                      defaultBg: "#Fff",
                      defaultHoverColor:"#D62828",
                      defaultHoverBorderColor: "#D62828",
                      defaultBorderColor:"#D62828",
                    },
                  },
                }}>
               
                  <Button style={{width:"10%", borderRadius:"0px ", padding:"20px"}} onClick={handleClickHeart}>{isFilled ? <HeartFilled /> : <HeartOutlined />}</Button>
                </ConfigProvider>   
                </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Flex>


    </div>
  );
}
export {ProgramDetail}