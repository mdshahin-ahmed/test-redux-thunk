import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import { loadProduct } from "../redux/actionCreators/productActionCreators";

const Home = () => {
  const { products } = useSelector((state) => state);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loading());
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => dispatch(loadProduct(data)));
    //   .catch(dispatch(error()));
  }, [dispatch]);

  let content;

  if (products.length === 0) {
    content = "Loading............";
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

  return <div>{content}</div>;
};

export default Home;
