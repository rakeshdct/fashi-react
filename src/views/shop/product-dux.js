import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  hasErrors: false,
  categories: "men",
  productData: "",
  selectedFilter: "",
  selectedProduct: 0,
  cartProductsSKU: [],
  favouriteProductsSKU: [],
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
    checkCart: (state) => {
      state.productData.products.forEach((d, i) => {
        state.productData.products[i].cart = false;
        state.cartProductsSKU.forEach((sku) => {
          if (state.productData.products[i].sku === sku) state.productData.products[i].cart = true
        })
      })
    },
    checkFavourites: (state) => {
      state.productData.products.forEach((d, i) => {
        state.productData.products[i].favourite = false;
        state.favouriteProductsSKU.forEach((sku) => {
          if (state.productData.products[i].sku === sku) state.productData.products[i].favourite = true
        })
      })
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
    checkCartFavourites: (state) => {
      state.favouriteData.products.forEach((d, i) => {
        state.favouriteData.products[i].cart = false;
        state.cartProductsSKU.forEach((sku) => {
          if (state.favouriteData.products[i].sku === sku) state.favouriteData.products[i].cart = true
        })
      })
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
    cartProductsSKUs: (state, action) => {
      state.cartProductsSKU.push(action.payload)
    },
    clearCartProductsSKUs: (state, action) => {
      state.cartProductsSKU = [];
    },    
    removeCartSKUs: (state, action) => {
      var index = state.cartProductsSKU.indexOf(action.payload);
      if (index !== -1) {
        state.cartProductsSKU.splice(index, 1);
      }
    },
    favouriteProductsSKUs: (state, action) => {
      state.favouriteProductsSKU.push(action.payload)
    },
    removeFavouritSKUs: (state, action) => {
      var index = state.favouriteProductsSKU.indexOf(action.payload);
      if (index !== -1) {
        state.favouriteProductsSKU.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  clearCartProductsSKUs,
  removeFavouritSKUs,
  checkFavourites,
  favouriteProductsSKUs,
  checkCartFavourites,
  removeCartSKUs,
  checkCart,
  cartProductsSKUs,
  pushFavouritestoproductData,
  removeSelectedFavourites,
  selectedFavourites,
  filterdProducts,
  selectedFilters,
  selectedCategory,
  selectedProductIndex,
  getproductData,
  getproductDataSuccess,
  getproductDataFailure
} = productSlice.actions;

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