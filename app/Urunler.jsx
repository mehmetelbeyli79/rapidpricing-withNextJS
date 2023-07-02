"use client";
import React, { useState } from "react";
import {
  urunGuncelle,
  urunSil,
} from "./GlobalState/Features/urunler/urunSlice";
import { useDispatch } from "react-redux";
function Urunler({ urun }) {
  const urunId = urun.urunId;
  const urunKategori = urun.urunKategori;
  const [urunAd, setUrunAd] = useState(urun.urunAd);
  const [urunFiyat, setUrunFiyat] = useState(urun.urunFiyat);
  const [urunStok, setUrunStok] = useState(urun.urunStok);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "urunAd":
        setUrunAd(value);
        break;
      case "urunFiyat":
        setUrunFiyat(value);
        break;
      case "urunStok":
        setUrunStok(value);
        break;
      default:
        break;
    }
  };
  const handleGuncelle = () => {
    const formData = {
      urunId: urunId,
      urunAd: urunAd,
      urunFiyat: urunFiyat,
      urunKategori: urunKategori,
      urunStok: urunStok,
    };
   
     dispatch(urunGuncelle(formData));
    
  };

  const handleSilClick = () => {
  
   dispatch(urunSil(urunId));
    
  };

  return (
    <div className="flex-col ">
      <form>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">
            <input
              type="text"
              name="urunAd"
              value={urunAd}
              onChange={handleInputChange}
            />
          </h2>
          <p className="text-gray-500 mt-2">
            Fiyatı :{" "}
            <input
              type="text"
              name="urunFiyat"
              value={urunFiyat}
              onChange={handleInputChange}
            />
          </p>
          <p className="text-gray-500 mt-2">
            Stok Durumu :{" "}
            <input
              type="text"
              name="urunStok"
              value={urunStok}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className="ml-4 mt-3">
          <button
            onClick={() => handleGuncelle()}
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Güncelle
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => handleSilClick()}
          >
            Sil
          </button>
        </div>
      </form>
    </div>
  );
}

export default Urunler;
