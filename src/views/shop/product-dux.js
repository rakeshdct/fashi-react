import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  hasErrors: false,
  categories: "men",
  productData: "",
  selectedFilter: "",
  selectedProduct: 0,
};

const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    getproductData: (state) => {
      state.loading = true;
    },
    getproductDataSuccess: (state, { payload }) => {
      state.productData = payload.productData;
      state.loading = false;
      state.hasErrors = false;
    },
    getproductDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    selectedCategory: (state, action) => {
      state.categories = action.payload
    },
    selectedProductIndex: (state, action) => {
      state.selectedProduct = action.payload
    },
    selectedFilters: (state, action) => {
      state.selectedFilter = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectedFilters, selectedCategory, selectedProductIndex, getproductData, getproductDataSuccess, getproductDataFailure } = productSlice.actions;

// A selector
export const productSelector = (state) => state.productData;

export default productSlice.reducer;

export function fetchproductData(catagory) {
  return async (dispatch) => {
    dispatch(getproductData());
    try {
      const response = await fetch("../json/" + catagory + ".json");
      const data = await response.json();
      dispatch(getproductDataSuccess(data));
    } catch (error) {
      dispatch(getproductDataFailure());
    }
  };
}