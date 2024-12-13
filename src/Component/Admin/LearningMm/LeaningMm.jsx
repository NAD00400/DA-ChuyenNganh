import { useState, useEffect } from 'react';
import { Drawer, Table, Modal, Form, Select,  Button, Flex, Popconfirm } from 'antd';
import { createLearning, deleteLearning, getLearningDetail, getLearningMn, verificationLearning } from '../../../services/api/registration.api';
import { getAllPrograms } from '../../../services/api/programs.api';
import { getAllUserAPI } from '../../../services/api/user.api';


export const LearningMm = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedResId, setSelectedResId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  // const [selectedUserId, setSelectedUserId] = useState(null);
  const [form] = Form.useForm();

  // Cấu hình các cột cho bảng danh sách phiếu đăng ký
  const registrationColumns = [
    {
      title: "Registration ID",
      dataIndex: "res_id",
      key: "res_id",
    },
    {
      title: "User",
      dataIndex: ["user", "student", "student_name"],
      key: "student_name",
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
    },
    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "payment_status",
    },
    {
      title: "Payment Method",
      dataIndex: ["payment_method", "method_name"],
      key: "method_name",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (<Flex gap={10}>
        <Button onClick={() => handleDetail(record.res_id)}>
          Chi Tiết
        </Button>
        <Button danger onClick={() => handleDelete(record.res_id)}>
          Delete
        </Button>
        <Popconfirm
          placement="bottomRight"
          title="Xác thực thanh toán"
          description="Bạn có chắc chắn muốn xác thực thanh toán của Phiếu đăng ký này không?"
          okText="Xác nhận"
          cancelText="Hủy"
          onConfirm={() => handleVerification(record.res_id)} // Chỉ thực hiện khi người dùng xác nhận
        >
          <Button >Payment Verification</Button>
        </Popconfirm>

        </Flex>
      ),
    },
  ];

  const detailColumns = [
    {
      title: "Course ID",
      dataIndex: "course_id",
      key: "course_id",
    },
    {
      title: "Course Name",
      dataIndex: ["course","course_name"],
      key: "course_name",
    },
    {
      title: "Price",
      dataIndex: ["course","price"],
      key: "price",
    },
  ];

  // Hàm load danh sách phiếu đăng ký
  const loadRegistrations = async () => {
    const response = await getLearningMn();
    setRegistrationData(response.data || []);
  };

  // Hàm load chi tiết phiếu đăng ký
  const loadLearningDetail = async (resId) => {
    const response = await getLearningDetail(resId);
    setSelectedResId(resId);
    setDetailData(response.data.registration_details|| []);
  };

  // Hàm xóa phiếu đăng ký
  const handleDelete = async (resId) => {
    try {
      await deleteLearning(resId);
      loadRegistrations(); // Reload danh sách sau khi xóa
    } catch (error) {
      console.error("Error deleting registration", error);
    }
  };

  // Hàm tạo phiếu đăng ký mới
  const handleAdd = async (values) => {
    const { user_id, course_ids, payment_method } = values;
      const res =await createLearning({ user_id, course_ids, payment_method });
      if(res){
      loadRegistrations(); 
      setModalVisible(false);
      }
  };
  const handleVerification = async (resId) => {
    try {
      await verificationLearning(resId);
      loadRegistrations(); // Reload danh sách sau khi xóa
    } catch (error) {
      console.error("Error deleting registration", error);
    }
  };
  
  //
  const handleDetail = (id)=>{
    loadLearningDetail(id);
    showDrawer();
  }
  // Load các chương trình và người dùng khi mở modal
  const loadPrograms = async () => {
    try {
      const programsResponse = await getAllPrograms(); // API lấy chương trình
      setCourses(programsResponse.data || []);

      // Lấy tất cả người dùng khi mở modal
      const usersResponse = await getAllUserAPI(); // API lấy tất cả người dùng
      setUsers(usersResponse.data.data || []);
    } catch (error) {
      console.error("Error loading programs or users", error);
    }
  };

  // Gọi loadRegistrations khi component được mount
  useEffect(() => {
    loadRegistrations();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setModalVisible(true);
    loadPrograms(); // Gọi API khi modal được mở
  };

  const onModalCancel = () => {
    setModalVisible(false);
    form.resetFields(); // Reset form khi đóng modal
  };

  return (
    <>
      <div style={{ padding:'20px 20px 0' }} >
        
        <Button type="default" onClick={showModal} style={{width:"100%"}}>
          Add New Registration
        </Button>
      </div>
      <div style={{  padding:'0 20px' }}>
        <Table
          columns={registrationColumns}
          dataSource={registrationData}
          rowKey="res_id"
          
          pagination={{ pageSize: 5 }}
          bordered
          title={() => "Danh Sách Phiếu Đăng Ký"}
        />
  
        {selectedResId && (
          <Drawer
            title="Chi Tiết Phiếu Đăng Ký"
            placement="bottom"
            closable={false}
            onClose={onClose}
            open={open}
          >
            <Table
              columns={detailColumns}
              dataSource={detailData}
              rowKey="id"
              pagination={{ pageSize: 5 }}
              bordered
              title={() => `Chi Tiết Phiếu Đăng Ký ID: ${selectedResId}`}
            />
          </Drawer>
        )}
        <Modal
          title="Add New Registration"
          open={modalVisible}
          onCancel={onModalCancel}
          onOk={() => form.submit()}
        >
          <Form form={form} onFinish={handleAdd} layout="vertical">
            <Form.Item
              label="User"
              name="user_id"
              rules={[{ required: true, message: "Please select a user!" }]}
            >
              <Select
                placeholder="Select user"
                showSearch
                optionFilterProp="children"
                // onChange={(value) => setSelectedUserId(value)}
              >
                {users.map((user) => (
                  <Select.Option key={user.id} value={user.id}>
                    {user.student.student_name} - {user.email}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
  
            <Form.Item
              label="Select Courses"
              name="course_ids"
              rules={[{ required: true, message: "Please select courses!" }]}
            >
              <Select
                mode="multiple"
                placeholder="Search and select courses"
                optionLabelProp="label"
                showSearch
                filterOption={(input, option) =>
                  option.label.toLowerCase().includes(input.toLowerCase())
                }
              >
                {courses.map((course) => (
                  <Select.Option key={course.course_id} value={course.course_id} label={course.course_name}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <div style={{ fontWeight: "bold" }}>{course.course_name}</div>
                        <div style={{ fontSize: "12px", color: "#888" }}>
                          {course.course_type.type_name} - {course.price}
                        </div>
                      </div>
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
  
            <Form.Item
              label="Payment Method"
              name="payment_method"
              rules={[{ required: true, message: "Please select a payment method!" }]}
            >
              <Select placeholder="Select payment method">
                <Select.Option value={1}>Cash</Select.Option>
                <Select.Option value={2}>Bank Transfer</Select.Option>
                <Select.Option value={3}>Internet Banking</Select.Option>
                <Select.Option value={4}>E-wallet</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};
