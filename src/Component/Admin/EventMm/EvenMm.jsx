import { useEffect, useState } from "react";
import { Table, Space, Button, ConfigProvider, notification, Flex } from "antd";

import { getAllEvent, deleteEventApi } from "../../../services/api.service";
import { EventCreate } from "./eventCreate";
import { EventUpdate } from "./eventUpdate";

const EventMm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalCreate,SetIsModalCreate]=useState(false)
  const [isModalUpdate,SetIsModalUpdate]=useState(false)
  const [dataUpdate,setDataUpdate]=useState({})
  // Hàm tải danh sách sự kiện từ API
  const loadEvents = async () => {
    setLoading(true);
    try {
      const res = await getAllEvent();
      if (res?.data) {
        setData(res.data); // Giả định API trả về mảng `events`
      }
    } catch (error) {
      notification.error({
        message: "Error fetching events",
        description: error.message || "Có lỗi xảy ra khi tải sự kiện.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Hàm xóa sự kiện
  const handleDeleteEvent = async (id) => {
    try {
      const res = await deleteEventApi(id);
      if (res?.data) {
        notification.success({
          message: "Delete Event",
          description: "Sự kiện đã được xóa thành công.",
        });
        loadEvents(); // Tải lại danh sách sự kiện
      }
    } catch (error) {
      notification.error({
        message: "Error deleting event",
        description: error.message || "Có lỗi xảy ra khi xóa sự kiện.",
      });
    }
  };

  // Tải dữ liệu khi component được render
  useEffect(() => {
    loadEvents();
  }, []);

  // Định nghĩa các cột cho bảng
  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      }
    },
    {
      title: "Event Name",
      dataIndex: "event_name",
      key: "event_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Event slug",
      dataIndex: "event_slug",
      key: "event_slug",
    },
    {
      title: "Link Video",
      dataIndex: "url",
      key: "url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Video
        </a>
      ),
    },
    {
      title: "Event description",
      dataIndex: "event_description",
      key: "event_description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
        <Button type="link" onClick={() => {SetIsModalUpdate(true) ;setDataUpdate(record)}}>
            Update
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteEvent(record.event_id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultColor: "#000",
              defaultBg: "#F77F00",
              defaultHoverColor: "#000",
              defaultHoverBg: "#Fa3F00",
              defaultHoverBorderColor: "#Fa3F00",
            },
          },
        }}
      >
        <Flex justify="end"> 
          <Button  onClick={() => {SetIsModalCreate(true)}}>
            New Event
          </Button>
        </Flex>
      </ConfigProvider>
      <EventCreate isModalCreate={isModalCreate} SetIsModalCreate={SetIsModalCreate} loadEvents={loadEvents}/>
      <EventUpdate isModalUpdate={isModalUpdate} SetIsModalUpdate={SetIsModalUpdate} loadEvents={loadEvents} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}/>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => record.event_id} // Định danh duy nhất cho mỗi hàng
        pagination={{
          pageSize: 7, // Số hàng tối đa trên mỗi trang
        }}
      />
    </>
  );
};

export { EventMm };
