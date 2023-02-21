import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebarWrap">
      <h3>Dashboard</h3>
      <div>
        <Link
          className={`${
            (pathname.includes("/dashboard/product-list") ||
              pathname.includes("/dashboard")) &&
            !pathname.includes("/dashboard/add-product")
              ? "activeLink"
              : null
          }`}
          to="/dashboard/product-list"
        >
          Product List
        </Link>
        <Link
          className={`${
            pathname.includes("/dashboard/add-product") ? "activeLink" : null
          }`}
          to="/dashboard/add-product"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
