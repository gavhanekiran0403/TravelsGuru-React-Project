import axios from "axios";

const API_URL = "http://localhost:9191/api/categories";

export const createCategory = (category) => {
  return axios.post(API_URL, category);
};

export const getAllCategories = () => {
  return axios.get(API_URL);
};

export const deleteCategory = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getCategoryById = (id) =>
  axios.get(`${API_URL}/${id}`);

export const updateCategory = (id, category) =>
  axios.put(`${API_URL}/${id}`, category);