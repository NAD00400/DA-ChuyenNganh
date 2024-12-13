import { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message, Typography } from "antd";
import { deleteConsultationForm, getAllConsultationForm } from "../../../services/api/consultations.api";


export const ManageConsultationForm = () => {
  const [consultationForms, setConsultationForms] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load dữ liệu
  useEffect(() => {
    loadConsultationForm();
  }, []);

  const loadConsultationForm = async () => {
    setLoading(true);
    try {
      const res = await getAllConsultationForm();
      if (res?.data) {
        setConsultationForms(res.data);
      }
    } catch (error) {
      console.error("Error loading consultation forms", error);
      message.error("Failed to load consultation forms");
    } finally {
      setLoading(false);
    }
  };

  // Hàm xóa
  const handleDelete = async (contact_id) => {
    try {
      await deleteConsultationForm(contact_id);
      message.success("Successfully deleted consultation form");
      loadConsultationForm(); // Tải lại dữ liệu sau khi xóa
    } catch (error) {
      console.error("Error deleting consultation form", error);
      message.error("Failed to delete consultation form");
    }
  };

  // Cột trong bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "contact_id",
      key: "contact_id",
    },
    {
      title: "Guest Name",
      dataIndex: "guest_name",
      key: "guest_name",
    },
    {
      title: "Email",
      dataIndex: "guest_email",
      key: "guest_email",
    },
    {
      title: "Phone",
      dataIndex: "guest_phone",
      key: "guest_phone",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this consultation form?"
          onConfirm={() => handleDelete(record.contact_id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{marginTop:'20px'}}>
      <Typography.Text >Manage Consultation Forms</Typography.Text>
      <Table
        columns={columns}
        dataSource={consultationForms}
        rowKey="contact_id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
