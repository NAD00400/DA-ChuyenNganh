/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
    "email": "",
    "phone": "",
    "name": "",
    "role": "",
    "id": "" 
})

export const AuthWrapper= (props)=>{
    const [user,setUser]=useState({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    id: ""
    })
    const [isAppLoading,setIsAppLoading]=useState(true)
    return(
        <AuthContext.Provider value={{user ,setUser,isAppLoading,setIsAppLoading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

