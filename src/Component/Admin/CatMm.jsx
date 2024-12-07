import { ConfigProvider, Flex, notification, Popconfirm, Table } from "antd"

import { useEffect, useState } from "react";
import { DeleteOutlined} from "@ant-design/icons";
import { deleteCategories, getAllCategoriesAPI } from "../../services/api.service";
import { CatCreate } from "./catMm/catCreate";

const CatMn =()=>{

    const [cat,setCat]=useState([]);
    const columns = [
        {
            title: "No",
            key: "no",
            render: (text, record, index) => {
              return <span>{index + 1}</span>;
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
        dataIndex: 'total_courses',
    },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
            return(
                <div style={{display:"Flex", gap:"20px"}}>
                    <Popconfirm
                        title="Xóa cat "
                        description="Bạn muốn xóa categories này .Những môn học trong thể loại cũng sẽ bị xóa trên trang web?"
                        onConfirm={()=>{handleSubmitBtnDelete(record.cat_id);}}
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
    const res = await deleteCategories(id);
    if (res.data) {
        notification.success({
            message: "Delete cat",
            description: "Xóa cat thành công"
        })
        await loadCat();
    } else {
        notification.error({
            message: "Error delete cat",
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
         <CatCreate loadCat={loadCat}/>
        </ConfigProvider></Flex>  
        
        <Table columns={columns} dataSource={cat} style={{width:"100%"}} rowKey={(record) => record.cat_id} pagination={{
        pageSize: 7, // Số hàng tối đa trên mỗi trang
        }}/>
        </Flex>
    </>)
}
export {CatMn}