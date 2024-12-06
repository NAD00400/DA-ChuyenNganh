import { Button, ConfigProvider, Flex, notification, Popconfirm, Table } from "antd"

import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteProgram, getAllCategoriesAPI } from "../../services/api.service";

const CatMn =()=>{

    const [cat,setCat]=useState([]);
    const [catUpdate,setCatUpdate]=useState(null);
    const [IsModalCatUpdate, setIsModalCatUpdate] = useState(false);
    const columns = [
        {
            title:"Cat_ID",
            dataIndex: 'cat_id',
            render: (_,record) => {
            return(
                <span href='#'>{record.cat_id}</span>
            )
        }
      },
      {
          title: 'Categories title',
          dataIndex: 'cat_title',
      },
      {
          title: 'Categories Slug',
          dataIndex: 'cat_slug',
      },
      {
        title: 'Total courses ',
        dataIndex: 'total_courses ',
    },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
            return(
                <div style={{display:"Flex", gap:"20px"}}>
                    
                    <EditOutlined
                        onClick={()=>{
                            setCatUpdate(record);
                            setIsModalCatUpdate(true);
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
    const res = await deleteProgram(id);
    if (res.data) {
        notification.success({
            message: "Delete user",
            description: "Xóa user thành công"
        })
        await loadCat();

    } else {
        notification.error({
            message: "Error delete user",
            description: JSON.stringify(res.message)
        })
    }
}
const loadCat= async () => {
    const res = await getAllCategoriesAPI()
    if (res.data){
      setCat(res.data)   
    }
    }
    useEffect(() => {
        loadCat();
    },[]);
    return(<>
    
        <Flex vertical style={{width:"100%"}}>
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
        <Table columns={columns} dataSource={cat} style={{width:"100%"}}/>
        </Flex>
    </>)
}
export {CatMn}