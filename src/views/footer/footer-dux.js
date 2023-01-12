import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    hasErrors: false,
    footerData: "",
};

const footerSlice = createSlice({
    name: "footerData",
    initialState,
    reducers: {
      getfooterData: (state) => {
        state.loading = true;
      },
      getfooterDataSuccess: (state, { payload }) => {
        state.footerData = payload.footerData;
        state.loading = false;
        state.hasErrors = false;
      },
      getfooterDataFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
    },
  });

  // Action creators are generated for each case reducer function
export const { getfooterData, getfooterDataSuccess, getfooterDataFailure } = footerSlice.actions;

// A selector
export const footerSelector = (state) => state.footerData;

export default footerSlice.reducer;

export function fetchfooterData() {
  return async (dispatch) => {
    dispatch(getfooterData());
    try {
      const response = await fetch("json/footer.json");
      const data = await response.json();
      dispatch(getfooterDataSuccess(data));
    } catch (error) {
      dispatch(getfooterDataFailure());
    }
  };
}