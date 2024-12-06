import instance from './axios.customize';

const loginAPI = (email, password ) => {
    
    const URL_BACKEND = "/api/v1/login"
    const data = {
        email: email,
        password: password,
    }
    return instance.post(URL_BACKEND, data);
}
const logoutAPI = ( ) => {
    const URL_BACKEND = "/api/v1/logout";
    return instance.post(URL_BACKEND);
}
const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/getAccount";
    return instance.get(URL_BACKEND);
}

const createUserAPI = (name, email, password, phone) => {
    const URL_BACKEND = "/api/v1/admin/users";
    const data = {
        fullName: name,
        email: email,
        phone: phone,
        password: password,
    }
    return instance.post(URL_BACKEND, data);
}
const getAllUserAPI = () => {
    const URL_BACKEND = `/api/v1/admin/users`;
    return instance.get(URL_BACKEND);
}
const updateUserAPI = (_id,fullName,phone) => {
    const URL_BACKEND = `/api/v1/admin/users/${_id}`;
    const data = {
        fullName: fullName,
        _id:_id,
        phone: phone
    }
    return instance .put(URL_BACKEND, data);
}
const deleteUserAPi =(_id)=>{
    const URL_BACKEND = `/api/v1/admin/users/${_id}`;
    return instance.delete(URL_BACKEND);
}

const getAllPrograms =()=>{
    const URL_BACKEND =`/api/v1/programms`
    return instance.get(URL_BACKEND);
}
const getProgramById =(id)=>{
    const URL_BACKEND =`/api/v1/programms/${id}`
    return instance.get(URL_BACKEND);
}
const deleteProgram =(_id)=>{
    const URL_BACKEND = `api/v1/admin/programms/${_id}`;
    return instance.delete(URL_BACKEND);
}


const getAllCategoriesAPI =()=>{
    const URL_BACKEND =`/api/v1/categories`
    return instance.get(URL_BACKEND);
}

export{deleteProgram,getAllCategoriesAPI,getProgramById,getAllPrograms,createUserAPI,getAllUserAPI,updateUserAPI,deleteUserAPi,getAccountAPI,loginAPI,logoutAPI,}