import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarWrap">
      <h3>Dashboard</h3>
      <div>
        <Link to="/dashboard/product-list">Product List</Link>
        <Link to="/dashboard/add-product">Add Product</Link>
      </div>
    </div>
  );
};

export default Sidebar;
