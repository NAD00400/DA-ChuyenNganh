import { apiCall } from ".";

// Authentication APIs
export const loginAPI = (email, password) =>
    apiCall("post", "/api/v1/login", { email, password });
  
export const logoutAPI = () => apiCall("post", "/api/v1/logout");
export const registerAPI = ({ name, email, password, password_confirmation }) => apiCall("post", "/api/v1/register",{ name, email, password, password_confirmation }  );

export const getAccountAPI = () => apiCall("get", "/api/v1/getAccount");