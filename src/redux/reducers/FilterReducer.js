import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    brand: [],
    stock: false,
  },
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };

    case TOGGLE_BRAND:
      if (state.filters.brand.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brand: state.filters.brand.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: [...state.filters.brand, action.payload],
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
