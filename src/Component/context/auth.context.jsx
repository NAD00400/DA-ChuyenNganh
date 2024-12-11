/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


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
    const [isAppLoading,setIsAppLoading]=useState(true)
    return(
        <AuthContext.Provider value={{user ,setUser,isAppLoading,setIsAppLoading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

