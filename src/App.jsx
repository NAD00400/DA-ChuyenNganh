
import { Outlet } from "react-router"
import { Footer } from "./Component/Footer/footer"
import { Header } from "./Component/Header/header"
import { Flex } from "antd"


const App=()=>{
  
  return(
       <Flex vertical justify="space-between" style ={{witdh:"100%",}}>
          <Header/>
          <Outlet/>
          <Footer/>
       </Flex>
  )
}
export {App}