import { Button, ConfigProvider, Form, Input, Modal, notification } from "antd"
import { createUserAPI } from "../../../services/api.service";
import { useState } from "react";
const UserCreate =(props)=>{
    // eslint-disable-next-line react/prop-types
    const { loadUser } = props;
    const [form] =Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateUser = async (value) => {
        console.log(value);
        
        const res = await createUserAPI(value.fullName, value.email, value.password, value.phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            
            await loadUser();
            handleCancel();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const handleCancel =()=>{     
        setIsModalOpen(false);
    }
    return (<>
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
                }}>
            <Button style={{margin:"5px 0px"}}  onClick={() => setIsModalOpen(true)}>New User</Button>
            </ConfigProvider>
            <Modal title="new book !!" 
            open={isModalOpen} 
            onOk={()=>form.submit()}
            onCancel={handleCancel}
            >
                <Form
                layout="vertical"
                form={form}
                onFinish={handleCreateUser}
                >
                    <Form.Item label="User Name"
                    name = "fullName"
                    rules={[{ required: true, message: 'Tiêu đề không thể bỏ trống' }]}  >
                        <Input />
                        </Form.Item>
                    <Form.Item label="User Email"    name="email"
                    rules={[{ required: true, message: 'emai không thể bỏ trống' }]}  >
                        <Input />
                        </Form.Item>
                        <Form.Item label="Password"    name="password"
                    rules={[{ required: true, message: 'pass không thể bỏ trống' }]}  >
                        <Input.Password />
                        </Form.Item>
                        <Form.Item label="phone"    name="phone"
                    rules={[{ required: true, message: 'phone không thể bỏ trống' }]}  >
                        <Input />
                        </Form.Item>
                  </Form>  
                
            </Modal>

            </>
    )
    
      
}
export {UserCreate}