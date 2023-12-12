import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";

const Store = configureStore({
  reducer: {
    product_list: ProductSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
