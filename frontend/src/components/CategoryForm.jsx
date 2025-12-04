import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { addCategory, updateCategory } from "../services/CategoryService";

const CategoryForm = ({ open, onClose, category }) => {

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  // Load selected category into form
  useEffect(() => {
    if (category) setForm(category);
    else {
      setForm({
        name: "",
        description: "",
      });
    }
  }, [category]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (category) {
      // UPDATE category
      updateCategory(category.id, form).then(() => {
        onClose();
      });
    } else {
      // ADD new category
      addCategory(form).then(() => {
        onClose();
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{category ? "Update Category" : "Add Category"}</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Category Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Description"
          name="description"
          fullWidth
          value={form.description}
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
          {category ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryForm;
