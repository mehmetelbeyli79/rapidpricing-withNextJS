"use client";
import { configureStore } from "@reduxjs/toolkit";
import urunlerReducer from "./Features/urunler/urunSlice";

export const store = configureStore({
  reducer: {
    urunler: urunlerReducer,
  },
});
