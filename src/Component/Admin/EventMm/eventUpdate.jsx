import { Form, Input, Modal, notification } from "antd";
import { useEffect } from "react";
import { updateEventApi } from "../../../services/api.service";


const EventUpdate = (props) => {
    const [form] = Form.useForm();
    // eslint-disable-next-line react/prop-types
    const { isModalUpdate, SetIsModalUpdate, loadEvents, dataUpdate } = props;

    useEffect(() => {
        if (dataUpdate) {
            // Điền dữ liệu vào form khi modal mở
            form.setFieldsValue({
                event_name: dataUpdate.event_name,
                event_description: dataUpdate.event_description,
                url: dataUpdate.url,
            });
        }
    }, [dataUpdate, form]);

    const handleCancel = () => {
        form.resetFields(); // Reset form về trạng thái ban đầu
        SetIsModalUpdate(false); // Đóng modal
    };

    const handleUpdateEvent = async (values) => {
        const formData = new FormData();
        formData.append("event_name", values.event_name);
        formData.append("event_description", values.event_description);
        formData.append("url", values.url);

        try {
            const res = await updateEventApi(dataUpdate.event_id, formData);
            if (res) {
                notification.success({
                    message: "Cập nhật chương trình thành công",
                    description: "Chương trình đã được cập nhật thành công",
                });
                await loadEvents(); // Tải lại danh sách chương trình
                handleCancel(); // Đóng modal và reset dữ liệu
            } else {
                notification.error({
                    message: "Error updating program",
                    description: "Có lỗi xảy ra khi cập nhật chương trình.",
                });
            }
        } catch (error) {
            notification.error({
                message: "Error",
                description: error.message,
            });
        }
    };

    return (
        <>
            <Modal
                title="Update Event"
                open={isModalUpdate}
                onOk={() => form.submit()} // Submit form khi nhấn "Ok"
                onCancel={handleCancel}
                maskClosable={false}
            >
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={handleUpdateEvent} // Gọi hàm cập nhật khi submit
                >
                    <Form.Item
                        label="Event Name"
                        name="event_name"
                        rules={[{ required: true, message: "Event name is required" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Event Description"
                        name="event_description"
                        rules={[{ required: true, message: "Event description is required" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Video Embed Code"
                        name="url"
                        rules={[{ required: true, message: "Video embed code is required" }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export { EventUpdate };
