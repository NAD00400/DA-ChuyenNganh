import { apiCall } from ".";

export const createUserAPI = (name, email, password) =>
    apiCall("post", "/api/v1/admin/users", { name, email, password });
  
  export const getAllUserAPI = () => apiCall("get", "/api/v1/admin/users");
  
  export const updateUserAPI = (id, email, student_name) =>
    apiCall("put", `/api/v1/admin/users/${id}`, { name: student_name, email });
  
  export const deleteUserAPi = (id) =>
    apiCall("delete", `/api/v1/admin/users/${id}`);
  