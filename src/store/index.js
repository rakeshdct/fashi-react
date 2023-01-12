import { configureStore, combineReducers } from "@reduxjs/toolkit";

import homeSlice from "../views/home/home-dux";


export const rootReducer = combineReducers({
  homeData: homeSlice,
})

export default configureStore({
  reducer: rootReducer,
});