"use client";
import { createSlice } from "@reduxjs/toolkit";

const getInitialUrunler = () => {
  const storedUrunler = localStorage.getItem("urunler");
  if (storedUrunler) {
    return JSON.parse(storedUrunler);
  } else {
    return []; // Varsayılan başlangıç durumu
  }
};
export const urunSlice = createSlice({
  name: "urunler",
  initialState: {
    urunler: getInitialUrunler(),
  },
  reducers: {
    urunEkle: (state, action) => {
      state.urunler.push(action.payload);
      const storedUrunler = JSON.parse(localStorage.getItem("urunler"));
      const updatedUrunler = storedUrunler
        ? [...storedUrunler, action.payload]
        : [action.payload];
      localStorage.setItem("urunler", JSON.stringify(updatedUrunler));
    },

    updateKategori: (state, action) => {
      const updatedKategoriler = state.urunler.map((urun) => {
        if (urun.urunKategori === action.payload.eskiKategori) {
          return { ...urun, urunKategori: action.payload.yeniKategori };
        }
        return urun;
      });
      localStorage.setItem("urunler", JSON.stringify(updatedKategoriler));
    },
    urunGuncelle: (state, action) => {
      const { urunId, urunAd, urunFiyat, urunKategori, urunStok } =
        action.payload;
        
        const storedUrunler = state.urunler;
      const updatedUrunler = storedUrunler.map((urun) => {
        if (urun.urunId === urunId) {
          return {
            ...urun,
            urunAd,
            urunFiyat,
            urunKategori,
            urunStok,
          };
        }
        return urun;
      });
      const urunIndex = state.urunler.findIndex(
        (urun) => urun.urunId === urunId
      );
      if (urunIndex !== -1) {
        state.urunler[urunIndex] = updatedUrunler[urunIndex];
      }
      localStorage.setItem("urunler", JSON.stringify(updatedUrunler));
    },
    urunSil: (state, action) => {
      const storedUrunler = JSON.parse(localStorage.getItem("urunler"));
      //const storedUrunler = state.urunler;
      const urunId = action.payload;
      // urunId'si eşleşen ürünü sil
      const updatedUrunler = storedUrunler.filter(
        (urun) => urun.urunId !== urunId
      );
      const urunIndex = state.urunler.findIndex(
        (urun) => urun.urunId === urunId
      );
      if (urunIndex !== -1) {
        state.urunler.splice(urunIndex, 1);
      }
      localStorage.setItem("urunler", JSON.stringify(updatedUrunler));
      //return updatedUrunler;
      
    }
  
  },
});
export const { urunEkle, updateKategori, urunGuncelle, urunSil } =
  urunSlice.actions;
export const selectUrunler = (state) => state.urunler.urunler;
export default urunSlice.reducer;
