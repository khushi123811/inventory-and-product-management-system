import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/ProductService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const ProductTable = ({ onEdit, refresh }) => {
  const [products, setProducts] = useState([]);

  // Delete dialog control
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, [refresh]);

  const loadProducts = () => {
    getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteProduct(deleteId)
      .then(() => {
        setProducts(prev => prev.filter(p => p.id !== deleteId)); 
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock Qty</th>
            <th>Category ID</th>
            <th>Supplier ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                No Products Found
              </td>
            </tr>
          ) : (
            products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.stockQty}</td>
                <td>{prod.categoryId}</td>
                <td>{prod.supplierId}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(prod)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton color="error" onClick={() => handleDeleteClick(prod.id)}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* DELETE CONFIRMATION POPUP */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
        entity="product"
      />
    </div>
  );
};

export default ProductTable;
