"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { urunEkle } from "../GlobalState/Features/urunler/urunSlice";
import { v4 as uuidv4 } from "uuid";
function EkleForm() {
  //const urunler = useSelector(selectUrunler);
  // console.log("urunler", urunler);
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      urunId: uuidv4(),
      urunAd: e.target.productname.value,
      urunFiyat: e.target.productPrice.value,
      urunKategori: e.target.productcategory.value,
      urunStok: e.target.productstock.value,
    };
    dispatch(urunEkle(formData));
    e.target.reset();
  };
  return (
    <form onSubmit={submitForm}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="productname"
          >
            Ürün Adı
          </label>
          <input
            required
            id="productname"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="productPrice"
          >
            Ürün Fiyatı
          </label>
          <input
            required
            id="productPrice"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="productcategory"
          >
            Ürün Kategori
          </label>
          <input
            required
            id="productcategory"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="productstock"
          >
            Ürün Stok
          </label>
          <input
            id="productstock"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}

export default EkleForm;
