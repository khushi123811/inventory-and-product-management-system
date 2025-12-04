import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import React from "react";

const ConfirmDialog = ({ open, onClose, onConfirm, entity }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>

      <DialogContent>
        Are you sure you want to delete this {entity}?
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          color="error" 
          variant="contained" 
          onClick={onConfirm}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
