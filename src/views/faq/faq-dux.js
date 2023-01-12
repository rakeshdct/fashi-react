import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    hasErrors: false,
    faqData: "",
};

const faqSlice = createSlice({
    name: "faqData",
    initialState,
    reducers: {
      getfaqData: (state) => {
        state.loading = true;
      },
      getfaqDataSuccess: (state, { payload }) => {
        state.faqData = payload.faqData;
        state.loading = false;
        state.hasErrors = false;
      },
      getfaqDataFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
    },
  });

  // Action creators are generated for each case reducer function
export const { getfaqData, getfaqDataSuccess, getfaqDataFailure } = faqSlice.actions;

// A selector
export const faqSelector = (state) => state.faqData;

export default faqSlice.reducer;

export function fetchfaqData() {
  return async (dispatch) => {
    dispatch(getfaqData());
    try {
      const response = await fetch("json/faq.json");
      const data = await response.json();
      dispatch(getfaqDataSuccess(data));
    } catch (error) {
      dispatch(getfaqDataFailure());
    }
  };
}