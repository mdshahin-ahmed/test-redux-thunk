import { loadProduct } from "../../actionCreators/productActionCreators";

const fetchProducts = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://test-redux-thunk.onrender.com/products");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};

export default fetchProducts;
