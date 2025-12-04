import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

import CategoryTable from "./components/CategoryTable";
import CategoryForm from "./components/CategoryForm";

import SupplierTable from "./components/SupplierTable";
import SupplierForm from "./components/SupplierForm";

import "./styles/layout.css";
import { Button } from "@mui/material";

function App() {
  const [page, setPage] = useState("dashboard");

  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setEditData(null);
    setOpenForm(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setRefresh(!refresh);
  };

  /* ========================== */
  /*   BUTTON TITLES (Dynamic)  */
  /* ========================== */
  const titles = {
    products: "ADD PRODUCT",
    categories: "ADD CATEGORY",
    suppliers: "ADD SUPPLIER",
  };

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        <Navbar page={page} />

        <div className="page-container">

          {/* ADD BUTTON */}
          {["products", "categories", "suppliers"].includes(page) && (
            <div className="add-btn">
              <Button
                variant="contained"
                sx={{ padding: "10px 25px", fontSize: "16px" }}
                onClick={handleAdd}
              >
                {titles[page]}
              </Button>
            </div>
          )}

          {/* TABLE ROUTING */}
          {page === "products" && (
            <ProductTable onEdit={handleEdit} refresh={refresh} />
          )}

          {page === "categories" && (
            <CategoryTable onEdit={handleEdit} refresh={refresh} />
          )}

          {page === "suppliers" && (
            <SupplierTable onEdit={handleEdit} refresh={refresh} />
          )}

          {/* DASHBOARD */}
          {page === "dashboard" && (
            <div style={{ padding: "20px", fontSize: "20px", color: "#555" }}>
              Welcome to Inventory and Product Management System Dashboard
            </div>
          )}
        </div>
      </div>

      {/* POPUP FORMS */}
      {openForm && page === "products" && (
        <ProductForm open={openForm} onClose={handleCloseForm} product={editData} />
      )}

      {openForm && page === "categories" && (
        <CategoryForm open={openForm} onClose={handleCloseForm} category={editData} />
      )}

      {openForm && page === "suppliers" && (
        <SupplierForm open={openForm} onClose={handleCloseForm} supplier={editData} />
      )}
    </div>
  );
}

export default App;
