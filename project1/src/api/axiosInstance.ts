import axios from "axios";
import { logout } from "../store/slices/authSlice";
import { store } from "../store/store";

const API_BASE = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE,
});

// 🔥 Add interceptor for expired token
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());  // clear token
      window.location.href = "/login";  // redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
