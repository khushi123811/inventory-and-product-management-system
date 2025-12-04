import React, { useEffect, useState } from "react";
import { getAllCategories, deleteCategory } from "../services/CategoryService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const CategoryTable = ({ onEdit, refresh }) => {
  const [categories, setCategories] = useState([]);

  // Delete dialog control
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadCategories();
  }, [refresh]);

  const loadCategories = () => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteCategory(deleteId)
      .then(() => {
        setCategories(prev => prev.filter(cat => cat.id !== deleteId)); 
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No Categories Found
              </td>
            </tr>
          ) : (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.description}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(cat)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton color="error" onClick={() => handleDeleteClick(cat.id)}>
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
        entity="category"
      />
    </div>
  );
};

export default CategoryTable;
