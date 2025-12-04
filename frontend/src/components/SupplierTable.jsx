import React, { useEffect, useState } from "react";
import { getAllSuppliers, deleteSupplier } from "../services/SupplierService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const SupplierTable = ({ onEdit, refresh }) => {
  const [suppliers, setSuppliers] = useState([]);

  // Delete dialog
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadSuppliers();
  }, [refresh]);

  const loadSuppliers = () => {
    getAllSuppliers()
      .then((res) => setSuppliers(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteSupplier(deleteId)
      .then(() => {
        setSuppliers(prev => prev.filter(s => s.id !== deleteId));
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="supplier-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                No Suppliers Found
              </td>
            </tr>
          ) : (
            suppliers.map((sup) => (
              <tr key={sup.id}>
                <td>{sup.id}</td>
                <td>{sup.name}</td>
                <td>{sup.email}</td>
                <td>{sup.phone}</td>
                <td>{sup.address}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(sup)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(sup.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* DELETE CONFIRM POPUP */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
        entity="supplier"
      />
    </div>
  );
};

export default SupplierTable;
