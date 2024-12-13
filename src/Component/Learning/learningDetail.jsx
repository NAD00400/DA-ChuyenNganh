import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, List, Card, Spin, Row, Col, ConfigProvider } from "antd";
import { getProgramById } from "../../services/api/programs.api";

export const LearningDetail = () => {
  const { idL } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getProgramById(idL);
        setCourseData(response.data);

        if (response.data.course_videos && response.data.course_videos.length > 0) {
          setCurrentVideo(response.data.course_videos[0]);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [idL]);

  if (loading) {
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  if (!courseData) {
    return (
      <Typography.Title level={4} style={{ textAlign: "center", marginTop: 50 }}>
        Không tìm thấy thông tin khóa học.
      </Typography.Title>
    );
  }

  const { course_name, course_description, course_thumbnail, course_videos } = courseData;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#003049",
          colorText: "#000",
        },
      }}
    >
      <Row gutter={[16, 16]} style={{ padding: "20px" }}>
        {/* Phần bên trái */}
        <Col xs={24} md={16}>
          {/* Video Player */}
          <Card style={{ backgroundColor: "#000", padding: 0, marginBottom: 16 }}>
            {currentVideo ? (
              <ReactPlayer
                url={currentVideo.video_url}
                controls
                width="100%"
                height="400px"
              />
            ) : (
              <Typography.Title
                level={5}
                style={{ textAlign: "center", color: "#fff", padding: "20px" }}
              >
                Vui lòng chọn một video để xem.
              </Typography.Title>
            )}
          </Card>

          {/* Thông tin khóa học */}
          <Card style={{ backgroundColor: "#fafafa", border: "1px solid #ddd" }}>
            <Row align="middle" gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <img
                  src={course_thumbnail}
                  alt={course_name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col xs={24} md={18}>
                <Typography.Title level={3}>{course_name}</Typography.Title>
                <Typography.Paragraph>{course_description}</Typography.Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Phần bên phải */}
        <Col xs={24} md={8}>
          <Card title="Danh sách bài học" style={{ height: "100%" }}>
            <List
              dataSource={course_videos}
              renderItem={(video) => (
                <List.Item
                  key={video.video_id}
                  onClick={() => setCurrentVideo(video)}
                  style={{
                    cursor: "pointer",
                    background: video.video_id === currentVideo?.video_id ? "#f0f0f0" : "transparent",
                    padding: "10px",
                  }}
                >
                  <div>
                    <Typography.Text strong>{video.video_title}</Typography.Text>
                    <Typography.Text
                      type="secondary"
                      style={{ marginLeft: 8 }}
                    >
                      ({video.video_length})
                    </Typography.Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
