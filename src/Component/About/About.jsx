import {
  Carousel,
  ConfigProvider,
  Divider,
  Flex,
  Image,
  Typography,
} from "antd";

const { Title, Text } = Typography;
const contentStyle = {
  height: "460px",
  color: "#fff",
  witdh: "100%",
  alignContent: "center",
  lineHeight: "160px",
  textAlign: "center",
  background: "#003049",
};
const About = () => {
  return (
    <>
      <Flex vertical align="center">
        <Title>Tampo Academy Việt Nam</Title>
        <Text>
          Chương trình học tại Tampo hướng đến tương lai thành công của học viên
          trong lĩnh vực Công nghệ Thông tin
        </Text>
      </Flex>
      
      <div style={{ margin: "20px 0" }}>
        <Carousel dotPosition="right" autoplay>
          <div>
            <div style={contentStyle}>1</div>
          </div>
          <div>
            <div style={contentStyle}>2</div>
          </div>
          <div>
            <div style={contentStyle}>3</div>
          </div>
          <div>
            <div style={contentStyle}>4</div>
          </div>
        </Carousel>
      </div>
      <Flex vertical align="center" gap={10} style={{ margin: "10px 0" }}>
        <Title>Tại sao Tampo là điểm đến tốt nhất dành cho bạn?</Title>
        <Flex
          vertical
          align="center"
          style={{ width: "440px", textAlignLast: "center" }}>
          <Text>
            STEP IT Academy được thành lập lần đầu tiên vào năm 1999. Chúng tôi
            là tổ chức giáo dục quốc tế lớn nhất với hàng trăm nghìn học viên
            tốt nghiệp trên khắp thế giới.
          </Text>
        </Flex>
        <Flex
          vertical
          align="center"
          style={{
            marginTop: "10px",
            width: "410px",
            textAlignLast: "justify",
          }}>
          <Text>
            Chương trình học của chúng tôi tập trung vào chất lượng và trải
            nghiệm thực tế. STEP IT đảm bảo rằng học viên tốt nghiệp tại học
            viện sẽ có cơ hội được làm việc tại các công ty quốc tế phù hợp.
          </Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" gap={20} style={{ margin: "30px" }}>
        <div
          style={{
            zIndex: "2",
            backgroundColor: "#EFEFEF",
            boxShadow: "10px 10px 5px #aaaaaa",
            borderRadius: "10px",
            width: "400px",
            padding: "40px",
            textAlignLast: "left",
            position: "relative",
            left: "40px",
          }}>
          {/* //display:"block", position:"absolute" */}
          <Flex vertical gap={10}>
            <ConfigProvider
              theme={{
                token: {
                  colorText: "#52c41a",
                },
              }}>
              <Title style={{ margin: "10px" }}>Giáo dục CNTT</Title>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorText: "#003049",
                },
              }}>
              <Text>
                Tampo Academy học viên của chúng tôi được học các bộ môn chuyên
                ngành sau: lập trình, thiết kế đồ họa, mạng và an ninh mạng,
                khoa học dữ liệu và phân tích.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, vel? Quo voluptas quae at, repudiandae incidunt laborum
                dolores assumenda voluptatem optio quibusdam ad molestias
                officia ipsa facere nisi inventore vero saepe consequuntur
                temporibus asperiores reprehenderit est, beatae quaerat
                recusandae! Accusantium.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente quas unde error dicta cupiditate temporibus eveniet
                omnis provident esse! Eligendi esse consectetur dignissimos
                quisquam dicta laboriosam dolor harum, unde illo.
              </Text>
              <Divider />
              <Flex>
                <Flex vertical>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorText: "#52c41a",
                      },
                    }}>
                    <Title>4</Title>
                  </ConfigProvider>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>{" "}
                </Flex>
                <Flex vertical>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorText: "#52c41a",
                      },
                    }}>
                    <Title>24000</Title>
                  </ConfigProvider>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                    amet consectetur adipisicing elit adipisicing elit. Ea
                    expedita veritatis atque.
                  </Text>{" "}
                </Flex>
              </Flex>
              <Divider />
            </ConfigProvider>
          </Flex>
        </div>
        <Flex vertical gap={20}>
          <Image
            preview={{ visible: false, movable: false, mask: false }}
            witdh={650}
            style={{
              borderRadius: "10px",
              zIndex: "1",
              boxShadow: "10px 10px 5px #aaaaaa",
              position: "relative",
              left: "40px",
            }}
            src="src/assets/11.webp"></Image>
          <Image
            preview={{ visible: false, movable: false, mask: false }}
            width={300}
            style={{
              borderRadius: "24px",
              zIndex: "1",
              boxShadow: "10px 10px 5px #aaaaaa",
              position: "relative",
              left: "40px",
            }}
            src="src/assets/11-1.webp"
            alt=""></Image>
        </Flex>
      </Flex>
    </>
  );
};
export { About };
