/* eslint-disable react/prop-types */
import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../../services/api.service";

const UpdateUserModal=(props)=>{
    // const { loadUser } = props;
    
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    const {IsModalUpdateUser ,setIsModalUpdateUser ,dataUpdate ,setDataUpdate ,loadUser} = props;

    // next dataUpdate != prev dataUpdate
    useEffect(()=>{

        if(dataUpdate){
            setFullName(dataUpdate.fullName);    
            setId(dataUpdate._id);
            setPhone(dataUpdate.phone);
        }
        
    },[dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id,fullName,phone);
        if (res.data) {
            notification.success({
                message: "Cập nhật User thành công",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            await loadUser();

        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateUser(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);
    }
    return(
            <Modal
                title="Update User"
                open={IsModalUpdateUser}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText={"Save"}
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>ID</span>
                        <Input
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>
                </div>
            </Modal>
        );
}
export { UpdateUserModal };
