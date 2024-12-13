import { apiCall } from ".";

export const getAllEvent = () => apiCall("get", "/api/v1/events");

export const createEventApi = (formData) =>
  apiCall("post", "/api/v1/admin/events", formData);

export const updateEventApi = (id, formData) =>
  apiCall("put", `/api/v1/admin/events/${id}`, formData, {
    "Content-Type": "application/json",
  });
export const deleteEventApi = (id) =>
    apiCall("delete", `/api/v1/admin/events/${id}`);
  