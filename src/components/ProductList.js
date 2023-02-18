import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/thunk/products/fetchProducts";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import deleteProductData from "../redux/thunk/products/deleteProductData";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="productListWrap">
      {products.length ? (
        <table className="table w-100  table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">In Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ model, brand, price, status, _id }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>{model}</td>
                <td className="text-capitalize">{brand}</td>
                <td>{status ? "Available" : "Stock Out"}</td>
                <td>{price}</td>
                <td>
                  <div className="actionIcons">
                    <CiEdit />
                    <AiOutlineDelete
                      onClick={() => dispatch(deleteProductData(_id))}
                      className="ms-3"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div> Loading....</div>
      )}
    </div>
  );
};

export default ProductList;
