import axios from "axios";


const api = axios.create({
  //baseURL: "http://localhost:5000/api",
  baseURL: "https://password-reset-flow-backend-ata2.onrender.com//api",
}); ss

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
