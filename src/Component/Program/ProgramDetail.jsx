import { useParams } from "react-router-dom";


import { useContext, useEffect, useState } from "react";
import { Button, Col, ConfigProvider, Flex, Form, message, Row, Select, Spin, Typography } from "antd";

import { CaretRightOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { getProgramById } from "../../services/api/programs.api";
import { AuthContext } from "../context/auth.context";
import { createLearning } from "../../services/api/clientLeaning.api";


const ProgramDetail=()=> {
  const [isFilled, setIsFilled] = useState(false);
  const { idP } = useParams();
  const [dataProgramDetail,setDataProgramDetail]=useState({})
  const [loading, setLoading] = useState(true); // Thêm state loading
  console.log("data" ,dataProgramDetail);
  const { user } = useContext(AuthContext); 
  const [paymentMethod, setPaymentMethod] = useState(null); // Trạng thái phương thức thanh toán
  const [isFormVisible, setIsFormVisible] = useState(false); // Hiện form khi nhấn tạo phiếu đăng ký
  const [form] = Form.useForm();
  const [isRegistered, setIsRegistered] = useState(false); // Trạng thái đã đăng ký

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
  // eslint-disable-next-line no-unused-vars
  const handleRegister = async (values) => {

    // Gửi thông tin đăng ký khóa học
    if (!paymentMethod) {
      message.error("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    const data = {
      user_id: user.id,
      course_ids: [dataProgramDetail.course_id], // ID khóa học hiện tại
      payment_method: paymentMethod,
    };

    try {
      const res = await createLearning(data);
      if (res?.status === 200) {
        message.success("Đăng ký thành công!");
        setIsFormVisible(false); // Ẩn form đăng ký sau khi thành công
        setIsRegistered(true);
      } else {
        message.error("Đã xảy ra lỗi khi đăng ký!");
      }
    } catch (error) {
      console.error("Error registering course:", error);
      message.error("Đăng ký thất bại!");
    }
  };

  const handlePaymentChange = (value) => {
    setPaymentMethod(value); // Cập nhật phương thức thanh toán
  };
  const handleButtonClick = () => {
    if (isRegistered) return; // Nếu đã đăng ký, không làm gì nữa
    
    if (!paymentMethod) {
      // Nếu chưa chọn phương thức thanh toán, hiển thị form
      setIsFormVisible(true);
    } else {
      // Nếu đã chọn phương thức thanh toán, đăng ký
      handleRegister();
    }
  };

 

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
              src={dataProgramDetail.course_videos[0].video_url}
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
                      defaultHoverColor: "#fff",
                      defaultHoverBorderColor: "#D62828",
                      defaultBorderColor: "#D62828",
                      defaultHoverBg: "#D62828",
                    },
                  },
                }}
              >
                <Button
                  style={{ width: "87%", borderRadius: "0px", padding: "20px" }}
                  onClick={handleButtonClick}
                  disabled={isRegistered} // Vô hiệu hóa nút nếu đã đăng ký
                >
                  {isRegistered ? "Đã Đăng Ký" : paymentMethod ? "Xác Nhận" : "Tạo Phiếu Đăng Ký"}
                </Button>
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
                {isFormVisible && (
                <div style={{ marginTop: 20 }}>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleRegister}
                    initialValues={{ payment_method: paymentMethod }}
                  >
                    <Form.Item label="Phương thức thanh toán" name="payment_method" rules={[{ required: true, message: "Vui lòng chọn phương thức thanh toán!" }]}>
                      <Select
                        placeholder="Chọn phương thức thanh toán"
                        onChange={handlePaymentChange}
                        style={{ width: "100%" }}
                      >
                        <Select.Option value={1}>Tiền mặt</Select.Option>
                        <Select.Option value={2}>Chuyển khoản ngân hàng</Select.Option>
                        <Select.Option value={3}>Ngân hàng trực tuyến</Select.Option>
                        <Select.Option value={4}>Ví điện tử</Select.Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
              )}
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Flex>
    

    </div>
  );
}
export {ProgramDetail}