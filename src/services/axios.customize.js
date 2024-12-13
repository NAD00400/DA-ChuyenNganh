import axios from "axios";

// Tạo instance Axios với cấu hình mặc định
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8000", // Đảm bảo baseURL được set đúng
 
});

// Request Interceptor - Thêm Authorization header nếu có token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  },
  (error) => Promise.reject(error) // Xử lý lỗi request
);

// Xử lý GET request không có body (GET request không nên có body)
instance.interceptors.request.use((config) => {
  if (config.method === "get" && config.data) {
    config.url += `?${new URLSearchParams(config.data).toString()}`;
    config.data = null; // Xóa body vì GET request không hợp lệ với body
  }
  return config;
});

// Response Interceptor - Xử lý cấu trúc response và lỗi
instance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.data) {
      return response.data; // Trả về data nếu có
    }
    return response; // Trả về response nguyên bản nếu không có data
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data); // Xử lý lỗi từ server
    } else if (error.request) {
      return Promise.reject({
        message: "Không nhận được phản hồi từ server. Vui lòng kiểm tra kết nối của bạn.", // Lỗi kết nối
      });
    } else {
      return Promise.reject({
        message: "Có lỗi xảy ra. Vui lòng thử lại.", // Lỗi không xác định
      });
    }
  }
);

export default instance; // Xuất Axios instance để sử dụng trong các component khác
