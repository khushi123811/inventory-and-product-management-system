import axios from "axios";

const BASE_URL = "http://localhost:8080/products";

// 📌 Get All Products
export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/allProducts`);
};

// 📌 Get Product by ID
export const getProductById = (id) => {
  return axios.get(`${BASE_URL}/getProduct/${id}`);
};

// 📌 Add Product
export const addProduct = (product) => {
  return axios.post(`${BASE_URL}/addProduct`, product);
};

// 📌 Update Product
export const updateProduct = (id, product) => {
  return axios.put(`${BASE_URL}/updateProduct/${id}`, product);
};

// 📌 Delete Product
export const deleteProduct = (id) => {
  return axios.delete(`${BASE_URL}/deleteProduct/${id}`);
};
