import axios from "axios";
import { deleteProduct } from "../../actionCreators/productActionCreators";

const deleteProductData = (_id) => {
  return async (dispatch, getStore) => {
    const res = await axios.delete(
      `https://test-redux-thunk.onrender.com/product/${_id}`
    );
    // console.log(res);
    if (res.data.deletedCount === 1) {
      dispatch(deleteProduct(_id));
    }
  };
};

export default deleteProductData;
