
import { Outlet } from "react-router"
import { Footer } from "./Component/Footer/footer"
import { Header } from "./Component/Header/header"


const App=()=>{
  
  return(<>
        <Header/>
        <Outlet/>
        <Footer/>
  </>)
}
export {App}