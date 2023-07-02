"use client";
import React, { useState } from "react";
import { urunGuncelle,urunSil } from "./GlobalState/Features/urunler/urunSlice";
import { useDispatch } from "react-redux";
function Urunler({ urun }) {
    const urunId=urun.urunId;
    const urunKategori=urun.urunKategori;
  const [urunAd, setUrunAd] = useState(urun.urunAd);
  const [urunFiyat, setUrunFiyat] = useState(urun.urunFiyat);
  const [urunStok, setUrunStok] = useState(urun.urunStok);
  const [isFocused, setIsFocused] = useState(false);
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
  const handleGuncelle = (id) => {
    const formData = {
      urunId: id,
      urunAd: urunAd,
      urunFiyat: urunFiyat,
      urunKategori: urunKategori,
      urunStok: urunStok,
    };
    dispatch(urunGuncelle(formData));
    
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleSilClick = (id) => {
    // Silme işlemini gerçekleştir
    dispatch(urunSil(id));
    console.log("Sil butonuna tıklandı");
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </h2>
          <p className="text-gray-500 mt-2">
            Fiyatı :{" "}
            <input
              type="text"
              name="urunFiyat"
              value={urunFiyat}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </p>
          <p className="text-gray-500 mt-2">
            Stok Durumu :{" "}
            <input
              type="text"
              name="urunStok"
              value={urunStok}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </p>
        </div>
        {isFocused && (
          <div className="ml-4 mt-3">
            <button onClick={handleGuncelle(urunId)} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Güncelle
            </button>
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
              onClick={()=>handleSilClick(urunId)}
            >
              Sil
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Urunler;
