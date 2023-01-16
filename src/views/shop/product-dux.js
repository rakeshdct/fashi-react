import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    hasErrors: false,
    productData: "",
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
    },
  });

  // Action creators are generated for each case reducer function
export const { getproductData, getproductDataSuccess, getproductDataFailure } = productSlice.actions;

// A selector
export const productSelector = (state) => state.productData;

export default productSlice.reducer;

export function fetchproductData(catagory) {
  if(catagory === undefined){
    catagory = "men"
  }
  return async (dispatch) => {
    dispatch(getproductData());
    try {
      const response = await fetch("../json/"+catagory+".json");
      const data = await response.json();
      dispatch(getproductDataSuccess(data));
    } catch (error) {
      dispatch(getproductDataFailure());
    }
  };
}