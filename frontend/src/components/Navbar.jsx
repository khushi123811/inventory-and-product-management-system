import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = ({ page }) => {
  // UPDATED TITLE
  const title = "Inventory and Product Management System";

  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "240px",
        width: "calc(100% - 240px)",
        backgroundColor: "#1976d2",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
