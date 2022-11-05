import React from "react";
// import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "../redux/slice/products"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    //cart: cartReducer,
  },
});
