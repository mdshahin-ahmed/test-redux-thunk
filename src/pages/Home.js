import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import FilterButton from "../components/FilterButton";
import fetchProducts from "../redux/thunk/products/fetchProducts";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const { filters } = useSelector((state) => state.filter);
  const { brand, stock } = filters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;

  if (products.length === 0) {
    content = "Loading...";
  }

  if (products.length && products.length > 0) {
    content = (
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="d-flex col-md-4">
            <Cart key={product._id} product={product}></Cart>
          </div>
        ))}
      </div>
    );
  }
  if (products.length && products.length > 0 && (stock || brand.length)) {
    content = (
      <div className="row">
        {products
          .filter((product) => {
            if (stock) {
              return product.status === stock;
            }
            return product;
          })
          .filter((product) => {
            if (brand.length) {
              return brand.includes(product.brand);
            }
            return product;
          })
          .map((product) => (
            <div key={product._id} className="d-flex col-md-4">
              <Cart key={product._id} product={product}></Cart>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <FilterButton />
      {content}
    </div>
  );
};

export default Home;
