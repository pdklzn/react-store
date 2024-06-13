import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    addProduct(state, action) {
      let flag = true;
      for (const product of state.products) {
        if (
          product.product.id === action.payload.product.id &&
          product.size === action.payload.size
        ) {
          flag = false;
        }
      }
      if (flag)
        state.products.push({
          product: action.payload.product,
          count: 1,
          size: action.payload.size,
        });
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) =>
          product.product.id !== action.payload.product.id ||
          product.size !== action.payload.size
      );
    },
    changeCountProduct(state, action) {
      for (const product of state.products) {
        if (
          product.product.id === action.payload.product.id &&
          product.size === action.payload.size
        ) {
          product.count = action.payload.count;
        }
      }
    },
  },
});

export const { addProduct, changeCountProduct, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
