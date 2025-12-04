import axios from "axios";

const BASE_URL = "http://localhost:8080/suppliers";

// 📌 Get All Suppliers
export const getAllSuppliers = () => {
  return axios.get(`${BASE_URL}/allSuppliers`);
};

// 📌 Get Supplier by ID
export const getSupplierById = (id) => {
  return axios.get(`${BASE_URL}/getSupplier/${id}`);
};

// 📌 Add Supplier
export const addSupplier = (supplier) => {
  return axios.post(`${BASE_URL}/addSupplier`, supplier);
};

// 📌 Update Supplier
export const updateSupplier = (id, supplier) => {
  return axios.put(`${BASE_URL}/updateSupplier/${id}`, supplier);
};

// 📌 Delete Supplier
export const deleteSupplier = (id) => {
  return axios.delete(`${BASE_URL}/deleteSupplier/${id}`);
};
