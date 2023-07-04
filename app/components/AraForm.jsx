"use client"
import React from "react";
import { useDispatch } from "react-redux";
import { urunAra } from "../GlobalState/Features/urunler/urunSlice";
function AraForm() {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    
    e.preventDefault();
    const formData = {
      urunAd: e.target.productname.value,
    };
    dispatch(urunAra(formData));
    e.target.reset();
  };
  return (
    <form onSubmit={submitForm}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <input
            placeholder="Ürün Adına Göre Ara"
            required
            id="productname"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-8 mt-2 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            ARA
          </button>
        </div>
      </div>
    </form>
  );
}

export default AraForm;
