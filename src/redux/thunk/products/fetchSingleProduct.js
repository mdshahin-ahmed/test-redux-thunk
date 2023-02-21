import { loadSingleProduct } from "../../actionCreators/productActionCreators";

const fetchSingleProduct = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`);
    const data = await res.json();
    dispatch(loadSingleProduct(data));
  };
};

export default fetchSingleProduct;
