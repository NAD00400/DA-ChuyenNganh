import axios from './axios.customize';

const createUserAPI = (name, email, password, phone) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
        fullName: name,
        email: email,
        phone: phone,
        password: password,
    }
    return axios.post(URL_BACKEND, data);
}
const fetchAllUserAPI = (current,pageSize) => {
    const URL_BACKEND = `http://localhost:8080/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}
const updateUserAPI = (_id,fullName,phone) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
        fullName: fullName,
        _id:_id,
        phone: phone
    }
    return axios.put(URL_BACKEND, data);
}
const deleteUserAPi =(_id)=>{
    const URL_BACKEND = `http://localhost:8080/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND);
}
const getAccountAPI = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/auth/account";
    return axios.get(URL_BACKEND);
}
const loginAPI = (email, password ) => {
    // const URL_BACKEND = "/api/v1/auth/login";https://67449186b4e2e04abea2c4a8.mockapi.io/:endpoint
    const URL_BACKEND = "http://localhost:8080/api/v1/auth/login"
    const data = {
        username: email, 
        password: password,
    }
    return axios.post(URL_BACKEND, data);
}
const logoutAPI = ( ) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/auth/logout";
    return axios.post(URL_BACKEND);
}


export{createUserAPI,fetchAllUserAPI,updateUserAPI,deleteUserAPi,getAccountAPI,loginAPI,logoutAPI,}