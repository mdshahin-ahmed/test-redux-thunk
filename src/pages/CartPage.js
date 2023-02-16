import React from "react";
import { useSelector } from "react-redux";

import Cart from "../components/Cart";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  let content;

  if (cart.length === 0) {
    content = "Nothing added in cart";
  }

  if (cart.length && cart.length > 0) {
    content = (
      <div className="row">
        {cart
          .sort((a, b) => a._id - b._id)
          .map((product) => (
            <div key={product._id} className=" col-md-4 d-flex">
              <Cart key={product._id} product={product}></Cart>
            </div>
          ))}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default CartPage;
