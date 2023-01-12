import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  hasErrors: false,
  homeData: "",
};

const homeSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    getHomeData: (state) => {
      state.loading = true;
    },
    getHomeDataSuccess: (state, { payload }) => {
      state.homeData = payload.homeData;
      state.loading = false;
      state.hasErrors = false;
    },
    getHomeDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getHomeData, getHomeDataSuccess, getHomeDataFailure } = homeSlice.actions;

// A selector
export const homeSelector = (state) => state.homeData;

export default homeSlice.reducer;

export function fetchHomeData() {
  return async (dispatch) => {
    dispatch(getHomeData());
    try {
      const response = await fetch("json/home.json");
      const data = await response.json();
      dispatch(getHomeDataSuccess(data));
    } catch (error) {
      dispatch(getHomeDataFailure());
    }
  };
}
