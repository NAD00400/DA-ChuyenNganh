import { Flex, notification, Popconfirm, Table } from 'antd';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { deleteUserAPi, getAllUserAPI } from "../../../services/api.service";
import { UserCreate } from './userCreater';
import { UpdateUserModal } from './userUpdate';


const UserMm=()=>{
     const [dataUsers, setDataUsers] = useState([]);
     const [dataUpdate,setDataUpdate]=useState(null);
     const [IsModalUpdateUser, setIsModalUpdateUser] = useState(false);
    useEffect(() => {
        loadUser();
    },[]);
    const loadUser = async () => {
        const res = await getAllUserAPI()
        if (res.data){
            setDataUsers(res.data)
        }
    }
    const columns = [
        {
          title: "No",
          key: "no",
          render: (text, record, index) => {
            return <span>{index + 1}</span>;
          }
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Role ID',
          dataIndex: 'role_id',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (id, record) => {
            return (
              <div style={{ display: "flex", gap: "20px" }} key={record.id}>
                <EditOutlined
                  onClick={() => {
                    setDataUpdate(record);
                    setIsModalUpdateUser(true);
                  
                  }}
                  style={{ cursor: "pointer", color: "#F24333" }}
                />
                <Popconfirm
                  title="Xóa User"
                  description="Bạn muốn xóa user này?"
                  onConfirm={() => {
                    handleSubmitBtnDelete(record.id);
                  }}
                  cancelText="No"
                  placement="left"
                >
                  <DeleteOutlined style={{ cursor: "pointer", color: "#5B2333" }} />
                </Popconfirm>
              </div>
            );
          }
        },
      ];
      
    const handleSubmitBtnDelete = async(id) => {

        const res = await deleteUserAPi(id);

        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xóa user thành công"
            })
            await loadUser();
        } else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }
    }
    
    return(
    <Flex vertical style={{width:"100%", height:"100vh"}}>
        <Flex justify='end' ><UserCreate loadUser={loadUser}/> </Flex>  
        <Table      
        columns={columns}
        dataSource={dataUsers}
        rowKey={(record) => record.id}
        pagination={{
          pageSize: 7, // Số hàng tối đa trên mỗi trang
          }}
        />
        <UpdateUserModal
            IsModalUpdateUser={IsModalUpdateUser}
            setIsModalUpdateUser={setIsModalUpdateUser}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            loadUser={loadUser}
        />

    </Flex>
    )
}
export { UserMm };
