"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectUrunler } from "./GlobalState/Features/urunler/urunSlice";
function UrunListesi() {
  const tumUrunler = useSelector(selectUrunler) || [];
  return (
    <div className="flex w-full p-6 overflow-x-auto shadow-md rounded-md sm:rounded-lg">
      <table className="w-full text-sm text-left bg-gray-700 text-gray-500 dark:text-gray-400 rounded-sm">
        <thead className="text-xs text-white bg-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ürün Adı
            </th>
            <th scope="col" className="px-6 py-3">
              Ürün Fiyatı
            </th>
            <th scope="col" className="px-6 py-3">
              Ürün Kategorisi
            </th>
            <th scope="col" className="px-6 py-3">
              Ürün Stoğu
            </th>
          </tr>
        </thead>
        <tbody>
          {tumUrunler.length == 0 ? (
            <tr className="bg-white border-b text-zinc-900 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td colSpan={5} className="px-6 py-4">
                Ürün Bulunamadı!!!
              </td>
            </tr>
          ) : (
            tumUrunler.map((urun) => (
              <tr
                key={urun.urunId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {urun.urunAd}
                </th>
                <td className="px-6 py-4">{urun.urunFiyat}</td>
                <td className="px-6 py-4">{urun.urunKategori}</td>
                <td className="px-6 py-4">{urun.urunStok}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UrunListesi;
