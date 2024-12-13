import { apiCall } from ".";

export const getAllPrograms = () => apiCall("get", "/api/v1/admin/programs");

export const getProgramById = (id) =>
  apiCall("get", `/api/v1/programs/${id}`);

export const createProgramApi = (formData) =>
  apiCall("post", "/api/v1/admin/programs", formData, {
    "Content-Type": "multipart/form-data",
  });

export const updateProgramAPI = (id, formData) =>
  apiCall("post", `api/v1/admin/programs/update/${id}`, formData, {
    "Content-Type": "multipart/form-data",
  });

export const deleteProgram = (id) =>
  apiCall("delete", `api/v1/admin/programs/${id}`);
