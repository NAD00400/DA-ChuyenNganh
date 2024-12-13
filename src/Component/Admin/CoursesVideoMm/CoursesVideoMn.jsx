import { useEffect, useState } from "react";
import { getAllPrograms } from "../../../services/api/programs.api";
import { deleteVideo, getAllVideo } from "../../../services/api/couserVideo.api";
import { Drawer, Table, Space, Button, Tag, Popconfirm, message } from 'antd';
import ReactPlayer from "react-player";
import { AddVideoForm } from "./AddVideoMm";

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ url, style }) => { /// tạo component trong component
    const handleError = (e) => {
        console.error("Lỗi khi tải video:", e);
        alert("Video không thể được tải. Vui lòng kiểm tra URL hoặc thử lại sau.");
    };
    return (
        <ReactPlayer
            url={url}
            controls
            // eslint-disable-next-line react/prop-types
            width={style?.width || "100%"}  // Đặt giá trị width từ style truyền vào hoặc mặc định là 100%
            // eslint-disable-next-line react/prop-types
            height={style?.height || "100%"}  // Đặt giá trị height từ style truyền vào hoặc mặc định là 100%
            onError={handleError}
        />
    );
};

export const CoursesVideoMn = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    
   
    const [dataPrograms, setDataPrograms] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const columnsPrograms = [
        {
            title: "No",
            key: "no",
            render: (_, __, index) => <span>{index + 1}</span>,
        },
        {
            title: "Course Name",
            dataIndex: "course_name",
            key: "course_name",
        },
        {
            title: "Type",
            key: "type_id",
            dataIndex: "type_id",
            render: (type_id) =>
                type_id === 1 ? (
                    <Tag color="green">Trả phí</Tag>
                ) : (
                    <Tag color="blue">Miễn phí</Tag>
                ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button
                    type="link"
                    danger
                    onClick={() => {
                        loadVideos(record.course_id);
                        setSelectedCourse(record.course_name);
                        setSelectedCourseId(record.course_id);
                        setIsModalEdit(true);
                    }}
                >
                    Xem Videos
                </Button>
                
            ),
        },
    ];

    const columnsVideos = [
        {
            title: "No",
            key: "no",
            render: (_, __, index) => <span>{index + 1}</span>,
        },
        {
            title: "Video Title",
            dataIndex: "video_title",
            key: "video_title",
        },
        {
            title: "Length",
            dataIndex: "video_length",
            key: "video_length",
        },
        {
            title: "URL",
            dataIndex: "video_url",
            key: "video_url",
            render: (url) => <VideoPlayer url={url} style={{ width: "200px", height: "auto" }} />,  // Cập nhật chiều rộng cho video
        },
        {
            title: "Created At",
            dataIndex: "created_at",
            key: "created_at",
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Popconfirm
                title="Are you sure you want to delete this video?"
                onConfirm={() => handleDelete(record.video_id)} // Gọi hàm xóa khi nhấn "Yes"
                okText="Yes"
                cancelText="No"
              >
                <Button type="link" danger>
                  Xóa
                </Button>
              </Popconfirm>
            ),
          },
    ];

    useEffect(() => {
        loadPrograms();
    }, []);
    const handleAddVideo = (courseId) => {
        setSelectedCourseId(courseId); 
        setIsModalVisible(true); 
      };

    const loadPrograms = async () => {
        try {
            const res = await getAllPrograms();
            if (res?.data) {
                setDataPrograms(res.data);
            }
        } catch (error) {
            console.error("Lỗi khi tải danh sách chương trình:", error);
        }
    };

    const loadVideos = async (id) => {
        try {
            const res = await getAllVideo(id);
            if (res?.data) {
                setVideos(res.data);
            }
        } catch (error) {
            console.error("Lỗi khi tải video:", error);
        }
    };
    const handleDelete = async (videoId) => {
        try {
          const res = await deleteVideo(videoId); // Gọi API xóa video
          if (res?.data) {
            // Xóa video khỏi danh sách sau khi thành công
            setVideos(videos.filter((video) => video.video_id !== videoId));
            message.success("Xóa video thành công!");
          }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
          message.error("Có lỗi xảy ra khi xóa video!");
        }
      };
    const onClose = () => {
        setIsModalEdit(false);
        setVideos([]);
        setSelectedCourse(null);
    };

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Drawer
                title={`Danh sách videos - ${selectedCourse || ""}`}
                placement="bottom"
                closable
                onClose={onClose}
                open={isModalEdit}
                height="60%"
            >
                <Button
                type="primary"
                onClick={() => handleAddVideo(selectedCourseId)} // Hiển thị form thêm video
                style={{marginBottom:"10px"}}
                >
                Add New Video
                </Button>
                <Table
                    columns={columnsVideos}
                    dataSource={videos}
                    rowKey={(record) => record.video_id}
                    bordered
                    pagination={{
                        pageSize: 5,
                        showTotal: (total) => `Tổng cộng ${total} videos`,
                    }}
                />
            </Drawer>
            
            <Table
                columns={columnsPrograms}
                dataSource={dataPrograms}
                rowKey={(record) => record.course_id}
                bordered
                title={() => "Quản lí video theo khóa học"}
                pagination={{
                    pageSize: 7,
                    showTotal: (total) => `Tổng cộng ${total} khóa học`,
                }}
            />
            <AddVideoForm
                courseId={selectedCourseId}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                reloadVideos={loadVideos} // Sau khi thêm video, tải lại danh sách videos
            />
        </Space>
    );
};
