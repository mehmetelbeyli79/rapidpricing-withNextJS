"use client";
import { createSlice } from "@reduxjs/toolkit";
export const urunSlice = createSlice({
  name: "urunler",
  initialState: {
    urunler: [
      
    ],
  },
  reducers: {
    urunEkle: (state,action) => {
        state.urunler.push(action.payload);
        const storedUrunler = JSON.parse(localStorage.getItem('urunler'));
        const updatedUrunler = storedUrunler ? [...storedUrunler,action.payload] : [action.payload];
        localStorage.setItem('urunler', JSON.stringify(updatedUrunler));
       // localStorage.setItem('urunler', JSON.stringify(state.urunler));
    },
  },
});
export const { urunEkle } = urunSlice.actions;
export const selectUrunler = (state) => state.urunler.urunler;
export default urunSlice.reducer;
