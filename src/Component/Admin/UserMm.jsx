import { Flex, notification, Popconfirm, Table} from 'antd';

import { useEffect, useState } from 'react';
import { deleteUserAPi, getAllUserAPI } from '../../services/api.service';
import { UserCreate } from './UserMm/userCreater';
import { UpdateUserModal } from './UserMm/userUpdate';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


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
            setDataUsers(res.data.data)
        }
        // console.log("check res fetchAllUser",res);
    }
    const columns = [
        {
            title:"ID",
            dataIndex: 'id',
            render: (_,record) => {
            return(<span href='#'>{record.id}</span>)
            }
      },
      {
          title: 'role id',
          dataIndex: 'role_id',
      },
      {
          title: 'Email',
          dataIndex: 'email',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
            return(
                <div style={{display:"Flex", gap:"20px"}}>
                    
                    <EditOutlined
                        onClick={()=>{
                            setDataUpdate(record);
                            setIsModalUpdateUser(true);
                        }}
                        style={{cursor:"pointer",color:"#F24333"}}
                    />
             
                  
                    <Popconfirm
                        title="Xóa USer "
                        description="Bạn muốn xóa user này ?"
                        onConfirm={()=>{handleSubmitBtnDelete(record._id);}}
                       
                        cancelText="No"
                        placement="left"
                    >
                       <DeleteOutlined style={{ cursor: "pointer", color: "#5B2333" }} />
                    </Popconfirm> 
                </div>
            )
        }
      },
  ];
    const handleSubmitBtnDelete = async (id) => {
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
    <Flex vertical style={{width:"100%"}}>
        <UserCreate loadUser={loadUser} /> 
        <Table      
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
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
export {UserMm}