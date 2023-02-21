import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import ProductList from "../components/ProductList";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/product-list" element={<ProductList />}></Route>
      <Route path="/add-product" element={<AddProduct />}></Route>
      <Route path="product-list/:id" element={<EditProduct />}></Route>
    </Routes>
  );
};

export default DashboardRoutes;
