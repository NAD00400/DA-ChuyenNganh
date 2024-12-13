import { apiCall } from ".";

export const getAllVideo = (id) => {
  const data = {
      course_id: id,
  };
  return apiCall("get", "/api/v1/admin/course-videos", data);
};

export const getProgramById = (id) =>
  apiCall("get", `/api/v1/programs/${id}`);

export const createProgramApi = (formData) =>
  apiCall("post", "/api/v1/admin/programs", formData, {
    "Content-Type": "multipart/form-data",
  });
export const updateProgramAPI = (id, formData) =>
  apiCall("put", `/api/v1/admin/programs/${id}`, formData, {
    "Content-Type": "multipart/form-data",
  });

export const deleteProgram = (id) =>
  apiCall("delete", `/api/v1/admin/programs/${id}`);

export const createVideoApi = (formData) =>
  apiCall("post", "/api/v1/admin/course-videos", formData, {
    "Content-Type": "multipart/form-data",
  });

export const deleteVideo = (videoId) => {
  return apiCall("delete", `/api/v1/admin/course-videos/${videoId}`);
};