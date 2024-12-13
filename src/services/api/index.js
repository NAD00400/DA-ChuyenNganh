import instance from "../axios.customize";
// Utility function for making API calls
export const apiCall = async (method, url, data = null, headers = {}) => {
    try {
      const res = await instance({
        method,
        url,
        data,
        headers,
      });
      return res;
    } catch (error) {
      console.error(`Error in API call to ${url}:`, error);
      throw error;
    }
  };