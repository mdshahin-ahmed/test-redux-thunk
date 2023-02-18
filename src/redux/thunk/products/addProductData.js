import axios from "axios";
import { addProduct } from "../../actionCreators/productActionCreators";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const data = await axios.post(
      "https://test-redux-thunk.onrender.com/product",
      product
    );
    if (data.data.acknowledged) {
      dispatch(addProduct({ ...product, _id: data.data.insertedId }));
    }
  };
};

export default addProductData;
