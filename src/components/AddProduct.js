import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addProductData from "../redux/thunk/products/addProductData";

const AddProduct = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      model,
      image,
      brand,
      price,
      status,
      keyFeature1,
      keyFeature2,
      keyFeature3,
      keyFeature4,
    } = data;
    const product = {
      model,
      image,
      brand,
      price,
      status: Boolean(status),
      keyFeature: [keyFeature1, keyFeature2, keyFeature3, keyFeature4],
    };
    // console.log(product);
    dispatch(addProductData(product));
  };

  return (
    <div className="addProductFormWrap">
      <div className="formWrap">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <label>Model</label>
                <input {...register("model")} />
              </div>
              <div className="col-md-6">
                <label>Image</label>
                <input {...register("image", { required: true })} />
              </div>
              <div className="col-md-6">
                <label>Brand</label>
                <select {...register("brand")}>
                  <option value="">Select Brand</option>
                  <option value="amd">AMD</option>
                  <option value="intel">Intel</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Price</label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                />
              </div>

              <div className="col-md-6">
                <label>Key Feature 1</label>
                <input {...register("keyFeature1", { required: true })} />
              </div>
              <div className="col-md-6">
                <label>Key Feature 2</label>
                <input {...register("keyFeature2", { required: true })} />
              </div>
              <div className="col-md-6">
                <label>Key Feature 3</label>
                <input {...register("keyFeature3", { required: true })} />
              </div>
              <div className="col-md-6">
                <label>Key Feature 4</label>
                <input {...register("keyFeature4", { required: true })} />
              </div>
            </div>
            <div className="">
              <label>Status</label>
              <div className="d-flex">
                <div className="d-flex">
                  <input
                    type="radio"
                    value={true}
                    {...register("status", { required: true })}
                  />
                  <label className="align-self-center ms-1">Available</label>
                </div>
                <div className="d-flex ms-3">
                  <input
                    type="radio"
                    value={false}
                    {...register("status", { required: true })}
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

export default AddProduct;
