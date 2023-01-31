import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import homeSlice from "../views/home/home-dux";
import footerSlice from "../views/footer/footer-dux";
import faqSlice from "../views/faq/faq-dux";
import headerSlice from "../views/header-dux";
import productSlice from "../views/shop/product-dux";
import cartSlice from "../views/cart/cart-dux";

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

export const rootReducer = combineReducers({
  homeData: homeSlice,
  footerData: footerSlice,
  faqData: faqSlice,
  headerState: headerSlice,
  productData: productSlice,
  cartData: cartSlice,
})

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export let persistor = persistStore(store)
export default store