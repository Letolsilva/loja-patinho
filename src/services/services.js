import axios from "axios";

const API_URL = "http://localhost:3000";

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch data");
  }
};
