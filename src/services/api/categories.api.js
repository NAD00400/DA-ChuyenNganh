import { apiCall } from ".";

export const getAllCategoriesAPI = () => apiCall("get", "/api/v1/categories");

export const categoriesCreateAPI = (name) =>
  apiCall("post", "/api/v1/admin/categories", { cat_title: name });

export const deleteCategories = (id) =>
  apiCall("delete", `/api/v1/admin/categories/${id}`);