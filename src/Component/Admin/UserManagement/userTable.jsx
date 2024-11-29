import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd"
import { useState } from "react";
import { deleteUserAPi } from "../../../services/api.service";
import { UpdateUserModal } from "./userUpdate";

const UserTable =(props)=>{
    const [dataUpdate,setDataUpdate]=useState(null);
    const [IsModalUpdateUser, setIsModalUpdateUser] = useState(false);

    // eslint-disable-next-line react/prop-types
    const { dataUsers ,loadUser ,setCurrent, setPageSize, current, total, pageSize} = props;
    
    const columns = [
        {
            title:"ID",
            dataIndex: '_id',
            render: (_,record) => {
            return(
                <span href='#' 
                    
                >{record._id}</span>
            )
        }
      },
      {
          title: 'Full Name',
          dataIndex: 'fullName',
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
const onChange = (pagination) => {  
    if(pagination.current&& pagination){
        if(+pagination.current !== + current){
            setCurrent( +pagination.current) // sử dụng dấu cộng để convert mộy số nguyên thành 1 chuỗi String
        }
    }
    if (pagination && pagination.pageSize) {
        if (+pagination.pageSize !== + pageSize) {
            setPageSize(+pagination.pageSize) //"5" => 5
        }
    }
};
    return(<>
    
    <Table      
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={
            {
            current: current,
            pageSize: pageSize,
            showSizeChanger: false,
            total: total,
            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
            }}
        onChange={onChange}
    />
    <UpdateUserModal
            IsModalUpdateUser={IsModalUpdateUser}
            setIsModalUpdateUser={setIsModalUpdateUser}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            loadUser={loadUser}
        />
    </>)
}
export {UserTable}