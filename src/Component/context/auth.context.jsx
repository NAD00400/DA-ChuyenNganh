/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  getAllCategoriesAPI, getAllPrograms } from "../../services/api.service";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
    "id": "",
    "email": "",
    "role_id": "",
    "student":""
})
export const AuthWrapper= (props)=>{
    const [user,setUser]=useState({
        id:"",
        email: "",
        role_id: "",
        student:""
    })
    const [dataProgram, setDataProgram] = useState([]);
    useEffect(() => {
          
          const loadProgram = async () => {
          const res = await getAllPrograms();
          if (res.data) {
            setDataProgram(res.data);
          }
        };
        loadProgram();
      },[]);
    const [categories,setCategories] =useState([]);
    useEffect (()=>{
    const loadCategory = async () =>{
      const res = await getAllCategoriesAPI();
      if (res.data) {
      setCategories (res.data)
      }
    };
    loadCategory()
    },[])
    const [isAppLoading,setIsAppLoading]=useState(true)
    return(
        <AuthContext.Provider value={{user ,setUser,isAppLoading,setIsAppLoading, dataProgram ,categories}}>
            {props.children}
        </AuthContext.Provider>
    )
}

