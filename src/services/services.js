import { Cookies } from "react-cookie";
import { isAuthenticated } from "../utils/utils";
import axios from "axios";

const API_URL = "http://localhost:3000";

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    // console.log(token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch data");
  }
};

export const getUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getUser`);
    return response.data.userData;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch user data");
  }
};

export const automaticLogin = async () => {
  if (isAuthenticated()) {
    try {
      const userData = await getUserData();
      console.log("Automatic login successful:", userData);
      return userData;
    } catch (error) {
      console.error("Failed to automatically login:", error);
    }
  }
};
