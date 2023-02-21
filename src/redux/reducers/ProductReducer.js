import {
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  DELETE_PRODUCT,
  INPUT_STRING,
  LOAD_PRODUCTS,
  LOAD_SINGLE_PRODUCT,
  REMOVE_TO_CART,
  REMOVE_TO_WISH_LIST,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  product: {},
  products: [],
  cart: [],
  wishList: [],
  //   loading: false,
  //   error: false,
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  // console.log(action.payload);
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case INPUT_STRING:
      return {
        ...state,
        product: {
          ...state.product,
          [action.payload.name]: action.payload.value,
        },
      };
    case LOAD_SINGLE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case UPDATE_PRODUCT:
      console.log(action);
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload._id) {
            return {
              ...product,
              ...action.payload.updatedProduct,
            };
          } else return product;
        }),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product._id !== action.payload),
        ],
      };
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity += 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_TO_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity -= 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product !== action.payload),
      };

    case ADD_TO_WISH_LIST:
      const isIncludes = state.wishList.find(
        (product) => product._id === action.payload._id
      );
      if (isIncludes) {
        return state;
      }
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };

    case REMOVE_TO_WISH_LIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    // case LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // case ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };

    default:
      return state;
  }
};

export default productReducer;
