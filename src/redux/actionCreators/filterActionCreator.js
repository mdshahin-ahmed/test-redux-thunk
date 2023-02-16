import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
export const toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
