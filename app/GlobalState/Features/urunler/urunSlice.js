"use client";
import { createSlice } from "@reduxjs/toolkit";
export const urunSlice = createSlice({
  name: "urunler",
  initialState: {
    urunler: [
      { urunId: "", urunAd: "", urunFiyat: "", urunKategori: "", urunStok: "" },
    ],
  },
  reducers: {
    urunEkle: (state,action) => {
        state.urunler.push(action.payload);
    },
  },
});
export const { urunEkle } = urunSlice.actions;
export const selectUrunler = (state) => state.urunler.urunler;
export default urunSlice.reducer;
