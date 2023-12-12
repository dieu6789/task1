import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
};

export const ProductSlice = createSlice({
  name: "product_list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export const getProduct = createAsyncThunk(
  "product_list/getProduct",
  async () => {
    try {
      const res = await axios.get(
        "https://657140f409586eff66425ac1.mockapi.io/api/task1/products"
      );
      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export default ProductSlice;