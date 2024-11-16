/* This code snippet is setting up a Redux store using Redux Toolkit. Here's a breakdown of what it's
doing: */
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import { booksApi } from "./features/books/booksApi";
import { ordersApi } from "./features/orders/ordersApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducePath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
