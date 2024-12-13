import { apiCall } from ".";

// apap
export const createLearning = (formData) =>
  apiCall("post", "api/v1/create-registration", formData);
export const getAllProgramsClient = () => apiCall("get", "/api/v1/programs");