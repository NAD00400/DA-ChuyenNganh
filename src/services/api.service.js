import instance from './axios.customize';

export const loginAPI = (email, password ) => {
    const URL_BACKEND = "/api/v1/login"
    const data = {
        email: email,
        password: password,
    }
    return instance.post(URL_BACKEND, data);
}
export const logoutAPI = ( ) => {
    const URL_BACKEND = "/api/v1/logout";
    return instance.post(URL_BACKEND);
}
export const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/getAccount";
    return instance.get(URL_BACKEND);
}

export const createUserAPI = (name, email, password) => {
    const URL_BACKEND = "/api/v1/admin/users";
    const data = {
        name: name,
        email: email,
        password: password,
    }
    return instance.post(URL_BACKEND, data);
}
export const getAllUserAPI = () => {
    const URL_BACKEND = `/api/v1/admin/users`;
    return instance.get(URL_BACKEND);
}
export const updateUserAPI = (id,email,student_name ) => {
    const URL_BACKEND = `/api/v1/admin/users/${id}`;
    const data = {
        name: student_name, // Trường chính xác cần cập nhật
        email:email,
    }
    return instance.put(URL_BACKEND,data);
}
export const deleteUserAPi =(id)=>{
    const URL_BACKEND = `/api/v1/admin/users/${id}`;
    return instance.delete(URL_BACKEND);
}
export const getAllPrograms =()=>{
    const URL_BACKEND =`/api/v1/admin/programs`
    return instance.get(URL_BACKEND);
}
export const getProgramById =(id)=>{
    const URL_BACKEND =`/api/v1/programms/${id}`
    return instance.get(URL_BACKEND);
}

export const createProgramApi = async (formData) => { /// kiểu code mới học cần thời gian thuần thục
    const URL_BACKEND = "/api/v1/admin/programs";
    const res = await instance.post(URL_BACKEND, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
    return res.data;
  };
export const deleteProgram =(_id)=>{
    const URL_BACKEND = `api/v1/admin/programs/${_id}`;
    return instance.delete(URL_BACKEND);
}
export  const updateProgramAPI = async (id, formData) => { /// kiểu code này hợp với mình vãixxx đđạn
    const URL_BACKEND = `/api/v1/admin/programs/${id}`;
    const res = await instance.put(URL_BACKEND, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return res.data;
  };

export const getAllCategoriesAPI =()=>{
    const URL_BACKEND =`/api/v1/categories`
    return instance.get(URL_BACKEND);
}
export const categoriesCreateAPI = (name) => {
    const URL_BACKEND = `/api/v1/admin/categories`;
    return instance.post(URL_BACKEND,{cat_title: name});
}

export const deleteCategories =(_id)=>{
    const URL_BACKEND = `/api/v1/admin/categories/${_id}`;
    return instance.delete(URL_BACKEND);
}
export const getAllEvent =()=>{
    const URL_BACKEND = `/api/v1/events`;
    return instance.get(URL_BACKEND);
}
export const deleteEventApi =(_id)=>{
    const URL_BACKEND = `/api/v1/admin/events/${_id}`;
    return instance.delete(URL_BACKEND);
}
export const createEventApi =(formData)=>{
    const URL_BACKEND = "/api/v1/admin/events";
    return instance.post(URL_BACKEND, formData)
}

export const updateEventApi =async(_id,formData)=>{
    const URL_BACKEND = `/api/v1/admin/events/${_id}`;
    const res = await instance.put(URL_BACKEND, formData, {
        headers: {
            "Content-Type": "application/json", // Dữ liệu gửi lên là JSON
        },
    });
      return res.data;
  };