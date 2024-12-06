import { DeleteOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, notification, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { deleteProgram, getAllPrograms } from "../../services/api.service";




const ProgramsMm=()=>{
  const columns = [
    {
      title: 'course name',
      dataIndex: 'course_name',
      key: 'course_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'course description',
      dataIndex: 'course_description',
      key: 'course_description',
    },
    {
      title: 'course slug',
      dataIndex: 'course_slug',
      key: 'course_slug',
    },
    {
      title: 'cat id',
      key: 'cat_id',
      dataIndex: 'cat_id',    
    },
    {
      title: 'type_id',
      key: 'type_id',
      dataIndex: 'type_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <Popconfirm
                        title="Xóa USer "
                        description="Bạn muốn xóa user này ?"
                        onConfirm={()=>{handleSubmitBtnDelete(record.course_id);}}
                        cancelText="No"
                        placement="left"
                    >
                       <DeleteOutlined style={{ cursor: "pointer", color: "#5B2333" }} />
                    </Popconfirm> 
        </Space>
      ),
    },
  ];
 
  const [dataPrograms, setDataPrograms] = useState([]);
    
    useEffect(() => {
        loadPrograms();
    },[]);

    const loadPrograms = async () => {
        const res = await getAllPrograms()
        if (res.data){
          setDataPrograms(res.data)
       
        }
        // console.log("check res fetchAllUser",res);
    }
  const handleSubmitBtnDelete = async (id) => {
    const res = await deleteProgram(id);
    if (res.data) {
        notification.success({
            message: "Delete user",
            description: "Xóa user thành công"
        })
        await loadPrograms();

    } else {
        notification.error({
            message: "Error delete user",
            description: JSON.stringify(res.message)
        })
    }
}
  
    return(   <Flex vertical style={{width:"100%"}}>
        <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultColor: "#fff",
                      defaultBg: "#1C3144",
                      defaultHoverColor: "#000",
                      defaultHoverBg: "#596F62",
                      defaultHoverBorderColor: "#596F62",
                    },
                  },
                }}>
            <Button style={{margin:"5px 0px"}} >New User</Button>
        </ConfigProvider>
        <Table columns={columns} dataSource={dataPrograms} style={{width:"100%"}}/>
        </Flex>)
}
export { ProgramsMm };
