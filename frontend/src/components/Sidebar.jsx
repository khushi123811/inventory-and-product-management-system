import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";

const Sidebar = ({ setPage }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#fff",
        },
      }}
    >
      <div style={{ height: 72 }} />

      <List>
        {/* Dashboard Button */}
        <ListItemButton onClick={() => setPage("dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <Divider sx={{ my: 1 }} />

        {/* Products */}
        <ListItemButton onClick={() => setPage("products")}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        {/* Categories */}
        <ListItemButton onClick={() => setPage("categories")}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>

        {/* Suppliers */}
        <ListItemButton onClick={() => setPage("suppliers")}>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Suppliers" />
        </ListItemButton>

      </List>
    </Drawer>
  );
};

export default Sidebar;
