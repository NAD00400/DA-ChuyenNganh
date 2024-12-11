import { Button, ConfigProvider, Form, Input, Modal, notification } from "antd"
import { categoriesCreateAPI} from "../../../services/api.service";
import { useState } from "react";
const CatCreate =(props)=>{
    // eslint-disable-next-line react/prop-types
    const {loadCat} = props;
    const [form] =Form.useForm();
    let [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateCat = async (value) => {

        const res = await categoriesCreateAPI(value.name);

        if (res.data) {
            notification.success({
                message: "Create categories",
                description:"Tạo categories thành công"
            })
            await loadCat();
            handleCancel();
        } else {
            notification.error({
                message: "Error create Categories",
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
            <Button onClick={() => setIsModalOpen(true)}>Categories Create</Button>
            </ConfigProvider>
            <Modal title="new book !!" 
            open={isModalOpen} 
            onOk={()=>form.submit()}
            onCancel={handleCancel}
            >
                <Form
                layout="vertical"
                form={form}
                onFinish={handleCreateCat}
                >
                    <Form.Item label="Categories Title" name ="name"
                    rules={[{required:true, message:'title không thể để trống'}]}  >
                        <Input />
                    </Form.Item>
                    
                   
                </Form>  
            </Modal>
        </>
    )
    
      
}
export {CatCreate}