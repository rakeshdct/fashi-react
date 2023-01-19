import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  hasErrors: false,
  categories: "men",
  productData: "",
  selectedFilter: "",
  selectedProduct: 0,
  favouriteData: {
    "tablists": [
      {
        "tabname": "DESCRIPTION"
      },
      {
        "tabname": "SPECIFICATIONS"
      },
      {
        "tabname": "Customer Reviews (02)"
      }
    ],
    "psSliderOwlConfig": {
      "loop": false,
      "margin": 10,
      "nav": true,
      "items": 3,
      "dots": false,
      "navText": [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      "smartSpeed": 1200,
      "autoplay": true
    }, 
    products: []
  },
  filterdProduct: {
    products: {}
  }
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
    selectedFavourites: (state, action) => {
      state.favouriteData.products.push(action.payload)
    },
    removeSelectedFavourites: (state, action) => {
      state.favouriteData.products.splice(action.payload, 1)
    },
    pushFavouritestoproductData: (state, action) => {
      state.productData = action.payload
    },
    selectedFilters: (state, action) => {
      state.selectedFilter = action.payload
    },
    filterdProducts: (state, action) => {
      state.filterdProduct = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushFavouritestoproductData, removeSelectedFavourites, selectedFavourites, filterdProducts, selectedFilters, selectedCategory, selectedProductIndex, getproductData, getproductDataSuccess, getproductDataFailure } = productSlice.actions;

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