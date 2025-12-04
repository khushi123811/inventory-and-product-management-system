import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../services/ProductService";

const ProductForm = ({ open, onClose, product }) => {

  const [form, setForm] = useState({
    name: "",
    price: "",
    stockQty: "",
    categoryId: "",
    supplierId: "",
  });

  // Load selected product into form
  useEffect(() => {
    if (product) setForm(product);
    else {
      setForm({
        name: "",
        price: "",
        stockQty: "",
        categoryId: "",
        supplierId: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (product) {
      // UPDATE product
      updateProduct(product.id, form).then(() => {
        onClose();
      });
    } else {
      // ADD new product
      addProduct(form).then(() => {
        onClose();
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product ? "Update Product" : "Add Product"}</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Product Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Price"
          name="price"
          fullWidth
          value={form.price}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Stock Quantity"
          name="stockQty"
          fullWidth
          value={form.stockQty}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Category ID"
          name="categoryId"
          fullWidth
          value={form.categoryId}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Supplier ID"
          name="supplierId"
          fullWidth
          value={form.supplierId}
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
          {product ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
