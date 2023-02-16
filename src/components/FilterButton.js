import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleBrand,
  toggleStock,
} from "../redux/actionCreators/filterActionCreator";

const FilterButton = () => {
  const { filters } = useSelector((state) => state.filter);
  const { brand, stock } = filters;
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(toggleStock())}
        className={`btn ${stock ? "btn-primary" : "filterButton"} my-5 mx-2`}
      >
        STOCK
      </button>
      <button
        onClick={() => dispatch(toggleBrand("amd"))}
        className={`btn ${
          brand.includes("amd") ? "btn-primary" : "filterButton"
        } my-5 mx-2`}
      >
        AMD
      </button>
      <button
        onClick={() => dispatch(toggleBrand("intel"))}
        className={`btn ${
          brand.includes("intel") ? "btn-primary" : "filterButton"
        } my-5 mx-2`}
      >
        INTEL
      </button>
    </div>
  );
};

export default FilterButton;
