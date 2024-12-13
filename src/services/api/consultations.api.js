import { apiCall } from ".";

export const getAllConsultationForm = () => apiCall("get", "/api/v1/admin/contacts");

export const deleteConsultationForm = (id) =>
  apiCall("delete", `/api/v1/admin/contacts/${id}`);

export const createConsultationForm = (data) => // client
  apiCall("post", `/api/v1/contact/store`,data);

