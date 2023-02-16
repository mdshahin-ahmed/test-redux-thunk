const initialState = {
  test: "TEST",
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return;

    default:
      return state;
  }
};

export default FilterReducer;
