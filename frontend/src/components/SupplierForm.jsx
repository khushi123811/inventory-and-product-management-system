import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { addSupplier, updateSupplier } from "../services/SupplierService";

const SupplierForm = ({ open, onClose, supplier }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Load selected supplier into form
  useEffect(() => {
    if (supplier) setForm(supplier);
    else {
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    }
  }, [supplier]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (supplier) {
      // UPDATE supplier
      updateSupplier(supplier.id, form).then(() => {
        onClose();
      });
    } else {
      // ADD new supplier
      addSupplier(form).then(() => {
        onClose();
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{supplier ? "Update Supplier" : "Add Supplier"}</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Email"
          name="email"
          fullWidth
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Phone"
          name="phone"
          fullWidth
          value={form.phone}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Address"
          name="address"
          fullWidth
          value={form.address}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          {supplier ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SupplierForm;
