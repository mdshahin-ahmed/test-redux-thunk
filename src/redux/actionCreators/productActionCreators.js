import {
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  DELETE_PRODUCT,
  LOAD_PRODUCTS,
  REMOVE_TO_CART,
  REMOVE_TO_WISH_LIST,
} from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeToCart = (product) => {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
};
export const addToWishList = (product) => {
  return {
    type: ADD_TO_WISH_LIST,
    payload: product,
  };
};
export const removeToWishList = (product) => {
  return {
    type: REMOVE_TO_WISH_LIST,
    payload: product,
  };
};
export const addProduct = (data) => {
  // console.log(data);
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const deleteProduct = (_id) => {
  // console.log(data);
  return {
    type: DELETE_PRODUCT,
    payload: _id,
  };
};
// export const loading = () => {
//   return {
//     type: LOADING,
//   };
// };
// export const error = () => {
//   return {
//     type: ERROR,
//   };
// };
