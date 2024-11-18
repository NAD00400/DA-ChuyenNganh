import { Button, ConfigProvider, Flex, Image, Typography, } from "antd";



const HomePage =()=>{
    const { Title ,Text } = Typography;
    return(
        
            <div style={{margin:"80px "}}> 
                <Flex justify ="center" vertical gap={70}  >
                    <div style={{textAlign:"center"}}>
                        <div><Title level={2} >Kids Life Coaching <br /> That Educates, Motivates, And Inspires</Title></div>
                        <div><Text>We know that life sometimes throws curve balls, but now’s the time to throw them right back! </Text></div>
                        <div style={{ marginTop:"15px"}}>
                            <ConfigProvider 
                            theme={{
                                components: {
                                    Button: {
                                        defaultColor:"#000",
                                        defaultBg :"#F77F00",
                                        defaultHoverColor:"#ffffff",
                                        defaultHoverBg:"#003049",
                                        defaultHoverBorderColor:"#003049",
                                        }
                                    }
                            }
                        }><Button>Get Started</Button></ConfigProvider>
                        </div>
                    </div>
                    <div>
                        <Flex  align="center" justify="center">
                            <div> <Image preview={{visible:false,movable:false,mask:false }} width={300} src="src/assets/unnamed.webp" alt="" /></div>
                            <Flex vertical align="center" justify="center" gap={10} >
                                <div style={{width:"400px", textAlignLast:"center"}} >
                                    <Text >Our global network of certified Play Based Coaches are on hand to guide your child to become the leader of their own life and reach for 
                                    the stars! We support children with a practical set of skills & tools that they can use to infinity and beyond!</Text>
        
                                </div>
                                <Flex >
                                    <div style={{width:"180px" ,textAlign:"center"}} >
                                        <Title level={1}>7k5+</Title>
                                        <Text> total active students </Text>
                                    </div> 
                                    <div style={{width:"180px" ,textAlign:"center"}}>
                                        <Title level={1}>6+</Title>
                                        <Text> programs </Text>
                                    </div>
                                </Flex>
                                <Flex >
                                    <div style={{width:"180px",textAlign:"center"}}>
                                        <Title level={1}>80+</Title>
                                        <Text> well-qualified teachers </Text>
                                    </div> 
                                    <div style={{width:"180px",textAlign:"center"}}>
                                        <Title level={1}>2+</Title>
                                        <Text> years of teaching </Text>
                                </div>
                                </Flex>
                            </Flex>
                            <div><Image preview={{visible:false,movable:false,mask:false }} width={300} src="src/assets/unnamed2.webp" alt="" /></div>
                        </Flex>
                    </div>
                </Flex>
            </div>

        )
}
export { HomePage };
