import axios from "axios";

const updateProductData = (id, updatedProduct) => {
  console.log(id, updatedProduct);
  return async (dispatch) => {
    const result = await axios.put(
      `http://localhost:5000/product/${id}`,
      updatedProduct
    );
    console.log(result);
  };
};

export default updateProductData;
