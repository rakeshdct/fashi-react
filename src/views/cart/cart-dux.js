import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  cartIndex: 0,
  cartTotal: 0
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      state.cartData.push(action.payload)
    },
    removeCartData: (state, action) => {
      state.cartData.splice(action.payload, 1)
    },
    setcartIndex: (state, action) => {
      state.cartIndex = action.payload;
    },
    changeQtyCartData: (state, action) => {
      state.cartData[state.cartIndex].qty = action.payload
      state.cartData[state.cartIndex].total = state.cartData[state.cartIndex].qty * state.cartData[state.cartIndex].price
    },
    submitCartData: (state) => {
      state.cartData = []
    },
    setCartTotal: (state) => {
      let cartTotalPrice = 0;
      state.cartData.map((product) => (
        cartTotalPrice += product.total
      ))
      state.cartTotal = cartTotalPrice;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartData, removeCartData, submitCartData, changeQtyCartData, setcartIndex, setCartTotal } = cartSlice.actions;

// A selector
export const cartSelector = (state) => state.cartData;

export default cartSlice.reducer;