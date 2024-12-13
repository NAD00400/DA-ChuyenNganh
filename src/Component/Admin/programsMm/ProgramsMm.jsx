import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ConfigProvider, Flex, notification, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";

import { ProgramUpdate } from "./programUpdate";
import { ProgramCreate } from "./ProgramCreate";
import { deleteProgram, getAllPrograms } from "../../../services/api/programs.api";





const ProgramsMm=()=>{
  const [dataPrograms, setDataPrograms] = useState([]);
  const [dataUpdate,setDataUpdate]=useState(null);
  const [isModalUpdateProgram, setIsModalUpdateProgram] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      }
    },
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
      ellipsis: true,
    },
    {
      title: 'Categories',
      key: 'cat_id',
      dataIndex: ['course_category','cat_id'],
    },
    {
      title: 'Type',
      key: 'type_id',
      dataIndex: 'type_id',
      render: (type_id) => {
        return type_id === 1 ? (
          <span >Trả phí</span>
        ) : (
          <span >Miễn Phí</span>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
                  onClick={() => {
                    setDataUpdate(record);
                    setIsModalUpdateProgram(true);
               
                  }}
                  style={{ cursor: "pointer", color: "#F24333" }}
                />
          <Popconfirm
                        title="Xóa Chương trình học  "
                        description="Bạn muốn xóa Chương trình học này ?"
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
 
  
    
    useEffect(() => {
      
        loadPrograms();
    },[]);
    const loadPrograms = async () => {
      const res = await getAllPrograms()
  
      if (res.data){
        setDataPrograms(res.data)
     
      }

  }
   
  const handleSubmitBtnDelete = async (id) => {
    const res = await deleteProgram(id);
    if (res.data) {
        notification.success({
            message: "Delete Program",
            description: "Xóa Chương trình học thành công"
        })
        await loadPrograms();

    } else {
        notification.error({
            message: "Error delete Program",
            description: JSON.stringify(res.message)
        })
    }
}
  
    return(   
        <Flex vertical style={{width:"100%"}}>
        <Flex justify='end' ><ConfigProvider
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
            <ProgramCreate  loadPrograms={loadPrograms}
            isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </ConfigProvider></Flex>  
        
        <Table columns={columns} dataSource={dataPrograms} style={{width:"100%"}} rowKey={(record) => record.course_id} pagination={{
        pageSize: 10, // Số hàng tối đa trên mỗi trang
        }}/>
        
        <ProgramUpdate
        
        isModalUpdateProgram={isModalUpdateProgram}
        setIsModalUpdateProgram={setIsModalUpdateProgram}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadPrograms={loadPrograms}
        />
    </Flex>
      )
}
export { ProgramsMm };
