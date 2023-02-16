import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import WishListPage from "../pages/WishListPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/wish-list" element={<WishListPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
