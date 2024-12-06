import { Flex, Image, Typography } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProgramById } from "../../services/api.service";
const {Text,Title}=Typography
const ProgramDetail =()=>{
    const {id} = useParams();
    const [dataProgramDetail, setDataProgramDetail]=useState()
    const loadProgramById = async() =>{
        const res =await getProgramById(id);
        if (res.data) {
            setDataProgramDetail(res.data);
          }
    }
    useEffect(()=>{
        loadProgramById
    },[])

    return <>
        <Flex>
            <Flex justify="center"><Title>{dataProgramDetail.course_name} </Title></Flex>
            <Image src="" alt="" />
            <Flex justify="center"><Text>{dataProgramDetail.course_description}</Text>
            <Text>{dataProgramDetail.course_slug}</Text>
            </Flex>
        </Flex>
    </>
}
export {ProgramDetail}