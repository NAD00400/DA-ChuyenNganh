import { Flex} from 'antd';
import { UserTable } from './UserManagement/UserTable';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';
import { UserCreate } from './UserManagement/userCreater';


const UserManagement=()=>{
  const [dataUsers, setDataUsers] = useState([]);
    const [current ,setCurrent]= useState(1);
    const [pageSize, setPageSize]=useState(5);
    const [total,setTotal]=useState(1);

    useEffect(() => {
        loadUser();
    },[current]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize)
        if (res.data){
            setDataUsers(res.data.result)
            setTotal(res.data.meta.total)
        }
        // console.log("check res fetchAllUser",res);
    }
    return(
    <Flex vertical style={{width:"100%"}}>
        <UserCreate loadUser={loadUser} /> 
        <UserTable 
        current={current}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        pageSize={pageSize}
        total={total}
        dataUsers={dataUsers}
        loadUser={loadUser}
        ></UserTable>
        </Flex>
    )
}
export {UserManagement}