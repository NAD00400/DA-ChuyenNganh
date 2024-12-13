import { Form, Input, Modal, notification } from "antd"
import { createEventApi } from "../../../services/api/events.api";


const EventCreate =(props)=>{
    // eslint-disable-next-line react/prop-types
    const {isModalCreate, SetIsModalCreate,loadEvents}=props;
    const [form]= Form.useForm();
    const handleCancel =()=>{
        SetIsModalCreate(false)
    }
    const handleCreateEvent =async(value)=>{
        const formData =new FormData();
        formData.append("event_name",value.event_name)
        formData.append("event_description",value.event_description)
        formData.append("url",value.url)
        const res = await createEventApi(formData);
        if (res) {
            notification.success({
              message: "Create program",
              description: "Tạo chương trình thành công",
            });
            await loadEvents();
            formData.resetFields();
            handleCancel();
          } else {
            notification.error({
              message: "Error creating program",
              description: "Có lỗi xảy ra khi tạo chương trình.",
            });
          }
    }
    return(<>
        <Modal title="new Event !!" 
        open={isModalCreate} 
        onOk={()=>form.submit()}
        onCancel={handleCancel}
        >
            <Form
            layout="vertical"
            form={form}
            onFinish={handleCreateEvent}
            >
                <Form.Item label="Event Name"    name = "event_name"
                rules={[{ required: true, message: 'Event name is requiued '}]}  >
                    <Input />
                    </Form.Item>
                <Form.Item label="Event Description"    name="event_description"
                rules={[{ required: true, message: 'Event Description is requiued' }]}  >
                    <Input />
                    </Form.Item>
                <Form.Item label="Video embed code"    name="url"
                rules={[{ required: true, message: 'video embed code is requied' }]}  >
                    <Input.Password />
                    </Form.Item>  
            </Form>  
        </Modal></>)
}
export {EventCreate}