"use client"
import React from 'react'
import AraForm from './components/AraForm'
import { useSelector } from "react-redux";
import { selectSirket } from "./GlobalState/Features/urunler/urunSlice";
function UrunAra() {
  const sirket = useSelector(selectSirket);
  return (
    <div>
    <section className="flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-28 mt-2">
      <div className="md:flex md:items-center md:justify-center md:w-1/4 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Hızlı{" "}
            <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
              Fiyat
            </span>{" "}
            Ara
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-3/4">
      <AraForm />
      
      </div>
    </section>
    <h1 class="mt-8 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
        {sirket + " "}
        <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          ürün
        </mark>{" "}
        fiyatları
      </h1>
    </div>
  )
}

export default UrunAra