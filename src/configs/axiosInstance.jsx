import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://657140f409586eff66425ac1.mockapi.io/api/task1/products",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("🚀 ~ Response in Error (in axiosInstance):", error);
    return Promise.reject(error);
  }
);
export { axiosInstance };
