import { useState,  } from 'react';
import { Modal, Input, Button, Upload, Checkbox, notification, Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createVideoApi } from '../../../services/api/couserVideo.api'; // Tạo API gọi POST để thêm video

export const AddVideoForm = (props) => {
// eslint-disable-next-line react/prop-types
const {courseId, isModalVisible, setIsModalVisible, reloadVideos }=props
const [videoTitle, setVideoTitle] = useState('');
const [fileList, setFileList] = useState([]);
const [isIntro, setIsIntro] = useState(false);

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async () => {
    console.log(courseId);
    
    const formData = new FormData();
    formData.append('video_title', videoTitle);
    formData.append('video', fileList[0].originFileObj); // Lấy file video
    formData.append('course_id', courseId);
    formData.append('is_intro', isIntro ? 1 : 0);

    try {
      const res = await createVideoApi(formData);
      if (res?.data) {
        notification.success({
          message: 'Video Added Successfully',
          description: 'Video has been successfully added to the course.',
        });
        reloadVideos(courseId); // Tải lại danh sách videos
        setIsModalVisible(false); // Đóng modal sau khi thêm video
      } else {
        notification.error({
          message: 'Failed to Add Video',
          description: 'There was an error adding the video.',
        });
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'An error occurred while adding the video.',
      });
    }
  };

  return (
    <Modal
      title="Add New Video"
      open={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      onOk={handleSubmit}
      okText="Add Video"
    >
      <div>
        <span>Video Title</span>
        <Input value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} placeholder="Enter video title" />
      </div>
      <Flex gap={12} style={{ margin:"10px 0 10px 5px"}}align='center'>
        <span>Video File</span>
  
            <Upload
              name="video"
              listType="picture"
              beforeUpload={() => false}
              onChange={handleFileChange}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
            </Upload>
 
      </Flex>
      <div>
        <Checkbox checked={isIntro} onChange={(e) => setIsIntro(e.target.checked)}>
          Set as Intro Video
        </Checkbox>
      </div>
    </Modal>
  );
};
