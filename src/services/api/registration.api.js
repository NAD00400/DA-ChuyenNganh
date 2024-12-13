import { apiCall } from ".";

export const getMyProgram = () => apiCall("get", "/api/v1/my-programs");

export const getLearningMn = () =>
  apiCall("get", "/api/v1/admin/course-registrations");

export const getLearningDetail = (id) =>
  apiCall("get", `/api/v1/admin/course-registrations/${id}`);

export const createLearning = (formData) =>
  apiCall("post", "api/v1/create-registration", formData);

export const deleteLearning = (id) =>
  apiCall("delete", `/api/v1/admin/course-registrations/${id}`);

export const verificationLearning = (id) =>
  apiCall("patch", `/api/v1/admin/course-registrations/${id}`, {
    payment_status: true,
  });