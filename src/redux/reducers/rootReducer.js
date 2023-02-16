import { combineReducers } from "redux";
import FilterReducer from "./FilterReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  product: productReducer,
  filter: FilterReducer,
});

export default rootReducer;
