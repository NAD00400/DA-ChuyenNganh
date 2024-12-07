/* eslint-disable react/prop-types */
import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../../services/api.service";

const UpdateUserModal=(props)=>{
    // const { loadUser } = props;
    
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");

    const {IsModalUpdateUser ,setIsModalUpdateUser ,dataUpdate ,setDataUpdate ,loadUser} = props;

    // next dataUpdate != prev dataUpdate
    useEffect(()=>{
        if(dataUpdate){
            setName(dataUpdate.student.student_name);    
            setId(dataUpdate.id);
            setEmail(dataUpdate.email);
        }
        
    },[dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id,email,name);
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
        setName("");
        setId("");
        setEmail("");
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
                        <span>name</span>
                        <Input
                            value={name}
                            onChange={(event) => { setName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>email</span>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                </div>
            </Modal>
        );
}
export { UpdateUserModal };
