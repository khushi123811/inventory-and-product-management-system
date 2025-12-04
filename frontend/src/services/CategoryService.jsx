import axios from "axios";

const BASE_URL = "http://localhost:8080/categories";

// 📌 Get All Categories
export const getAllCategories = () => {
  return axios.get(`${BASE_URL}/allCategories`);
};

// 📌 Get Category by ID
export const getCategoryById = (id) => {
  return axios.get(`${BASE_URL}/getCategory/${id}`);
};

// 📌 Add Category
export const addCategory = (category) => {
  return axios.post(`${BASE_URL}/addCategory`, category);
};

// 📌 Update Category
export const updateCategory = (id, category) => {
  return axios.put(`${BASE_URL}/updateCategory/${id}`, category);
};

// 📌 Delete Category
export const deleteCategory = (id) => {
  return axios.delete(`${BASE_URL}/deleteCategory/${id}`);
};
