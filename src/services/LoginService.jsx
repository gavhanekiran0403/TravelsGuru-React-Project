import axios from "axios";

const API_URL = "http://localhost:9191/api/users";

// LOGIN
export const loginUser = (loginData) => {
  return axios.post(`${API_URL}/login`, loginData);
};

// LOGOUT
export const logoutUser = (userId) => {
  return axios.post(`${API_URL}/logout/${userId}`);
};
