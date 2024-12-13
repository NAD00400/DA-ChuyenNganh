import { Button, ConfigProvider, Form, Input, InputNumber, Modal, notification, Select, Upload } from "antd";
import {  useEffect, useState,} from "react";

import { UploadOutlined } from "@ant-design/icons";
import { getAllCategoriesAPI } from "../../../services/api/categories.api";
import { createProgramApi } from "../../../services/api/programs.api";


const ProgramCreate = (props) => {
    // eslint-disable-next-line react/prop-types
    const { loadPrograms, setIsModalOpen, isModalOpen } = props;
    const [form] = Form.useForm();
    const [categories,setCategories]=useState([])
    const [fileList, setFileList] = useState([]); // Lưu trữ file đã chọn
    useEffect(()=>{
      const loadCat =async()=>{
      const res =await getAllCategoriesAPI()
        if(res.data){
          setCategories(res.data)
        }
      }
      loadCat()
    },[]);
    const handleCreateProgram = async (value) => {
      
      // Tạo FormData để gửi dữ liệu bao gồm cả file ảnh
      const formData = new FormData();
      formData.append('course_name', value.course_name);
      formData.append('course_description', value.course_description);
      formData.append('course_language', value.course_language);
      formData.append('type_id', value.type_id);
      formData.append('cat_id', value.cat_id);
      formData.append('Price', value.Price);
  
      // Thêm file ảnh vào FormData
      if (fileList.length > 0) {
        formData.append('course_thumbnail', fileList[0].originFileObj); // Lấy file từ fileList
      }
  
      try {
        const res = await createProgramApi(formData); // Gọi API để tạo chương trình
  
        if (res) {
          notification.success({
            message: "Create program",
            description: "Tạo chương trình thành công",
          });
          await loadPrograms();
          formData.resetFields();
          handleCancel();
        } else {
          notification.error({
            message: "Error creating program",
            description: "Có lỗi xảy ra khi tạo chương trình.",
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: error.message || "Có lỗi xảy ra khi tạo chương trình.",
        });
      }
    };
  
    const handleCancel = () => {
     
        setIsModalOpen(false);
    };
  
    const handleFileChange = ({ fileList: newFileList }) => {
      setFileList(newFileList); // Cập nhật fileList khi người dùng chọn file
    };
  
    return (
      <>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultColor: "#fff",
                defaultBg: "#70161E",
                defaultHoverColor: "#ffff",
                defaultHoverBg: "#000",
                defaultHoverBorderColor: "#000",
              },
            },
          }}
        >
          <Button onClick={() => setIsModalOpen(true)}>Create Program</Button>
        </ConfigProvider>
  
        <Modal
          title="Create New Program"
          open={isModalOpen}
          onOk={() => form.submit()}
          onCancel={handleCancel}
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={handleCreateProgram}
          >
            <Form.Item label="Course Name" name="course_name" rules={[{ required: true, message: 'Course name is required' }]}>
              <Input placeholder="Enter course name" />
            </Form.Item>
  
            <Form.Item
              label="Course Thumbnail"
              name="course_thumbnail"
              valuePropName="file"
              rules={[{ required: true, message: "Please upload a course thumbnail" }]}
            >
              <Upload
                name="thumbnail"
                listType="picture"
                beforeUpload={() => false} // Ngừng upload ngay lập tức
                onChange={handleFileChange} // Cập nhật fileList khi có sự thay đổi
                maxCount={1}
                fileList={fileList} // Hiển thị file đã chọn
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
  
            <Form.Item label="Course Description" name="course_description" rules={[{ required: true, message: 'Course description is required' }]}>
              <Input.TextArea rows={4} placeholder="Enter course description" />
            </Form.Item>
  
            <Form.Item name="course_language" rules={[{ required: true, message: "Please select a course language" }]}>
              <Select placeholder="Course language" style={{ width: "100%" }}>
                <Select.Option value={'en'}>English</Select.Option>
                <Select.Option value={'vi'}>Vietnamese</Select.Option>
              </Select>
            </Form.Item>
  
            <Form.Item name="type_id" rules={[{ required: true, message: "Please select a course type" }]}>
              <Select placeholder="Select course type">
                <Select.Option value={1}>Free</Select.Option>
                <Select.Option value={0}>Paid</Select.Option>
              </Select>
            </Form.Item>
  
            <Form.Item name="cat_id" rules={[{ required: true, message: "Please select a course category" }]}>
              <Select placeholder="Select category" style={{ width: "100%" }}>
                {categories.map(item => (
                  <Select.Option key={item.cat_id} value={item.cat_id}>{item.cat_title}</Select.Option>
                ))}
              </Select>
            </Form.Item>
  
            <Form.Item label="Price" name="Price" rules={[{ required: true, message: "Price is required" }]}>
              <InputNumber
                placeholder="Enter price"
                min={0}
                style={{ width: "100%" }}
                formatter={(value) => `${value} VND`}
                parser={(value) => value.replace('VND', '')}
              />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };
  
  export { ProgramCreate };