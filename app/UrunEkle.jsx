"use client"
import React from "react";
import EkleForm from "./components/EkleForm";

function UrunEkle() {
  
  return (
    <section className="flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-72 mt-5">
      <div className="md:flex md:items-center md:justify-center md:w-1/4 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Hızlı{" "}
            <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
              Fiyat
            </span>{" "}
            Girin
          </h2>

          <p className="mt-2 text-md text-gray-600 dark:text-gray-400 md:text-gray-400">
            Fiyat listesini hızlıca oluşturun.Anında yayınlayın!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-3/4">
        <EkleForm/>
      </div>
    </section>
  );
}

export default UrunEkle;
