import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineDelete,
  AiFillHeart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addToWishList,
  removeToCart,
  removeToWishList,
} from "../redux/actionCreators/productActionCreators";

const Cart = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { image, model } = product;

  return (
    <div className="card mb-4">
      {pathname === "/cart" && (
        <span className="cartQuantity">{product.quantity}</span>
      )}
      <img src={image} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h5 className="card-title">{model}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {pathname === "/" || pathname === "/home" ? (
          <div
            className="mt-auto d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn btn-primary"
            >
              <AiOutlineShoppingCart className="me-1 " />
              <span>Add to cart</span>
            </button>
            <button
              onClick={() => dispatch(addToWishList(product))}
              className="btn btn-primary"
            >
              <AiFillHeart className="me-1 " />
              <span>Add to wish List</span>
            </button>
          </div>
        ) : null}
        {pathname === "/cart" && (
          <button
            onClick={() => dispatch(removeToCart(product))}
            className="btn btn-danger mt-auto"
          >
            <AiOutlineDelete className="me-1 " />
            <span>Remove From cart</span>
          </button>
        )}
        {pathname === "/wish-list" && (
          <button
            onClick={() => dispatch(removeToWishList(product))}
            className="btn btn-danger mt-auto"
          >
            <AiOutlineDelete className="me-1 " />
            <span>Remove From wish List</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
