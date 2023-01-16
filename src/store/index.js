import { configureStore, combineReducers } from "@reduxjs/toolkit";

import homeSlice from "../views/home/home-dux";
import footerSlice from "../views/footer/footer-dux";
import faqSlice from "../views/faq/faq-dux";
import headerSlice from "../views/header-dux";
import productSlice from "../views/shop/product-dux";


export const rootReducer = combineReducers({
  homeData: homeSlice,
  footerData: footerSlice,
  faqData: faqSlice,
  headerState: headerSlice,
  productData:productSlice,
})

export default configureStore({
  reducer: rootReducer,
});