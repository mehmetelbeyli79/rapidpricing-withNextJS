"use client";
import React, { useState, useEffect } from "react";
import { updateKategori } from "../GlobalState/Features/urunler/urunSlice";
import { useDispatch } from "react-redux";
function KategoriGuncelle({ kategori, kategoriKontrol }) {
  const [kategoriDegis, setKategoriDegis] = useState("");
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(updateKategori({eskiKategori:kategori,yeniKategori:kategoriDegis}));
    setKategoriDegis("");
    kategoriKontrol();
  };


  return (
    <div className="max-w-md mt-3">
      <form className="flex space-x-4" onSubmit={submitHandle}>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder={`${kategori} adını değiştir. `}
          value={kategoriDegis}
          onChange={(e) => setKategoriDegis(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-gray-700 "
        >
          Gönder
        </button>
      </form>
    </div>
  );
}

export default KategoriGuncelle;
