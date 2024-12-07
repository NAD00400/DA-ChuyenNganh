
import { Outlet } from "react-router"
import { Footer } from "./Component/Footer/footer"
import { HeaderMenu } from "./Component/Header/header"
import { Flex, Spin } from "antd"
import { useContext, useEffect } from "react"
import { AuthContext } from "./Component/context/auth.context"
import { getAccountAPI } from "./services/api.service"

const App =()=> {

const {setUser ,isAppLoading,setIsAppLoading} = useContext(AuthContext);
useEffect(()=>{
   fetchUserInfo()
},[])

const fetchUserInfo = async()=>{
  const res = await getAccountAPI();

    if (res.data) {
      setUser(res.data)
    }
    setIsAppLoading(false);
  }
  return(
    <>
    { isAppLoading ===true ?
    <div style={{
      position:"fixed",
      top:"50%",
      left:"50%",
      transform:"translate:(-50%,-50%)"
      }}>
      <Spin/>
      </div>
    :
       <Flex vertical justify="space-between" style ={{witdh:"100%",height:"100vh"}}>
          <HeaderMenu/>
          <Outlet/>
          <Footer/>
       </Flex>
     } 
    </>
  )
}
export {App}