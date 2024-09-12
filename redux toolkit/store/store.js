// import { createStore } from "redux";
// import cartReducer from "./cartReducer";

// const store = createStore(cartReducer);

// export default store;
// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // استيراد الـ reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // إضافة الـ reducer في المتجر
  },
});

export default store;
