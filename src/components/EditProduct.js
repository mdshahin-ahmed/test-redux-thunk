import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import fetchSingleProduct from "../redux/thunk/products/fetchSingleProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  inputString,
  updateProduct,
} from "../redux/actionCreators/productActionCreators";
import updateProductData from "../redux/thunk/products/updateProductData";

// const initialValuescreate = {
//   model: "",
//   image: "",
//   brand: "",
//   price: "",
//   status: "",
//   keyFeature: [],
// };

const EditProduct = () => {
  const [inputValue, setInputValue] = useState({});

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  // console.log(product);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  useEffect(() => {
    if (product) {
      setInputValue(product);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductData(inputValue._id, inputValue));
  };

  const onSubmit = (data) => {
    // console.log(data);
    // dispatch(updateProduct(inputValue._id, inputValue));
    // const {
    //   model,
    //   image,
    //   brand,
    //   price,
    //   status,
    //   keyFeature1,
    //   keyFeature2,
    //   keyFeature3,
    //   keyFeature4,
    // } = data;
    // const product = {
    //   model,
    //   image,
    //   brand,
    //   price,
    //   status: Boolean(status),
    //   keyFeature: [keyFeature1, keyFeature2, keyFeature3, keyFeature4],
    // };
    // console.log(product);
    // dispatch(addProductData(product));
  };

  return (
    <div className="addProductFormWrap ">
      <div className="formWrap">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label>Model</label>
                {/* <Controller
                  name="model"
                  control={control}
                  render={({ onChange, value }) => (
                    <input
                      name="model"
                      // onChange={(event) =>
                      //   handleInputChange(event.target.name, event.target.value)
                      // }
                      // value={inputValue.model}
                      // {...register("model")}
                      onChange={(e, { value }) => onChange(value)}
                      value={value}
                    />
                  )}
                /> */}
                <input
                  name="model"
                  value={inputValue.model}
                  onChange={(e) =>
                    dispatch(inputString(e.target.name, e.target.value))
                  }
                />
              </div>
              <div className="col-md-6">
                <label>Image</label>
                <input
                  name="image"
                  value={inputValue.image}
                  onChange={(e) =>
                    dispatch(inputString(e.target.name, e.target.value))
                  }
                />
              </div>
              <div className="col-md-6">
                <label>Brand</label>
                <select
                  name="brand"
                  value={inputValue.brand}
                  onChange={(e) =>
                    dispatch(inputString(e.target.name, e.target.value))
                  }
                >
                  <option value="">Select Brand</option>
                  <option value="amd">AMD</option>
                  <option value="intel">Intel</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  value={inputValue.price}
                  onChange={(e) =>
                    dispatch(inputString(e.target.name, e.target.value))
                  }
                />
              </div>

              {/* <div className="col-md-6">
                <label>Key Feature 1</label>
                <input
                  value={inputValue.brand}
                  onChange={(e) =>
                    dispatch(inputString(e.target.name, e.target.value))
                  }
                />
              </div>
              <div className="col-md-6">
                <label>Key Feature 2</label>
                <input
                  //   value={keyFeature[1] || ""}
                  {...register("keyFeature2", { required: true })}
                />
              </div>
              <div className="col-md-6">
                <label>Key Feature 3</label>
                <input
                  //   value={keyFeature[2] || ""}
                  {...register("keyFeature3", { required: true })}
                />
              </div>
              <div className="col-md-6">
                <label>Key Feature 4</label>
                <input
                  //   value={keyFeature[3] || ""}
                  {...register("keyFeature4", { required: true })}
                />
              </div> */}
            </div>
            <div className="">
              <label>Status</label>
              <div className="d-flex">
                <div className="d-flex">
                  <input
                    type="radio"
                    name="status"
                    value={true}
                    onChange={(e) =>
                      dispatch(
                        inputString(e.target.name, Boolean(e.target.value))
                      )
                    }
                    // {...register("status", { required: true })}
                  />
                  <label className="align-self-center ms-1">Available</label>
                </div>
                <div className="d-flex ms-3">
                  <input
                    type="radio"
                    name="status"
                    onChange={(e) =>
                      dispatch(inputString(e.target.name, false))
                    }
                    // {...register("status", { required: true })}
                  />
                  <label className="align-self-center ms-1">Unavailable</label>
                </div>
              </div>
            </div>

            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
