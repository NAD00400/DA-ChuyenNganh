import { Carousel, Flex, Typography,  } from "antd";

const {Title,Text}=Typography;
const NewI4 =()=>{
    
    // const { Title ,Text } = Typography;
    return(<>
        <div style={{width:"980"}}>
            <Carousel arrows infinite={false} autoplay autoplaySpeed={5000} draggable>
                <div><img src="src/assets/event banner.jpg"  style={{width:"980px", margin:"0 auto", borderRadius:"10px"}}/></div>
                <div><img src="src/assets/event banner.jpg"  style={{width:"980px", margin:"0 auto", borderRadius:"10px"}}/></div>
                <div><img src="src/assets/event banner.jpg"  style={{width:"980px", margin:"0 auto", borderRadius:"10px"}}/></div>
                <div><img src="src/assets/event banner.jpg"  style={{width:"980px", margin:"0 auto", borderRadius:"10px"}}/></div>
            </Carousel>
            <div>
            </div>
        </div>

        
        
     
    
       
      
      
      
    
    
    </>)
}
export { NewI4 };
