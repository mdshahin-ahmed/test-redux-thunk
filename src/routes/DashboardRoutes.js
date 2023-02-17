import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/product-list" element={<ProductList />}></Route>
      <Route path="/add-product" element={<AddProduct />}></Route>
    </Routes>
  );
};

export default DashboardRoutes;
