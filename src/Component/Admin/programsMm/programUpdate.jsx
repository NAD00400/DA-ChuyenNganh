/* eslint-disable react/prop-types */
import { Button, Input, InputNumber, Modal, notification, Select, Upload } from "antd";
import { useContext, useEffect, useState } from "react";
import { updateProgramAPI} from "../../../services/api.service";
import { UploadOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/auth.context";

const ProgramUpdate=(props)=>{
const { loadPrograms, setIsModalUpdateProgram, isModalUpdateProgram, dataUpdate, setDataUpdate } = props;
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [price, setPrice] = useState("");
  const [fileList, setFileList] = useState([]); 
  const [catId, setCatId] = useState(""); 
  const {categories} = useContext(AuthContext); 

  // Cập nhật khi dataUpdate thay đổi
  useEffect(() => {
    if (dataUpdate) {
      setName(dataUpdate.course_name);
      setId(dataUpdate.course_id);
      setDescription(dataUpdate.course_description);
      setLanguage(dataUpdate.course_language);
      setPrice(dataUpdate.price);
      setCatId(dataUpdate.cat_id || ""); // Thiết lập danh mục
      setFileList(dataUpdate.course_thumbnail ? [{ url: dataUpdate.course_thumbnail }] : []); // Gán ảnh nếu có
    }
  }, [dataUpdate]);


  const handleSubmitBtn = async () => {
    const formData = new FormData();
    formData.append('course_name', name);
    formData.append('course_description', description);
    formData.append('course_language', language);
    formData.append('Price', price);
    formData.append('cat_id', catId);

    if (fileList.length > 0) {
      formData.append('course_thumbnail', fileList[0].originFileObj); 
    }
    try {
      const res = await updateProgramAPI(id, formData); // Gọi API để cập nhật chương trình
      if (res) {
        notification.success({
          message: "Cập nhật chương trình thành công",
          description: "Chương trình đã được cập nhật thành công",
        });
        await loadPrograms(); // Tải lại danh sách chương trình
        resetAndCloseModal(); // Đóng modal và reset dữ liệu
      } else {
        notification.error({
          message: "Error updating program",
          description: "Có lỗi xảy ra khi cập nhật chương trình.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message || "Có lỗi xảy ra khi cập nhật chương trình.",
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateProgram(false);
    setName("");
    setId("");
    setDescription("");
    setLanguage("");
    setPrice("");
    setCatId("");
    setFileList([]);
    setDataUpdate(null);
  };


  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList); 
  };
    return(
        <Modal
        title="Update Program"
        open={isModalUpdateProgram}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"Save"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>ID</span>
            <Input value={id} disabled />
          </div>
          <div>
            <span>Course Name</span>
            <Input value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <span>Description</span>
            <Input.TextArea value={description} onChange={(event) => setDescription(event.target.value)} />
          </div>
          <div>
          <span>Category</span>
          <Select
            value={catId}
            onChange={(value) => setCatId(value)}
            style={{ width: "100%" }}
            placeholder="Select category"
            >
            {categories.map((item) => (
              <Select.Option key={item.cat_id} value={item.cat_id}>
                {item.cat_title}
              </Select.Option>
            ))}
            </Select>
            </div>
          <div>
            <span>Course Language</span>
            <Select
              value={language}
              onChange={(value) => setLanguage(value)}
              style={{ width: "100%" }}
            >
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="vi">Vietnamese</Select.Option>
            </Select>
          </div>
          <div>
            <span>Price</span>
            <InputNumber
              value={price}
              onChange={(value) => setPrice(value)}
              style={{ width: "100%" }}
              min={0}
              formatter={(value) => `${value} VND`}
              parser={(value) => value.replace('VND', '')}
            />
            </div>
            <div>
            
            <Upload
              name="thumbnail"
              listType="picture"
              beforeUpload={() => false} // Ngừng upload ngay lập tức
              fileList={fileList} 
              onChange={handleFileChange}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload Course Thumbnail</Button>
            </Upload>
          </div>
        </div>
      </Modal>
        );
}
export { ProgramUpdate };
